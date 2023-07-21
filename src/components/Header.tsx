const data = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "work",
    href: "/work/",
  },
  {
    name: "about",
    href: "/about/",
  },
];

type Props = {
  currentPath: string;
};

export default ({ currentPath }: Props) => {
  console.log({ currentPath });
  return (
    <nav className="flex w-full justify-end p-3">
      <ol className="flex max-w-sm flex-1 justify-around ">
        {data.map(({ name, href }) => (
          <li
            key={name}
            className={`hover:text-sky-500 ${
              href === currentPath ? "font-bold text-sky-500" : ""
            }`}
          >
            <a href={href}>{name}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
};
