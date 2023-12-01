import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandX,
} from "@tabler/icons-react";
import clsx from "clsx";
import React from "react";

const App = () => {
  return (
    <div className="min-h-screen grid bg-slate-900 place-content-center">
      <div className="flex gap-x-2">
        <Button
          {...{
            type: "submit",
            onClick: () => console.log("Hello React"),
          }}
        >
          <IconBrandFacebook />
          Login
        </Button>
        <Button type="submit">
          <IconBrandX />
          Login
        </Button>
        <Button className="bg-black">
          <IconBrandGithub />
          Login
        </Button>
      </div>
    </div>
  );
};

export default App;

function Button(props) {
  const {
    className = "bg-blue-600",
    children,
    text,
    type = "submit",
  } = props;
  return (
    <button
      {...props}
      type={type}
      className={clsx(
        className,
        "[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex gap-x-2 items-center  text-white px-4 py-2 rounded"
      )}
    >
      {text || children}
    </button>
  );
}
