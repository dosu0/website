import { useEffect, useState } from 'react';
import styles from './typewriter.module.scss';

type TypewriterProps = {
  sentences: string[];
};

export default function Typewriter({ sentences }: TypewriterProps) {
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
