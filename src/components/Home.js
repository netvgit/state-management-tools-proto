import React, { Component } from "react";

const HomeContent = (props) => {
  return (
    <div>
      { props.homePageContent }
    </div>
  )
}

const Home = () => {
  return (
    <div>
      Content Home As Arrow function
      <HomeContent homePageContent='Getting displayed from the child component' />
    </div>
  );
}
export default Home;