import ProjectCard from "../ProjectCard";

export default function Projects() {
  return (
    <div className="py-10" id="projects">
      <h1 className="font-semibold opacity-40 tracking-wider text-xl mb-2">
        /projects
      </h1>

      {/* Dynamic Memory Allocator Project */}
      <ProjectCard
        project_title="Dynamic Memory Allocator"
        github="https://github.com/Vignesh-Venkatesh/DynamicMemoryAllocator"
        skills={["C"]}
        description={[
          "Designed and implemented a dynamic memory allocator, optimizing memory management through efficient allocation and deallocation of blocks in a custom heap system.",
          "Developed a segregated free list to organize memory into bins based on block sizes, improving allocation speed and reducing fragmentation.",
          "Utilized 16-byte alignment for both allocated and free blocks, ensuring performance optimization and adhering to memory structure constraints.",
        ]}
      />

      {/* Movieboxd Project */}
      <ProjectCard
        project_title="Movieboxd"
        github="https://github.com/Vignesh-Venkatesh/MovieBoxd"
        website="https://movieboxd.vigneshvenkatesh.com/"
        skills={[
          "React",
          "TypeScript",
          "Hono",
          "PostgreSQL",
          "Supabase",
          "TMDb API",
        ]}
        description={[
          "Built a full-stack web application for discovering, reviewing, and tracking movies, inspired by Letterboxd.",
          "Developed a secure auth system using Supabase Auth and managed user data with Supabase (PostgreSQL).",
          "Integrated the TMDB API to fetch real-time movie metadata, ratings, and cast details.",
          "Designed a RESTful backend using Hono, enabling scalable and efficient API endpoints.",
        ]}
      />

      {/* Chess.com Player Stats Project */}
      <ProjectCard
        project_title="Chess.com Player Stats"
        github="https://github.com/Vignesh-Venkatesh/ChessPlayerStatsUpdated"
        website="https://vignesh-venkatesh.github.io/ChessPlayerStatsUpdated/"
        skills={["HTML", "CSS", "JavaScript"]}
        description={[
          "Developed an interactive Chess.com-Player Stats application.",
          "Integrated the Chess.com API using JavaScript to fetch player stats across three categories i.e., Bullet, Blitz and Rapid.",
        ]}
      />
    </div>
  );
}
