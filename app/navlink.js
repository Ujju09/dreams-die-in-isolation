"use client";
import Link from "next/link";
//import { useSelectedLayoutSegment} from "next/navigation";


export default function  NavLink({href, children}){

  return (
    <Link href={href} >{children}</Link>
  )
}
