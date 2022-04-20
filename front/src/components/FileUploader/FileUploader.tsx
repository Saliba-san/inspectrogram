import React, {useEffect, useRef, useState} from "react";
import Button from '@mui/material/Button';
import {Grid, Typography} from "@mui/material";
import {useStyles} from "../../styles";
import {sendFileRequest} from "../../servicies/file";
import { CircularProgress } from '@mui/material';

export function FileUploader() {

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

    }

    function clearForm () {
        if(formRef.current !== null)
            formRef.current.reset();
    }


    return(
        <React.Fragment>

            <Typography variant="h6" style={{fontWeight: 700, color: "#ccc8c8"}}>
                Arraste seu arquivo para cá
            </Typography>

            <form
                id="form"
                method="post"
                ref={ formRef }
            >
                <Grid
                    container
                    direction="column"
                    justifyContent="space-between"
                    alignItems="center"
                >
                { isLoading ?
                    <div>
                        <CircularProgress />
                    </div>

                :
                    <div>
                        <div className={classes.formGroup}>
                            <input
                                onChange={onInputChange}
                                type="file" className={classes.formControl}
                                style={{background: "transparent", color: "ccc8c8"}}
                            />
                        </div>
                        <Grid
                            direction="column"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <button className={classes.botaoEnviar} onClick={ (event) => {
                                submitFile(event)
                            }}>
                                Enviar
                            </button>
                        </Grid>
                    </div>
                }
                </Grid>
            </form>
            <button onClick={clearForm} className={classes.botaoDeletar}>
                Limpar
            </button>
        </React.Fragment>
    );
}