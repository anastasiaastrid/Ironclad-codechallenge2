"use client";
import { useEffect, useState } from "react";

interface iDog {
  message: string;
  status: string;
}

function Blog({ params }: { params: { slug: string } }) {
  const [blog, setBlog] = useState<iDog>({ message: "", status: "" });
  const fetchBlog = async () => {
    try {
    } catch (err) {}
    const res = await fetch("http://localhost:3000/api/blog}", { method: "GET" });
    const parse = await res.json();
    console.log(parse);
    setBlog(parse);
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  // useEffect(() => {
  //   throw new Error("Something went wrong");
  // }, []);

  return (
    <div>
      <h1>{params.slug}</h1>
      <h2>{blog?.message}</h2>
      <p>{blog?.status}</p>
    </div>
  );
}
export default Blog;
