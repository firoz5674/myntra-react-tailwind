
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/myntra-logo.png";
import Test from "./Test";
import { navMenu, headerProfile } from "./utils";



function Navbar() {
  
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  const openHandler = () => {
    setMegaMenuOpen(true)
  }
  const closeHandler = () => {
    setMegaMenuOpen(false)
  }

  return (
    <>
      <nav className="flex items-center justify-around shadow-commonShadow p-3 relative">
        <div className="logo">
          <Link to="/"><img src={logo} className="w-[54px]" alt="myntra logo" /></Link>
        </div>
        <div className="flex justify-around">
          {navMenu.map((menu) => {
            const { id, url, urlText } = menu;
            return (
              <Link onMouseOver={openHandler} onMouseLeave={closeHandler} id={id} to={url} className="pr-8 font-bold uppercase text-[16px]">{urlText}</Link>
            )
          })}
        </div>
        <div className="search-bar">
          <span className="w-10 inline-block cursor-pointer bg-[#f5f5f6] text-[#696e79] pl-3 py-2 rounded"><FontAwesomeIcon icon={faSearch} /></span>
          <input type="text" name="search" className="w-[400px] bg-[#f5f5f6] text-[#696e79] outline-none py-2" placeholder="Search for products, brands and more" />
        </div>
        <div className="flex text-center justify-around">
          {headerProfile.map((profile) => {
            const { id, icon, name } = profile;
            console.log(icon);
            return (
              <div className="mr-8" key={id}>
                <FontAwesomeIcon className="text-gray-600" icon={icon} />
                <p className="text-gray-700 font-semibold text-[14px]">{name}</p>
              </div>
            )
          })}
        </div>
      </nav>
      {megaMenuOpen && (
        <div className="bg-slate-300 p-4 w-[60%] relative left-40 z-10 flex justify-between">
          <div className="w-[20%]">
            one
          </div>
          <div className="w-[20%]">
            two
          </div>
          <div className="w-[20%]">
            two
          </div>
          <div className="w-[20%]">
            two
          </div>
          <div className="w-[20%]">
            two
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
