import Link from "next/link";


export default function Header() {
    return (
        <div className="w-full text z-10 bg-gradient-to-t from-teal-700 to-teal-600 ">
            <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-2 ">
            <div className="flex justify-star items-center space-x-2 right-5px">
                <img src="/img/Marca personal.png" className="w-16 h-16 "></img>
                <Link href="/" className="font-bold text-3xl"> Inicio </Link>
                </div>
                <div className="space-x-4 text-xl ">
                    <Link href="/personal" className="hover:underline"> Curriculum </Link>
                    <Link href="/proyects" className="hover:underline"> Proyectos </Link>
                    <Link href="mailto:jonalfaro1604@gmail.com"><button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full">Contratar</button></Link>
                </div>
            </nav>
        </div>
    )
}