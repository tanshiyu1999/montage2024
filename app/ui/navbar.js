'use client'

import Image from "next/image";
import { Link } from "react-scroll";
import { useState } from 'react';
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";



export default function Navbar() {
  const content = <>
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-red-100 transition z-50">
      <ul className="text-center text-xl p-20">
        <Link spy={true} smooth={true} to="Theme">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Theme</li>
        </Link>
        <Link to="Judges">
          <li>Judges</li>
        </Link>    
        <Link to="Timeline">
          <li>Timeline</li>
        </Link>    
        <Link>
          <li>About</li>
        </Link>
        <Link>
          <li>FAQ</li>
        </Link>   
        <Link>
          <li>Contact</li>
        </Link>             
      </ul>
    </div>
  </>

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  }


  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-black lg:py-5 px-20 py-4">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold">Loggo</span>
        </div>
        <div>
          <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden"> 
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link spy={true} smooth={true} to="Theme">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hove:border-fuchsia-600 cursor-pointer">Theme</li>
              </Link>
              <Link>
                <li>Theme</li>
              </Link>
              <Link>
                <li>Theme</li>
              </Link>
              <Link>
                <li>Theme</li>
              </Link>
              <Link>
                <li>Theme</li>
              </Link>
              <Link>
                <li>Theme</li>
              </Link>    
            </ul>
          </div>
        </div>
        <div>
          {click && content}
        </div>
        <buton className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries /> }
        </buton>
      </div>

    </nav>
  );
}
