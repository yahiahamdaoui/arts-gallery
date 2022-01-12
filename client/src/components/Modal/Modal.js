import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from 'react-file-base64';
import { useDispatch } from "react-redux";
import useStyles from './styles';
import { createPainting } from "../../actions/paintings";


const Modal = () => {
    const [paintingData, setPaintingData] = useState({name:'', artist: '', image: '', year: ''});
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPainting(paintingData));
    };
    const clear = () => {

    }
    
    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Add a new Painting</Typography>
                <TextField name="name" variant="outlined" label="Name" fullWidth 
                value={paintingData.name} onChange={(e) => setPaintingData({ ...paintingData, name: e.target.value})} />
                <TextField name="artist" variant="outlined" label="Artist" fullWidth 
                value={paintingData.name} onChange={(e) => setPaintingData({ ...paintingData, artist: e.target.value})} />
                <TextField name="year" variant="outlined" label="" fullWidth 
                value={paintingData.name} onChange={(e) => setPaintingData({ ...paintingData, year: e.target.value})} />
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({base64}) => setPaintingData({...paintingData, image: base64})}></FileBase>
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Save</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

            </form>
        </Paper>
    )
};

export default Modal;