import React, {useEffect} from "react";
import { WishListCard, Empty } from "../../component/index";
import { useWishListContext } from "../../Context/index";
import "./Wishlist.css";

const WishList = () => {

  useEffect(() => document.title = "Wishlist", [])

  const {
    state: { wishlist },
  } = useWishListContext();

  return (
    <>
      {wishlist?.length === 0 ? <Empty page={"Wishlist"} />: <div className="section cart-section wishlist-section">
        <h3 className="large-heading page-title center">Wishlist </h3>

        <div className=" wishlist-wrapper">
          {wishlist.map((eachProduct) => {
            return (
              <WishListCard eachProduct={eachProduct} key={eachProduct._id} />
            );
          })}
        </div>
      </div>}
    </>
  );
};

export { WishList };
