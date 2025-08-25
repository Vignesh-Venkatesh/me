interface ExperienceCardProps {
  position: string;
  location: string;
  time: string;
  company: string;
  description: string[];
}

export default function ExperienceCard({
  position,
  location,
  time,
  company,
  description,
}: ExperienceCardProps) {
  return (
    <div className="border-l-2 border-accent hover:border-success p-4 group transition duration-300 my-6">
      <div className="flex justify-between items-center gap-2">
        <div>
          <div>
            <h1 className="text-lg font-bold text-success/80 transition duration-300">
              {position}
            </h1>
          </div>
          <h1 className="text-sm text-accent">at, {company}</h1>
          <div className="block sm:hidden text-sm text-accent">
            <h1>{time}</h1>
            <h1>{location}</h1>
          </div>
        </div>

        <div className="hidden sm:block text-sm text-accent">
          <h1>{time}</h1>
          <h1>{location}</h1>
        </div>
      </div>

      <div className="mt-2 opacity-85 transition duration-300">
        {description.map((point, index) => (
          <p key={index}>- {point}</p>
        ))}
      </div>
    </div>
  );
}
