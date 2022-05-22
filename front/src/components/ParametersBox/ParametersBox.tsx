import {BaseDialog, BaseDialogProps} from "../BaseDialog/BaseDialog";
import {
    DialogProps,
    FormControl,
    InputLabel,
    OutlinedInput,
    Select,
    SelectChangeEvent,
    TextField,
    Typography
} from "@mui/material";
import React, {useState} from "react";
import {useStyles} from "../../styles";
import {useParameters} from "../../hooks/useContexts";
import { ParametersType } from "../../contexts/ParametersContext";
import {SelectList} from "../SelectList/SelectList";
import {framelengthOption} from "../SelectList/ParametersOptions";

export function ParametersBox() {

    const {setParameters} = useParameters()

    const [framelength, setFramelength] = useState("")
    const [cmap, setcmap] = useState("")
    const [hoplength, setHopelength] = useState(0)
    const [mode, setMode] = useState("")
    const [specid, setSpecid] = useState("")
    const [window, setWindow] = useState("")


    const classes = useStyles();

    const [openParam, setOpenParam] = useState(false)

    function handleClose() {
        console.log("aqui")
        setOpenParam(false)
    }

    function handleSaveParameters(){
        const param = {
            framelength: Number(framelength),
            cmap,
            hoplength,
            mode,
            specid,
            window
        } as ParametersType

        setParameters(param)
    }

    return(
        <div>
            <BaseDialog
                open={openParam}
                onClose={handleClose}
                name={"Parâmetros de execução"}
            >

                <SelectList
                    label={"Largura de Quadro"}
                    data={framelength}
                    setData={(data) => setFramelength}
                    options={framelengthOption}
                />

                <div>
                    <button
                        className={classes.paramButton}
                    >
                        Salvar
                    </button>
                    <button
                        onClick={() => setOpenParam(false)}
                        className={classes.paramButton}
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