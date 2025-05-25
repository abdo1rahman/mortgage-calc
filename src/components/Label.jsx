import { useState } from "react";
export default function Label({ title, unit, pos }) {
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
  };
  return (
    <div>
      <label htmlFor={title} className="flex mx-auto p-0 bg-white">
        {pos === "left" && (
          <div>
            <p>{unit}</p>
          </div>
        )}
        <input type="text" name={title} value={value} onChange={handleInput} />
        {pos === "left" || (
          <div>
            <p>{unit}</p>
          </div>
        )}
      </label>
    </div>
  );
}
