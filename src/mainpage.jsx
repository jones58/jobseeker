const jobBoards = [
  { name: "LinkedIn", website: "https://www.linkedin.com/jobs/" },
  { name: "Four Day Week", website: "https://fourdayweek.co.uk/find-a-job/" },
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
  { name: "Monster", website: "https://www.monster.co.uk/" },
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
  {
    name: "Escape The City",
    website:
      "https://www.escapethecity.org/search/jobs?q=option-listing-type%253DJob%2526option-seniority%253DJunior%25C2%25B7Entry-level%2526query%253Ddeveloper",
  },
  { name: "F6s", website: "https://www.f6s.com/jobs" },
  {
    name: "Landing Jobs",
    website:
      "https://landing.jobs/jobs?location=London%2C+United+Kingdom+of+Great+Britain+and+Northern+Ireland&city=London&lr=50&hd=false&t_co=false&t_st=false",
  },
  { name: "Wellfound", website: "https://wellfound.com/jobs" },

  { name: "Unicorn Hunt", website: "https://www.unicornhunt.io/" },
  {
    name: "Hired",
    website: "https://hired.co.uk/",
  },
  { name: "Otta", website: "https://app.otta.com/jobs/" },
  { name: "Jobserve", website: "https://www.jobserve.com/gb/en/Job-Search/" },
  { name: "Upwork", website: "https://www.upwork.com/" },
  {
    name: "Dice",
    website:
      "https://www.dice.com/jobs?q=frontend&location=London,%20UK&latitude=51.5072178&longitude=-0.1275862&countryCode=GB&locationPrecision=City&radius=30&radiusUnit=mi&page=1&pageSize=20&language=en",
  },
  {
    name: "JS Jobs",
    website: "https://jsjobbs.com/jobs?country=uk&role=frontend%20developer",
  },
  {
    name: "Power To Fly",
    website:
      "https://powertofly.com/jobs/?keywords=%22Frontend+Developer%22&location=London%2C+UK",
  },
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
  { name: "findatechjob", website: "https://www.findatechjob.com/" },
  {
    name: "siliconmilkround",
    website: "https://www.siliconmilkroundabout.com/",
  },
  { name: "hackajob", website: "https://hackajob.com/talent" },
];

function Mainpage() {
  return (
    <div className=" h-full min-h-screen bg-indigo-900 p-10 text-slate-200">
      <h1 className="mb-8 text-center text-4xl font-bold">
        London Frontend Jobs
      </h1>
      <h3 className="mb-4 text-center text-2xl">
        A job board that refreshes every three days. Click to look through the
        job sites and then come back to check again!
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

      <h2 className="mb-8 pt-5 text-center text-3xl font-bold">
        Some other resources to check out
      </h2>
      <div className="flex flex-wrap justify-center">
        {otherResources.map((otherResource) => (
          <a
            href={otherResource.website}
            target="_blank"
            rel="noreferrer"
            key={otherResource.name}
            className="m-2 inline-block"
          >
            <button className="transform rounded-lg bg-indigo-800 px-6 py-4 font-semibold text-slate-200 shadow-md transition hover:scale-105 hover:bg-indigo-900">
              {otherResource.name}
            </button>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Mainpage;

/* if local storage >=34, display confetti.  */
