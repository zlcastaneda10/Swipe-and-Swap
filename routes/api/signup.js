const User = require('../../models/User');
var router = require('express').Router();
const UserSession = require('../../models/UserSession');
const Object = require('../../models/Object');

/*
   * Sign up
   */
router.post('/api/signup', (req, res, next) => {
  const { body } = req;
  const {
    password
  } = body;
  let {
    email
  } = body;
  console.log('Please');
  if (!email) {
    return res.send({
      success: false,
      message: 'Error: Email cannot be blank.'
    });
  }
  console.log('work');
  if (!password) {
    return res.send({
      success: false,
      message: 'Error: Password cannot be blank.'
    });
  }
  email = email.toLowerCase();
  email = email.trim();
  // Steps:
  // 1. Verify email doesn't exist
  // 2. Save
  console.log('U');
  User.find({
    email: email
  }, (err, previousUsers) => {
    if (err) {
      return res.send({
        success: false,
        message: 'Error: Server error'
      });
    } else if (previousUsers.length > 0) {
      return res.send({
        success: false,
        message: 'Error: Account already exist.'
      });
    }
    console.log('Bastard');
    // Save the new user
    const newUser = new User();
    newUser.email = email;
    newUser.password = password;
    console.log(newUser.email);
    console.log(newUser.password);
    newUser.save((err, user) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Server error'
        });
      }
      return res.send({
        success: true,
        message: 'Signed up'
      });
    });
  });
}); // end of sign up endpoint


router.post('/api/signin', (req, res, next) => {
  const { body } = req;
  const {
    password
  } = body;
  let {
    email
  } = body;
  if (!email) {
    return res.send({
      success: false,
      message: 'Error: Email cannot be blank.'
    });
  }
  if (!password) {
    return res.send({
      success: false,
      message: 'Error: Password cannot be blank.'
    });
  }
  email = email.toLowerCase();
  email = email.trim();
  User.find({
    email: email
  }, (err, users) => {
    if (err) {
      console.log('err 2:', err);
      return res.send({
        success: false,
        message: 'Error: server error'
      });
    }
    if (users.length != 1) {
      return res.send({
        success: false,
        message: 'Error: Invalid'
      });
    }
    const user = users[0];
    if (!user.validPassword(password)) {
      return res.send({
        success: false,
        message: 'Error: Invalid'
      });
    }
    // Otherwise correct user
    const userSession = new UserSession();
    userSession.userId = user._id;
    userSession.save((err, doc) => {
      if (err) {
        console.log(err);
        return res.send({
          success: false,
          message: 'Error: server error'
        });
      }
      return res.send({
        success: true,
        message: 'Valid sign in',
        token: doc._id
      });
    });
  });
});

router.get('/api/logout', (req, res, next) => {
  // Get the token
  const { query } = req;
  const { token } = query;
  // ?token=test
  // Verify the token is one of a kind and it's not deleted.
  UserSession.findOneAndUpdate({
    _id: token,
    isDeleted: false
  }, {
    $set: {
      isDeleted:true
    }
  }, null, (err, sessions) => {
    if (err) {
      console.log(err);
      return res.send({
        success: false,
        message: 'Error: Server error'
      });
    }
    return res.send({
      success: true,
      message: 'Good'
    });
  });
});

router.get('/api/verify', (req, res, next) => {
  // Get the token
  const { query } = req;
  const { token } = query;
  // ?token=test
  // Verify the token is one of a kind and it's not deleted.
  UserSession.find({
    _id: token,
    isDeleted: false
  }, (err, sessions) => {
    if (err) {
      console.log(err);
      return res.send({
        success: false,
        message: 'Error: Server error'
      });
    }
    if (sessions.length != 1) {
      return res.send({
        success: false,
        message: 'Error: Invalid'
      });
    } else {
      // DO ACTION
      return res.send({
        success: true,
        message: 'Good'
      });
    }
  });
});

router.post('/api/addItem', (req, res, next) => {
  const { body } = req;
  let{
    titulo
  } = body;
  let {
    descripcion
  } = body;
  let {
    tipo
  } = body;
  let {
    talla
  } = body;
  let {
    pminimo
  } = body;
  let {
    pmaximo
  } = body;
  let {
    foto
  } = body;
  let {
    user
  } = body;
  console.log('Hey');
  if (!titulo) {
    return res.send({
      success: false,
      message: 'Error: titulo cannot be blank.'
    });
  }
  console.log('waddup');
  if (!descripcion) {
    return res.send({
      success: false,
      message: 'Error: Descripcion cannot be blank.'
    });
  }
  if (!tipo) {
    return res.send({
      success: false,
      message: 'Error: tipo cannot be blank.'
    });
  }
  if (!talla) {
    return res.send({
      success: false,
      message: 'Error: talla cannot be blank.'
    });
  }
  if (!pminimo) {
    return res.send({
      success: false,
      message: 'Error: pminimo cannot be blank.'
    });
  }
  if (!pmaximo) {
    return res.send({
      success: false,
      message: 'Error: Descripcion cannot be blank.'
    });
  }
  if (!foto) {
    return res.send({
      success: false,
      message: 'Error: foto cannot be blank.'
    });
  }
  titulo = titulo.toLowerCase();
  titulo = descripcion.trim();
  // Steps:
  // 1. Verify email doesn't exist
  // 2. Save
  console.log('little');
  /**
  User.find({
    email: email
  }, (err, previousUsers) => {
    if (err) {
      return res.send({
        success: false,
        message: 'Error: Server error'
      });
    } else if (previousUsers.length > 0) {
      return res.send({
        success: false,
        message: 'Error: Account already exist.'
      });
    }
    */
  console.log('APP');
  // Save the new user
  const newObject = new Object();
  newObject.titulo = titulo;
  newObject.descripcion= descripcion;
  newObject.tipo = tipo;
  newObject.talla = talla;
  newObject.pminimo = pminimo;
  newObject.pmaximo = pmaximo;
  newObject.foto = foto;
  newObject.user = user;
  console.log(newObject.titulo);
  console.log(newObject.descripcion);
  newObject.save((err, user) => {
    if (err) {
      return res.send({
        success: false,
        message: 'Error: Server error'
      });
    }
    return res.send({
      success: true,
      message: 'Object added'
    });
  });
});
// end of addItem endpoint
module.exports = router;