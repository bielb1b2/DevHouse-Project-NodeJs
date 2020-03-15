
//Metodos: Index, show, update, store, destroy
/* 

Index: Listagem de sessões
store: Criar uma sessão
show: Listar 1 unica sessão
update: Alterar alguma sessão
destroy: Deletar alguma sessão

*/


const User = require('../models/User');

class SessionController {


    async store(req, res){
        const { email } = req.body;


        //Verificando se esse usuario já existe
        let user = await User.findOne({ email });

        if(!user){
            user = await User.create({ email });

            return res.json(user);
        }
        
        return res.json({ usuario: "Ja existe esse usuario" })
    }
}

module.exports = new SessionController();