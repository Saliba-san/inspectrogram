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

function CheckIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" >
            <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
            <path
                d="M7 13l3 3 7-7"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}


export function MusicList() {

    const classes = useStyles();

    const {setParameters} = useParameters()
    const {setSnackbar} = useSnack()
    const {musicas} = useMusica()

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
                                                style={{color: "#ccc8c8", borderColor: "#ccc8c8", padding: 5}}
                                                value={value.id}
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
                <MusicNote/>
            </button>
        </div>
    )
}