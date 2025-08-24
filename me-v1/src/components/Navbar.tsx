export default function Navbar() {
  return (
    <div className="flex justify-between items-end">
      <a href="https://vigneshvenkatesh.com">
        <h1 className="font-black text-2xl text-primary tracking-wide">
          vigiii.
        </h1>
      </a>

      {/* navigation buttons */}
      <div className="flex gap-5 font-semibold tracking-wide">
        <h1 className="cursor-pointer hover:text-primary duration-200">
          experience
        </h1>
        <h1 className="cursor-pointer hover:text-primary duration-200">
          projects
        </h1>
      </div>
    </div>
  );
}
