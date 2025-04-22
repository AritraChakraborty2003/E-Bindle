export const generalGET = (req, res) => {
  res.status(200).json({
    message: "Welcome to the API",
    status: "success",
    data: {
      name: "API",
      version: "1.0.0",
      description: "This is a sample API",
    },
  });
};
