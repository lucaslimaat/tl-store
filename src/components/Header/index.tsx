import Image from 'next/image'
import { FaShoppingCart } from 'react-icons/fa';

export default function Header() {
  return (
    <>
      <header className="  flex flex-col items-center justify-center w-full text-lg bg-black py-5 gap-1 top-0 z-40">
        <nav className="flex  w-full items-center px-2 justify-around ">
          <Image
            src="/logotlstore.png"
            height={30}
            width={57}
            className="object-contain"
            alt="TL Store Logo"
          />

          <ul className="hidden md:flex gap-8 text-lg ">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Catálogo</a>
            </li>
            <li>
              <a href="#">Atendimento</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
          </ul>
          <FaShoppingCart />

        </nav>
      </header>
      
    </>
  )
}
