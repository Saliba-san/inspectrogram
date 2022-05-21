import React, {useEffect, useRef, useState} from "react";
import Button from '@mui/material/Button';
import {Grid, Typography} from "@mui/material";
import {useStyles} from "../../styles";
import {sendFileRequest} from "../../servicies/file";
import { CircularProgress } from '@mui/material';
import {useImage} from "../../hooks/useContexts";

export function FileUploader() {

    const {setImage} = useImage()
    const [file, setFile] = useState( {} );
    const [isLoading, setIsLoading] = useState( false );
    const formRef = useRef<HTMLFormElement>(null);
    const classes = useStyles();

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.files)

        if(e.target.files) {
            setFile(e.target.files[0]);
        } else {
            console.log("Nenhum arquivo válido encontrado.")
        }
    }

    function submitFile(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        setIsLoading(true);

        const data = new FormData();

        // data.append("file", file, "file")

        const response = sendFileRequest(data)

        // setImage (response.data);
        // colocar arquivo na tela

    }

    function clearForm () {
        if(formRef.current !== null)
            formRef.current.reset();
        setIsLoading(false)
    }


    return(
        <React.Fragment>
            { isLoading ?
                <div>
                    <Typography variant="h6" style={{fontWeight: 700, color: "#ccc8c8"}}>
                        Seu arquivo está sendo processado
                    </Typography>
                    <CircularProgress />
                </div>
                :
                <Grid alignContent="center">
                    <Typography variant="h6" style={{fontWeight: 700, color: "#ccc8c8"}}>
                        Arraste seu arquivo para cá
                    </Typography>
                    <form
                        id="form"
                        method="post"
                        ref={formRef}
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
                                    onClick={(event) => {
                                        submitFile(event);
                                    }}
                                >
                                    Deletar
                                </button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            }
            <button onClick={clearForm} className={classes.botaoCancelar}>
                Cancelar
            </button>
        </React.Fragment>
    );
}
