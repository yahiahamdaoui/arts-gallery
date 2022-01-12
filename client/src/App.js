import React , { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, Card } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { fetchPaintings } from './actions/paintings';

import Gallery from './components/Gallery/Gallery';
import makeStyles from './styles';

const App = () => {
    const classes = makeStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPaintings());
    },[dispatch]);

    return (
        <Container maxWidth = 'lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h4' align='center'>Art Gallery</Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify='space-between' alignItems='stretch' spacing={4}>
                        <Grid item xs={12} sm={7}>
                            <Gallery />
                        </Grid> 
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;