import {Box, Dialog, DialogContent, DialogTitle} from "@mui/material";
import {ReactNode} from "react";

export type BaseDialogProps = {
    open: boolean,
    onClose: () => void,
    children: ReactNode
}

export function BaseDialog(props: BaseDialogProps) {

    return (
        <Dialog
            open={props.open}
            scroll='body'
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle>
                <DialogContent>
                    <Box>
                        {props.children}
                    </Box>
                </DialogContent>
            </DialogTitle>
        </Dialog>
    );
}