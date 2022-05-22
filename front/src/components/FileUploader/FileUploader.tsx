import React, {useEffect, useRef, useState} from "react";
import Button from '@mui/material/Button';
import {Grid, Typography} from "@mui/material";
import {useStyles} from "../../styles";
import {fileUpload} from "../../servicies/file";
import { CircularProgress } from '@mui/material';
import {useImage, useSnack} from "../../hooks/useContexts";

export function FileUploader() {

    const {setImage} = useImage()
    const {setSnackbar, snackData} = useSnack()

    const [file, setFile] = useState( {} );
    const [isLoading, setIsLoading] = useState( false );
    const [blockDelete, setBlockDelete] = useState(true)
    const formRef = useRef<HTMLFormElement>(null);
    const classes = useStyles();


    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.files)

        if(e.target.files) {
            setFile(e.target.files[0]);
        } else {
            console.log("Nenhum arquivo válido encontrado.")
        }

        if(file !== {}){
            setBlockDelete(false)
        }
    }

    function submitFile(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        setIsLoading(true);

        const data = new FormData();
        console.log("aqui")
        console.log(snackData.open)
        console.log(snackData.message)
        setSnackbar(true, "teste", "success")
        console.log(snackData.open)
        console.log(snackData.message)

        // data.append("file", file, "file")

        const response = fileUpload(data)

        // setImage (response.data);
        // colocar arquivo na tela

    }

    function clearForm () {
        if(formRef.current !== null)
            formRef.current.reset();
        setIsLoading(false)
        setFile({})
        setBlockDelete(true)
    }


    return(
        <React.Fragment>
            { isLoading ?
                <div className={classes.loadingContainer}>
                    <Typography variant="h6" style={{fontWeight: 700, color: "#ccc8c8"}}>
                        Seu arquivo está sendo processado
                    </Typography>
                    <div style={{padding: "10px"}}>
                        <CircularProgress />
                    </div>
                    <button onClick={clearForm} className={classes.botaoCancelar}>
                        Cancelar
                    </button>
                </div>
                :
                <Grid alignContent="center"
                      container
                      direction="column"
                      xs={5} md={5} lg={3} xl={3}
                >
                    <Grid
                        direction="column"
                        xs={12} md={12} lg={12} xl={12}
                    >
                        <Typography variant="h6" style={{fontWeight: 700, color: "#ccc8c8"}}>
                            Arraste seu arquivo para cá
                        </Typography>
                        <form
                            id="form"
                            method="post"
                            ref={formRef}
                            style={{width: "100%"}}
                        >
                            <Grid
                                container
                                direction="column"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Grid
                                    direction="column"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    item
                                >
                                    <div className={classes.formGroup}>
                                        <input
                                            onChange={onInputChange}
                                            type="file" className={classes.formControl}
                                            style={{background: "transparent", color: "ccc8c8"}}/>
                                    </div>


                                </Grid>
                            </Grid>
                        </form>
                        <div style={{display: "flex"}}>
                            <button
                                className={classes.botaoEnviar}
                                onClick={(event) => {
                                    submitFile(event);
                                }}
                            >
                                Enviar
                            </button>
                            <button
                                className={classes.botaoEnviar}
                                disabled={blockDelete}
                                onClick={() => {
                                    clearForm();
                                }}
                            >
                                Deletar
                            </button>
                        </div>
                    </Grid>
                </Grid>
            }
        </React.Fragment>
    );
}
