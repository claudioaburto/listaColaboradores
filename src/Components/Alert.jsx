const Alert = ({ message, bgColor }) => {
  console.log("Received message:", message);
  console.log("Received bgColor:", bgColor);
  return (
    <div className="alert sectionAlert text-center">
      {bgColor === "true" ? (
        <p className="bg-danger text-light align-middle">{message}</p>
      ) : (
        <p className="bg-success text-light">{message}</p>
      )}
    </div>
  );
};

export default Alert;
