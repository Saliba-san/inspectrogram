import {Alert, Snackbar} from "@mui/material";
import {useSnack} from "../../hooks/useContexts";


export function BaseSnackbar() {

    const {snackOpen, snackMessage, setSnackbar} = useSnack()

    const handleClose = () => {
        setSnackbar(false, "")
    }

    return (
        <>
            <Snackbar open={snackOpen} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    {snackMessage}
                </Alert>
            </Snackbar>
        </>
    )
}