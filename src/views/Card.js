import React from "react";
import { Card, Image } from "semantic-ui-react";

const imgObj = {
  men: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  jewelery: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
  women: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
  electric: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
};
const ShopCard = (props) => {
  const { name, onClick } = props;

  return (
    <Card onClick={onClick}>
      {/* {console.log("shopcard", props)} */}
      <Card.Content>
        <Image
          floated="right"
          size="large"
          src={
            name === "electronics"
              ? imgObj.electric
              : name === "jewelery"
              ? imgObj.jewelery
              : name === "men's clothing"
              ? imgObj.men
              : name === "women's clothing" && imgObj.women
          }
        />
        <Card.Header>{name}</Card.Header>
        <Card.Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum.
        </Card.Description>
        <Card.Meta>Explore More</Card.Meta>
      </Card.Content>
    </Card>
  );
};

export default ShopCard;
