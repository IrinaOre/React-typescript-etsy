import { useState } from "react";

const Converter = () => {
  const [output, setOutput] = useState("rgb(211, 211, 211)");

  function handler(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value.length === 7) {
      setOutput(convertHexToRgb(event.target.value));
    }
  }

  function convertHexToRgb(hexValue: string) {
    const hash = hexValue.startsWith("#");
    const value = hexValue.slice(1).match(/[0-9a-fA-F]{6}/);

    if (hash && value) {
      const [r, g, b] = hexValue
        .slice(1)
        .match(/[0-9a-fA-F]{2}/g)!
        .map((item) => parseInt(item, 16));

      document.body.style.backgroundColor = hexValue;
      return `rgb(${r}, ${g}, ${b})`;
    }

    document.body.style.backgroundColor = "#a70505";
    return "Ошибка!";
  }

  return (
    <div className="converter">
      <input
        className="converter__input"
        type="text"
        maxLength={7}
        onChange={handler}
        placeholder="#d3d3d3"
      />
      <div className="converter__output">{output}</div>
    </div>
  );
};

export default Converter;
