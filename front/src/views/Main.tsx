import {Link, useNavigate} from 'react-router-dom'
import React, { useState} from 'react'
import {useStyles} from "../styles";
import Grid from "@material-ui/core/Grid";
import Typography from '@mui/material/Typography';
import {FileUploader} from "../components/FileUploader/FileUploader";

export function Main () {

    const classes = useStyles();

    return(
        <React.Fragment>
            <Grid
                className={classes.mainContainer}
                container
                direction="row"
                xs={12} md={12} lg={12} xl={12}
            >
                <Grid
                    container alignItems="center"  direction="column"
                    xs={12} md={12} lg={12} xl={12}
                >
                    <Typography variant="h4" style={{fontWeight: 700, color: "#ccc8c8"}}>
                        Inspectograma
                    </Typography>
                    <Typography variant="h6" style={{fontWeight: 700, color: "#ccc8c8"}}>
                        - Inspecione suas músicas aqui -
                    </Typography>
                </Grid>
                <Grid>
                    <FileUploader/>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}