import Navbar from "./components/Navbar";
import Info from "./components/Info";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { FaArrowUp } from "react-icons/fa";

export default function App() {
  return (
    <>
      <div
        className="font-google mx-auto px-4 pt-6 sm:pt-12 w-full lg:w-2/3 xl:w-1/2 text-foreground"
        id="app"
      >
        <Navbar />
        <Info />
        <About />
        <Experience />
        <Projects />
        <Skills />

        <div className="w-full flex flex-col items-center my-15 animate-bounce ">
          <div
            className="cursor-pointer text-accent text-sm hover:text-success/80 hover:font-bold duration-200 flex flex-col items-center"
            onClick={() => handleScroll("app")}
          >
            <FaArrowUp />
            <h1>teleport to the top</h1>
          </div>
        </div>
      </div>

      <footer className="font-google bg-neutral/40 text-neutral-content/70 h-20 flex items-center justify-center">
        <div className="text-center text-sm space-y-2">
          <h1>Made with 💚 by Vignesh.</h1>
          <h1>
            Portfolio design inspired by{" "}
            <a
              href="https://utkarsh-singhal.is-a.dev/"
              target="_blank"
              className="hover:underline underline-offset-4 hover:font-bold"
            >
              Utkarsh
            </a>
          </h1>
        </div>
      </footer>
    </>
  );
}

const handleScroll = (id: string) => {
  const element = document.getElementById(id);

  element?.scrollIntoView({ behavior: "smooth", block: "start" });
};
