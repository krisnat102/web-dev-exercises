import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

var posts = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
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

app.post('/delete-post-id', (req, res) => {
    const postId = req.body.postId;
    console.log(posts.length);
    
    if (posts[postId]) {
        posts[postId] = 0;

        res.json({ status: 'success', postId: postId });
    } else {
        res.status(404).json({ status: 'error', message: 'Post not found' });
    }
});

app.post('/edit-post-id', (req, res) => {
    const postId = req.body.postId;
    
    if (posts[postId]) {
        console.log(1);
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