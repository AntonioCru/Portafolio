import "./App.css";
import { Menu } from "./components/Menu";
import { Container1 } from "./components/Container1";
import { SectionGalery } from "./components/SectionGalery";
import {SectionParagraph} from "./components/SectionParagraph";
import {SectionTable} from "./components/SectionTable";

function App() {
  return (
    <>
      <Menu />
      <Container1 />
      <SectionGalery/>
      <SectionParagraph/>
      <SectionTable/>
    </>
  );
}

export default App;
