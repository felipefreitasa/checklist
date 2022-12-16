import { Container, Label, Value } from "./styles";

type Props = {
    label: string,
    value: number
}

export function TasksStatusCounter({ label, value }: Props){
    return(
        <Container>
            <Label label={label}>
                {label}
            </Label>

            <Value>
                {value}
            </Value>
        </Container>
    )
}