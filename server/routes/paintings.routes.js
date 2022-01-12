import express from 'express';
import Painting from '../models/Paintings.js';
import cloudinary from '../config/cloudinary.js';
import upload from '../config/multer.js';

const router = express.Router();

router.get('/', async (req,res) => {
    try {
        const paintings = await Painting.find();
        res.status(200).json(paintings);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

router.delete('/:id', async (req, res) => {
    try{
      const painting = await Painting.findById(req.params.id)
      await cloudinary.uploader.destroy(painting.cloud_id)
      await painting.remove()
      res.status(200).json(painting)
    } catch (error){
        res.status(400).json({message: error.message});
    }
  });
  router.post('/', upload.single('image'), async (req, res) => {
    try {
      const result = await cloudinary.uploader.upload(req.file.path)
  
      const painting = new Painting({
        name: req.body.name,
        artist: req.body.artist,
        image: result.secure_url,
        year: req.body.year,
        cloud_id: result.public_id,
      });

      await painting.save();
      res.status(201).json(painting);
    } catch (error){
        res.status(409).json({message: error.message});
    }
});

router.put('/:id', upload.single('image'), async (req, res) => {
    try {
       const painting = await Painting.findById(req.params.id);
    
       await cloudinary.uploader.destroy(painting.cloudinary_id);
       let result;
       if (req.file) {
       result = await cloudinary.uploader.upload(req.file.path)
    }
    const data = {
      name: req.body.name || painting.name,
      artist: req.body.artist || painting.artist,
      image: result.secure_url || painting.image,
      year: req.body.year || painting.year,
      cloud_id: result.public_id || painting.cloud_id,
    }
    painting = await Painting.findByIdAndUpdate(req.params.id, data, {new: true})
    res.status(200).json(painting);
    } catch (error) {
        res.status(400).json({message: error.message});        
    }
});



export default router;