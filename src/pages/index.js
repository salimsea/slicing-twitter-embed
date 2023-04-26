import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <main>
      <section className="bg-[#ECF8FF] h-[100vh] flex justify-center items-center">
        <div className="bg-white px-[31px] py-[35px] max-w-[601px] rounded-[10px] shadow-custom">
          {/* SECTION HEADER */}
          <div className="flex items-center justify-between mb-[15px]">
            <div className="flex gap-[22px]">
              <div className="w-2/12">
                <Image
                  src={"/dummy-user.png"}
                  width={200}
                  height={200}
                  alt="dummy-user"
                />
              </div>
              <div className="w-10/12">
                <h1 className="font-bold text-[18px]">John Doe</h1>
                <h3 className="font-normal text-[16px] text-[#00000060]">
                  @realjohndoe
                </h3>
              </div>
            </div>
            <Image
              src={"/icon-twitter.svg"}
              width={30}
              height={30}
              alt="icon-twitter"
            />
          </div>
          {/* SECTION TEXT */}
          <p className="text-[16px] font-normal mb-[15px]">
            Why do they call it debugging when it feels more like wildly
            guessing and hoping for the best?{" "}
            <span className="text-[#1DA1F2] font-normal">
              #programming #coding #debugging
            </span>
          </p>
          {/* SECTION TIME */}
          <div className="flex items-center gap-[20px]">
            <div className="flex items-center gap-[10px]">
              <Image
                src={"/icon-heart.svg"}
                width={24}
                height={24}
                alt="icon-heart"
              />
              <h6 className="text-[16px] font-semibold text-[#00000060]">
                650
              </h6>
            </div>
            <h6 className="text-[16px] font-semibold text-[#00000060]">
              3:40 PM {"–"} Feb 24, 2022
            </h6>
          </div>
        </div>
      </section>
    </main>
  );
};

export default index;
