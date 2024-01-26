const jobBoards = [
  { name: "LinkedIn", website: "" },
  { name: "TFL Jobs", website: "" },
  { name: "Four Day Week", website: "" },
  { name: "Hacker News", website: "" },
  { name: "NHS Jobs", website: "https://beta.jobs.nhs.uk/candidate" },
  {
    name: "DWP find a job",
    website: "https://findajob.dwp.gov.uk/search",
  },
  {
    name: "London IT Jobs",
    website:
      "https://findajob.dwp.gov.uk/search?cat=14&loc=86384&st=40000&sf=10000&sb=salary&sd=down",
  },
  { name: "Give A grad a go", website: "https://giveagradago.com/" },
  { name: "The Dots", website: "https://the-dots.com/" },
];

const otherResources = [{}];

function Mainpage() {
  return (
    <div className="h-screen bg-blue-900 p-10 text-slate-200">
      <h1 className="mb-8 text-center text-4xl font-bold">Jobseeker</h1>
      <h3 className="mb-4 text-center text-lg">
        A job board that refreshes every three days. Look through the job sites
        and then come back to check again!
      </h3>
      <div className="flex flex-wrap justify-center">
        {jobBoards.map((jobBoard) => (
          <a
            href={jobBoard.website}
            target="_blank"
            rel="noreferrer"
            key={jobBoard.name}
            className="m-2 inline-block"
          >
            <button className="transform rounded-lg bg-fuchsia-800 px-6 py-4 font-semibold text-slate-200 shadow-md transition hover:scale-105 hover:bg-fuchsia-900">
              {jobBoard.name}
            </button>
          </a>
        ))}
      </div>
      <h2 className="mb-8 text-center text-4xl font-bold">
        Some other resources to check out
      </h2>
    </div>
  );
}

export default Mainpage;
