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

      {/* ReelSleuth Project */}
      <ProjectCard
        project_title="ReelSleuth"
        github="https://github.com/Vignesh-Venkatesh/ReelSleuth"
        website="https://reelsleuth.netlify.app/"
        skills={["HTML", "CSS", "JavaScript", "Firebase", "TMDb API"]}
        description={[
          "Developed a website for movie enthusiasts to search, track, and manage movie wish lists and favorites.",
          "Integrated TMDB API using JavaScript to fetch movie details and cast information.",
          "Implemented user authentication and data storage features using Firebase, ensuring secure login and personalized user experiences.",
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
