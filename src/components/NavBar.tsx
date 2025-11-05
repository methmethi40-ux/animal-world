import React from "react";

interface NavBarProps {
  title: string;
}

const NavBar: React.FC<NavBarProps> = ({ title }) => {
  return (
    <nav className="w-full bg-slate-900/70 backdrop-blur-md p-4 shadow-lg">
      <h1 className="text-2xl font-bold text-white text-center">{title}</h1>
    </nav>
  );
};

export default NavBar;
