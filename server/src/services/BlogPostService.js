import { resolve } from 'path';

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

        const data = await (() =>{

            return new Promise((resolve, reject) => {
                this.connection.query('INSERT INTO blogs (title, body, created_at) VALUES (?, ?, NOW())', [blogPost.title, blogPost.body], (err, rows) => {
                    if (err) {
                        return reject(err);
                    }

                    resolve(rows);
                });
            });
        })()

        return new Promise((resolve, reject) => {
            this.connection.query('SELECT * FROM blogs WHERE id = ?', [data.insertId], (err, rows) => {
                if (err) {
                    return reject(err);
                }

                resolve(rows);
            });
        });

    }

    read(blogId) {

        if (blogId) {
            return new Promise((resolve, reject) => {
                this.connection.query('SELECT * FROM blogs WHERE id = ?', [blogId], (err, rows) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve(rows);
                });
            });
        } else {
            return new Promise((resolve, reject) => {
                this.connection.query('SELECT * FROM blogs', (err, rows) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve(rows);
                });
            });
        }

    }

    async update(blogPost) {

        if (typeof blogPost.id === 'number' && this.validate(blogPost) && await this.read(blogPost.id).length !== 0) {
            await this.connection.query('UPDATE blogs SET body = ?, modified_at = NOW() WHERE id = ?', [blogPost.body, blogPost.id]);

            return new Promise((resolve, reject) => {
                this.connection.query('SELECT * FROM blogs WHERE id = ?', [blogPost.id], (err, rows) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve(rows);
                });
            })
        };

        throw new Error('Id must be supplied on update');

    }

    delete() {

    }

    validate(blogPost) {

        const { title, body } = blogPost;

        const errors = [];

        if (title === null || title === undefined || title === '') {
            errors.push({

                field: 'title',
                type: 'Validation Error',
                message: 'title is null'

            });
        }

        if (body === null || body === undefined || body === '') {
            errors.push({

                field: 'body',
                type: 'Validation Error',
                message: 'body is null'

            });
        }

        if (title.length > 200) {
            errors.push({

                field: 'title',
                type: 'Validation Error',
                message: 'title is over 200 characters'

            })
        }

        if (body.length > 400) {
            errors.push({

                field: 'body',
                type: 'Validation Error',
                message: 'body is over 400 characters'

            });
        }

        if (errors.length !== 0) {
            throw new Error(errors);
        } else {
            return true;
        }

    }

}