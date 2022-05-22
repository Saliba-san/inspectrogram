import {BaseDialog, BaseDialogProps} from "../BaseDialog/BaseDialog";
import {DialogProps, FormControl, InputLabel, Select, TextField, Typography} from "@mui/material";
import React, {useState} from "react";
import {useStyles} from "../../styles";
import {useParameters} from "../../hooks/useContexts";

export function ParametersBox() {

    const {setParameters} = useParameters()
    const [framelength, setFramelength] = useState(0)

    const classes = useStyles();

    const [openParam, setOpenParam] = useState(false)

    function handleClose() {
        console.log("aqui")
        setOpenParam(false)
    }

    return(
        <div>
            <BaseDialog
                open={openParam}
                onClose={handleClose}
            >
                <FormControl>
                    <InputLabel>Tamanho do quadro</InputLabel>
                    <Select
                        native
                        value={framelength}
                    >

                    </Select>
                </FormControl>


                <div>
                    <button
                    >
                        Salvar
                    </button>
                    <button
                        onClick={() => setOpenParam(false)}
                    >
                        Fechar
                    </button>
                </div>
            </BaseDialog>
            <button
                className={classes.botaoEnviar}
                onClick={() => {
                    setOpenParam(true)
                }}
            >
                Mudar parâmetros
            </button>
        </div>
    )
}