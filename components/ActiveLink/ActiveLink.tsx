"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import style from "./ActiveLink.module.css";

interface Props {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: Props) => {
  const pathName = usePathname();

  const activeLink = pathName === path ? style["active-link"]: '';

  return (
    <Link href={path} className={`${style['link-item']} ${activeLink}`}>
      {text}
    </Link>
  );
};
