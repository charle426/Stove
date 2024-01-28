import bg from "../assets/IMG-20230929-WA0010.jpg";
import axios from "axios";
import { collection, getDocs } from "firebase/firestore";
import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebaseConfig";
// import { split } from "postcss/lib/list"
export default function Blog({ setActiveNav }) {
  setActiveNav("blog");
  const style = {
    backgroundImage: `linear-gradient(to right, #1111116d 30%, transparent), url(${bg})`,
  };
  const [server, setServer] = React.useState([]);

  const blogsCollection = collection(db, "blogs");

  React.useEffect(() => {
    const fetchData = async () => {
       const data = await getDocs(blogsCollection);
       return setServer(
         data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
       );
    };
    fetchData();
  }, []);
  const data = server.map((items, index) => {
    const readTime = items.content;
    let min = 1;
    if (readTime.length > 200) {
      min = Math.ceil(readTime.trim().split(/\s+/).length / 200);
    }

    return (
      <Link key={index} to={`/blog/${items.id}`}>
        <div className="cursor-pointer group max-w-[450px] duration-200 flex-col flex items-center justify-between">
          <div className="">
            <img
              src={items.file}
              alt="blog-image"
              width="100%"
              className="rounded-[20px] mb-2 duration-200 max-w-[400px]"
            />
          </div>
          <div className="relative p-3 w-full">
            <h1
              id={items.title}
              className="font-semibold text-[1.5rem] duration-200 group-hover:text-[#a8e92f] sm:text-[1.5rem]"
            >
              {items.title}
            </h1>
            <p className="line-clamp-2 text-[#1b1b1b96] group-hover:text-black">
              {items.content}
            </p>
            <div className="mb-5">
              <p className="text-[0.8rem] text-[#1b1b1b96] mt-3 group-hover:text-black">
                {min} min read
              </p>
            </div>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <>
      <section className="md:px-10 md:pb-10 px-2 mb-6">
        <div
          style={style}
          className="bg-cover relative py-10 md:px-10 px-4 bg-left-top min-h-[55vh] duration-500 w-full md:h-[85vh] h-[55vh] rounded-[50px] flex justify-start items-end"
        >
          <h1 className="md:text-[4rem] text-white text-[2rem] font-semibold">
            Blogs
          </h1>
        </div>
      </section>
      <Suspense
        fallback={
          <div className="relative w-[300px] h-[300px] rounded-full p-3">
            <div className="h-full w-full loader border-[#a8e92f] border-t-[6px] border-solid animate-spin rounded-full"></div>
          </div>
        }
      >
        <div className="auto-grid  py-10 px-2 md:px-10">
          {server.length > 0 ? data : <p>there are no blogs at this time</p>}{" "}
        </div>
      </Suspense>
    </>
  );
}
