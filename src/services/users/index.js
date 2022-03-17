import { Router } from "express";
import { User, Review } from "../../db/models/index.js";
import { col, fn } from "sequelize";

const router = Router()

router.get("/", async (req, res, next) => {
    try {
      const data = await User.findAll({
        include: Review,
        });
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error)
    }
  });
  
   // /users/stats - get total number of reviews for each user (hint: aggregate on reviews)
   router.get("/stats", async (req, res, next) => {
    try{
      const reviewPerUser = await Review.findAll({attributes: ["userId", [fn("COUNT", col("id")), "total"]], group: "userId" });
      res.send({reviewPerUser})
    } catch(error) {
      console.log(error)
      next(error)
    }
  })
  
  router.get("/:id", async (req, res, next) => {
    try {
      const data = await User.findByPk(req.params.id, {include: Review});
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error)
    }
  });
 

  // router.get("/stats", async (req, res, next) => {
  //   try {
  //     const totalByCountry = await User.findAll({
  //       attributes: ["country", [fn("COUNT", col("id")), "total"]],
  //       group: "country",
  //     });
  
  


  
  router.post("/", async (req, res, next) => {
    try {
      const newReview = await User.create(req.body);
      res.send(newReview);
    } catch (error) {
      console.log(error);
      next(error)
    }
  });
  
  router.put("/:id", async (req, res, next) => {
    try {
      const result = await User.update(req.body, {
        where: {
          id: req.params.id,
        },
        returning: true,
      });
      res.send(result[1][0]);
    } catch (error) {
      console.log(error);
      next(error)
    }
  });
  
  router.delete("/:id", async (req, res, next) => {
    try {
      const rows = await User.destroy({ where: { id: req.params.id } });
      res.send({ rows });
    } catch (error) {
      console.log(error);
      next(error)
    }
  });
  
  export default router;