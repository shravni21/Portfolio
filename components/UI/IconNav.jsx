import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faLink, faFolder, faQuestion, faEnvelope } from "@fortawesome/free-solid-svg-icons"

const IconNav = () => {
  return (
    <div className="mt-12 flex justify-center gap-8">

      <NavIcon label="about" icon={faUser} />
      <NavIcon label="links" icon={faLink} />
      <NavIcon label="work" icon={faFolder} />
      <NavIcon label="faq" icon={faQuestion} />
      <NavIcon label="contact" icon={faEnvelope} />

    </div>
  )
}

export default IconNav

const NavIcon = ({ label, icon }) => {
  return (
    <button className="flex flex-col items-center space-y-2 focus:outline-none">
      <div className="w-14 h-14 rounded-full bg-white border shadow-sm flex items-center justify-center">
        <FontAwesomeIcon icon={icon} className="text-xl text-gray-500" />
      </div>
      <span className="text-xs text-gray-600 uppercase tracking-widest">{label}</span>
    </button>
  )
}
