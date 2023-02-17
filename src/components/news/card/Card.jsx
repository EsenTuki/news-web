import { NavLink } from "react-router-dom"
let Card = (props) => {

    return (
        <section className="card-item-wrapper" onClick={() => { console.log(props.item) }}>
            <NavLink to={'/publication'} className="card-link">
                <img src={props.item.urlToImage || "https://picsum.photos/200/300"} />
                <article className="card-item-content">
                    <h3>{props.item.title}</h3>
                    {props.item.author ? <h4>By {props.item.author}</h4> : null}
                    <p>{props.truncateDescription(props.item.description)}</p>
                </article>
            </NavLink>
        </section>
    );
}

export default Card;
