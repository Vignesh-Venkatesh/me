export default function Skills() {
  return (
    <div className="pt-10" id="skills">
      <h1 className="font-semibold opacity-40 tracking-wider text-xl mb-2">
        /skills
      </h1>

      <div className="grid grid-cols-2 grid-rows-5 gap-2">
        {/* languages */}
        <h1 className="text-success/80 font-bold">[ languages ]</h1>
        <h1 className="opacity-80">
          JavaScript, TypeScript, HTML, CSS, Python, C, SQL
        </h1>

        {/* frameworks/libraries */}
        <h1 className="text-success/80 font-bold">[ libraries, frameworks ]</h1>
        <h1 className="opacity-80">
          React.js, TailwindCSS, DaisyUI, Hono, Express.js, Better-Auth
        </h1>

        {/* tools and platforms */}
        <h1 className="text-success/80 font-bold">[ tools, platforms ]</h1>
        <h1 className="opacity-80">
          Git, GitHub, Postman, Docker, Visual Studio Code
        </h1>

        {/* databases */}
        <h1 className="text-success/80 font-bold">[ databases ]</h1>
        <h1 className="opacity-80">PostgreSQL, SQLite</h1>

        {/* misc */}
        <h1 className="text-success/80 font-bold">[ misc ]</h1>
        <h1 className="opacity-80">NPM, Bun, Vite</h1>
      </div>
    </div>
  );
}
