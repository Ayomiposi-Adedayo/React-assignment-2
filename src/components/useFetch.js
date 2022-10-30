import { useState, useEffect } from "react";
import paginate from "../utils";

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://randomuser.me/api/?results=25");
    const data = await response.json();
    setData(paginate(data.results));
    console.log(data);
    setAllData(data);
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return { loading, data, allData };
};
