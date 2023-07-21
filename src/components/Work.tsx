import githubSquare from "../assets/github-square.svg";

const data = [
  {
    name: "QBHub",
    description: "quizbowl question reader and clue generator",
    siteURL: "https://qbhub.io",
    githubURL: "https://github.com/yesean/qbhub",
  },
  {
    name: "Pathmazer",
    description: "pathfinding and maze generation visualizer",
    siteURL: "https://pathmazer.com",
    githubURL: "https://github.com/yesean/pathmazer",
  },
  {
    name: "generals.io bot",
    description: "real-time, multiplayer strategy game bot",
    siteURL: null,
    githubURL: "https://github.com/yesean/generalsio-bot",
  },
  {
    name: "dots",
    description: "configs for my dev stack",
    siteURL: null,
    githubURL: "https://github.com/yesean/dotfiles",
  },
];

type ItemProps = {
  name: string;
  description: string;
  siteURL: string | null;
  githubURL: string;
};

function Item({ name, description, siteURL, githubURL }: ItemProps) {
  return (
    <div className="w-full py-7">
      <h2 className="mr-2 flex place-items-center gap-3 text-lg font-bold">
        {siteURL != null ? (
          <a
            href={siteURL}
            target="_blank"
            className="text-sky-500 underline hover:text-sky-600"
          >
            {name}
          </a>
        ) : (
          name
        )}
        <a
          target="_blank"
          href={githubURL}
          className="rounded p-1 hover:bg-slate-200"
        >
          <img src={githubSquare} alt={name} />
        </a>
      </h2>
      {description}
    </div>
  );
}

export default () => (
  <div className="m-auto box-border flex h-full max-w-xs flex-col items-center justify-center divide-y overflow-auto px-6 sm:max-w-lg">
    {data.map((item) => (
      <Item key={item.name} {...item} />
    ))}
  </div>
);
