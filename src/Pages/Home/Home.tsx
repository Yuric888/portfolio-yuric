import Banner from "../../Component/Section/Banner/Banner";
import Header from "../../Component/Section/Header/Header";
import ThemeContext from "../../util/themContext";
import "./Home.scss";
import { useContext } from "react";
import About from "../../Component/Section/About/About";
import Skills from "../../Component/Section/Skills/Skills";

function Home() {
  const { state } = useContext(ThemeContext);
  return (
    <main className="" style={state}>
      <Header />
      <Banner />
      <About />
      <Skills />
    </main>
  );
}

export default Home;
