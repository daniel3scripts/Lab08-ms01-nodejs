/**
 * Routes for products
 */

export const getProducts = (req, res) => {
  res.status(200).json({
    ok: true,
    body: "Hello World modified test CI/CD by Daniel Lugo",
  });
};
