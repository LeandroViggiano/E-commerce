const Item = ({name, category, price, img}) => {
    return(
        <article>
            <h4>categoria: {category}</h4>
            <h3>{name}</h3>
            <img src={img}/>
            <h4>${price}</h4>
            <a href="">ver detalle</a>
        </article>
    )
}

export default Item