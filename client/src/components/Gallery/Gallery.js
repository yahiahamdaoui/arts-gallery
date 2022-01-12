import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import Painting from "./Painting/Painting";
import makeStyles from './styles';

const Gallery = () => {
    const paintings = useSelector((state) => state.paintings);
    const classes = makeStyles();


    return (
        !paintings.length ? 
        <>
            <Typography variant="h6" color="secondary">No Paintings!</Typography>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Add new painting</Button>
        </>:(
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {paintings.map((painting) => (
                    <Grid key={painting.id} item> 
                        <Painting />
                    </Grid>
                ))}
            </Grid>
        )
    );
};
export default Gallery;