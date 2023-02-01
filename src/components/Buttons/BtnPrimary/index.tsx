import './styles.css';

type Props = {
    name: string;
}

export default function BtnPrimary({ name }: Props) {
    return (
        <div className="dsc-btn dsc-btn-blue">
            {name}
        </div>
    );
}