import React from "react";
import Header from "./HeaderComponent";
import Menu from "./Menu Component";

function Home(props) {
  return (
    <div>
      <Header />
      <Menu books={props.books} />
    </div>
  );
}

export default Home;
