import React from "react";
import { Card, CardActions, CardMedia, Button, Typography, CardActionArea} from "@material-ui/core";
import { Edit, Delete } from '@material-ui/icons';

import makeStyles from './styles';
import { useDispatch } from "react-redux";
import { deletePainting } from "../../../actions/paintings";
import { updatePainting } from "../../../api";

const Painting = ({ painting }) => {
    const classes = makeStyles();
    const dispatch = useDispatch();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={painting.image} />
            <div className={classes.overlay}>
                <Typography variant='h6'>{painting.name}</Typography>
                <Typography variant='body1'>{painting.artist}</Typography>
                <Typography variant='body3'>{painting.year}</Typography>
            </div>
            <CardActions>
                <Button color="primary" size="small" onClick={() => dispatch(updatePainting(painting._id))}>
                    <Edit fontSize='small'/>
                </Button>

                <Button color="primary" size="small" onClick={() => dispatch(deletePainting(painting._id))}>
                    <Delete fontSize='small'/>
                </Button>
            </CardActions>

        </Card>
    );
}
export default Card;