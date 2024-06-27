import { Container } from "./styles";
import Close from "../../assets/Close.svg"
import Plus from "../../assets/Plus.svg"

export function IngredientsItem({ isNew, value, onclick, ...rest }) {
    return (
        <Container $isnew={isNew}>
            <input 
                type="text"
                value={value}
                readOnly={!isNew}
                {...rest}
            />

            <button
                type="button"
                onClick={onclick}
            >
                { isNew ? <img src={Plus}/> : <img src={Close}/>}
            </button>
        </Container>
    )
}