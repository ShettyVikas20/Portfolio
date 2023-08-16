import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedinIn, FaFacebook, FaLinkedin, FaInstagram} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill, BsMailbox} from 'react-icons/bs'
import Logo from '../assets/logoNew.png';
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav,setNav] = useState(false)
  const handleClick = () => setNav(!nav)


  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0d1b29] text-green-100'>
        <div>
          <img src={Logo} alt="Logo Image" style={{width:'80px'}} />
        </div>

       {/* Menu */}
        <div className='hidden md:flex'>
          <ul className='hidden md:flex'>
            <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="about" smooth={true} duration={500}>About</Link></li>
            <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
            <li><Link to="work" smooth={true} duration={500}>Work</Link></li>
            <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
          </ul>
        </div>
         {/*Hamburger menu  */}
        <div onClick={handleClick} className='md:hidden z-10'>
          { !nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
          <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a092e] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="work" smooth={true} duration={500}>Work</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link></li>
          </ul>

        {/* Social Icons */}
        <div className='hidden lg:flex fixed flex-col top-[25%] left-0'>
          <ul>
          <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-blue-700'>
              <a className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/iamshettyvikas/'>
              LinkedIn<FaLinkedin style={{marginLeft:'5px'}} size={22}/>
              </a>
            </li>
            <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-gray-800'>
              <a className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/ShettyVikas20'>
              GitHub<FaGithub style={{marginLeft:'5px'}} size={20}/>
              </a>
            </li>
            <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-purple-700'>
              <a className='flex justify-between items-center w-full text-gray-300'
              href='https://instagram.com/mr._vikas_shetty?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D'>
              Instagram<FaInstagram style={{marginLeft:'5px'}} size={20}/>
              </a>
            </li>
            <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-red-700'>
              <a className='flex justify-between items-center w-full text-gray-300'
              href='mailto:shettyvikas03@gmail.com'>
              Gmail<HiOutlineMail style={{marginLeft:'5px'}} size={20}/>
              </a>
            </li>
            <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-green-700'>
              <a className='flex justify-between items-center w-full text-gray-300'
              href='https://drive.google.com/file/d/1Wp_wxP97GzyBhKE1jWWydoyLIwNncTWK/view?usp=drive_link'>
              Resume<BsFillPersonLinesFill style={{marginLeft:'2px'}} size={20}/>
              </a>
            </li>
          </ul>

        </div>


    </div>
  )
}

export default Navbar