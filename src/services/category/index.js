import { Router } from "express";
import { Category, Product } from "../../db/models/index.js";

const router = Router()

router.get("/", async (req, res, next) => {
    try {
      const data = await Category.findAll({
        include: Product,
        });
      res.send(data);
    } catch (error) {
      console.log(error);
    }
  });
  
  router.get("/:id", async (req, res, next) => {
    try {
      const data = await Category.findByPk(req.params.id, {include: Product});
      res.send(data);
    } catch (error) {
      console.log(error);
    }
  });
  
  router.post("/", async (req, res, next) => {
    try {
      const newReview = await Category.create(req.body);
      res.send(newReview);
    } catch (error) {
      console.log(error);
    }
  });
  
  router.put("/:id", async (req, res, next) => {
    try {
      const result = await Category.update(req.body, {
        where: {
          id: req.params.id,
        },
        returning: true,
      });
      res.send(result[1][0]);
    } catch (error) {
      console.log(error);
    }
  });
  
  router.delete("/:id", async (req, res, next) => {
    try {
      const rows = await Category.destroy({ where: { id: req.params.id } });
      res.send({ rows });
    } catch (error) {
      console.log(error);
    }
  });
  
  export default router;