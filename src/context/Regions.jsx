import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getApi } from "../helpers/getApi";
import regionsContext from "./regionsContext";

export function RegionsContextProvider({ children }) {
  const [countriesList, setCountriesList] = useState([]);
  const [citiesList, setCitiesList] = useState([]);

  useEffect(() => {
    const URL = "https://amazon-api.sellead.com/country";
    getApi(URL).then((response) => {
      setCountriesList(response);
    });
  }, []);

  useEffect(() => {
    const URL = "https://amazon-api.sellead.com/city";
    getApi(URL).then((response) => {
      setCitiesList(response);
    });
  }, []);

  const context = {
    countriesList,
    citiesList
  };

  return (
    <regionsContext.Provider value={context}>
      {children}
    </regionsContext.Provider>
  );
}
