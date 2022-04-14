import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background:"blue",
  },
  menuButton: {
    marginRight: theme.spacing(1),
    color: "white",
  },
  title: {
    fontSize: "1.38rem",
    color: "white",
    marginLeft: "5px",
    cursor: "pointer",
  },
  appBar: {
    background: "#43C6AC",  /* fallback for old browsers */
    background: "-webkit-linear-gradient(to right, #191654, #43C6AC)",  /* Chrome 10-25, Safari 5.1-6 */
    background: "linear-gradient(to right, #191654, #43C6AC)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    color: "white",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
   
  },
  headerWrapper: {
    display: "flex",
    alignItems: "center",
  },
  header__wrapper__right: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    
  },
  icon: {
    marginRight: "15px",
    color: "white",
    fontWeight:"500",
    cursor: "pointer",
  },
}));
