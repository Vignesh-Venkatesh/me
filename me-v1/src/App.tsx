import Navbar from "./components/Navbar";
import Info from "./components/Info";
import About from "./components/About";
import Experience from "./components/Experience";

export default function App() {
  return (
    <>
      <div className="font-google mx-auto px-4 pt-6 sm:pt-12 w-full lg:w-2/3 xl:w-1/2 text-foreground">
        <Navbar />
        <Info />
        <About />
        <Experience />
      </div>

      <footer className="bg-neutral/40 text-neutral-content/70 h-20 flex items-center justify-center">
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
