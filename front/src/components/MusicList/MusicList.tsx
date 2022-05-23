import {BaseDialog, BaseDialogProps} from "../BaseDialog/BaseDialog";
import React, {useState} from "react";
import {useStyles} from "../../styles";
import {useParameters, useSnack} from "../../hooks/useContexts";
import { ParametersType } from "../../contexts/ParametersContext";
import {SelectList} from "../SelectList/SelectList";
import {framelengthOption, windowOption, modeOption, cmapOption, hoplenghtOption} from "../SelectList/ParametersOptions";
import {Settings} from "@mui/icons-material"


export function MusicList() {

    const classes = useStyles();

    const {setParameters} = useParameters()
    const {setSnackbar} = useSnack()

    const [musicid, setMusicid] = useState(0)

    const [openParam, setOpenParam] = useState(false)

    function handleClose() {
        setOpenParam(false)
    }

    /**
     * TODO concertar ID
     */
    function handleSaveParameters(){


    }

    return(
        <div>
            <BaseDialog
                open={openParam}
                onClose={handleClose}
                name={"Lista de Áudios"}
            >



                <div>
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