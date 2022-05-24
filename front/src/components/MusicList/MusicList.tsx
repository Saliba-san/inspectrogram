import {BaseDialog, BaseDialogProps} from "../BaseDialog/BaseDialog";
import React, {useState} from "react";
import {useStyles} from "../../styles";
import {useMusica, useParameters, useSnack} from "../../hooks/useContexts";
import { ParametersType } from "../../contexts/ParametersContext";
import {SelectList} from "../SelectList/SelectList";
import {framelengthOption, windowOption, modeOption, cmapOption, hoplenghtOption} from "../SelectList/ParametersOptions";
import {MusicNote} from "@mui/icons-material"
import { RadioGroup } from "@headlessui/react";
import {ClassNamesProps} from "@emotion/react";
import {Grid, Typography} from "@mui/material";


export function MusicList() {

    const classes = useStyles();

    const {musicas} = useMusica()

    const {setParameters} = useParameters()

    const [musicid, setMusicid] = useState(-1)

    const [openParam, setOpenParam] = useState(false)

    function handleClose() {
        setOpenParam(false)
    }

    /**
     * TODO concertar ID
     */
    function handleSaveParameters(){
        setParameters({
            specid: musicid.toString()
        })
        setOpenParam(false)
    }

    function handleSelect(index: number) {
        setMusicid(index)
    }

    function handleCole() {
        setOpenParam(false)
        setMusicid(-1)
    }

    return(
        <div style={{maxHeight: 100}}>
            <BaseDialog
                open={openParam}
                onClose={handleClose}
                name={"Lista de Áudios"}
            >
                {
                    musicas !== undefined ?
                        <Grid
                            container
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="stretch"
                            style={{paddingBottom: 20, overflow: "scroll"}}
                        >
                            {
                                Object.entries(musicas).map( ([index, value]) => {
                                    return (
                                        <div  className={classes.itembox}>
                                            <option
                                                className={
                                                    ((Number(index) !== musicid) ? classes.musicOption : classes.musicOptionSelected)
                                                }
                                                value={value.id}
                                                onClick={() => handleSelect(Number(index))}
                                            >
                                                {value.music}
                                            </option>
                                        </div>
                                    )
                                })
                            }

                        </Grid>
                    :
                     <Typography variant={"h6"}>
                        Nada para ver aqui...
                     </Typography>
                }



                <div>
                    <button
                        onClick={() => handleSaveParameters()}
                        className={classes.paramButton}
                    >
                        Salvar
                    </button>
                    <button
                        onClick={() => handleCole()}
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
                <MusicNote/>
            </button>
        </div>
    )
}