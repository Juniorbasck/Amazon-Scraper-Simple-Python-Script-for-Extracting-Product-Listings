import express from "express"
import axios from "axios";
import scrapeAmazon from "./../repositories/scrape.js"

const appRouter = express.Router();

appRouter.get('/', async (req, res) => {
    try {
      const { keyword } = req.query;
      if (!keyword) {
        return res.status(400).json({ error: 'Missing keyword parameter' });
      }
  
      const products = await scrapeAmazon(keyword);
      res.json(products);

    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default appRouter;