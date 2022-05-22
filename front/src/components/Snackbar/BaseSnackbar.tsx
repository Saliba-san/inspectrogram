import {Alert, Snackbar} from "@mui/material";
import {useSnack} from "../../hooks/useContexts";
import {SnackbarType} from "../../contexts/SnackContext";


export function BaseSnackbar() {

    const {snackData, setSnackbar} = useSnack()

    const handleClose = () => {
        setSnackbar(false, "", "success")
    }

    return (
        <Snackbar open={snackData.open} onClose={handleClose}>
            <Alert onClose={handleClose} severity={snackData.type} sx={{ width: '100%' }}>
                {snackData.message}
            </Alert>
        </Snackbar>
    )
}