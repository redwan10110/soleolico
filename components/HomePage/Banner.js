import Image from "next/image";

const Banner = () => {
  return (
    <div className="px-[50px] py-[50px]">
      <div className="relative">
        <Image
          src="/assets/img/BannerBG.png"
          alt="secondBanner"
          width="1180"
          height="405"
          className="rounded-[5px] "
        />
        <div className="text-info absolute left-[50px] bottom-[50px]">
          <p className="text-[20px] text-white mb-[20px] w-[60%]">Esto lo cambia <span className="text-[#4CE07D]">todo</span> <br/> Sole.Tech neutraliza los gases de efecto invernadero de la atmósfera, limpiando el aire que respiramos.</p>
          <button className="px-[40px] py-[10px] rounded-[30px] bg-black text-[12px] text-white">Saber más</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
