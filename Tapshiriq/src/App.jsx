import "./App.css";
import Head from "./header";
import PersonalInfo from "./Perinf";
import Contacts from "./contact";
import Education from "./edu";
import Skills from "./skills";

function App() {

  return (
    <>
    <div className="cv">
      <Head />
      <PersonalInfo />
      <Contacts />
      <Education />
      <Skills />
    </div>
    </>
  )
}

export default App
