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

function Resources() {
  return (
    <div>
      <h2 className="mb-8 pt-5 text-center text-3xl font-bold">
        Other resources:
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

export default Resources;
