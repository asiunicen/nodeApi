import { v4 as uuidv4 } from 'uuid'

let users = [];

export const getUsers = (req, res) => {
    res.json(users)
    //console.log(users);
}

/* Esto devuelve un objeto { id: }*/
export const getUserById = (req, res) => {
    //console.log(req.params);
    const { id } = req.params
    const foundUser = users.find((user) => user.id === id)
    res.send(foundUser)
}

export const createUser = (req, res) => {
    // console.log(`Post Route has reached`);
    // console.log(req.body); la data se manda en el body

    const user = req.body;
    const userId = uuidv4();
    const userWithId = { ...user, id:userId }
    users.push(userWithId) 
    // user.push({...user, id:uuidv4() })  OR USING THIS WAY remove two last lines
    res.send(`user with the name ${user.firstName} was added`)
}

export const deleteUser = (req, res) => {
    /* const { id } = req.params
    users = users.filter((user) => user.id !== id)
    res.send(`user with id ${id} was deleted`)   */ 
    
    //BOTH WORKS 
    const { id } = req.params
    users.splice(id, 1);
    res.send(`user with id ${id} was deleted`)
}

export const updateUser = (req, res) => {
    const { id } = req.params
    const { firstName, lastName, age } = req.body

    const user = users.find((user) => user.id === id)
    
    if (firstName) { user.firstName = firstName }
    if (lastName) user.lastName = lastName
    if (age) user.age = age

    res.send(`user with id ${id} was updated`)
}