import TechIcon from "./TechIcon/TechIcon";

const Tech = ({ tech }) => {
  if (!tech[0]) {
    tech = [
      { title: "Swift", acf: { tech_icon: "/gitlink.png" } },
      { title: "Java", acf: { tech_icon: "/gitlink.png" } },
    ];
  }

  return (
    <div>
      <div className="row row-cols-2 row-cols-xl-3">
        {tech.map((t: any) => {
          let name = t["title"]["rendered"];
          let image = t["acf"]["tech_icon"];
          return (
            <div key={name} className="col">
              <TechIcon name={name} image={image} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tech;
