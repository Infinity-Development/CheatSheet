import Image from "next/image";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement({ 
      pageLanguage: 'en', 
      layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT 
    }, 'google_translate_element')
   }
   
   useEffect(() => {
     var addScript = document.createElement('script');
     addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
     document.body.appendChild(addScript);
     window.googleTranslateElementInit = googleTranslateElementInit;
   }, [])

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
        <div id="google_translate_element"></div>
        </li>
      </ul>
    </footer>
  );
}
