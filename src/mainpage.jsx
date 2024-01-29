import { useEffect } from "react";
import Jobboards from "./jobboards";
import Resources from "./resources";

// reset local storage every day //

function resetLocalStorage() {
  const date = new Date().toLocaleDateString();
  const savedDate = localStorage.getItem("date");
  if (date !== savedDate) {
    localStorage.clear();
  } else {
    return;
  }
}

function setDate() {
  const date = new Date().toLocaleDateString();
  localStorage.setItem("date", date);
}

function Mainpage() {
  useEffect(() => {
    resetLocalStorage();
    setDate();
  }, []);

  return (
    <div>
      <Jobboards />
      <Resources />
    </div>
  );
}

export default Mainpage;

/* if local storage >=34, display confetti.  */
