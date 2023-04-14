import Image from "next/image";
import React from "react";

const Products = () => {
  return (
    <div className="my-[50px] mx-[50px] py-[30px] px-[30px] bg-[#F7F7F7] rounded-[5px]">
      <p className="text-black text-[22px]">Todos los productos</p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-20 mt-[40px] mb-[20px]">
        <div className="flex flex-col  items-center text-center h-full">
          <Image
            src="/assets/img/product.png"
            alt="product"
            width={113}
            height={325}
          ></Image>
          <p className="text-black text-[22px]  my-[30px]">
            For medium & low tension towers
          </p>
          <button className="px-[30px] py-[10px] rounded-[30px] bg-black text-[12px] text-white">
            Ver producto
          </button>
        </div>
        <div className="flex flex-col  items-center text-center h-full">
          <Image
            src="/assets/img/product.png"
            alt="product"
            width={113}
            height={325}
          ></Image>
          <p className="text-black text-[22px]  my-[30px]">
            For <br/> autoconsumption
          </p>
          <button className="px-[30px] py-[10px] rounded-[30px] bg-black text-[12px] text-white">
            Ver producto
          </button>
        </div>
        <div className="flex flex-col  items-center text-center h-full">
          <Image
            src="/assets/img/product.png"
            alt="product"
            width={113}
            height={325}
          ></Image>
          <p className="text-black text-[22px]  my-[30px]">
            For large-scale projects
          </p>
          <button className="px-[30px] py-[10px] rounded-[30px] bg-black text-[12px] text-white">
            Ver producto
          </button>
        </div>
        <div className="flex flex-col  items-center text-center h-full">
          <Image
            src="/assets/img/product.png"
            alt="product"
            width={113}
            height={325}
          ></Image>
          <p className="text-black text-[22px]  my-[30px]">
            Bespoke Inspiring greatness
          </p>
          <button className="px-[30px] py-[10px] rounded-[30px] bg-black text-[12px] text-white">
            Ver producto
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
