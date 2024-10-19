import { type ReactNode } from "react";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";

type NavItem = {
  id: number;
  text: string;
};

type Navbar = NavItem[];

const NAVBAR: Navbar = [
  { id: 1, text: "About me" },
  { id: 2, text: "Resume" },
  { id: 3, text: "Services" },
  { id: 4, text: "Portfolio" },
  { id: 5, text: "Blog" },
  { id: 6, text: "Contact" },
];

type SocialMedia = {
  id: number;
  icon: ReactNode;
  link: string;
};

type SocialMediArr = SocialMedia[];

const SOCIAILMEDIA: SocialMediArr = [
  {
    id: 1,
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/javad-rafiei/",
  },
  {
    id: 2,
    icon: <FaInstagram />,
    link: "https://www.instagram.com/javadrafiei_ir/",
  },
  {
    id: 3,
    icon: <FaGithub />,
    link: "https://github.com/JavadRafieii",
  },
];

function Header() {
  return (
    <header className="w-full h-20 bg-dark-slate rounded-md border border-earthy-green my-5 px-5">
      <div className="grid grid-cols-12 h-full">
        <div className="col-span-3 flex items-center">
          <div className="flex items-center gap-x-2">
            <img src="/anglebrackets.svg" alt="logo" loading="lazy" />
            <span className="dm-mono-medium text-2xl bg-text-gradient bg-clip-text text-transparent">
              Javad.dev
            </span>
          </div>
        </div>
        <div className="col-span-6">
          <nav className="h-full">
            <ul className="h-full hidden xl:flex items-center justify-center gap-6">
              {NAVBAR.map((item) => (
                <li
                  key={item.id}
                  className="dm-mono-medium text-semi-transparent-white text-base"
                >
                  {item.text}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="col-span-3 flex items-center justify-end">
          <HiMenuAlt3 className="text-white text-3xl xl:hidden" />
          <ul className="h-full hidden xl:flex items-center justify-end gap-4 text-white text-lg">
            {SOCIAILMEDIA.map((item) => (
              <li key={item.id}>
                <a href={item.link} target="_blank">
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
