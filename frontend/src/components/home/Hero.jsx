import { RevealWrapper } from 'next-reveal'
import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div  className='bg-image flex flex-col md:flex-row h-[80vh] md:h-[120vh]   w-full'>
            <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true} >
                <div className='w-full md:w-1/2 flex flex-col gap-4 pt-[12rem] px-10 md:px-0 text-center md:text-left h-full md:pl-[10rem] pl-[10px] pr-[10px] md:pr-0'>
                    <h1 className='text-[32px] md:text-[48px] font-[700] text-[#012B6D]'>
                        LET THE FUN BEGIN!
                    </h1>
                    <p className='text-[20px] font-[300]'>
                        Get ahead of the game.Automate your Facebook parties by scheduling your posts ahead of time.Then just sit back, relax, and enjoy the party!
                    </p>
                    <div className="flex  flex-col md:flex-row justify-center items-center md:justify-start md:items-center gap-5 mt-5">
                        {/* sign in */}
                        <div className="flex items-center">
                            <Link to={'/sign-up'}>
                                <button style={{ background: "linear-gradient(180deg, #FF74C8 0%, #E744A6 100%)" }}
                                    className="font-[500] text-[18px] w-[119px] rounded-md h-[50px] text-white hover:scale-105 transition-all duration-300 ease-linear "
                                >
                                    Sign In
                                </button>
                            </Link>
                        </div>
                        {/* start a project  */}
                        <Link to={'/sign-up'}>
                            <button
                                className="font-[500] text-[18px] z-20 rounded-md w-[257px] h-[50px] hover:scale-105 transition-all duration-300 ease-linear text-black    border-[#1456BC] border-2"
                            >
                                Create a Free Account
                            </button>

                        </Link>
                    </div>
                </div>

            </RevealWrapper>

        </div>
    )
}

export default Hero