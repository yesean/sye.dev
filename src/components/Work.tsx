const data = [
  {
    name: "QBHub",
    description: "Quizbowl question reader and clue generator.",
    siteURL: "https://qbhub.io",
    githubURL: "https://github.com/yesean/qbhub",
  },
  {
    name: "Pathmazer",
    description: "Pathfinding and maze generation visualizer.",
    siteURL: "https://pathmazer.com",
    githubURL: "https://github.com/yesean/pathmazer",
  },
];

type ItemProps = {
  name: string;
  description: string;
  siteURL: string;
  githubURL: string;
};

function Item({ name, description, siteURL }: ItemProps) {
  return (
    <div className="rounded-xl p-6 shadow-lg">
      <h2 className="text-center text-lg font-bold">
        <a href={siteURL} target="_blank">
          {name}
        </a>
      </h2>
      {description}
    </div>
  );
}

export default () => (
  <div className="flex h-full flex-col items-center justify-center p-10">
    {data.map((item) => (
      <Item key={item.name} {...item} />
    ))}
  </div>
);
