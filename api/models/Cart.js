const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true }
);

CartSchema.virtual("Product", {
  ref: "Product",
  localField: "productId",
  foreignField: "_id",
});

module.exports = mongoose.model("Cart", CartSchema);
