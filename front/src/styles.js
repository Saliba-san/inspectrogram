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
        '&:hover': {
            background: "#a86de5",
        },
        border: 0,
        marginRight:10,
        width: "50%",
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
    },
    inputContainer: {
        background: "#3b3939",
    },
    paramInput: {
        padding: 5,
        colorScheme: "#ccc8c8"
    },
    paramButton: {
        fontWeight: 400,
        borderRadius: 5,
        height: 30,
        paddingRight: 10,
        paddingLeft: 10,
        color: "#9A4AECFF",
        background: "transparent",
        border: "transparent",
        '&:hover': {
            background: "#454148",
        },
        transition: "step-end",
        marginRight:10,
        fontSize: "1rem",
    },
    deleteButton: {
        fontWeight: 400,
        borderRadius: 5,
        height: 30,
        paddingRight: 10,
        paddingLeft: 10,
        color: "#f12d2d",
        background: "transparent",
        border: "transparent",
        '&:hover': {
            background: "#454148",
        },
        transition: "step-end",
        marginRight:10,
        fontSize: "1rem",
    },
    settingButton: {
        borderRadius: 100,
        background: "transparent",
        color: "#ccc8c8",
        marginTop: "2rem",
        '&:hover': {
            background: "#4f336c",
            cursor: "pointer"
        },
    },
    itembox: {
        borderRadius: 8,
        borderColor: "#ccc8c8",
        borderWidth: 4
    },
    musicOption: {
        color: "#ccc8c8",
        borderColor: "#ccc8c8",
        padding: 10,
        borderRadius: 10,
        '&:hover': {
            background: "#464448",
            cursor: "pointer"
        },
    },
    musicOptionSelected: {
        color: "#9A4AECFF",
        borderColor: "#9A4AECFF",
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
        '&:hover': {
            background: "#464448",
            cursor: "pointer"
        },
    }
})
