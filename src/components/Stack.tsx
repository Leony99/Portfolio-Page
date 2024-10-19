import { SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiJquery, 
  SiBootstrap, SiReact, SiTypescript, SiTailwindcss, SiWebpack, SiMongodb } from 'react-icons/si';
import { RiNextjsFill } from 'react-icons/ri';

import styles from './Stack.module.css';

interface TechItem {
  name: string;
  icon: React.ElementType;
}

const techStack: TechItem[] = [
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'CSS3', icon: SiCss3 },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Jquery', icon: SiJquery },
  { name: 'Bootstrap', icon: SiBootstrap },
  { name: 'Webpack', icon: SiWebpack },
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: RiNextjsFill },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'TailwindCSS', icon: SiTailwindcss },
  { name: 'MongoDB', icon: SiMongodb }
];

const Stack: React.FC = () => {
  return (
    <section className={styles.stack}>
      <h2 className={styles.title}>{'<Tecnologias />'}</h2>
      <div className={styles.iconGrid}>
        {techStack.map((tech) => (
          <div key={tech.name} className={styles.iconWrapper}>
            <tech.icon className={styles.icon} />
            <span className={styles.iconName}>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stack;