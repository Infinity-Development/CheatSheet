import Image from "next/image";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="bg-slate-800">
      <ul className="flex items-center justify-between lg:container px-4 py-6 mx-auto text-sm text-white md:px-6">
        <li>
          © 2022{" "}
          <a
            href="https://toxicdev.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            Toxic Dev
          </a>
        </li>
        <li>
          Not associated with{" "}
          <a href="https://discord.com" className="hover:text-slate-500">
            <FontAwesomeIcon size="sm" icon={["fab", "discord"]} />
          </a>
        </li>
      </ul>
    </footer>
  );
}
