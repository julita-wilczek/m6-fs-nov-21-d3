import Product from "./product.js";
import Review from "./review.js"
import Category from "./category.js";
import User from "./user.js"
import productCategory from "./productCategory.js"
import Cart from "./cart.js"
import productCart from "./productsCart.js" 

Review.belongsTo(Product, {onDelete: "CASCADE"})
Product.hasMany(Review, {onDelete: "CASCADE"})

Review.belongsTo(User, {onDelete: "CASCADE"})
User.hasMany(Review, {onDelete: "CASCADE"})

Category.belongsToMany(Product, {through: productCategory})
Product.belongsToMany(Category, {through: productCategory})

//This allows for adding several of the same products to the same cart
Cart.belongsToMany(Product, {through: { model: productCart, unique: false }})
Product.belongsToMany(Cart, {through: { model: productCart, unique: false }})

Cart.belongsTo(User, {onDelete: "CASCADE"})
User.hasMany(Cart, {onDelete: "CASCADE"})

export {Review, Product, Category, User, productCategory, Cart, productCart};

