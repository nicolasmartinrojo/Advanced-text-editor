import React, { useState } from "react";

const SynonymsPanel = ({ selectedText, replaceWord }) => {
  const [words, setWords] = useState([]);
  const [searchedText, setSearchedText] = useState("");
  if (!selectedText && words.length) {
    setWords([]);
    setSearchedText("");
  }
  if (selectedText && selectedText !== searchedText) {
    setSearchedText(selectedText);
    fetch(`https://api.datamuse.com/words?rel_syn=${selectedText}`)
      .then(response => {
        return response.json();
      })
      .then(res => setWords(res));
  }
  return (
    <div>
      <ul>
        {words.map(({ word, score }) => (
          <li
            key={score}
            onClick={e => {
              replaceWord(word);
            }}
          >
            {word}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SynonymsPanel;
