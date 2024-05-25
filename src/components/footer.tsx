import Image from "next/image";

export default function Footer() {
    return (
        <div className="w-full text-white z-10 bg-gradient-to-t from-teal-700 to-teal-500">
            <nav className="container mx-auto p-5 flex flex-col md:flex-row justify-between">
                <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
                    <div>
                        <Image
                            src="/img/Marca personal.png"
                            alt="Descripción de la imagen"
                            width={128}
                            height={128}
                        />
                    </div>
                </div>

                <div className="w-full md:w-1/3 mb-4 md:mb-0">
                    <h1 className="text-xl border-b-2 border-slate-700 text-slate-600 mr-4">Contacto</h1>
                    <div className="flex items-center mt-2">
                        <Image
                            src="/img/telephone.png"
                            alt="Marca personal"
                            width={16}
                            height={16}
                        />
                        <a href="https://wa.me/50683583450" className="ml-2 hover:text-blue-600 hover:underline" >+506 83583450</a>
                    </div>
                    <div className="flex items-center mt-2">
                        <Image
                            src="/img/mail.png"
                            alt="Descripción de la imagen"
                            width={16}
                            height={16}
                        />
                        <a href="mailto:jonalfaro1605@gmail.com" className="ml-2 hover:text-blue-600 hover:underline">jonalfaro1605@gmail.com</a>
                    </div>
                    <div className="flex items-center mt-2">
                        <Image
                            src="/img/location.png"
                            alt="Descripción de la imagen"
                            width={19}
                            height={17}
                        />
                        <p className="ml-2">Puntarenas, Golfito, Golfito</p>
                    </div>
                </div>

                <div className="w-full md:w-1/3">
                    <h1 className="text-xl border-b-2 border-slate-700 text-slate-600">Redes Sociales</h1>
                    <div className="flex items-center mt-2">
                        <Image
                            src="/img/facebook.png"
                            alt="Descripción de la imagen"
                            width={19}
                            height={17}
                        />
                        <a href="https://www.facebook.com/jona.alfa/" className="ml-2 hover:text-blue-800">Facebook</a>
                    </div>
                    <div className="flex items-center mt-2">
                        <Image
                            src="/img/instagram.png"
                            alt="Descripción de la imagen"
                            width={19}
                            height={17}
                        />
                        <a href="https://www.instagram.com/jona_a1fa/" className="ml-2 hover:text-rose-400">Instagram</a>
                    </div>
                    <div className="flex items-center mt-2">
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
            <div className="text-stone-400 text-center mt-4">
                <p>© 2024 Jonathan Alfaro Herrera. Todos los derechos reservados</p>
            </div>
        </div>
    );
}
