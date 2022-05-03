import React, { useState} from 'react'
import {useStyles} from "../styles";
import {FileUploader} from "../components/FileUploader/FileUploader";
import {Grid, Typography} from "@mui/material";
import pic from "../images/windowlicker.jpg"

export function Main () {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid
                className={classes.mainContainer}
                container
                direction="row"
                xs={12} md={12} lg={12} xl={12}
            >
                <Grid
                    container 
                    alignItems="center" 
                    direction="column"
                    xs={12} md={12} lg={12} xl={12}
                >
                    <Typography variant="h4" style={{fontWeight: 700, color: "#ccc8c8"}}>
                        Inspectograma
                    </Typography>
                    <Typography variant="h6" style={{fontWeight: 700, color: "#ccc8c8"}}>
                        - Inspecione suas músicas aqui -
                    </Typography>
                </Grid>
                <Grid
                    container 
                    alignItems="center" 
                    direction="column"
                    xs={12} md={12} lg={12} xl={12}
                >
                    <img src={pic} width={1000} height={500}/>
                </Grid>
                <Grid
                    container 
                    alignItems="center" 
                    direction="column"
                    xs={12} md={12} lg={12} xl={12}
                >
                    <FileUploader/>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
