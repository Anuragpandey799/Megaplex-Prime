import { createContext, useContext, useEffect, useState } from "react";

const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/content")
      .then((res) => res.json())
      .then((data) => {
        setContent(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching content:", err);
        setLoading(false);
      });
  }, []);

  return (
    <ContentContext.Provider value={{ content, loading }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);
