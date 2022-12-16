import { Container, Content,  Title } from "./styles";
import { CheckButton } from "./CheckButton";
import { DeleteButton } from "./DeleteButton";

export type ToDoType = {
	id: string,
	title: string,
	isConcluded: boolean,
	handleChangeToDoStatus?: () => void,
	handleDeleteToDo?: () => void
}

export function ToDo({ title, isConcluded, handleChangeToDoStatus, handleDeleteToDo }: ToDoType){
    return(
        <Container>
            <Content>
                <CheckButton 
                    onPress={handleChangeToDoStatus} 
                    isConcluded={isConcluded}
                />

                <Title isConcluded={isConcluded}>
                    {title}
                </Title>
            </Content>

            <DeleteButton onPress={handleDeleteToDo}/>
        </Container>
    )
}