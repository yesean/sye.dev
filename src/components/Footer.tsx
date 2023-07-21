import linkedin from "../assets/linkedin.svg";
import email from "../assets/email.svg";
import github from "../assets/github.svg";

const data = [
  {
    name: "linkedin",
    href: "https://linkedin.com/in/yesean",
    icon: linkedin,
  },
  {
    name: "github",
    href: "https://github.com/yesean",
    icon: github,
  },
  {
    name: "email",
    href: "mailto:seanye24@gmail.com",
    icon: email,
  },
];

export default () => (
  <footer className="p-3">
    <ol className="m-auto flex max-w-3xl justify-evenly">
      {data.map(({ name, href, icon }) => (
        <li className="box-border rounded-md p-2 hover:bg-slate-200">
          <a target="_blank" href={href}>
            <img src={icon} alt={name} />
          </a>
        </li>
      ))}
    </ol>
  </footer>
);
