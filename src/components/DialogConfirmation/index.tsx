import BtnPrimary from "../Buttons/BtnPrimary";
import BtnSecundary from "../Buttons/BtnSecundary";

type Props = {
    message: string;
    onDialogAnswer: Function;
}

export default function DialogConfirmation({ message, onDialogAnswer }: Props) {

    return (
        <div className="dsc-dialog-bg" onClick={() => onDialogAnswer(false)}>
            <div className="dsc-dialog-box" onClick={(e) => e.stopPropagation()}>
                <h2>{message}</h2>
                <div className="dsc-dialog-btn-container">
                    <div onClick={() => onDialogAnswer(false)}>
                        <BtnSecundary name="Não" />
                    </div>
                    <div onClick={() => onDialogAnswer(true)}>
                        <BtnPrimary name="Sim" />
                    </div>
                </div>
            </div>
        </div>
    );
}