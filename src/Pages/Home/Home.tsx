import Banner from "../../Component/Section/Banner/Banner";
import Header from "../../Component/Section/Header/Header";
import ThemeContext from "../../util/themContext";
import "./Home.scss";
import { useContext } from "react";
function Home() {
  const { state } = useContext(ThemeContext);
  return (
    <main className="" style={state}>
      <Header />
      <Banner />
    </main>
  );
}

export default Home;
