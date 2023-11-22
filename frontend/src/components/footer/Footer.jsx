import React from 'react'
import Wrapper from '../shared/Wrapper'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='bg-[#012B6D] w-full  flex items-center justify-center py-20  md:mt-0'>
            <Wrapper>
                <div className='flex flex-col md:flex-row gap-10 items-start justify-center'>
                    <div className='flex flex-col gap-10'>
                        <img src="/images/footerimg.png" alt="" className='w-[200px] ml-[-3rem]' />
                        <p className='text-[20px] font-[500] max-w-[385px] text-white'>SocialReachPro has a strong sense of community built into it. You can share graphics and templates with your team members to help get off the ground running, or to inspire each other with new ideas.</p>
                    </div>
                    <div className='text-white text-[20px] font-[500]'>
                        <p>About Us</p>
                        <ul className='pl-5 flex flex-col '>
                            <Link to='/dashboard/getting-started'>
                                <li className='list-disc mt-5'>
                                    Getting Started
                                </li>

                            </Link>
                            <li className='pt-5'>
                                Facebook
                            </li>
                            <ul className='pl-5'>
                                <Link to='/dashboard'>
                                    <li>Facebook Overview</li>
                                </Link>
                                <Link to={'/dashboard/group'}>
                                    <li> Connecting Groups to Facebook</li>
                                </Link>
                                <Link to={'/dashboard/facebook'}>
                                    <li>
                                        Classic Facebook Business Page Connection</li>
                                </Link>
                                <Link to={'/dashboard/facebooktemplate/facebook-template'}>
                                    <li> Templates</li>
                                </Link>
                                <Link to={'/dashboard/facebooktemplate/post'}>
                                    <li>  Sharing a Facebook Album</li>
                                </Link>
                                <Link to={'/dashboard/facebooktemplate/post'}>
                                    <li>    Text Replacements</li>
                                </Link>
                            </ul>
                            <li className='pt-5'>
                                Instagram
                            </li>
                            <ul className='pl-5'>
                                <Link to={'/dashboard/instagramtemplate/instagram-template'}>
                                    <li>   Setting up Instagram</li>
                                </Link>
                                <Link to={'/dashboard/instagramtemplate/instagram-template'}>
                                    <li>    Converting your Instagram to a Business Account</li>
                                </Link>
                                <Link to={'/dashboard/instagramtemplate/instagram-template'}>
                                    <li>
                                        How often Should I post on Instagram</li>

                                </Link>

                            </ul>
                            <li className='pt-5'>
                                Templates

                            </li>
                            <ul className='pl-5'>
                                <Link to={'/dashboard/instagramtemplate/instagram-template'}>
                                    <li>Using Templates</li>
                                </Link>
                                <Link to={'/dashboard/instagramtemplate/instagram-template'}>
                                    <li> Template Sharing Codes</li>
                                </Link>

                            </ul>
                            <li className='pt-5'>
                                What’s New
                            </li>
                            <ul className=''>
                                <Link to={'/dashboard/faq'}>
                                    <li> FAQ </li>
                                </Link>

                            </ul>
                            <Link to={'/contact-us'}>
                                <li className='list-disc mt-5'>
                                    Contact Us
                                </li>
                            </Link>
                        </ul>

                    </div>
                    <div className='text-white text-[20px] font-[500]'>
                        <ul>
                            <li className='pt-5'>
                                Legal Information
                            </li>
                            <Link to={'/dashboard/privacy-policy/privacy'}>
                                <li className='list-disc mt-5 ml-5'>
                                    Privacy Policy
                                </li>
                            </Link>
                            <Link to={'/dashboard/terms-service/terms'}>
                                <li className=' mt-5'>
                                    Terms of Service
                                </li>
                            </Link>

                        </ul>
                    </div>
                </div>

            </Wrapper>
        </div>
    )
}

export default Footer