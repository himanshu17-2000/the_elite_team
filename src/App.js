import React, { useEffect, useState } from "react";
import { Drawer, JoinedClasses, Login, Main } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { IsUserRedirect, ProtectedRoute } from "./routes/Routes";
import { Grid, TextField } from "@material-ui/core";
import { useLocalContext } from "./context/context";

import db from "./lib/firebase";
function App() {
  const { loggedInMail } = useLocalContext();

  const [createdClasses, setCreatedClasses] = useState([]);
  const [joinedClasses, setJoinedClasses] = useState([]);
  const [search, setsearch] = useState("");
  useEffect(() => {
    if (loggedInMail) {
      let unsubscribe = db
        .collection("CreatedClasses")
        .doc(loggedInMail)
        .collection("classes")
        .onSnapshot((snapshot) => {
          setCreatedClasses(snapshot.docs.map((doc) => doc.data()));
        });
      return () => unsubscribe();
    }
  }, [loggedInMail]);

  useEffect(() => {
    if (loggedInMail) {
      let unsubscribe = db
        .collection("JoinedClasses")
        .doc(loggedInMail)
        .collection("classes")
        .onSnapshot((snapshot) => {
          setJoinedClasses(snapshot.docs.map((doc) => doc.data().joinedData));
        });

      return () => unsubscribe();
    }
  }, [loggedInMail]);
  return (
    <Router>
      <Switch>


        {createdClasses.map((item, index) => (
          <Route key={index} exact path={`/${item.id}`}>
            <Drawer />

            <Main classData={item} />
          </Route>
        ))}
        {joinedClasses.map((item, index) => (
          <Route key={index} exact path={`/${item.id}`}>
            <Drawer />
            <Main classData={item} />
          </Route>
        ))}
        <IsUserRedirect
          user={loggedInMail}
          loggedInPath="/"
          path="/signin"
          exact
        >
          <Login />
        </IsUserRedirect>

        <ProtectedRoute user={loggedInMail} path="/" exact>
          <Drawer />
          <ol className="joined">
            <Grid container spacing={2}>
              <Grid container spacing={1} direction="row"
                alignItems="center"
                justifyContent="center"  >
                <Grid item lg={2} md={2} sm={12} xs={12} >

                  <input  style={{
                    padding :10 ,
                    fontSize:18

                  }}type="text" onChange={(e) => { setsearch(e.target.value) }} placeholder="Search By Subject name "  />
                </Grid >
              </Grid>
              {createdClasses.filter((val)=>{
                if(search === ""){
                  return val;
                }
                else if(val.className.toLowerCase().includes(search.toLowerCase())){
                          return val ;
                }
              }).map((item) => (
                <Grid item lg={3} md={3} sm={12} xs={12} >
                  <JoinedClasses classData={item} />
                </Grid>

              ))}
            </Grid>
            <Grid container spacing={2}>
              {joinedClasses.map((item) => (
                <Grid item lg={3} md={3} sm={12} xs={12} >
                  <JoinedClasses classData={item} />
                </Grid>
              ))}
            </Grid>

          </ol>
        </ProtectedRoute>
      </Switch>
    </Router >
  );
}

export default App;
