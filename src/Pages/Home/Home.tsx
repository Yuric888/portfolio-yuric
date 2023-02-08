import Banner from "../../Component/Section/Banner/Banner";
import Header from "../../Component/Section/Header/Header";
import ThemeContext from "../../util/themContext";
import "./Home.scss";
import { useContext } from "react";
import About from "../../Component/Section/About/About";
import Skills from "../../Component/Section/Skills/Skills";
import Portpolio from "../../Component/Section/Portpolio/Portpolio";
import Contact from "../../Component/Section/Contact/Contact";

function Home() {
  const { state } = useContext(ThemeContext);
  return (
    <main className="homepage" style={state}>
      <Header />
      <Banner />
      <About />
      <Skills />
      <Portpolio />
      <Contact />
    </main>
  );
}

export default Home;
