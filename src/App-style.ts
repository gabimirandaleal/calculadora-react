import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    container:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#152266",
    },
    inputNumber:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "10px",
    },
    number:{
        padding: "10px",
        width: "70px",
        marginLeft: "5px",
        border: "0px",
        borderRadius: "4px",
        backgroundColor: "#B2BDFB",
    },
    button:{
        padding: "10px 35px",
        borderRadius: "10px 20px 10px 20px",
        border: "0px",
        backgroundColor:"#1F53E5",
        color: "white",
    }

})