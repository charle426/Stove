import { Suspense, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
export default function BlogComponent() {
  const [server, setServer] = useState([]);

  const blogsCollection = collection(db, "blogs");

  useEffect(() => {
    const fetchData = async () => {
          const data = await getDocs(blogsCollection);
          return setServer(
            data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
    };
    fetchData();
  }, []);
    const threeArr = server.slice(0, 3)
  const data = threeArr.map((items, index) => {
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
        <section className="flex flex-col gap-4 mt-5 py-10 px-2 md:px-10">
        <div>
          <h1 className="md:text-[4rem] text-[2.5rem] pt-10 font-semibold">News and Updates on </h1>
        </div>
        <Suspense
          fallback={
            <div className="relative w-[300px] h-[300px] rounded-full p-3">
              <div className="h-full w-full loader border-[#a8e92f] border-t-[6px] border-solid animate-spin rounded-full"></div>
            </div>
          }
        >
          <div className="auto-grid">
            {server.length > 0 ? data: <p>there are no blogs at this time</p>}
          </div>
        </Suspense>
        <div className="flex justify-end">
               {server.length && <Link to="/blog" className="text-blue-500 hover:text-black" >see all blogs</Link>}
        </div>
   
      </section>
    );
}