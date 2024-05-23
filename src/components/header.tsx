import Link from "next/link";


export default function Header() {
    return (
        <div className="w-full text-white z-10 bg-stone-800">
            <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-2 ">
            <div className="flex justify-star items-center space-x-2 right-5px">
                <img src="/img/Marca personal.png" className="w-16 h-16 "></img>
                <Link href="/" className="font-bold text-3xl"> Inicio </Link>
                </div>
                <div className="space-x-4 text-xl ">
                    <Link href="/personal" className="hover:underline"> Personal </Link>
                    <Link href="/proyects" className="hover:underline"> Proyectos </Link>
                </div>
            </nav>
        </div>
    )
}