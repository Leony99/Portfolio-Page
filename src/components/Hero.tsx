import React, { useState, useEffect } from 'react';

import { personalData } from '../data/PersonalData';

import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = '< Desenvolvedor Front-end />';
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(intervalId);
      }
    }, 100);

    const cursorIntervalId = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);

    return () => {
      clearInterval(intervalId);
      clearInterval(cursorIntervalId);
    };
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            {personalData.name}
            <span className={styles.titleBackground} aria-hidden="true">{`{ }`}</span>
          </h1>
          <p className={styles.subtitle}>
            {text}
            <span className={`${styles.cursor} ${cursorVisible ? styles.visible : styles.hidden}`}></span>
          </p>
          <p className={styles.description} dangerouslySetInnerHTML={{ __html: personalData.bio }}></p>
          <div className={styles.cta}>
            <a href={personalData.linkedin} target='_blank' className={styles.primaryButton}>
              <span className={styles.buttonText}>{'abrir_LinkedIn()'}</span>
              <span className={styles.buttonHighlight}></span>
            </a>
            <a href={personalData.github} target='_blank' className={styles.secondaryButton}>
              <span className={styles.buttonText}>{'conferir.GitHub()'}</span>
              <span className={styles.buttonHighlight}></span>
            </a>
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.codeEditor}>
            <pre className={styles.code}>
              <code>
{`function createAwesomeProject(idea) {
  const technologies = ['React', 'Node.js'];
  const coffee = 'lots';
  
  while (idea.isNotFullyImplemented()) {
    code();
    debug();
    refactor();
    drinkCoffee(coffee);
  }
  
  return awesomeProject;
}

// TODO: Implement more features
// FIXME: Optimize performance
// HACK: This works but needs improvement`}
              </code>
            </pre>
          </div>
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className={`${styles.floatingShape} ${styles[`shape${i + 1}`]}`}
              style={{
                animationDelay: `${i * 0.5}s`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;