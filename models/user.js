const { model, Schema } = require('mongoose')
const bcrypt = require('bcrypt')

const SALT_ROUNDS = 6

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
    },
  },
  {
    timestamps: true,
    toJSON: {
      trandform: (doc, ret) => {
        delete ret.password
        return ret
      },
    },
  }
)

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS)
  return next()
})

const User = model('User', userSchema)

module.exports = User
