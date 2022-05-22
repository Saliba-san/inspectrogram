import {Box, Dialog, DialogContent, DialogTitle, Grid} from "@mui/material";
import {ReactNode} from "react";
import {useStyles} from "../../styles";

export type BaseDialogProps = {
    open: boolean,
    onClose: () => void,
    children: ReactNode,
    name: string
}

export function BaseDialog(props: BaseDialogProps) {

    const classes = useStyles()

    return (
        <Dialog
            open={props.open}
            scroll='body'
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <div className={classes.inputContainer}>
                <DialogTitle style={{border: "10px", color: "#ccc8c8"}}>
                    {props.name}
                </DialogTitle>
                <DialogContent>
                    <Box>
                        {props.children}
                    </Box>
                </DialogContent>
            </div>
        </Dialog>
    );
}