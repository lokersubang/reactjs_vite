const Card = ({ children }) => {
  return (
    <div className="shadow rounded-lg overflow-hidden bg-white">{children}</div>
  );
};

// Component Card
const Title = ({ children }) => (
  <div className="p-4 border-b">
    <h1 className="text-xl font-semibold ">{children}</h1>
  </div>
);
const Body = ({ children }) => (
  <div className="leading-relaxed p-4">{children}</div>
);

const Footer = ({ children }) => (
  <h1 className="bg-slate-50 p-4">{children}</h1>
);

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;
export default Card;
