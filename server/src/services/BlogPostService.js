const mysql = require('mysql');

export class BlogPostService {

    constructor() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'password',
            database: 'blogpost'
        });

        this.connection.connect((err) => {
            if (err) {
                throw err;
            }
            console.log('Connected to mysql')
        })
    }

    async create(blogPost) {

        this.validate(blogPost);
        await this.connection.query('INSERT INTO blogs (title, body, created_at) VALUES (?, ?, NOW())', [blogPost.title, blogPost.body]);
    }

    async read(blogId) {
        if (blogId) {
            let result = null;
            await this.connection.query('SELECT * FROM blogs WHERE id = ?', [blogId]).then(res => result = res);
            return result;
        }

    }

    update() {

    }

    delete() {

    }

    validate(blogPost) {

        const { title, body } = blogPost;

        const errors = [];

        if (title === null || title === undefined || title === '') {
            errors.push({

                type: 'Validation Error',
                field: 'title'

            });
        }

        if (body === null || body === undefined || body === '') {
            errors.push({

                type: 'Validation Error',
                field: 'body'

            });
        }

        if (errors.length !== 0) {
            throw new Error(errors);
        }

    }

}