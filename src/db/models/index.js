import Product from "./product.js";
import Review from "./review.js"

Review.belongsTo(Product, {onDelete: "CASCADE"})
Product.hasMany(Review, {onDelete: "CASCADE"})

export {Review, Product};