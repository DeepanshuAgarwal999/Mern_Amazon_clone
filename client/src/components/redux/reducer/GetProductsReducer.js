const products = [];
export const GetProductsReducer = (state = { products }, action) => {
  switch (action.type) {
    case "SUCCESS_GET_PRODUCTS":
      return { products: action.payload };
    case "FAIL_GET_PRODUCTS":
      return { products: action.payload };
    default:
      return state;
  }
};
