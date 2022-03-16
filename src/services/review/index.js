import { Router } from "express";
import { Product, Review } from "../../db/models/index.js";

const router = Router()

router.get("/", async (req, res, next) => {
    try {
      const data = await Review.findAll({
        include: Product,
        });
      res.send(data);
    } catch (error) {
      console.log(error);
    }
  });
  
  router.get("/:id", async (req, res, next) => {
    try {
      const data = await Review.findByPk(req.params.id, {include: Review});
      res.send(data);
    } catch (error) {
      console.log(error);
    }
  });
  
  router.post("/", async (req, res, next) => {
    try {
      const newReview = await Review.create(req.body);
      res.send(newReview);
    } catch (error) {
      console.log(error);
    }
  });
  
  router.put("/:id", async (req, res, next) => {
    try {
      const result = await Review.update(req.body, {
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
      const rows = await Review.destroy({ where: { id: req.params.id } });
      res.send({ rows });
    } catch (error) {
      console.log(error);
    }
  });
  
  export default router;