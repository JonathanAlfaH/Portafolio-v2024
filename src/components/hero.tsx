
interface HeroProps {
    title: string;
    text: string;
}

export default function Hero(props: HeroProps) {
    return (
        <div className="text-justify relative h-screen">
            <div className=" flex justify-center items-center">
                <h1 className="text-white text-6xl">{props.title}</h1>
            </div>
            <div className="mx-auto w-1/2 pt-10 flex justify-center items-center">
                <p>{props.text}</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900"></div>
        </div>
    );
}