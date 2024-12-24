import AsyncStorage from "@react-native-async-storage/async-storage";
import { PersonalInfo } from "./types";
import { useEffect, useState } from "react";

export const storeData = async (key: string, value: PersonalInfo) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error("Error storing data: ", error);
  }
};

export const getData = async (key: string): Promise<PersonalInfo | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error("Error retrieving data: ", error);
    return null;
  }
};

export const useStoredData = (key: string) => {
  const [data, setData] = useState<PersonalInfo | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const storeData = await getData(key);
      setData(storeData);
    };
    fetchData();
  }, [key]);

  return {
    data,
  };
};
