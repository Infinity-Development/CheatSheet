import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-800">
      <ul className="flex items-center justify-between lg:container px-4 py-6 mx-auto text-sm text-white md:px-6">
        <li>
          Created by{" "}
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
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            Not associated with <Image src="/discord.png" width={15} height={15} className="rounded-full" priority alt="logo" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
