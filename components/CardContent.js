import React from "react";
import {
  Container,
  Card,
  Text,
  Grid,
  Image,
  Col,
  Link,
} from "@nextui-org/react";

export default function CardContent({ title, image, description, link }) {
  return (
    <div className="">
      <Link href={link}>
        <Card
          isPressable
          isHoverable
          variant="bordered"
          // css={{ p: "$6", mw: "400px", $$cardColor: "#1f2937" }}
          css={{ $$cardColor: "#1f2937" }}
        >
          <Card.Header>
            <img src={image} width="50px" />
            <Grid.Container css={{ pl: "$6" }}>
              <Grid xs={12}>
                <div className="font-semibold text-white text-lg">{title}</div>
              </Grid>
            </Grid.Container>
          </Card.Header>
          <Card.Body css={{ py: "$2" }}>
            <div className="text-white font-light text-base">{description}</div>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}
