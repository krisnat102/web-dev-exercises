import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

var posts = [];

app.set('view engine', 'ejs');
app.set('views', './views');

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

app.post("/submit", (req, res) => {
    letters = req.body["name"].length + req.body["content"].length;
    console.log(letters);
});

app.get("/view", (req, res) => {
    
})

app.get("/about", (req, res) => {
    
})

app.post('/delete-post-id', (req, res) => {
    const postId = req.body.postId;
    
    if (posts[postId]) {
        posts[postId] = 0; // Add a way to get rid of the 0s

        res.json({ status: 'success', postId: postId });
    } else {
        res.status(404).json({ status: 'error', message: 'Post not found' });
    }
});

app.get('/edit', (req, res) => {
    const postId = req.query.postId;

    if (postId !== undefined && posts[postId]) {
        res.render("editBlog.ejs", 
        {
            posts: posts,
            postId: postId
        });
    } else {
        res.status(404).send('Post not found');
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