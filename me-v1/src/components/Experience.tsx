import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <div className="py-10">
      <h1 className="font-semibold opacity-40 tracking-wider text-xl mb-2">
        /experience
      </h1>

      {/* Yokogawa Experience */}
      <ExperienceCard
        position="Distributed Control Systems - Intern"
        company="Yokogawa Electric"
        time="May 2024 - June 2024"
        location="Abu Dhabi, U.A.E"
        description={[
          "Executed inspections of DCS cabinets, ensuring adherence to functional design specifications.",
          "Developed alarm suppression systems, step function, and moving average block for industrial plant monitoring systems.",
          "Assisted in managing project engineering life cycles, contributing to the inception stage.",
        ]}
      />

      {/* CMPEN 270 */}
      <ExperienceCard
        position="Digital Design Course - Learning Assistant"
        company="The Pennsylvania State University"
        time="Aug 2023 - May 2025"
        location="State College, PA"
        description={[
          "Managed and moderated an online class forum, providing feedback on student posts and facilitating discussions.",
          "Assisted the professor in grading assignments, ensuring timely and accurate evaluation of 200+ submissions per week.",
          "Collaborated with the professor and other teaching assistants to develop course materials and content.",
        ]}
      />
    </div>
  );
}
