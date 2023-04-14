import Image from "next/image";
import React from "react";

const Blog = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="text-center">
          <p className="text-black text-[30px] mb-[30px]">
            Últimas <span className="text-[#4CE07D]">noticias</span>
          </p>
          <button className="px-[20px] py-[10px] rounded-[30px] bg-[#d9d9d9] text-[12px] text-black mb-[50px]">
            Leer todas
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="relative">
          <Image
            src="/assets/img/blog.jpg"
            width="372"
            height="405"
            alt="blog"
          ></Image>
          <div className="absolute bottom-[30px] left-[25px]">
            <h3 className="text-[22px] text-white mb-[20px]">Ikea x Soleolico A <br /> partnership with purpose</h3>
            <button className="px-[30px] py-[10px] rounded-[30px] bg-[#929190] bg-opacity-[0.4] text-[12px] text-white">Read article</button>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/assets/img/blog2.jpg"
            width="372"
            height="405"
            alt="blog"
          ></Image>
          <div className="absolute bottom-[30px] left-[25px]">
            <h3 className="text-[22px] text-white mb-[20px]">Ikea x Soleolico A <br /> partnership with purpose</h3>
            <button className="px-[30px] py-[10px] rounded-[30px] bg-[#929190] bg-opacity-[0.4] text-[12px] text-white">Read article</button>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/assets/img/blog3.jpg"
            width="372"
            height="405"
            alt="blog"
          ></Image>
          <div className="absolute bottom-[30px] left-[25px]">
            <h3 className="text-[22px] text-white mb-[20px]">Ikea x Soleolico A <br /> partnership with purpose</h3>
            <button className="px-[30px] py-[10px] rounded-[30px] bg-[#929190] bg-opacity-[0.4] text-[12px] text-white">Read article</button>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/assets/img/blog4.jpg"
            width="372"
            height="405"
            alt="blog"
          ></Image>
          <div className="absolute bottom-[30px] left-[25px]">
            <h3 className="text-[22px] text-white mb-[20px]">Ikea x Soleolico A <br /> partnership with purpose</h3>
            <button className="px-[30px] py-[10px] rounded-[30px] bg-[#929190] bg-opacity-[0.4] text-[12px] text-white">Read article</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
