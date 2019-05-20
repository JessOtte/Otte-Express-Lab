const express = require("express");
const cartData = require("./cartData");
const cartItems = express.Router();

cartItems.get("/cart-items", (req, res) => {
    console.log(req.body); 
    res.send(cartData);
});

cartItems.get("/cart-items/:id", (req, res) => {
    let index = req.params.id;
 
    if (cartData[index]) {
        res.send(cartData[index]);
    } else {
        res.send('Item not found');
    }
 });

 cartItems.post("/cart-items/", (req, res) => {
    console.log(req.body); 
    res.send("Adding new item..");
});

cartItems.put("/cart-items/:id", (req, res) => {
    console.log(req.body); 
    console.log(req.params.id); 
    res.send("Updating an item..");
});

cartItems.delete("/cart-items/:id", (req, res) => {
    console.log(req.params.id); 
    res.send("Deleting an item..");
});

module.exports = cartItems;