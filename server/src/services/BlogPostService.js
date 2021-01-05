export class BlogPostService {

    constructor(mySql) {
        this.mySql = mySql;
    }

    async create(blogPost) {

        this.validate(blogPost);
        const result = await this.mySql.query('INSERT INTO blogs (title, body, createdAt) VALUES (?, ?, NOW()', [title, body]);
        return result;

    }

    read() {



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