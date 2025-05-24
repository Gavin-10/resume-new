import { CardInterface } from "./card-interface";
export interface ProjectInterface {
    title: string
    image: string
    link: string
    summary: CardInterface
    skills: string[]
    challenges: string
}
