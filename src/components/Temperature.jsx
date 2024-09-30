import { useEffect, useState } from "react";
import Box from "./Box";

export default function Temperature() {
  const [celcius, setCelcius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);
  const [kelvin, setKelvin] = useState(0);

  useEffect(() => {
    handleCelciusChange(0);
  }, []);

  const handleCelciusChange = (celcius) => {
    const c = parseFloat(celcius);
    setCelcius(c);
    setFahrenheit((c * 9) / 5 + 32);
    setKelvin(c + 273.15);
  };

  const handleFahrenheitChange = (fahrenheit) => {
    const f = parseFloat(fahrenheit);
    setFahrenheit(f);
    setCelcius(((f - 32) * 5) / 9);
    setKelvin(((f - 32) * 5) / 9 + 273.15);
  };
  const handleKelvinChange = (kelvin) => {
    const k = parseFloat(kelvin);
    setKelvin(k);
    setCelcius(k - 273.15);
    setFahrenheit(((k - 273.15) * 9) / 5 + 32);
  };
  return (
    <div>
      <div className="col-8 d-flex flex-column gap-3 justify-content-center align-items-center m-2 p-4 rounded border border-black">
        <Box name="Celsius" value={celcius} setValue={handleCelciusChange} />
        <Box
          name="Fahrenheit"
          value={fahrenheit}
          setValue={handleFahrenheitChange}
        />
        <Box name="Kelvin" value={kelvin} setValue={handleKelvinChange} />
      </div>
    </div>
  );
}
