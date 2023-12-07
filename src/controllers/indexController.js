/* const indexController = {};

indexController.renderIndex = (req, res) => {
  res.render('index'); // Renderiza views/index
};

module.exports = indexController; */


module.exports = {
    index : (req,res)=> {
        return res.render('index')
    },
    admin : (req,res) => {
      return res.render('dashboard')
    },
}