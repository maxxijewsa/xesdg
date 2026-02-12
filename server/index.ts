import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";
import { statsSchema } from "../shared/schema";

const app = express();
app.use(cors());
app.use(express.json());

const STATIC_DATA_PATH = path.resolve(process.cwd(), "client/src/data/static-data.ts");

app.post("/api/update-stats", (req, res) => {
  try {
    const result = statsSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ error: result.error.errors });
    }

    const newStats = result.data;
    let content = fs.readFileSync(STATIC_DATA_PATH, "utf-8");
    
    const statsRegex = /export const stats: Stats = \{[\s\S]*?\};/;
    const newStatsString = `export const stats: Stats = {
  totalServers: "${newStats.totalServers}",
  totalUsers: "${newStats.totalUsers}",
  uptime: "${newStats.uptime}",
  threatsblocked: "${newStats.threatsblocked}",
};`;

    content = content.replace(statsRegex, newStatsString);
    fs.writeFileSync(STATIC_DATA_PATH, content);

    res.json({ message: "Stats updated successfully", stats: newStats });
  } catch (error) {
    console.error("Error updating stats:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(Number(PORT), "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
