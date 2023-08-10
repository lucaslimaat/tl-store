import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full py-8 px-4 gap-8">
      
      <div className="flex flex-col md:flex-row max-w-8xl justify-between w-full">
      <Image
            src="/logotlstore.png"
            height={30}
            width={57}
            className="object-contain"
            alt="TL Store Logo"
          />
        <div>
          <h4 className="font-semibold">Navegação</h4>
          <p className="text-transparentWhite font-extralight ml-4 md:ml-0">
            Home
          </p>
          <p className="text-transparentWhite font-extralight ml-4 md:ml-0">
            Catálogo
          </p>
          <p className="text-transparentWhite font-extralight ml-4 md:ml-0">
            Atendimento
          </p>
          <p className="text-transparentWhite font-extralight ml-4 md:ml-0">
            Sobre
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Segurança</h4>
          <p className="text-transparentWhite font-extralight ml-4 md:ml-0">
            Termos de Uso
          </p>
          <p className="text-transparentWhite font-extralight ml-4 md:ml-0">
            Privacidade
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Contato</h4>
          <p className="text-transparentWhite font-extralight ml-4 md:ml-0">
            (31) 99641-8582
          </p>
          <p className="text-transparentWhite font-extralight ml-4 md:ml-0">
            tlstore@gmail.com
          </p>
        </div>
        <div className="flex justify-center items-center gap-5 self-stretch">
        <Image
          src="/facebook-logo.svg"
          height={30}
          width={30}
          className="object-contain"
          alt="Facebook Logo"
        />
        <Image
          src="/instagram-logo.svg"
          height={30}
          width={30}
          className="object-contain"
          alt="Instagram Logo"
        />
        <Image
          src="/linkedin-logo.svg"
          height={30}
          width={30}
          className="object-contain"
          alt="Linkedin Logo"
        />
        <Image
          src="/tiktok-logo.svg"
          height={30}
          width={30}
          className="object-contain"
          alt="Tiktok Logo"
        />
      </div>
      </div>
      <div className="flex flex-row text-right justify-start"> 
      <h2 className="text-transparantWhite font-extralight">
      © 2023 TL Store. Todos os direitos reservados. 
      </h2>
      </div>
      
    </footer>
  )
}
