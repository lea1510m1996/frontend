import React, { useState, useEffect } from "react";

// Simulirani API poziv za dohvaćanje datuma objave
const getPostDate = async (postId) => {
  const fakeData = {
    1: "2025-02-07 12:30",
    2: "2025-02-06 15:45",
    3: "2025-02-05 10:15",
  };
  return new Promise((resolve) =>
    setTimeout(() => resolve(fakeData[postId] || "Nepoznat datum"), 500)
  );
};

const PostDate = ({ postId }) => {
  const [date, setDate] = useState(""); // useState za čuvanje datuma

  useEffect(() => {
    getPostDate(postId).then(setDate);
  }, [postId]); // useEffect se pokreće kad se postId promeni

  return <span className="text-muted">{date}</span>;
};

export default PostDate;