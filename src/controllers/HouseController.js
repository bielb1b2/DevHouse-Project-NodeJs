

class HouseController{

    async store(req, res){
        return res.json({ testeHouse: "Funcionando" })
    }

}

module.exports = new HouseController();