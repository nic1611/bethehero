const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request, response){
        const ongs = await connection('ongs').select('*');
        return response.json({id});
    },

    async create(request, response){
        const {name,email,whatsapp,city,uf} = request.body;

        const id = crypto.radomBytes(4).toString('HEX');

        await connection().insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        return response.json({id});
    }
};