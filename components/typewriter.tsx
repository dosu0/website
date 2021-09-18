import { useEffect, useState } from 'react';
import styles from './typewriter.module.scss';

/* interface TypewriterProps {
  sentences: string[];
}

export default function Typewriter({ sentences }: TypewriterProps) {
  const speed = 75;
  const [char, setChar] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  function type() {
    if (isDeleting) {
      setChar(char - 1);
    } else {
      setChar(char + 1);
    }

    if (!isDeleting && char === sentences.length) {
      setIsDeleting(true);
    } else if (isDeleting && char === 0) {
      setIsDeleting(false);
      setSentence(sentence + 1);
    }
  }

  useEffect(() => {
    setTimeout(type, speed);
    });

  return <span>{sentence.substring(0, char)}</span>;
  } */

export default function Typewriter({ sentences }) {
  const [{ text, idx, isDeleting }, setState] = useState({
    text: '',
    idx: 0,
    isDeleting: false,
  });

  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const sentence = sentences[idx % sentences.length];

    const delay = setTimeout(() => {
      setSpeed(100);
      if (isDeleting) {
        setState({
          text: sentence.substring(0, text.length - 1),
          idx,
          isDeleting,
        });
      } else {
        setState({
          text: sentence.substring(0, text.length + 1),
          idx,
          isDeleting,
        });
      }

      if (!isDeleting && text == sentence) {
        setSpeed(1000);
        // finished sentence
        setState({
          text,
          idx,
          isDeleting: true,
        });
      } else if (isDeleting && text === '') {
        // deleted sentence
        setState({
          text,
          isDeleting: false,
          idx: idx + 1,
        });
        setSpeed(500);
      }

      clearTimeout(delay);
    }, speed);
  }, [text, isDeleting]);

  return <span className={styles.typewriter}>{text}</span>;
}
