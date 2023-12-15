/* const indexController = {};

indexController.renderIndex = (req, res) => {
  res.render('index'); // Renderiza views/index
};

module.exports = indexController; */


module.exports = {
    index : (req,res)=> {
        return res.render('index')
    },
    cart : (req,res)=> {
      return res.render('productCart')
    },
    admin : (req,res) => {
      return res.render('dashboard')
    },
}