import axios from "axios";
import { JSDOM } from 'jsdom';

const scrapeAmazon = async (keyword) => {
  try {
    const url = `https://www.amazon.com.br/s?k=${encodeURIComponent(keyword)}`;
    console.log(url);
    const { data } = await axios.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
        }
      });
      
    const dom = new JSDOM(data);
    const document = dom.window.document;

    const productElements = document.querySelectorAll('div[data-component-type="s-search-result"]');

    const products = [];

    productElements.forEach((productElement) => {
      const titleElement = productElement.querySelector('span.a-size-base-plus');
      const ratingElement = productElement.querySelector('span.a-icon-alt');
      const reviewsElement = productElement.querySelector('span.a-size-base');
      const imageElement = productElement.querySelector('img');

      const title = titleElement ? titleElement.textContent.trim() : 'Title not available';
      const rating = ratingElement ? ratingElement.textContent.split(' ')[0] : 'Rating not available';
      const reviews = reviewsElement ? reviewsElement.textContent.replace(/[^0-9]/g, '') : 'Reviews not available';
      const image = imageElement ? imageElement.src : 'Image not available';

      products.push({ title, rating, reviews, image });
    });

    return products;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

export default scrapeAmazon;
 