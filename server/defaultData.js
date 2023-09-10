import productschema from "./models/productschema.js";
import productsdata from "./constant/productsdata.js";

const DefaultData = async () => {
  try {
    await productschema.deleteMany({})
    const storeData = await productschema.insertMany(productsdata);
  } catch (error) {
    console.log(error.message + "Error in Defaultdata file");
  }
};
export default DefaultData;