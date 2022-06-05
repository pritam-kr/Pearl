import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../Context";
import { ADD_TO_CART } from "../Context/Action/actions";

const usePayment = () => {
  const { dispatch } = useCartContext();

  const navigate = useNavigate();

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  async function displayRazorpay({ orderDetails }) {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // creating a new order
    const result = await orderDetails;
    //   console.log(result);

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    // Getting the order details back
    const { quantity, totalPrice } = result;

    const options = {
      key: "rzp_test_AlMSQbJbpdb1Nk", // Enter the Key ID generated from the Dashboard
      amount: totalPrice * 100,
      currency: "INR",
      name: "Pearl.",
      quantity: quantity,
      description: "Thanks For Shopping.",
      image:
        "https://res.cloudinary.com/dhqxln7zi/image/upload/v1653880282/favicon_k0edic.jpg",

      handler: async function (response) {
        const data = {
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        if (data.razorpayPaymentId) {
          toast.success("Payment Successful", { duration: 2000 });
          navigate(`/successful/${data.razorpayPaymentId}`);
          //Empty cart after payment done
          dispatch({ type: "EMPTY_CART", payload: [] });
          dispatch({
            type: "GET_ORDER_DETAILS",
            payload: {
              amountPaid: totalPrice,
              quantity: quantity,
              paymentMode: "Net Banking",
              paymentId: data.razorpayPaymentId,
            },
          });
        }
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
      notes: {
        address: "India",
      },
      theme: {
        color: "#34323B",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return { displayRazorpay };
};

export { usePayment };
