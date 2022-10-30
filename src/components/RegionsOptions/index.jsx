import { useContext } from "react";
import regionsContext from "../../context/regionsContext";

export function RegionsOptions({
  labelName,
  title,
  handleInputChange,
  regionsList,
  placeholder,
}) {
  const { countriesList, citiesList, formValues } = useContext(regionsContext);
  let mustDisabled = false;

  if (labelName === "city" && citiesList.length && countriesList.length) {
    mustDisabled = !formValues.country;
    const currentCountry = countriesList.find(
      (country) => country.name_ptbr === formValues.country
    );
    regionsList = citiesList.filter(
      (city) => city.country_code === currentCountry?.code
    );
  }

  return (
    <div>
      <label htmlFor={labelName}>{title}</label>
      <select
        id={labelName}
        name={labelName}
        onChange={handleInputChange}
        value={formValues[labelName]}
        disabled={mustDisabled || !regionsList.length}
      >
        <option>{placeholder}</option>
        {regionsList.map((region) => {
          return (
            <option key={region.id || region?.code}>{region.name_ptbr}</option>
          );
        })}
      </select>
      {mustDisabled ||
        (!regionsList.length && labelName === "city")}
    </div>
  );
}
