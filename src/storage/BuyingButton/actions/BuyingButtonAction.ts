import IBuyingButtonAction from "./IBuyingButtonAction";

function buyingButtonAction(productForBuying: IProductForBuying): IBuyingButtonAction {
  return {
    type: 'BUY_PRODUCT',
    productForBuying,
  };
}

export default buyingButtonAction;
