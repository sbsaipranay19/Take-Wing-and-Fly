const app = require("./server");
const port =  8000;

app.listen(port, () => {
  console.info(`Server running on http://127.0.0.1:${port}`);
});
