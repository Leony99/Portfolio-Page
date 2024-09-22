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
        interest: 'medium',
        description: 'Esboço de um ecommerce feito com a finalidade de treinar as tecnologias utilizadas.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        githubUrl: 'https://github.com/Leony99/Ecommerce',
    },
    {
        id: 2,
        title: 'Car CRUD',
        interest: 'low',
        description: 'CRUD simples em php utilizando PHPMyAdmin.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
        githubUrl: 'https://github.com/Leony99/Car-Manager',
    },
    {
        id: 3,
        title: 'Gallery',
        interest: 'low',
        description: 'Galeria de imagens feita com a finalidade de treinar as tecnologia utilizadas.',
        technologies: ['Bootstrap', 'Jquery', 'Webpack'],
        githubUrl: 'https://github.com/Leony99/Gallery',
    },
    {
        id: 4,
        title: 'User CRUD',
        interest: 'high',
        description: 'Um CRUD simples feito com a finalidade de treinar as tecnologias utilizadas.',
        technologies: ['React', 'JsonServer API'],
        githubUrl: 'https://github.com/Leony99/User-CRUD',
    },
    {
        id: 5,
        title: 'Github Finder',
        interest: 'high',
        description: 'Conexão com API do Github para buscar informações de um determinado usuário.',
        technologies: ['React', 'TypeScript', 'API'],
        githubUrl: 'https://github.com/Leony99/Github-Finder',
    },
    {
        id: 6,
        title: 'Portfolio Page',
        interest: 'high',
        description: 'Uma página para organizar e demonstrar meu perfil/portfólio.(this web page)',
        technologies: ['React', 'TypeScript'],
        githubUrl: 'https://github.com/Leony99/Portfolio-Page',
    },
];

export { interestOrder, projects };