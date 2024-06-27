import { Container } from "./styles";
import SeachLogo from "../../assets/search.svg"
import { useSearchHook } from "../../hook/searchHook";


export function Search() {

    const { search, setSearch } = useSearchHook()

    return (
        <Container>
            <img src={SeachLogo} alt="Search"/>
            <input 
                type="text" 
                placeholder="Busque por pratos ou ingredientes" 
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
        </Container>
    )
}