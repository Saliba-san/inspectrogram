import React, {ReactEventHandler, useContext, useState} from 'react'
import {useStyles} from "../styles";
import {FileUploader} from "../components/FileUploader/FileUploader";
import {Box, CircularProgress, Container, Grid, Paper, Slider, Typography} from "@mui/material";
import pic from "../images/windowlicker.jpg"
import ReactCrop, {Crop} from "react-image-crop";
import {useImage, useParameters, useSnack} from "../hooks/useContexts";
import {BaseSnackbar} from "../components/Snackbar/BaseSnackbar";
import {ParametersBox} from "../components/ParametersBox/ParametersBox";
import {Settings, PlayArrow} from "@mui/icons-material";
import {changeSpectogramParameter} from "../servicies/chparameter"
import {MusicList} from "../components/MusicList/MusicList";
import {Image} from "../contexts/ImageContext";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import ImagemLogo from '../images/logo.png'

export function Main () {

    const {parameters} = useParameters()
    const {image, setImage} = useImage()
    const {setSnackbar} = useSnack()

    const [imageLoad, setImageLoad] = useState(false)

    const classes = useStyles();

    function handleCreateNewSpec() {

        if (!imageLoad) {

            console.log(imageLoad)
            setImageLoad(true)
            console.log(imageLoad)

            setSnackbar(true, "Aguarde alguns instantes...", "info")

            changeSpectogramParameter(parameters)
                .then(res => {

                    const image = {
                        data: "data:image/png;base64," + res.data,
                        imageid: "1"
                    } as Image
                    setSnackbar(true, "Imagem gerada com sucesso", "success")
                    setImage(image)
                })
                .catch(err => {
                    setSnackbar(true, err.data, "error")
                })

            setImageLoad(false)

        } else {
            setSnackbar(true, "Sua imagem já está sendo gerada", "warning")
        }
    }

    return (
        <React.Fragment>
            <Grid
                className={classes.mainContainer}
                container
                direction="row"
                justifyContent={"space-evenly"}
                xs={12} md={12} lg={12} xl={12}
            >
                <Grid
                    container
                    alignItems="center"
                    direction="column"
                    xs={12} md={12} lg={12} xl={12}
                >
                    <img
                        src={ImagemLogo}
                        style={{maxWidth: 550, paddingTop: 10}}
                    />
                </Grid>
                <Grid
                    container
                    alignItems="top"
                    direction="row"
                    justifyContent={"space-evenly"}
                    xs={12} md={12} lg={12} xl={12}
                >
                    <MusicList />

                    <div
                        style={{
                            padding: 10,
                            borderStyle: "groove",
                            borderColor: "#ccc8c8",
                            // minWidth: 800, minHeight: 500,
                            display: "block"
                        }}
                    >
                        {
                            !imageLoad ?
                                <>
                                {
                                    (image !== undefined) ?
                                        <TransformWrapper>
                                            <TransformComponent >
                                                < img
                                                    style={{width: "100%", height:"100%",
                                                        maxWidth: 1600, maxHeight: 800,
                                                        minWidth: 800, minHeight: 500,
                                                        overflowX: "scroll"
                                                    }}
                                                    src={image.data}
                                                />
                                            </TransformComponent>
                                        </TransformWrapper>
                                    :
                                    <div>
                                        <Typography variant="h6" style={{fontWeight: 700, color: "#ccc8c8"}}>
                                           Carregue uma música para poder visualiza-lá
                                        </Typography>
                                    </div>
                                }
                                </>
                            :
                                <div style={{padding: "10px"}}>
                                    <CircularProgress />
                                </div>
                        }
                    </div>

                    <Grid
                        direction="row"
                        justifyContent={"space-evenly"}
                    >
                        <ParametersBox />
                        <button
                            className={classes.settingButton}
                            onClick={() => {
                                handleCreateNewSpec()
                            }}
                        >
                            <PlayArrow/>                      

                        </button>
                    </Grid>
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
            <BaseSnackbar/>
        </React.Fragment>
    );
}
