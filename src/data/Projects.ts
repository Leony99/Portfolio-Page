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
        id: 1,
        title: 'Ecommerce',
        interest: 'low',
        description: 'Esboço de um ecommerce feito com a finalidade de treinar as tecnologias utilizadas.',
        technologies: ['Front-end', 'HTML', 'CSS', 'JavaScript'],
        githubUrl: 'https://github.com/Leony99/Ecommerce',
    },
    {
        id: 3,
        title: 'Gallery',
        interest: 'low',
        description: 'Galeria de imagens feita com a finalidade de treinar as tecnologia utilizadas.',
        technologies: ['Front-end', 'Bootstrap', 'Jquery', 'Webpack'],
        githubUrl: 'https://github.com/Leony99/Gallery',
    },
    {
        id: 4,
        title: 'User CRUD',
        interest: 'medium',
        description: 'Um CRUD simples feito com a finalidade de treinar as tecnologias utilizadas.',
        technologies: ['Front-end', 'React', 'JSON Server API'],
        githubUrl: 'https://github.com/Leony99/User-CRUD',
    },
    {
        id: 5,
        title: 'Github Finder',
        interest: 'medium',
        description: 'Conexão com API do Github para buscar informações de um determinado usuário.',
        technologies: ['Front-end' ,'React', 'TypeScript', 'API'],
        githubUrl: 'https://github.com/Leony99/Github-Finder',
        liveUrl: 'https://github-finder-rosy-seven.vercel.app/',
    },
    {
        id: 6,
        title: 'Portfolio Page',
        interest: 'high',
        description: 'Uma página para organizar e demonstrar meu perfil/portfólio.(this web page)',
        technologies: ['Front-end', 'React', 'TypeScript'],
        githubUrl: 'https://github.com/Leony99/Portfolio-Page',
        liveUrl: 'https://www.leonycosta.online/',
    },
    {
        id: 7,
        title: 'Discover',
        interest: 'high',
        description: 'Conexão com API do Google Maps para buscar informações de locais.',
        technologies: ['Full-Stack', 'Next.js', 'TypeScript', 'TailwindCSS', 'API'],
        githubUrl: 'https://github.com/Leony99/Discover',
        liveUrl: 'https://discover-black.vercel.app/',
    },
    {
        id: 8,
        title: 'API Example',
        interest: 'high',
        description: 'Criação de endpoints para API utilizando Next.js.',
        technologies: ['Back-end', 'Next.js', 'TypeScript', 'TailwindCSS', 'MongoDB'],
        githubUrl: 'https://github.com/Leony99/API-Example',
        liveUrl: 'https://api-example-two.vercel.app/',
    },
];

export { interestOrder, projects };