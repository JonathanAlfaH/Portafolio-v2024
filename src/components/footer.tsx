import Image from "next/image"

export default function Footer() {
    return (
        <div className="w-full text-white z-10 bg-gradient-to-t from-teal-700 to-teal-500">
            <nav className="container relative flex flex-wrap mx-auto p-5 justify-between">
                <div className="w-1/3 flex flex-wrap justify-center">
                    <div>
                        <Image
                            src="/img/Marca personal.png"
                            alt="Descripción de la imagen"
                            width={128}
                            height={128}
                        />
                    </div>
                </div>

                <div className="w-1/3">
                    <h1 className="text-xl w-1/2 border-b-2 border-slate-700 text-slate-700">Contacto</h1>
                    <div className="flex flex-wrap items-center">
                        <Image
                            src="/img/telephone.png"
                            alt="Marca personal"
                            width={16}
                            height={16}
                        />
                        <p className="ml-2">83583450</p>
                    </div>
                    <div className="flex flex-wrap items-center">
                        <Image
                            src="/img/mail.png"
                            alt="Descripción de la imagen"
                            width={16}
                            height={16}
                        />
                        <a href="mailto:jonalfaro1605@gmail.com" className="ml-2 hover:text-blue-600 hover:underline underline-offset ">jonalfaro1605@gmail.com</a>
                    </div>
                    <div className="flex items-center">
                        <Image
                            src="/img/location.png"
                            alt="Descripción de la imagen"
                            width={19}
                            height={17}
                        />
                        <p className="ml-2">Puntarenas, Golfito, Golfito</p>
                    </div>
                </div>

                <div className="w-1/3">
                    <h1 className="text-xl w-1/2 border-b-2 border-slate-700 text-slate-700">Redes Sociales</h1>
                    <div className="flex items-center">
                        <Image
                            src="/img/facebook.png"
                            alt="Descripción de la imagen"
                            width={19}
                            height={17}
                        />
                        <a href="https://www.facebook.com/jona.alfa/" className="ml-2 hover:text-blue-800">Facebook</a>
                    </div>
                    <div className="flex items-center">
                        <Image
                            src="/img/instagram.png"
                            alt="Descripción de la imagen"
                            width={19}
                            height={17}
                        />
                        <a href="https://www.instagram.com/jona_a1fa/" className="ml-2 hover:text-rose-400">Instagram</a>
                    </div>
                    <div className="flex items-center">
                        <Image
                            src="/img/linkedin.png"
                            alt="Descripción de la imagen"
                            width={19}
                            height={17}
                        />
                        <a href="https://www.linkedin.com/in/jonathan-alfaro-aba21228a/" className="ml-2 hover:text-blue-600">LinkedIn</a>
                    </div>
                </div>
            </nav>
            <div className="text-stone-400 text-center">
                <p>© 2024 Jonathan Alfaro Herrera. Todos los derechos reservados</p>
            </div>
        </div>
    )
}
