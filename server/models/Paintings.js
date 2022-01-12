import mongoose from 'mongoose';
const paintingSchema = new mongoose.Schema({
    name: String,
    artist: String,
    image: String,
    year: Number,
    cloud_id: String,
});

var Painting = mongoose.model('Painting',paintingSchema);
export default Painting;