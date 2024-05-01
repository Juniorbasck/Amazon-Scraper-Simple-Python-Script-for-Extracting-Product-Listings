import express from "express"

const appRouter = express.Router();


appRouter.get('/', (req, res) => {
    
    return "running and working"
})

export default appRouter;