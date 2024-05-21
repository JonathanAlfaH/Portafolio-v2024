import Image from "next/image"

export default function Footer() {
    return (
        <div className="w-full text-white z-10 bg-gradient-to-t from-neutral-950 to-slate-800">
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
                    <h1 className="text-xl w-1/2 border-b">Contacto</h1>
                    <div className="flex flex-wrap items-center">
                        <Image
                            src="/img/telephone.png"
                            alt="Descripción de la imagen"
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
                        <p className="ml-2">jonalfaro1605@gmail.com</p>
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
                    <h1 className="text-xl w-1/2 border-b">Redes Sociales</h1>
                    <div className="flex items-center">
                        <Image
                            src="/img/facebook.png"
                            alt="Descripción de la imagen"
                            width={19}
                            height={17}
                        />
                        <p className="ml-2">Facebook</p>
                    </div>
                    <div className="flex items-center">
                        <Image
                            src="/img/instagram.png"
                            alt="Descripción de la imagen"
                            width={19}
                            height={17}
                        />
                        <p className="ml-2">Instagram</p>
                    </div>
                    <div className="flex items-center">
                        <Image
                            src="/img/linkedin.png"
                            alt="Descripción de la imagen"
                            width={19}
                            height={17}
                        />
                        <p className="ml-2">LinkedIn</p>
                    </div>
                </div>
            </nav>
            <div className="text-stone-700 text-center">
                <p>© 2024 Jonthan Alfaro Herrera. Todos los derechos reservados</p>
            </div>
        </div>
    )
}
