import Button from "@mui/material/Button/Button";
import Card from "@mui/material/Card/Card";
import CardActions from "@mui/material/CardActions/CardActions";
import CardContent from "@mui/material/CardContent/CardContent";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import Typography from "@mui/material/Typography/Typography";
import {GoodsType} from "../../../App";
import style from './GoodsItem.module.css'


type PropsType = {
    item: GoodsType
    addToCart: (item: GoodsType) => void
}

export const GoodsItem = (props: PropsType) => {

    const addToCartClickHandler = () => props.addToCart(props.item)

    return (
        <Card sx={{ width: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={props.item.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.item.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant='contained' onClick={addToCartClickHandler}>Add to cart</Button>
            </CardActions>
        </Card>

      /*  <div >
            <div className={style.item__container} key={props.item.id}>
                <img className={style.item__image} src={props.item.image} alt="goods_image"/>
                <h2 className={style.item__title}>{props.item.title}</h2>
                <div className={style.item__description}>{props.item.description}</div>
                <h3 className={style.item__price}>{props.item.price}$</h3>
            </div>
            <button onClick={addToCartClickHandler}>+</button>
        </div>*/
    )
}