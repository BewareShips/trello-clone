import { CardContainer } from "./styles";

type CardProps = {
  text:string
}

export const card = ({text}:CardProps) =>{
  return <CardContainer>{text}</CardContainer>
}