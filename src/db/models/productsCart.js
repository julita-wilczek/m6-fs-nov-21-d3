import sequelize from "../index.js";
import { DataTypes } from "sequelize";
const productCart = sequelize.define(
  "productCart",

  { 
        id: {
          primaryKey: true,
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
        },
  },
  {
    timestamps: false,
  }
);

export default productCart;