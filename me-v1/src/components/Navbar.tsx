export default function Navbar() {
  return (
    <div className="flex justify-between items-end" id="navbar">
      <a href="https://vigneshvenkatesh.com">
        <h1 className="font-black text-2xl text-success tracking-wide">
          vigiii.
        </h1>
      </a>

      {/* navigation buttons */}
      <div className="hidden sm:flex gap-5 font-semibold tracking-wide">
        <h1
          className="cursor-pointer hover:text-success duration-200"
          onClick={() => handleScroll("experience")}
        >
          experience
        </h1>
        <h1
          className="cursor-pointer hover:text-success duration-200"
          onClick={() => handleScroll("projects")}
        >
          projects
        </h1>
        <h1
          className="cursor-pointer hover:text-success duration-200"
          onClick={() => handleScroll("skills")}
        >
          skills
        </h1>
      </div>
    </div>
  );
}

const handleScroll = (id: string) => {
  const element = document.getElementById(id);

  element?.scrollIntoView({ behavior: "smooth", block: "start" });
};
