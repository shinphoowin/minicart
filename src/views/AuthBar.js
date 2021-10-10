import React, { useState } from "react";
import {
  Icon,
  Popup,
  List,
  Image,
  Button,
  Header,
  Grid,
} from "semantic-ui-react";
import SearchBar from "../components/SearchBar";
const AuthBar = (props) => {
  const { handleLogout, cartData, removeFromCart, isLogin } = props;
  const [loading, setLoading] = useState(false);

  return (
    <Grid columns={2} className="iconBar">
      <Grid.Row>
        <Grid.Column>
          <SearchBar cartData={cartData} />{" "}
        </Grid.Column>
        {isLogin && (
          <Grid.Column style={{ paddingTop: "8px" }}>
            Welcome <Icon disabled name="user" size="large" />
            {cartData.length !== 0 ? (
              <Popup
                trigger={
                  <button className="invisibleBtn">
                    <Icon
                      disabled
                      name="shop"
                      size="large"
                      color="yellow"
                      style={{ marginLeft: 10, marginRight: 10 }}
                    />
                    {cartData.length > 0 && (
                      <span className="cartCountInfo">{cartData.length}</span>
                    )}
                  </button>
                }
                on="click"
                position="bottom right"
                wide
              >
                <List divided verticalAlign="middle">
                  {cartData.map((el) => (
                    <List.Item key={el.id}>
                      <Image avatar src={el.image} size="small" />
                      <List.Content style={{ width: "80%" }}>
                        <List.Header>{el.title}</List.Header>
                        <em>
                          $ {el.price} x {el.count}
                        </em>
                        <Icon
                          name="close"
                          onClick={() => removeFromCart(el.id)}
                        />
                      </List.Content>
                    </List.Item>
                  ))}
                </List>
                {cartData.length !== 0 && (
                  <Header sub style={{ marginBottom: 13 }}>
                    Total{" "}
                    <span>
                      ${" "}
                      {cartData
                        .reduce((p1, p2) => p1 + p2.price * p2.count, 0)
                        .toFixed(2)}
                    </span>
                  </Header>
                )}

                <Button
                  loading={loading}
                  onClick={() => {
                    setLoading(true);
                    setTimeout(() => {
                      setLoading(false);
                    }, 1000);
                  }}
                  positive
                  style={{ width: "100%" }}
                >
                  Proceed
                </Button>
              </Popup>
            ) : (
              <Icon
                disabled
                name="shop"
                size="large"
                color="yellow"
                style={{ marginLeft: 10, marginRight: 10 }}
              />
            )}
            <em className="linkColor" onClick={() => handleLogout()}>
              Logout
            </em>
          </Grid.Column>
        )}
      </Grid.Row>
    </Grid>
  );
};

export default AuthBar;
