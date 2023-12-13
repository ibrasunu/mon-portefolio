import React from "react";
function Footer() {
  return (
    <footer className="container mx-auto py-1 fixed bottom-0 md:left-20 bg-white dark:bg-dark-mode">
      <p className="text-xs text-center text-dark-content dark:text-light-content w-full">
        Ibrahima BAH,{" "}
        <a
          className="font-medium"
          href="https://www.linkedin.com/in/ibrahima-bah-a20336212/"
          target="_blank"
          rel="noreferrer noopener"
        >
          tous droits réservés
        </a>{" "}
        
        <span className="text-gray font-medium"> 2023</span>
      </p>
    </footer>
  );
}
export default Footer;
