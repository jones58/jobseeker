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
    <div className="h-full min-h-screen bg-indigo-950 p-10 text-slate-200">
      <h1 className="mb-8 text-center text-6xl font-bold">
        London Frontend Jobs
      </h1>
      <h3 className="mb-8 text-center text-2xl">
        A job board that refreshes everyday. Click to check the job
        sites, come back tomorrow to check again!
      </h3>
      <Jobboards />
      <h3 className="m-8 text-center">
        N.B. If open all doesn't work for you, check your browser
        settings and allow popups on this page.
      </h3>
      <Resources />
    </div>
  );
}

export default Mainpage;
