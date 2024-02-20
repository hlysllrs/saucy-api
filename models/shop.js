const { model, Schema } = require('mongoose')

const shopSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5 },
  },
  { timestamps: true }
)

const Shop = model('Shop', shopSchema)

module.exports = Shop
