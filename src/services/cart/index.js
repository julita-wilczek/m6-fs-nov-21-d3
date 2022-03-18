
// CART endpoints: create cart, add to cart (update), delete from cart (update), delete cart, show a specific cart by its id with items grouped, show all carts

import { Router } from "express";
import { Cart, Product, User, productCart } from "../../db/models";

import { Router } from "express";
import { Category, Product } from "../../db/models/index.js";

const router = Router()

router.get("/", async (req, res, next) => {
    try {
      const data = await Cart.findAll({
        include: [Product, User],
        });
      res.send(data);
    } catch (error) {
      console.log(error);
    }
  });
  
  router.get("/:cartId", async (req, res, next) => {
    try {
      const data = await Cart.findByPk(req.params.cartId, {include: Product});
      res.send(data);
    } catch (error) {
      console.log(error);
    }
  });
  
  // CARTsorted would be displayed with products groupped in it. 
  // NEEDS GROUPING
  router.get("/sorted/:cartId", async (req, res, next) => {
    try {
      const data = await Cart.findByPk(req.params.cartId, {include: Product});
      res.send(data);
    } catch (error) {
      console.log(error);
    }
  });

  // CART would need to be created somehow on log-in or sth
  // It doesn't have anything passed in create as parameters because 
  // all the products are added using PUT method

  router.post("/", async (req, res, next) => {
    try {
      const newReview = await Cart.create();
      res.send(newReview);
    } catch (error) {
      console.log(error);
    }
  });
  
  // ADDING PRODUCT TO CART
  router.put("/add/:cartId", async (req, res, next) => {
    try {
        const addedToCart = await productCart.create({cartId: req.params.cartId, productId: req.body.productId})
        res.send(addedToCart)
    } catch (error) {
      console.log(error);
    }
  });

  // REMOVING PRODUCT FROM CART
  // Need to remove cartId from the product column
  // How can I find the productCartId? It should be attached to the button when adding new product to cart I guess
router.put("/remove/:productCartId", async (req, res, next) => {
    try {
        const removedFromCart = await productCart.destroy({ where: { id: req.params.productCartId} });
        res.send({ rows })
    } catch (error) {
      console.log(error);
    }
  });

  router.delete("/:cartId", async (req, res, next) => {
    try {
      const rows = await Cart.destroy({ where: { id: req.params.cartId } });
      res.send({ rows });
    } catch (error) {
      console.log(error);
    }
  });
  
  export default router;