import React, { FC, useState } from "react";
import data from "./data";
const numOfParagraphs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const App: FC = (): JSX.Element => {

  const [paragraphs, setParagraphs] = useState<number>(1);
  const [filteredParagraphs, setFilteredParagraphs] = useState<string[]>([]);
  
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => { 
    setParagraphs(parseInt(e.target.value));
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFilteredParagraphs(data.slice(0, paragraphs));
    setParagraphs(1)
  };
  return (
    <section className="section-center">
      <h3>Tired of Boring Lorem Ipsum?</h3>
      <form onSubmit={onSubmit} className="lorem-form">
        <label htmlFor="amount">Paragraphs: </label>
        <select id="amount" name="amount" value={paragraphs} onChange={handleChange} >
          {numOfParagraphs.map((num, index) => (
            <option key={index} value={num}>{num}</option>
          ))}
        </select>
        <button type="submit" className="btn">Generate</button>
      </form>
      {filteredParagraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </section>
  );
};

export default App;
