import { OpetionComponent, SelectComponent } from "./styles";

export function Select({ children, ...rest }) {
    return (
        <SelectComponent {...rest}>
            {children}
        </SelectComponent>
    )
}

export function Option({ title, isSelected, ...rest }) {
    return (
        <OpetionComponent {...rest} selected={isSelected}>
            { title }
        </OpetionComponent>
    )
}