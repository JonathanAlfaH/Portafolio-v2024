interface HeroProps {
    title: string;
    text: string[];
}

export default function HeroText(props: HeroProps) {
  return (
    <div>
      <div className="justify-start text-left z-20">
        <h1 className="text-2xl border-b-2 border-teal-500 text-black">{props.title}</h1>
        <ul>
          {props.text.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </ul>
      </div>
    </div>
  );
}
