import TechIcon from "./TechIcon/TechIcon";

const Tech = ({ tech }) => {
  if (!tech[0]) {
    tech = [
      { title: { rendered: ".NET" }, acf: { tech_icon: "/dotnet.png" } },
      { title: { rendered: "Java" }, acf: { tech_icon: "/java.png" } },
      { title: { rendered: "Node" }, acf: { tech_icon: "/node.png" } },
      { title: { rendered: "Php" }, acf: { tech_icon: "/php.png" } },
      { title: { rendered: "Python" }, acf: { tech_icon: "/python.png" } },
      { title: { rendered: "React" }, acf: { tech_icon: "/react.png" } },
      { title: { rendered: "Swift" }, acf: { tech_icon: "/swift.png" } },
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
