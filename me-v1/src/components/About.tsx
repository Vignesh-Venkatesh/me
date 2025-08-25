export default function About() {
  return (
    <div className="py-10">
      <h1 className="font-semibold opacity-40 tracking-wider text-xl mb-2">
        /me
      </h1>
      <p className="">
        I'm a Masters student at{" "}
        {/* <span className="tooltip">
          <h1 className="tooltip-content -rotate-10 text-violet-500 font-bold bg-neutral-50 animate-bounce">
            Go, Violets!
          </h1>
          New York University (NYU)
        </span> */}
        <a
          className="hover:text-violet-400 duration-300"
          href="https://nyu.edu"
          target="_blank"
        >
          New York University (NYU)
        </a>
        , pursuing an M.S. in Computer Science with a potential specialization
        in Systems.
      </p>
    </div>
  );
}
