import React from "react";

import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const CardCategoria = ({ lista }) => {
  return (
    <>
      <Container className="row row-cols-1 row-cols-md-3 g-4 cardContain">
        {lista.map((categoria) => (
          <Link className="cardLink" to={`/${categoria.nombre}`}>
              <Card className="cardCateg my-3 mx-4 d-block" >
                
              <Card.Body key={categoria.id}>
                
                  
                    <div className="contImgC">
                      <Card.Img
                        src={categoria.img}
                        className="card-img-top imgC"
                        alt={categoria.nombre}
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title cardLink">{categoria.nombre}</h5>
                    </div>
                 
             
              </Card.Body>
              </Card>
          </Link>
        ))}
      </Container>

    </>
  );
};

export default CardCategoria;
