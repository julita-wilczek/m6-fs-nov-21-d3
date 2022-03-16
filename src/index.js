import express from "express"
import cors from "cors"
import * as models from "./db/models/index.js"
import { testDB, syncDB } from "./db/index.js"
import productsRouter from "./services/product/index.js"
import reviewsRouter from "./services/review/index.js"

const server = express()

server.use(express.json())
server.use(cors())

const {PORT} = process.env

server.use("/products", productsRouter)
server.use("/reviews", reviewsRouter)

const initialize = () => {
    try {
        server.listen(PORT, async() => {
            await testDB()
            await syncDB()
            console.log("Server is listening on port number " + PORT)
        });
        server.on("error", (error) => {
            console.log("Server is not running due to error : " + error);
          });
    } catch(error) {
        console.log("Server is not running due to error" +  error)
        process.exit(1)
    }
}
initialize()