import BtnPrimary from "../Buttons/BtnPrimary";

type Props = {
    message: string;
    onDialogClose: Function;
}

export default function DialogInfo({message, onDialogClose}: Props) {

    return (
        <div className="dsc-dialog-bg" onClick={() => onDialogClose()}>
            <div className="dsc-dialog-box" onClick={(e) => e.stopPropagation()}>
                <h2>{message}</h2>
                <div className="dsc-dialog-btn-container" onClick={() => onDialogClose()}>
                <BtnPrimary name="OK"/>
                </div>
            </div>
        </div>
    );
}