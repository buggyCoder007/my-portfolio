import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function Navbar() {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
          >
            Roshni
          </NavLink>
          <NavLink
            to="/posts"
            className="inline-flex items-center py-3 px-3 mr-6 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/projects"
            activeClassName="text-red-100 bg-red-700"
            className="inline-flex items-center py-3 px-3 mr-6 rounded text-red-200 hover:text-green-800"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-red-100 bg-red-700"
            className="inline-flex items-center py-3 px-3 mr-6 rounded text-red-200 hover:text-green-800"
          >
            About Me!!!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-3 ">
          <SocialIcon
            url="https://www.linkedin.com/in/roshni-kumari-gupta/"
            className="mr-4"
            target="_blank"
            rel="noopener norefferer" 
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/buggyCoder007"
            className="mr-4"
            target="_blank"
            rel="noopener norefferer" 
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.instagram.com/___rosh.__/"
            className="mr-4"
            target="_blank"
            rel="noopener norefferer" 
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
