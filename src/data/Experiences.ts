interface Experience {
    id: number;
    company: string;
    position: string;
    duration: string;
    location: string;
    responsibilities: string[];
    stack: string;
}

const experiences: Experience[] = [
    {
        id: 1,
        company: "Maremelos Serviços Automotivos",
        position: "Estágio como desenvolvedor web Full-stack",
        duration: "Dez 2023 até Mai 2024",
        location: "Rio de Janeiro, RJ - Remoto",
        responsibilities: [
        "Execução de manutenção e alterações no sistema de gerenciamento da empresa",
        "Realização de manutenção e modificações em um novo website desenvolvido pela empresa"
        ],
        stack: "Bootstrap, JQuery, PHP, MySQL(PHPMyAdmin)"
    },
    {
        id: 2,
        company: "Estudos",
        position: "Desenvolvedor web Front-end",
        duration: "Jun 2024 até Atualmente",
        location: "Rio de Janeiro, RJ",
        responsibilities: [
        "Aprofundando em tecnologias modernas de desenvolvimento web",
        "Desenvolvendo novos projetos para criar experiência"
        ],
        stack: "React, TypeScript..."
    }
];

export type { Experience };
export { experiences };