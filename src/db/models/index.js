import Product from "./product.js";
import Review from "./review.js"
import Category from "./category.js";
import User from "./user.js"
import productCategory from "./productCategory.js"

Review.belongsTo(Product, {onDelete: "CASCADE"})
Product.hasMany(Review, {onDelete: "CASCADE"})

Review.belongsTo(User, {onDelete: "CASCADE"})
User.hasMany(Review, {onDelete: "CASCADE"})



export {Review, Product, Category, User, productCategory};

// Implement associations between Category and Product as many-to-many.
// Implement associations between User and Review as one-to-many.