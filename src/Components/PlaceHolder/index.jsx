import style from "./index.module.css";

const PlaceHolder = ({text, name}) =>{
    return(
        <div>
            <input type="text" className={style.holder} placeholder={text} name={name}/>
        </div>
    )
}
export default PlaceHolder;