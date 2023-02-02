import React, { Fragment } from "react";
import CartButton from "./CartButton";

const Header = (props) => {
  return (
    <Fragment>
      <CartButton onClick={props.onShowCart} />
    </Fragment>
  );
};

export default Header;
