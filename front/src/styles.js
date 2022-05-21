import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    mainContainer: {
        background: 'linear-gradient(45deg, #131315 0%, #2C0252 100%)',
        minHeight: "100vh",
        minWidth: "100vw",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontWeight: 700,
        color: "#ccc8c8"
    },
    botaoEnviar: {
        fontWeight: 800,
        borderRadius: 10,
        height: 40,
        paddingRight: 10,
        paddingLeft: 10,
        color: "#ccc8c8",
        background: "#9A4AECFF",
        border: 0,
        marginRight:10,
        width: "50%"
    },
    botaoCancelar: {
        fontWeight: 800,
        borderRadius: 10,
        height: 40,
        paddingRight: 10,
        paddingLeft: 10,
        color: "#f12d2d",
        background: "transparent",
        borderWidth: 4,
        borderColor: "#f12d2d",
        marginTop: 10
    },
    formGroup: {
        marginBottom: 10,

    },
    formControl: {
        width: '100%',
        display: "block",
        padding: '0.375rem 0.75rem',
        fontSize: '1rem',
        fontWeight: 700,
        color: "#ccc8c8",
        border: "1px solid #ccc8c8",
        borderRadius: '0.25rem',
    },
    specContainer: {
        width: "80vw",
        height: "50vh",
        overflowY: "scroll"
    },
    loadingContainer: {
        alignItems: "center",
        display: "flex",
        flexDirection: "column"
    },
    formContainer: {
        width: "30%"
    }
})
