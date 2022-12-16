import { Container, Subtitle, Title } from "./styles";
import { Feather } from '@expo/vector-icons'; 
import { useTheme } from "styled-components/native";

export function ListEmpty(){
    const { COLORS } = useTheme()

    return(
        <Container>
            <Feather 
                name="clipboard" 
                size={54} 
                color={COLORS.GRAY_400}
            />

            <Title>
                Você ainda não tem tarefas cadastradas
            </Title>

            <Subtitle>
                Crie tarefas e organize seus itens a fazer
            </Subtitle>
        </Container>
    )
}