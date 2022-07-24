import mongoose from 'mongoose'
const { Schema } = mongoose

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test')
}

const blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  catagory: String,
  //comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number,
  },
})

const Blog = mongoose.model('Blog', blogSchema)

