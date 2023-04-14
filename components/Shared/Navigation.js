import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  
  return (
    <div className="relative w-screen h-[540px]">
      <div className="h-[80px] px-[50px] pt-[20px] flex justify-between absolute top-0 left-0 w-full bg-transparent z-10">
        <div className="w-[40%] flex justify-start">
          <Link href="/contact" className="text-white mr-[32px] text-[14px]">
            Products
          </Link>
          <Link href="/contact" className="text-white mr-[32px] text-[14px]">
            Projects
          </Link>
          <Link href="/contact" className="text-white mr-[32px] text-[14px]">
            Certification
          </Link>
          <Link href="/contact" className="text-white mr-[32px] text-[14px]">
            Press
          </Link>
          <Link
            href="/contact"
            className="text-[#4CE07D] mr-[32px] text-[14px]"
          >
            Solo.Tech
          </Link>
        </div>
        <div className="">
          <Image src="/assets/img/navLogo.png" alt="nav-logo" width="70" height="15" />
        </div>
        <div className="w-[40%] flex justify-end">
          <Link href="/contact" className="text-white mr-[32px] text-[14px]">
            Contact
          </Link>
          <div>
            <button className="bg-[#616161] px-[10px] text-white rounded-[15px] mr-[15px]">
              ES
            </button>
            <button className="bg-[#616161] px-[10px]  text-white rounded-[15px] ">
              EN
            </button>
          </div>
        </div>
      </div>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/assets/longVideo.mp4"
        autoPlay
        muted
        loop
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
        <h2 className="text-[40px] text-white mb-[40px]
        leading-[48px]">La<span className="text-[#4CE07D]"> energía renovable </span> <br/> que fusiona viento y Soly
        <span className="text-[#4CE07D]"> <br/> limpia el aire que respiramos</span>
        </h2>
        <button className="px-[40px] py-[10px] rounded-[30px] bg-[#929190] bg-opacity-[0.4] text-[12px] text-white">Saber más</button>
        <button className="w-[38px] h-[38px] text-white rounded-[38px] bg-[#929190] bg-opacity-[0.4] ml-[30px]" >X</button>
      </div>
    </div>
  );
};

export default Navigation;
