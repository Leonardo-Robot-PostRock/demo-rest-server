const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { isRoleValid, checkEmailExists, checkUserByIdExists } = require('../helpers/db-validators');

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
    check('email', 'Correo no válido').custom(checkEmailExists).isEmail(),
    check('role').custom(isRoleValid),
    validateFields
],
    usersPost
);

router.put('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(checkUserByIdExists),
    check('role').custom(isRoleValid),
    validateFields
],
    usersPut
);

router.patch('/', usersPatch);

router.delete('/', usersDelete);


module.exports = router;