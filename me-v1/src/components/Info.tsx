import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Info() {
  const currentYear = new Date().getFullYear(); // getting the current year
  const yearsSince2003 = currentYear - 2003; // calculating the years since 2003

  return (
    <div className="pt-12">
      <h1 className="font-normal tracking-tight text-muted-foreground text-base">
        hey 👋, I'm
      </h1>
      <div className="flex flex-col gap-4 mt-2 sm:flex-row sm:items-end">
        <h1 className="font-bold text-4xl tracking-tight">Vignesh Venkatesh</h1>
        <div className="italic flex gap-2 opacity-60 font-light">
          <h1>{yearsSince2003}</h1>
          <h1>he/him</h1>
        </div>
      </div>

      <h1 className="font-normal opacity-80 text-sm mt-4">
        gruvbox is <span className="animate-pulse">💚</span>
      </h1>

      <div className="flex gap-2">
        {/* Resume */}
        <a
          role="button"
          className="btn btn-success mt-5 font-semibold tooltip tooltip-bottom"
          href="./Resume.pdf"
          target="_blank"
        >
          <h1 className="tooltip-content text-neutral-content/60 ">
            trust me, it's my resume...
          </h1>
          <h1>Resume</h1>
        </a>

        {/* GitHub */}
        <a
          role="button"
          className="btn btn-success mt-5 tooltip tooltip-bottom"
          href="https://github.com/Vignesh-Venkatesh"
          target="_blank"
        >
          <h1 className="tooltip-content text-neutral-content/60">GitHub</h1>
          <FaGithub className="text-2xl" />
        </a>

        {/* LinkedIn */}
        <a
          role="button"
          className="btn btn-success mt-5 tooltip tooltip-bottom"
          href="https://linkedin.com/in/vignesh-2k3"
          target="_blank"
        >
          <h1 className="tooltip-content text-neutral-content/60">LinkedIn</h1>
          <FaLinkedinIn className="text-2xl" />
        </a>
      </div>
    </div>
  );
}
