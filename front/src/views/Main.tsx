import React, {ReactEventHandler, useContext, useState} from 'react'
import {useStyles} from "../styles";
import {FileUploader} from "../components/FileUploader/FileUploader";
import {Box, Container, Grid, Paper, Slider, Typography} from "@mui/material";
import pic from "../images/windowlicker.jpg"
import HorizontalScroll from "react-scroll-horizontal";
import ReactCrop, {Crop} from "react-image-crop";
import {useImage, useSnack} from "../hooks/useContexts";
import {BaseSnackbar} from "../components/Snackbar/BaseSnackbar";

export function Main () {

    // Armazena uma String com o .svg da imagem
    const [spectogram, setSpectogram] = useState("")
    // Armazena o Id da imagem para comunicação com o Back
    const [spectogramId, setSpectogramId] = useState("")

    const {image} = useImage();

    const [crop, setCrop] = useState<Crop>({
        unit: '%', // Can be 'px' or '%'
        x: 25,
        y: 25,
        width: 50,
        height: 50
    })

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
                        Inspectrograma
                    </Typography>
                    <Typography variant="h6" style={{fontWeight: 700, color: "#ccc8c8"}}>
                        - Inspecione suas músicas aqui -
                    </Typography>
                    <BaseSnackbar/>
                </Grid>
                <Grid
                    container
                    alignItems="center"
                    direction="column"
                    xs={12} md={12} lg={12} xl={12}
                >
                    <Paper className={classes.specContainer}>

                        <ReactCrop crop={crop} onChange={c => setCrop(c)}>
                            <img src={pic} />
                        </ReactCrop>
                    </Paper>
                    <Slider/>

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
