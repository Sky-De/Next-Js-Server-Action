import Image from "next/image";
import Logo from "@/public/logo.png";

function Hero() {
  return (
    <header className="bg-hero bg-center bg-cover bg-no-repeat bg-opacity-5 sm:p-16 py-16 px-8 flex justify-center lg:items-center flex-col sm:flex-row  w-full h-screen sm:gap-16 gap-0">
      <div className="flex-1 flex flex-col gap-10">
        <Image
          src={Logo}
          loading="eager"
          alt="logo"
          width={121}
          height={109}
          className="object-contain"
        />
        <h1 className=" text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white lg:max-w-lg font-bold leading-[120%]">
          Unveiling Endless{" "}
          <span className="block lg:inline red-gradient">Anime Realms</span>{" "}
          anime Magic
        </h1>
      </div>
      <div className="lg:flex-1 relative w-full h-[70vh] justify-center">
        <Image
          src="/anime.png"
          alt="anime"
          loading="eager"
          fill
          className="object-contain"
        />
      </div>
    </header>
  );
}

export default Hero;
