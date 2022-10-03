import app from './app.js';

// * CONSTANTS
const PORT = process.env.PORT || 3010;

// Listen
app.listen(PORT, () => {
  console.log(`Port ${PORT} success`);
});