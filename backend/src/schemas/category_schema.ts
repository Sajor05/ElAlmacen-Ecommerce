import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  subCategorias: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Categories",
    },
  ],
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Categories",
    default: null,
  },
});

export default mongoose.model("Categories", categorySchema);
