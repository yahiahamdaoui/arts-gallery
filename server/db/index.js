import mongoose from 'mongoose';
const Uri = 'mongodb+srv://yahiahamdaoui:pw1234@cluster0.smg2i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
try {
     mongoose.connect(Uri, {useNewUrlParser: true, useUnifiedTopology: true},
        () => {
            console.log('Database connected');
        });
  } catch (error) {
    console.log('Could not connect to database');
  }
