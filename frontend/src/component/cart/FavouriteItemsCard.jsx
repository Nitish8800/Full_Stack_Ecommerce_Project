import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import "./FavouriteItemsCard.css";
import { useSelector, useDispatch } from "react-redux";

const FavouriteItemsCard = ({ match, item, deleteFavouriteItems }) => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.productDetails);

  return (
    <div className="FavouriteItemsCard">
      <div>
        <img src={item.image} alt="ssa" />

        <Link
          to={`/product/${item.product}`}
          style={{
            fontSize: "300 0.9vmax",
            fontFamily: "cursive",
            width: "150px",
          }}
        >
          {item.name}
        </Link>
      </div>

      <div>
        <span>{`$ ${item.price}`}</span>
      </div>

      <div>
        <p style={{ paddingBottom: ".5vmax" }}>
          <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
            {product.Stock < 1 ? "OutOfStock" : "InStock"}
          </b>
        </p>
      </div>

      <div>
        <Button
          startIcon={<DeleteIcon />}
          variant="outlined"
          color="error"
          size="medium"
          id="btn"
          onClick={() => deleteFavouriteItems(item.product)}
        >
          Remove
        </Button>
        <Link to={`/product/${item.product}`}>
          <Button
            variant="contained"
            color="success"
            size="medium"
            id="favouritesButton"
            onClick={() => deleteFavouriteItems(item.product)}
          >
            Add To Cart
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FavouriteItemsCard;
