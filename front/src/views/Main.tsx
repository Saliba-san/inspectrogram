import React, {ReactEventHandler, useContext, useState} from 'react'
import {useStyles} from "../styles";
import {FileUploader} from "../components/FileUploader/FileUploader";
import {Box, Container, Grid, Paper, Slider, Typography} from "@mui/material";
import pic from "../images/windowlicker.jpg"
import HorizontalScroll from "react-scroll-horizontal";
import ReactCrop, {Crop} from "react-image-crop";
import {useImage} from "../hooks/useContexts";

export function Main () {

    // Armazena uma String com o .svg da imagem
    const [spectogram, setSpectogram] = useState("")
    // Armazena o Id da imagem para comunicação com o Back
    const [spectogramId, setSpectogramId] = useState("")


    const [specLenght, setSpecLenght] = useState([0,120])
    const {image} = useImage();


    const minDistance = 30;

    const handleChange1 = ( newValue: number, activeThumb: number) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setSpecLenght([Math.min(newValue[0], specLenght[1] - minDistance), specLenght[1]]);
        } else {
            setSpecLenght([specLenght[0], Math.max(newValue[1], specLenght[0] + minDistance)]);
        }
    };

    function valuetext(value: number) {
        return `${value} s`;
    }

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
                    <Box sx={{ width: 300 }}>
                        <Slider
                            getAriaLabel={() => 'Minimum distance'}
                            value={specLenght}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                            disableSwap
                        />
                    </Box>

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
