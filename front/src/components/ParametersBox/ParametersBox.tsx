import {BaseDialog, BaseDialogProps} from "../BaseDialog/BaseDialog";
import {
    DialogProps,
    FormControl, Grid,
    InputLabel,
    OutlinedInput,
    Select,
    SelectChangeEvent,
    TextField, ToggleButton, ToggleButtonGroup,
    Typography
} from "@mui/material";
import React, {useState} from "react";
import {useStyles} from "../../styles";
import {useParameters, useSnack} from "../../hooks/useContexts";
import { ParametersType } from "../../contexts/ParametersContext";
import {SelectList} from "../SelectList/SelectList";
import {framelengthOption, windowOption, modeOption, cmapOption, hoplenghtOption} from "../SelectList/ParametersOptions";
import {Settings} from "@mui/icons-material"


export function ParametersBox() {

    const classes = useStyles();

    const {parameters, setParameters} = useParameters()
    const {setSnackbar} = useSnack()

    const [framelength, setFramelength] = useState("256")
    const [cmap, setCmap] = useState("viridis")
    const [hoplength, setHopelength] = useState("512")
    const [mode, setMode] = useState("power")
    const [window, setWindow] = useState("hann")
    const [intensity, setIntensity] = useState("db")

    const [openParam, setOpenParam] = useState(false)

    function handleClose() {
        setOpenParam(false)
    }

    function handleSaveParameters(){
        const param = {
            framelength: Number(framelength),
            cmap: cmap,
            hoplength: Number(hoplength),
            mode: mode,
            window: window,
            intensity: intensity
        } as ParametersType
        console.log(parameters)

        setParameters(param)

        setSnackbar(true, "Parâmetros atualizados", "info")

        handleClose()

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
                    setData={(data) => setFramelength(data)}
                    options={framelengthOption}
                />
                <SelectList
                    label={"Tipo de Janela"}
                    data={window}
                    setData={(data) => setWindow(data)}
                    options={windowOption}
                />
                <SelectList
                    label={"Modo"}
                    data={mode}
                    setData={(data) => setMode(data)}
                    options={modeOption}
                />
                <SelectList
                    label={"Mapa de Cor"}
                    data={cmap}
                    setData={(data) => setCmap(data)}
                    options={cmapOption}
                />
                <SelectList
                    label={"Tamanho de Passo"}
                    data={hoplength}
                    setData={(data) => setHopelength(data)}
                    options={hoplenghtOption}
                />

                <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    style={{paddingTop: 10}}
                >
                    <Typography
                        variant={"subtitle1"}
                        style={{color: "#ccc8c8"}}
                    >
                        Intensidade:
                    </Typography>
                    <ToggleButtonGroup
                        color="primary"
                        value={intensity}
                        exclusive
                        onChange={ (event, data) => setIntensity(data)}
                    >
                        <ToggleButton value="db" style={{color: "#ccc8c8", paddingLeft: 20}} >dB</ToggleButton>
                        <ToggleButton value="amp" style={{color: "#ccc8c8"}} >Amp</ToggleButton>
                    </ToggleButtonGroup>
                </Grid>

                <div style={{marginTop: 10}}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <button
                            onClick={() => handleSaveParameters()}
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
                    </Grid>
                </div>
            </BaseDialog>
            <button
                className={classes.settingButton}
                onClick={() => {
                    setOpenParam(true)
                }}
            >
                <Settings/>
            </button>
        </div>
    )
}