import express from "express";

const app = express();
const port = 3000;

var posts = [];

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs", 
    {
        posts: posts
    });
})

app.get("/create", (req, res) => {
    var newBlog = new Blog("name", "");
    posts.push(newBlog);

    res.render("index.ejs", 
    {
        posts: posts
    });
})

app.get("/view", (req, res) => {
    
})

app.put("/edit", (req, res) => {
    
})

app.get("/about", (req, res) => {
    
})

app.delete("/delete/:id", (req, res) => {
    const postId = req.params.id;
    if (postId >= 0 && postId < posts.length) {
        posts = posts.filter((_, index) => index != postId);
        res.status(200).json({ message: "Post deleted" });
    } else {
        res.status(404).json({ message: "Post not found" });
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

function Blog(name, content){
    this.name = name;
    this.content = content;

    this.edit = function(newContent) {
        this.content = newContent;
    };
}