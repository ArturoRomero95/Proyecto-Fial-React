import React from 'react';

const NavItem = ({label, src}) => {
  return (
    <a href = {src} style={{textDecoration: "none", color: "white", fontSize: "30px", alignSelf: "center", padding: "5%"}}>{label}</a>
  )
}

export default NavItem
