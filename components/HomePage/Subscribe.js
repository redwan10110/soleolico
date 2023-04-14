import Image from "next/image";

const Subscribe = () => {
  return (
    <div className="px-[50px] pb-[100px] pt-[50px]">
      <div className="relative">
        <Image
          src="/assets/img/BannerBG.png"
          alt="secondBanner"
          width="1180"
          height="405"
          className="rounded-[5px] "
        />
        <div className="text-info absolute left-[50px] top-[80px]">
          <p className="text-[20px] text-white mb-[20px] w-[60%]">
            No te pierdas<span className="text-[#4CE07D]"> nada</span> <br />{" "}
            Suscríbete a nuestra newsletter y estate al día de las novedades de
            Soleolico.
          </p>
          <div className="relative w-1/2">
            <input
              type="email"
              className="border-0 outline-none pl-[20px]
          py-[10px] bg-[#929190] bg-opacity-[0.4] rounded-[30px] text-white w-full"
          placeholder="Tu correo"
            />
            <button className="px-[30px] py-[12px] rounded-[30px] bg-[#929190] bg-opacity-[0.4] text-[12px] text-white absolute top-0 right-0">
            Suscribirse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
