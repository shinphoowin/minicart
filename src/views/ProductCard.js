import React from "react";
import { Card, Image, Grid, Button, Header } from "semantic-ui-react";
import RatingBar from "../components/RatingBar";

const ProductCard = ({ product, handleShowPopUp, addToCart }) => {
  const { description, image, price, rating, title, category } = product;
  return (
    <Card className="fullWidth">
      <Grid>
        <Grid.Row>
          <Grid.Column width={4} className="paddingMedium rightpaddingNone">
            <Image src={image} className="img-ctrl" />
          </Grid.Column>
          <Grid.Column width={12} className="paddingMedium">
            <Card.Content>
              <Header as="h3">{title}</Header>
              <Card.Description>{description}</Card.Description>
              <Header as="h4">${price}</Header>
              <Card.Header>{category}</Card.Header>
              <RatingBar rateInfo={rating} />
              <Button
                color="orange"
                className="rightmove"
                onClick={() => {
                  localStorage.getItem("token")
                    ? addToCart(product)
                    : handleShowPopUp();
                }}
              >
                Add to cart
              </Button>
            </Card.Content>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Card>
  );
};

export default ProductCard;
