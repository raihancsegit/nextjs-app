import React from "react";

const HeroSection = () => {
  return (
    <div
      className="bg-hero bg-cover min-h-[220px] bg-center flex justify-center items-center flex-col"
      style={{ backgroundImage: "url('hero.png')" }}
    >
      <h2 className="mona-fonts text-5xl md:pt-[120px] sm:pt-[30px] pt-[70px] text-center text-[#0F172A] leading-normal lg:w-[550px]">
        Shaping the Future of Digital Storefront
      </h2>
      <h4 className="text-center text-[#475569] pt-[15px] md:pb-[100px] sm:pb-[30px] pb-[50px] font-light text-[12px]">
        Lorem ipsum dolor sit amet consectetur. Sapien etiam.
      </h4>
    </div>
  );
};

export default HeroSection;
