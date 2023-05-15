import { ReactNode } from "react";

export interface IAuthProvider {
  children: ReactNode;
};


export interface ProjectItemProps {
  imageSrc: string;
  title: string;
  description: string;
  vercelLink: string;
  githubLink: string;
}