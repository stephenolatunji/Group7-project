import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Components/Header";
import LandingPage from "./Components/LandingPage";
import Signup from "./Components/CreateUser";
import Signin from "./Components/Signin";
import CreateUser from "./Components/CreateUser";
import ExercisesList from "./Components/ExercisesList";
import CreateExercise from "./Components/CreateExercise";
import "./App.css"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <LandingPage />
        <CreateUser />
        <ExercisesList />
        <CreateExercise />
        <Signin  />
        <Route exact path="/Signin" component={Signin} />
        <Route exact path="/Signup" component={Signup} />
      </BrowserRouter>
      {/*              
            // <BrowserRouter >
            // <Header />
            // <Route exact path='/' component = {LandingPage} />
            // {/* <Route exact path='/About' component = {About} /> */}
      {/* <Route exact path='/Project' component = {Project} /> */}
      {/* <Route exact path='/Contact' component = {Contact} /> */}
      {/* <Footer /> */}
      {/*</BrowserRouter>  */}
    </div>
  );
};
export default App;
