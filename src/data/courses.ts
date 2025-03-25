import { Course } from "../types";

export const courses: Course[] = [
  {
    id: "biology",
    title: "Biologia Celular e Molecular",
    description: "Estude os fundamentos da biologia celular e molecular essenciais para o ENEM.",
    image: "/biology.jpg",
    modules: 8,
    duration: "24 horas"
  },
  {
    id: "chemistry",
    title: "Química Orgânica",
    description: "Domine os conceitos de química orgânica frequentemente cobrados no ENEM.",
    image: "/chemistry.jpg",
    modules: 6,
    duration: "18 horas"
  },
  {
    id: "physics",
    title: "Física para Medicina",
    description: "Aprenda os princípios físicos aplicados à medicina e cobrados no ENEM.",
    image: "/physics.jpg",
    modules: 5,
    duration: "15 horas"
  },
  {
    id: "math",
    title: "Matemática Aplicada",
    description: "Resolva problemas matemáticos contextualizados na área da saúde.",
    image: "/math.jpg",
    modules: 7,
    duration: "21 horas"
  },
  {
    id: "human-body",
    title: "Anatomia Humana",
    description: "Estude a anatomia humana de forma simplificada para o ENEM.",
    image: "/anatomy.jpg",
    modules: 10,
    duration: "30 horas"
  },
  {
    id: "health",
    title: "Saúde Pública",
    description: "Compreenda os sistemas de saúde e políticas públicas cobradas no ENEM.",
    image: "/health.jpg",
    modules: 4,
    duration: "12 horas"
  }
];
