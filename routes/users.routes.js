const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const Role = require('../models/role');

const {
    usersGet,
    usersPost,
    usersPut,
    usersPatch,
    usersDelete
} = require('../controllers/users.controller');

const router = Router();

router.get('/', usersGet);

router.post('/', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe ser más de 6 letras').isLength({ min: 6 }),
    check('email', 'Correo no válido').isEmail(),
    check('role').custom(async (role = '') => {
        const roleExists = await Role.findOne({ role });
        console.log('Resultado: ', roleExists)
        if (!roleExists) {
            throw new Error(`The ${role} is not in the database`)
        }
    }),
    validateFields
],
    usersPost
);

router.put('/:id', usersPut);

router.patch('/', usersPatch);

router.delete('/', usersDelete);


module.exports = router;