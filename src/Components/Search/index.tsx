import { Button } from "./Button";
import { InputSearch } from "./InputText";
import './styles.scss'

interface Props {
    value: string;
    onChange: (str: string) => void;
    onClick: () => void;
}

export const SearchBar = ({value, onChange, onClick}: Props) => {
    return (
        <div className='ContainerSearch'>
        <InputSearch  value={value} onChange={onChange} />
        <Button onClick={onClick} name="Search" />
      </div>
    );
}