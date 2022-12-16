import { useState } from "react";
import { FlatList, Keyboard } from "react-native";
import { Header } from "../../components/Header";
import { Container, Content, Counters, Form } from "./styles";
import { TasksStatusCounter } from "../../components/TasksStatusCounter";
import { ListEmpty } from "../../components/ListEmpty";
import { ToDo, ToDoType } from "../../components/ToDo";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { AddToDoInput } from "../../components/AddToDoInput";
import { CreateButton } from "../../components/CreateButton";

export function Home(){
	const [toDo, setToDo] = useState<ToDoType>({ id:'', title: '', isConcluded: false })
	const [toDoList, setToDoList] = useState<ToDoType[]>([])

	const tasksCreateds = toDoList.filter(item => item.isConcluded === false).length
	const tasksConcludeds = toDoList.filter(item => item.isConcluded === true).length

	function handleOnChangeAddToDoInput(text: string){
		setToDo({ id: uuidv4(), title: text, isConcluded: false })
	}

	function handleAddToList(){
		Keyboard.dismiss()

		setToDoList(prevState => [...prevState, toDo])

		setToDo({id: '', title: '', isConcluded: false })
	}

	function handleChangeToDoStatus(id: string){
		const newTaskArray = [...toDoList].map(task => {
			if(task.id === id){
				task.isConcluded = !task.isConcluded
			}

			return task
		})

		setToDoList(newTaskArray)
	}

	function handleDeleteToDo(id: string){
		setToDoList(prevState => prevState.filter(item => item.id !== id))
	}

	return (
		<Container>
			<Header/>

			<Content>
				<Form>
					<AddToDoInput
						onChangeText={handleOnChangeAddToDoInput}
						value={toDo.title}
					/>

					<CreateButton 
						onPress={handleAddToList}
						disabled={toDo.title.length === 0}
					/>
				</Form>

				<Counters>
					<TasksStatusCounter
						label="Criadas"
						value={tasksCreateds}
					/>
					
					<TasksStatusCounter
						label="Concluídas"
						value={tasksConcludeds}
					/>
				</Counters>

				<FlatList
					data={toDoList}
					ListEmptyComponent={() => <ListEmpty/>}
					keyExtractor={item => item.id}
					renderItem={({ item }) => (
						<ToDo 
							id={item.id} 
							title={item.title} 
							isConcluded={item.isConcluded}
							handleChangeToDoStatus={() => handleChangeToDoStatus(item.id)}
							handleDeleteToDo={() => handleDeleteToDo(item.id)}
						/>	
					)}
				/>
			</Content>
		</Container>
	)
} 