const modes = [
  {
    name: "Calculator",
    types: [
      { name: "default", display: "Standard" },
      { name: "sci", display: "Scientific" },
      { name: "date", display: "Date calculation" },
    ],
  },
  {
    name: "Converter",
    types: [
      { name: "curr", display: "Currency" },
      { name: "vol", display: "Volume" },
      { name: "len", display: "Length" },
      { name: "mass", display: "Weight and mass" },
      { name: "temp", display: "Temperature" },
      { name: "energy", display: "Energy" },
      { name: "area", display: "Area" },
      { name: "speed", display: "Speed" },
      { name: "time", display: "Time" },
      { name: "power", display: "Power" },
      { name: "data", display: "Data" },
      { name: "pressure", display: "Pressure" },
      { name: "angle", display: "Angle" },
    ],
  },
];

const SideMenu = () => {
  return (
    <div className="side_menu">
      <button />
      {modes.map((mode) => (
        <div key={`mode-${mode.name.toLowerCase()}`}>
          <h1>{mode.name}</h1>
          <ul>
            {mode.types.map((type) => (
              <li key={`mode-type-${type.name}`}>{type.display}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SideMenu;
