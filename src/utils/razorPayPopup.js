import axios from "axios";
import toast from "react-hot-toast";
import { v4 as uuid } from "uuid";

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

export async function displayRazorpay({ orderDetails }) {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

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
    // order_id: uuid(),
    handler: async function (response) {
      const data = {
        // orderCreationId: order_id,
        razorpayPaymentId: response.razorpay_payment_id,
        razorpayOrderId: response.razorpay_order_id,
        razorpaySignature: response.razorpay_signature,
      };

      if(data.razorpayPaymentId){
          toast.success("Payment Successful" ,{ duration: 2000, })
          console.log("working")
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
