import sequelize from "../index.js";

const productCategory = sequelize.define(
  "productCategory",

  {},
  {
    timestamps: false,
  }
);

export default productCategory;

