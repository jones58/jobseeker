import { motion, AnimatePresence } from "framer-motion";
import ReactConfetti from "react-confetti";

const jobsites = [
  { name: "LinkedIn", website: "https://www.linkedin.com/jobs/" },
  {
    name: "Four Day Week",
    website: "https://fourdayweek.co.uk/find-a-job/",
  },
  { name: "NHS Jobs", website: "https://beta.jobs.nhs.uk/candidate" },
  {
    name: "London IT Jobs",
    website: "https://findajob.dwp.gov.uk/search?cat=14&loc=86384",
  },
  { name: "Grad Jobs", website: "https://giveagradago.com/" },
  {
    name: "The Dots",
    website:
      "https://the-dots.com/jobs/search?query=Web%20Developer&filters=job-type:Full%20Time.1|level:Junior.1^Mid%20Level.2^Senior.3|location:London%2C%20United%20Kingdom.70951&sortBy=latest",
  },
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
  {
    name: "Total Jobs",
    website:
      "https://www.totaljobs.com/jobs/frontend-developer/in-london?radius=20&searchOrigin=Resultlist_top-search",
  },
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

  {
    name: "Hired",
    website: "https://hired.co.uk/",
  },
  { name: "Otta", website: "https://app.otta.com/jobs/" },
  {
    name: "Jobserve",
    website: "https://www.jobserve.com/gb/en/Job-Search/",
  },
  { name: "Upwork", website: "https://www.upwork.com/" },
  {
    name: "Dice",
    website:
      "https://www.dice.com/jobs?q=frontend&location=London,%20UK&latitude=51.5072178&longitude=-0.1275862&countryCode=GB&locationPrecision=City&radius=30&radiusUnit=mi&page=1&pageSize=20&language=en",
  },
  {
    name: "JS Jobs",
    website:
      "https://jsjobbs.com/jobs?country=uk&role=frontend%20developer",
  },
  {
    name: "Power To Fly",
    website:
      "https://powertofly.com/jobs/?keywords=%22Frontend+Developer%22&location=London%2C+UK",
  },
  {
    name: "Hacker News Jobs",
    website: "https://bernawil.github.io/hn-who-is-hiring/",
  },
];

function Jobboards() {
  return (
    <AnimatePresence>
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-wrap justify-center">
          {jobsites.map((jobsite) => {
            if (localStorage.getItem(jobsite.name) === "visited") {
              return null;
            } else {
              return (
                <a
                  href={jobsite.website}
                  target="_blank"
                  rel="noreferrer"
                  key={jobsite.name}
                  className="m-2 inline-block"
                >
                  <button
                    onClick={() => {
                      localStorage.setItem(jobsite.name, "visited");
                      window.location.reload(false);
                    }}
                    className="rounded-lg bg-pink-800 p-7 text-xl font-semibold text-slate-100 shadow-md hover:scale-105 hover:bg-pink-900"
                  >
                    {jobsite.name}
                  </button>
                </a>
              );
            }
          })}
        </div>
        {Object.keys(localStorage).length - 1 <
        jobsites.length ? null : (
          <div>
            <p className="text-4xl font-bold text-center">
              Completed! Come back tomorrow 🌿
            </p>
            <ReactConfetti colors={["#7b238a"]}></ReactConfetti>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export default Jobboards;
