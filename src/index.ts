import express, { Request, Response } from "express";
import { TodoModel } from "./todo";

const app = express();
app.use(express.json());

// GET all todos
app.get("/todos", (req: Request, res: Response) => {
  res.json(TodoModel.getAll());
});

// GET todo by id
app.get("/todos/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const todo = TodoModel.getById(id);

  if (!todo) return res.status(404).json({ message: "Todo not found" });
  res.json(todo);
});

// CREATE new todo
app.post("/todos", (req: Request, res: Response) => {
  const { title } = req.body;
  const todo = TodoModel.create(title);
  res.status(201).json(todo);
});

// UPDATE todo
app.put("/todos/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const updated = TodoModel.update(id, req.body);

  if (!updated) return res.status(404).json({ message: "Todo not found" });
  res.json(updated);
});

// DELETE todo
app.delete("/todos/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const ok = TodoModel.delete(id);

  if (!ok) return res.status(404).json({ message: "Todo not found" });
  res.json({ message: "Deleted successfully" });
});

app.listen(3000, () => {
  console.log("Todo API running at http://localhost:3000");
});
