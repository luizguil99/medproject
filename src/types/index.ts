export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  modules: number;
  duration: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
}

export interface User {
  name: string;
  email: string;
  progress: number;
  points: number;
  streak: number;
}
