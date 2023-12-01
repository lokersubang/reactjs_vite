import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandX,
} from "@tabler/icons-react";
import React from "react";
import Button from "./assets/components/Button";
import Card from "./assets/components/Card";

const App = () => {
  return (
    <div className="bg-slate-100 antialiased flex items-center justify-center min-h-screen">
      <div className="max-w-md w-full">
        <Card>
          <Card.Title>Hello World</Card.Title>
          <Card.Body>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
            fugiat expedita ab, aliquid perspiciatis saepe accusantium cumque
            laboriosam optio aperiam quia aliquam aspernatur?
          </Card.Body>
          <Card.Footer>
            <Button>Register</Button>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
};

export default App;
