const router = require('express').Router();

export class BlogPostController {

    constructor(blogPostService) {

        this.blogPostService = blogPostService;
        this.routes = router;

    }

    create() {

        router.post('/', async (req, res) => {
            await this.blogPostService.create(req.body);
        });

    }

    read() {



    }

    update() {



    }

    delete() {



    }


}

// module.exports = router;