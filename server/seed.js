import mongoose from 'mongoose';
import Painting from './models/Paintings.js';
import dummy_data from '../dummy_data.js';

mongoose.connect('mongodb+srv://yahiahamdaoui:pw1234@cluster0.smg2i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
  {useNewUrlParser: true, useUnifiedTopology: true});

var x = [];
for (const obj of dummy_data){
  x.push(obj.by);
}
const seedDB = async () => {
  await Painting.deleteMany({});
  await Painting.insertMany(dummy_data);
}

seedDB().then(() => {mongoose.connection.close()});