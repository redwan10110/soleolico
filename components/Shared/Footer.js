import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#F7F7F7] px-[50px] pt-[50px] pb-[30px]">
      <div className="flex justify-between items-center mb-[30px]">
        <div className="w-[40%] flex justify-start">
          <Link href="/contact" className="text-black mr-[32px] text-[14px]">
            Products
          </Link>
          <Link href="/contact" className="text-black mr-[32px] text-[14px]">
            Projects
          </Link>
          <Link href="/contact" className="text-black mr-[32px] text-[14px]">
            Certification
          </Link>
          <Link href="/contact" className="text-black mr-[32px] text-[14px]">
            Press
          </Link>
          <Link
            href="/contact"
            className="text-[#4CE07D] mr-[32px] text-[14px]"
          >
            Solo.Tech
          </Link>
          <Link href="/contact" className="text-black mr-[32px] text-[14px]">
            Contact
          </Link>
        </div>

        <div className="w-[40%] flex justify-end">
          <Link href="/contact" className=" ml-[20px] text-[14px]">
            <Image
              src="/assets/img/insta.png"
              alt="insta"
              width={12}
              height={12}
            ></Image>
          </Link>
          <Link href="/contact" className=" ml-[20px] text-[14px]">
            <Image
              src="/assets/img/twitter.png"
              alt="insta"
              width={12}
              height={12}
            ></Image>
          </Link>
          <Link href="/contact" className="ml-[20px] text-[14px]">
            <Image
              src="/assets/img/linkedin.png"
              alt="insta"
              width={12}
              height={12}
            ></Image>
          </Link>
          <Link href="/contact" className=" ml-[20px] text-[14px]">
            <Image
              src="/assets/img/medium.png"
              alt="insta"
              width={12}
              height={12}
            ></Image>
          </Link>
        </div>
      </div>
      <div className="mb-[40px]">
        <div className="w-[40%] flex justify-start">
          <Link href="/contact" className="text-gray-500 mr-[32px] text-[14px]">
            Legal Information
          </Link>
          <Link href="/contact" className="text-gray-500 mr-[32px] text-[14px]">
            Cookies Policy
          </Link>
          <Link href="/contact" className="text-gray-500 mr-[32px] text-[14px]">
            Privacy Policy
          </Link>
        </div>
      </div>
      <div className="flex justify-between items-end mb-[30px]">
        <div className="w-[40%] flex justify-start">
          <p  className="text-gray-500 mr-[32px] text-[14px]">
          © Soleolico Green Power SL
          </p>
        </div>

        <div className="w-[40%] flex justify-end">
          <Image src="/assets/img/footerLogo.png" alt="footer-log" width={109} height={50}></Image>
        </div>
      </div>
    </div>
  );
};

export default Footer;
