import React from 'react'
import Image from 'next/image'
import Logo from '../../public/assets/Logo.svg'
import User from '../../public/assets/User.svg'
import Menu from '../../public/assets/Menu.svg'


const navLinks = [
  {name: "Feature"},
  {name: "Pricing"},
  {name: "Enterprise"},
  {name: "Careers"},
]


const Navbar = () => {
  return (
    <div className='flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto'>
      <div className='flex items-center justify-center'>
        <Image src={Logo} alt={Logo}/>
        <div className='hidden lg:flex pl-[74px] gap-x-[56px]'>
            {navLinks.map((item, index) => (
            <p className="text-[#364B5C] font-medium" key={index}>{item.name}</p>
          ))}
        </div>
      </div>

      <div className='flex items-center gap-5'>
        <p className="hidden lg:block font-medium text-[#36485C] pr-[56px]">Open an Account</p>
        <div className='flex items-center gap-2'>
          <Image src={User} alt='user-profile'/>
          <span className='hidden  lg:block font-medium  text-[#364B5C]'>Sign in</span>
        </div>
        <Image src={Menu} alt="menu-icon" className='lg:hidden'/>
      </div>
    </div>
  )
}

export default Navbar
