import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";
import { AiOutlineLogout } from "react-icons/ai";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import Logo from '../utils/tiktik-logo.png'
import { createOrGetUser } from "../utils";

const Navbar = () => {
  const user = false;
  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4">
      <Link href="/">
        <div className="w-[100px] md:w-[130px]">
          <Image
            className="cursor-pointer"
            alt="TikTik"
            layout="responsive"
            src={Logo}
          />
        </div>
      </Link>
      <div>SEARCH</div>
      <div>{user ? (
        <div>Logged</div>
      ) : (
        <GoogleLogin
          onSuccess={(response) => {
            console.log(`🍞%cNavbar.tsx:31 - response`, 'font-weight:bold; background:#768900;color:#fff;'); //DELETEME
            console.log(response); // DELETEME
            createOrGetUser(response.credential);
          }}
          onError={() => {
            console.log('error')
          }}
        />
      )}</div>
    </div>
  )
}

export default Navbar
