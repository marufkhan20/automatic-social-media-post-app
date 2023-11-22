import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnimatedMenuIcon from "../shared/AnimatedMenuIcon";
import Wrapper from "../shared/Wrapper";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offsetY = window.scrollY;
      if (offsetY > 90) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [nav, setNav] = useState(false);
  const handleNavbar = () => {
    setNav(!nav);
  };
  const closeMenu = () => {
    setNav(false);
  };
  return (
    <div
      className={` 
          bg-[#FCFCFC] fixed md:sticky z-[999] w-full top-0 transition-all duration-300 ease-in ${
            scrolled ? " backdrop-blur-md" : "bg-opacity-100"
          }`}
    >
      <div className=" ">
        <Wrapper>
          <div className="flex py-2 justify-between items-center bg-transparent">
            {/* left  */}
            <div className=" flex items-center gap-28 z-20">
              {/* logo  */}
              <a href={"/"}>
                <img
                  src="/images/social-logo.svg"
                  alt="social"
                  className="w-[70px]"
                />
              </a>

              <div>
                <ul className="cont hidden md:flex  md:space-x-6 text-base text-black  font-[500] text-[18px]">
                  <a href="/#home">
                    <button className={` li text-[18px] z-20`}>
                      <p className="a">Home</p>
                    </button>
                  </a>

                  <a href="/#pricing">
                    <button className="li text-[18px]  z-20">
                      <p className="a">Pricing</p>
                    </button>
                  </a>
                  <a href="/#all-products">
                    <button className="li text-[18px]  z-20">
                      <p className="a">All Products</p>
                    </button>
                  </a>
                  <a href="/contact-us">
                    <button className="li text-[18px]  z-20">
                      <p className="a">Contact</p>
                    </button>
                  </a>
                  <Link to={"/dashboard"}>
                    <button className="li text-[18px]  z-20">
                      <p className="a">Dashboard</p>
                    </button>
                  </Link>
                </ul>
              </div>
            </div>
            {/* right */}
            <div className="hidden md:flex items-center gap-5">
              {/* sign in */}
              <div className="flex  items-center space-x-2 pl-2  ">
                <Link to="/sign-in">
                  <button
                    style={{
                      background:
                        "linear-gradient(180deg, #FF74C8 0%, #E744A6 100%)",
                    }}
                    className="font-[500] text-[18px] w-[119px] h-[50px] text-white rounded-md hover:scale-105 transition-all duration-300 ease-linear"
                  >
                    Sign In
                  </button>
                </Link>
              </div>
              {/* start a project  */}
              <Link to="/sign-up">
                <button className="font-[500] text-[18px] z-20 w-[257px] h-[50px] rounded-md text-black hover:scale-105 transition-all duration-300 ease-linear border-[#1456BC] border-2">
                  Create a Free Account
                </button>
              </Link>
            </div>

            {/* mobile menu  */}
            <div
              onClick={handleNavbar}
              className="sm:block md:hidden flex items-center z-50 pr-3"
            >
              <AnimatedMenuIcon isOpen={nav} onClick={handleNavbar} />
            </div>
            <div
              className={
                nav
                  ? "md:hidden z-40 fixed top-0 right-0 shadow-md overflow-hidden bottom-0 flex justify-start items-start py-20 px-5 w-80 h-screen  bg-white text-black  text-right ease-linear duration-200 transform translate-x-0"
                  : "md:hidden z-40 fixed top-0 right-0 shadow-md overflow-hidden bottom-0 flex justify-start items-start py-20 px-5 w-80 h-screen d bg-white text-black text-right ease-linear duration-200  transform translate-x-full"
              }
            >
              <div className="absolute mt-[-3.5rem]">
                <h3 className="font-black text-lg  text-primary-green-text">
                  Menu
                </h3>
              </div>
              <div className="flex flex-col justify-between ">
                <div className="flex flex-col basis-[50%]">
                  <ul className="flex flex-col justify-start items-start  text-2xl font-bold">
                    <a href="/#home">
                      <button
                        onClick={closeMenu}
                        className={` li text-[18px] z-20`}
                      >
                        <p className="a">Home</p>
                      </button>
                    </a>
                    <a href="/#pricing">
                      <button
                        onClick={closeMenu}
                        className="li text-[18px]  z-20"
                      >
                        <p className="a">Pricing</p>
                      </button>
                    </a>
                    <a href="/#all-products">
                      <button
                        onClick={closeMenu}
                        className="li text-[18px]  z-20"
                      >
                        <p className="a">All Products</p>
                      </button>
                    </a>
                    <a href="/contact-us">
                      <button
                        onClick={closeMenu}
                        className="li text-[18px]  z-20"
                      >
                        <p className="a">Contact</p>
                      </button>
                    </a>
                    <Link to={"/dashboard"}>
                      <button
                        onClick={closeMenu}
                        className="li text-[18px]  z-20"
                      >
                        <p className="a">Dashboard</p>
                      </button>
                    </Link>
                  </ul>
                  <div className="flex flex-col justify-start items-start gap-y-6 mt-5">
                    <Link to={"/sign-in"}>
                      <div className="flex  items-center  ">
                        <button
                          style={{
                            background:
                              "linear-gradient(180deg, #FF74C8 0%, #E744A6 100%)",
                          }}
                          className="font-[500] text-[18px] w-[119px] h-[50px] text-white rounded-md"
                          onClick={closeMenu}
                        >
                          Sign In
                        </button>
                      </div>
                    </Link>

                    <Link to="/sign-up">
                      <button
                        onClick={closeMenu}
                        className="font-[500] text-[18px] z-20  w-[257px] rounded-md h-[50px] text-black    border-[#1456BC] border-2"
                      >
                        Create a Free Account
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Navbar;
