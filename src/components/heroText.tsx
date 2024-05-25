interface HeroProps {
  title: string;
  text: string[];
  description: string[];
}

export default function HeroText(props: HeroProps) {
  // Create a merged array by alternating elements from `text` and `description`
  const mergedArray = [];
  const maxLength = Math.max(props.text.length, props.description.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < props.text.length) {
      mergedArray.push({ text: props.text[i], type: 'text' });
    }
    if (i < props.description.length) {
      mergedArray.push({ text: props.description[i], type: 'description' });
    }
  }

  return (
    <div>
      <div className="justify-start text-left z-20 transform transition duration-300 hover:scale-105">
        <h1 className="text-2xl border-b-2 border-teal-500 text-black">{props.title}</h1>
        <ul>
          {mergedArray.map((item, index) => (
            <li key={index} className={item.type === 'description' ? 'text-sm ml-3  text-slate-800 ' : ''}>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
