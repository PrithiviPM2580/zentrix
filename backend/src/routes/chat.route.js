import { Router } from "express";
import Thread from "../models/thread.model";

const router = Router();

router.get("/thread", async (req, res, next) => {
  try {
    const threads = await Thread.find().sort({ createdAt: -1 }).lean();
    res.json(threads);
  } catch (error) {
    console.error("Error in /thread route:", error);
    next(error);
  }
});

router.get("/thread/:threadId", async (req, res, next) => {
  try {
    const { threadId } = req.params;
    const thread = await Thread.findOne({ threadId }).lean();
    if (!thread) {
      return res.status(404).json({ error: "Thread not found" });
    }
    return res.json(thread.messages);
  } catch (error) {
    console.error("Error in /thread/:threadId route:", error);
    next(error);
  }
});

router.delete("/thread/:threadId", async (req, res, next) => {
  try {
    const { threadId } = req.params;
    const deletedThread = await Thread.findOneAndDelete({ threadId });
    if (!deletedThread) {
      return res.status(404).json({ error: "Thread not found" });
    }
    return res.json({ message: "Thread deleted successfully" });
  } catch (error) {
    console.error("Error in DELETE /thread/:threadId route:", error);
    next(error);
  }
});

export default router;
