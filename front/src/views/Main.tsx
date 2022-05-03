import React, { useState} from 'react'
import {useStyles} from "../styles";
import {FileUploader} from "../components/FileUploader/FileUploader";
import {Grid, Typography} from "@mui/material";
import pic from "../images/windowlicker.jpg"
import HorizontalScroll from "react-scroll-horizontal";

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
                    <HorizontalScroll
                        pageLock={true}
                        reverseScroll={true}
                        style={{ width: `160em`, height: `40em`}}
                    >
                        <div style={{width: "250em", height:"50em"}}>
                            <img style={{width: "250em", height:"50em"}} src={pic}/>
                        </div>
                    </HorizontalScroll>
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
