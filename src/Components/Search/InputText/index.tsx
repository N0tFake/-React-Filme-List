
interface Props {
    value: string;
    onChange: (str: string) => void;
}

export const InputSearch = ({value, onChange}: Props) => {
    return (
        <input className='InputSearch' type='text' value={value} onChange={event => onChange(event.target.value)}/>
    );
}