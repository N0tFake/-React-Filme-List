import "./styles.scss"

interface Props {
    name: string;
    onClick: () => void;
}

export const Button = ({onClick, name}: Props) => {
    return (
        <button className="Button" onClick={onClick}>{name}</button>
    );
}