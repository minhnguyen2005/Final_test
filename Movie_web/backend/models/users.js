import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  title: String,
  description: String,
  year: Number,
  duration: String,
  posterUrl: String,
});
export default  mongoose.model('Movie', movieSchema);
