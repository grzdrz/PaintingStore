interface IProduct {
  id: number,
  name: string,
  author: string,
  price?: number,
  oldPrice?: number,
  currencyType?: string,
  isSold: boolean,
}

export default IProduct;
