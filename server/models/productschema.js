import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  id: String,
  url: String,
  detailsUrl: String,
  title: Object,
  price: Object,
  description: String,
  discount: String,
  tagline: String,
});

export default mongoose.model("AmazonProducts", productsSchema);
