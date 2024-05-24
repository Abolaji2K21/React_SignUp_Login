import FilledButton from "../FilledButton";
import style from "./index.module.css";
import PlaceHolder from "../PlaceHolder";
import {Link} from "react-router-dom";

const PageTemplate = ({image, headerName, message, buttonMessage, holder1, holder2, holder3, holder4,messageOne, buttonMessageOne}) =>{
    const submitButton = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            holder1: formData.get('holder1'),
            holder2: formData.get('holder2'),
            holder3: formData.get('holder3'),
            holder4: formData.get('holder4')
        };
        console.log(data);
    }
    return (
        <div className={style.container}>
            <img src={image} alt = "page image"/>
            <div className={style.heroText}>
                <h3>{headerName}</h3>
                <p>{message}</p>
                <form onSubmit={submitButton} className={style.formStyle}>
                    {holder1 && <PlaceHolder name="holder1" text={holder1}/>}
                    {holder2 && <PlaceHolder name="holder2" text={holder2}/>}
                    {holder3 && <PlaceHolder name="holder3" text={holder3}/>}
                    {holder4 && <PlaceHolder name="holder4" text={holder4}/>}
                    <div className={style.input}>
                        <p>{messageOne}</p>
                        <p>{buttonMessageOne}</p>
                    </div>
                    <FilledButton text={buttonMessage}/>

                </form>

            </div>
        </div>
    )
}
export default PageTemplate;