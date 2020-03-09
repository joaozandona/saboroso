var conn = require('./db');

module.exports = {

    render(req, res, error, success){

        res.render('contacts', {
            title: 'Contato - Restaurante Saboroso!',
            backgound: 'images/img_bg_3.jpg',
            h1: 'Diga um oi!',
            body: req.body,
            error,
            success
          });

    },

    save(fields){

        return new Promisse ((resolve, reject)=>{

            let date = fields.date.split('/');

            fields.date = `${date[2]}-${date[1]}-${date[0]}`;

            conn.query(`
                INSERT INTO tb_contacts (name, email, message)
                VALUES (?,?,?)
            `[
                fields.name,
                fields,email,
                fields,message
            ], (err, results)=>{

                if(err) {

                    reject(err);

                }else{

                    resolve(results);

                }

            });

        });

    }

}