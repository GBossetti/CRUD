import express from "express";
import { getAllBlogsSql, /* getAllBlogsPromiseSql */ getBlogSql, createBlogSql, updateBlogSql, deleteBlogSql} from "../controllers/BlogControllerSql.js";

const router = express.Router();

router.get("/allBlogsSql", getAllBlogsSql);
//router.get('/sql_promise', getAllBlogsPromiseSql);
router.get("/oneBlogSql/:id", getBlogSql);
router.post("/createBlogSql", createBlogSql);
router.put("/updateBlogSql/:id", updateBlogSql);
router.delete("/deleteBlogSql/:id", deleteBlogSql);



export default router;

