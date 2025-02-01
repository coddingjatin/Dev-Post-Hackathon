import React from "react";

const Gender = ({ onGenderChange, selectedGender }) => {
  return (
    <div>
      <div className="flex my-1">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text text-black">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-primary checkbox-xs"
            onChange={() => onGenderChange("male")}
            checked={selectedGender === "male"}
          />
        </label>
        <label className="label gap-2 cursor-pointer">
          <span className="label-text text-black ">Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-primary checkbox-xs"
            onChange={() => onGenderChange("female")}
            checked={selectedGender === "female"}
          />
        </label>
      </div>
    </div>
  );
};
export default Gender;
