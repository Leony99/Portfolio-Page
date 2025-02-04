interface Project {
    id: number;
    title: string;
    interest: string;
    description: string;
    technologies: string[];
    githubUrl: string;
    liveUrl?: string;
}

const interestOrder = ['high', 'medium', 'low'];

const projects: Project[] = [
    {
        id: 3,
        title: 'Smaller Projects',
        interest: 'low',
        description: 'Coleção de projetos menores.',
        technologies: ['Diversified'],
        githubUrl: 'https://github.com/Leony99/Smaller-Projects',
    },
    {
        id: 6,
        title: 'Portfolio Page',
        interest: 'medium',
        description: 'Uma página para organizar e demonstrar meu perfil/portfólio.(this web page)',
        technologies: ['Front-end', 'React', 'TypeScript'],
        githubUrl: 'https://github.com/Leony99/Portfolio-Page',
        liveUrl: 'https://www.leonycosta.online/',
    },
    {
        id: 7,
        title: 'Discover',
        interest: 'medium',
        description: 'Conexão com API do Google Maps para buscar informações de locais.',
        technologies: ['Full-Stack', 'Next.js', 'TypeScript', 'TailwindCSS', 'API'],
        githubUrl: 'https://github.com/Leony99/Discover',
    },
    {
        id: 8,
        title: 'API Example',
        interest: 'medium',
        description: 'Criação de endpoints para API utilizando Next.js.',
        technologies: ['Back-end', 'Next.js', 'TypeScript', 'TailwindCSS', 'MongoDB'],
        githubUrl: 'https://github.com/Leony99/API-Example',
    },
    {
        id: 9,
        title: 'School Manager',
        interest: 'high',
        description: 'Exemplo de dashboard para gerenciamento de escola.',
        technologies: ['Full-stack', 'Next.js', 'TypeScript', 'TailwindCSS', 'Prisma', 'PostgreSQL', 'Clerk'],
        githubUrl: 'https://github.com/Leony99/School-Manager',
    },
];

export { interestOrder, projects };