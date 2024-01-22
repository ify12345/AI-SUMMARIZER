import { useState,useEffect } from "react"
import {copy, linkIcon,loader, tick } from "../assets"

const Demo = () => {

   const[article, setArticle] = useState({
    url: "",
    summary: ""
   })

 const handleSubmit = async (e) => {
      alert("submitted");
 }
  return (
   <section className="mt-16 w-full max-w-xl">

    {/* search */}


    <div className="flex flex-col w-full gap-2">


      <form action="" className="relative flex justify-center items-center" onSubmit={()=>{handleSubmit}}>
          <img src={linkIcon} alt="" className="absolute left-0 my-2 ml-3 w-5 " />
          <input value={article.url} type="url" name="" id="" placeholder="Enter a URL"
           onChange={(e)=>setArticle({
            ...article, url:e.target.value
          })} 
            required
            className="url_input peer"
          />
          <button type="submit" className="submit_btn ">
           &#x2936;
          </button>
      </form>



      {/* bROWSE URL HISTORY */}

    </div>
    {/* search results */}
   </section>
  )
}

export default Demo
