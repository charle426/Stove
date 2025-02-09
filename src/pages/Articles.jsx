import { doc, getDoc } from "firebase/firestore"
import {Suspense, useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import { db } from "../firebaseConfig"
export default function Articles() {
    const {id} = useParams()
  const [blog, setBlog] = useState([])
    useEffect(() => {
      const blog = doc(db, "blogs", id)
        const fetchData = async() => {
                   const data = await getDoc(blog);
                   const res = data.data()
                    return setBlog(res);

        }
        fetchData()
        }, [])
    return (
      <section className="md:px-10 px-3">
        <Suspense
          fallback={
            <div className="relative w-[300px] h-[300px] rounded-full p-3">
              <div className="h-full w-full loader border-[#a8e92f] border-t-[6px] border-solid animate-spin rounded-full"></div>
            </div>
          }
        >
          <div className="max-w-[900px] my-10 mx-auto">
            <div className="mb-2">
              <img
                src={blog.file}
                alt="blog-image"
                width="100%"
                className="rounded-[20px] mb-2 duration-200"
              />
            </div>
            <div className="mb-5">
              <h1 className="md:text-[4.5rem] text-[2.5rem] font-semibold">{blog.title}</h1>
            </div>
            <div>
              <p>{blog.content}</p>
            </div>
          </div>
        </Suspense>
      </section>
    );
}