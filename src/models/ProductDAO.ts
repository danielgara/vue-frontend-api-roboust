import axios from 'axios';
import Product from './Product';

export default class ProductDAO {
  public static async getProducts():Promise<Product[]> {
    const res = await axios.get('http://127.0.0.1:8000/api/v1/products');
    const productsData = res.data.products;
    const products:Product[] = [];
    for (let i = 0; i < productsData.length; i += 1) {
      const { id, name, price } = productsData[i];
      const product:Product = new Product(id, name, price);
      products.push(product);
    }
    return products;
  }

  public static async getProduct(productId:string):Promise<Product> {
    const res = await axios.get(`http://127.0.0.1:8000/api/v1/products/${productId}`);
    const productData = res.data.product;
    const { id, name, price } = productData;
    const product:Product = new Product(id, name, price);
    return product;
  }
}
