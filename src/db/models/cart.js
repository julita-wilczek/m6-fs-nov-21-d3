import sequelize from "../index.js";
import { DataTypes } from "sequelize";

const Cart = sequelize.define("cart", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
});

export default Cart;
