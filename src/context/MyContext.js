import { createContext } from "react";
import { useState, useEffect } from "react";
import GET from "../services/GET";

export const MyContext = createContext();

export function MyContextComponent({ children }) {
  const [words, setWords] = useState([false]);
  const value = { words, setWords };

  useEffect(() => {
    getWordApi();
  }, []);

  async function getWordApi() {
    const wordApi = await GET.getWord();
    setWords(wordApi);
  }

  if (!words) return <h1>Loading...</h1>;

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}
