/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {

  const [formData, setFormData] = useState({
    projectName: '',
    projectDescription: '',
    client: '',
    contractor: '',
    csvFile: null,
    max_X: '',
    min_X: '',
    max_Y: '',
    min_Y: '',
    max_Z: '',
    min_Z: '',
  });

  const [chartData, setChartData] = useState([]);


  const handleChange = (e) => {

    const type = e.target.type;

    const name = e.target.name;

    const value = type === "file" ? e.target.files[0] : e.target.value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };




  const value = {
    formData,
    setFormData,
    chartData,
    setChartData,
    handleChange,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContext;
