import React from "react";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import "./CartItemCard.css";

const CartItemCard = ({ item, deleteCartItems }) => {
  return (
    <div className="CartItemCard">
      <img src={item.image} alt="ssa" />
      <div>
        <Link to={`/product/${item.product}`}>{item.name}</Link>
        <span>{`Price: $ ${item.price}`}</span>
        <Button
          startIcon={<DeleteIcon />}
          variant="outlined"
          color="error"
          size="medium"
          onClick={() => deleteCartItems(item.product)}
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

export default CartItemCard;
