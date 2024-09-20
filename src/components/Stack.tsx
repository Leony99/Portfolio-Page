import { SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiJquery, 
  SiBootstrap, SiReact, SiTypescript, SiWebpack} from 'react-icons/si';

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
  { name: 'React', icon: SiReact },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Webpack', icon: SiWebpack },
];

const Stack: React.FC = () => {
  return (
    <section className={styles.stack}>
      <h2 className={styles.title}>{'<TechStack />'}</h2>
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