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
        border: 0
    }
})