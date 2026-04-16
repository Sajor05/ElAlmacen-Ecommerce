import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
    required: true,
  },
  isOffer: {
    type: Boolean,
    required: true,
  },
  offerPercent: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  hasQuotas: {
    type: Boolean,
    required: true,
  },
  quotasCount: {
    type: Number,
    required: false,
  },
  imagesArray: {
    type: Array,
    required: true,
  },
  details: {
    type: Array,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  seller: {
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: false,
    },
    antique: {
      type: Number,
      required: true,
    },
  },
});

export default mongoose.model("Product", productSchema);
