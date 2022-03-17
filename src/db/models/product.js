import sequelize from "../index.js";
import { DataTypes } from "sequelize";

const Product = sequelize.define(
    "product", 
    {
        id: {
            primaryKey: true, 
            type: DataTypes.UUID, 
            defaultValue: DataTypes.UUIDV4
        }, 
        name: {
            type: DataTypes.STRING,
            allowNull: false,   
        }, 
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        }, 
        image: {
            type: DataTypes.STRING, //ur
            defaultValue: "https://picsum.photos/200/300"
        }, 
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },

    }

)

export default Product