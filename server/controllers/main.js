const Pool = require("../config/database");

module.exports = {
    getIndex: async(req, res) =>{
        try {
            const postsPerPage = 6;
            const allPosts = await Pool.query("SELECT * FROM blogs WHERE published_at IS NOT NULL");
            const pages = Math.ceil(allPosts.rows.length / postsPerPage)
            const firstSixPosts = await Pool.query("SELECT * FROM blogs WHERE published_at IS NOT NULL ORDER BY published_at DESC LIMIT 6 ");
            const data = {
                pages: pages,
                posts: firstSixPosts.rows
            }
            res.json(data)
        } catch (err) {
            console.log(err.message)
        }
    },
    
    getPost: async(req, res) =>{
        try {
            const {slug} = req.params;
            const blog = await Pool.query("SELECT * FROM blogs WHERE slug = $1", [slug])
            res.json(blog.rows[0])
        } catch (err) {
            console.log(err.message)
        }
    },
    
    getPostsOnPage: async(req, res) =>{
        const postsPerPage = 6;
        let {pageNumber} = req.body;
        try {
            const allBlogs = await Pool.query("SELECT * FROM blogs WHERE published_at IS NOT NULL ORDER BY published_at DESC LIMIT 6 OFFSET $1",[postsPerPage * (pageNumber - 1)]);
            res.json(allBlogs.rows)
        } catch (err) {
            console.log(err.message)
        }
    },

}