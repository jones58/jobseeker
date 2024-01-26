const jobBoards = [
  { name: "LinkedIn", website: "" },
  { name: "Four Day Week", website: "" },
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
  { name: "Grad Jobs", website: "https://giveagradago.com/" },
  { name: "The Dots", website: "https://the-dots.com/" },
  {
    name: "Work in Startups",
    website: "https://workinstartups.com/job-board/jobs/developers",
  },
  {
    name: "Adzuna",
    website:
      "https://www.adzuna.co.uk/jobs/value-my-cv/v3/job-ads?id=5296798&goal=front-end-developer",
  },
  {
    name: "Arts Jobs",
    website: "https://www.artsjobs.org.uk/jobs",
  },
  { name: "Career Jet", website: "https://www.careerjet.co.uk/" },
  {
    name: "University Jobs",
    website:
      "https://www.jobs.ac.uk/search/?activeFacet=nonAcademicDisciplineFacet&sortOrder=1&pageSize=25&startIndex=1&nonAcademicDisciplineFacet%5B0%5D=web-design-and-development",
  },
  { name: "Total Jobs", website: "https://www.totaljobs.com/" },
  { name: "Reed", website: "https://www.reed.co.uk/" },
  {
    name: "Museums",
    website:
      "https://www.nationalmuseums.org.uk/jobs/?region=&organisation=&category=30&salary=",
  },
  {
    name: "Glassdoor",
    website: "https://www.glassdoor.co.uk/Job/index.htm",
  },
  {
    name: "Apprenticeships",
    website:
      "https://www.findapprenticeship.service.gov.uk/apprenticeshipsearch",
  },
  { name: "CW Jobs", website: "https://www.cwjobs.co.uk/" },
  {
    name: "CV Library",
    website: "https://www.cv-library.co.uk/candidate/my-dashboard",
  },
  {
    name: "Charity Job",
    website: "https://www.charityjob.co.uk/jobs-in-london",
  },
  { name: "TFL", website: "https://tfl.gov.uk/corporate/careers/" },
];

const otherResources = [
  {
    name: "Hacker News",
    website: "https://bernawil.github.io/hn-who-is-hiring/",
  },
  {
    name: "Creative Lives In Progress",
    website: "https://www.creativelivesinprogress.com/opportunitiesboard",
  },
];

function Mainpage() {
  return (
    <div className="h-screen bg-slate-900 p-10 text-slate-200">
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
            <button className="transform rounded-lg bg-pink-800 px-6 py-4 font-semibold text-slate-200 shadow-md transition hover:scale-105 hover:bg-pink-900">
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
