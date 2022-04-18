import React, {useState} from "react";
import Button from '@mui/material/Button';
import "./style.css"
import { Typography } from "@mui/material";
import {useStyles} from "../../styles";
import {sendFileRequest} from "../../servicies/file";



export function FileUploader() {

    const [file, setFile] = useState( {} );
    const classes = useStyles();

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.files)

        if(e.target.files) {
            setFile(e.target.files[0]);
        } else {
            console.log("Nenhum arquivo válido encontrado.")
        }
    }

    const submitFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        const data = new FormData();

        // data.append("file", file, "file")

        const response = sendFileRequest( data )
    }

    return(
        <React.Fragment>
            <form method="post" onSubmit={ () => {
                submitFile
            }}>
                <div className="form-group files">
                    <Typography variant="h6" style={{fontWeight: 700, color: "#ccc8c8"}}>
                        Arraste seu arquivo para cá
                    </Typography>
                    <input
                        onChange={onInputChange}
                        type="file" className="form-control"
                        style={{background: "transparent", color: "ccc8c8"}}
                    />
                </div>
                <button className={classes.botaoEnviar}>
                    Enviar
                </button>
            </form>
        </React.Fragment>
    );
}