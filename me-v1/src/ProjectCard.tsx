import { FaGithub, FaLink } from "react-icons/fa";

interface ProjectCardProps {
  project_title: string;
  github?: string;
  website?: string;
  skills: string[];
  description: string[];
}

export default function ProjectCard({
  project_title,
  github,
  website,
  skills,
  description,
}: ProjectCardProps) {
  return (
    <div className="border-l-2 border-accent hover:border-success p-4 group transition duration-300 my-6">
      <div className="">
        <div className="sm:flex justify-between w-full items-center">
          <div>
            <h1 className="text-lg font-bold text-success/80 transition duration-300">
              {project_title}
            </h1>
          </div>

          <div className="flex gap-2 my-2 sm:my-0">
            {github && (
              <a href={`${github}`} target="_blank">
                <button className="btn btn-neutral tooltip tooltip-top">
                  <h1 className="tooltip-content">GitHub</h1>
                  <FaGithub className="text-sm" />
                </button>
              </a>
            )}
            {website && (
              <a href={`${website}`} target="_blank">
                <button className="btn btn-neutral tooltip tooltip-top">
                  <h1 className="tooltip-content">Demo</h1>
                  <FaLink className="text-sm" />
                </button>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* description */}
      <div className="mt-2 opacity-85 transition duration-300">
        {description.map((point, index) => (
          <p key={index}>• {point}</p>
        ))}
      </div>

      {/* skills */}
      <div className="mt-2 flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <kbd key={index} className="kbd kbd-md">
            {skill}
          </kbd>
        ))}
      </div>
    </div>
  );
}
