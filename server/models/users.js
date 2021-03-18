/*

*/

const list = [
    {
        firstName: 'Jared',
        lastName: 'Finn',
        handle: '@jaredfinn',
        pic: 'https://bulma.io/images/placeholders/96x96.png',
        password: 'Me',
    },
    {
        firstName: 'Kamala',
        lastName: 'Harris',
        handle: '@vp',
        pic: 'https://bulma.io/images/placeholders/96x96.png',
        password: 'Her',
    },
    {
        firstName: 'John',
        lastName: 'Smith',
        handle: '@johnsmith',
        pic: 'https://bulma.io/images/placeholders/96x96.png',
        password: 'BeepBop',
    },
];

module.exports.GetAll = () => list;
module.exports.Get = (user_id) => list[user_id];
module.exports.GetByHandle = (handle) => ({ ...list.find( (x, i) => x.handle == handle ), password: undefined }) 
module.exports.Add = ( user ) => {
    if(!user.firstName){
        throw "First Name is Required"
    }
    list.push(user);
    return { ...user, password: undefined }
}
module.exports.Update = (user_id, user ) => {
    const oldObj = list[user_id];
    if(user.firstName){
        oldObj.firstName = user.firstName;
    }
    if(user.firstName){
        oldObj.lastName = user.lastName;
    }
    if(user.firstName){
        oldObj.handle = user.handle;
    }
    if(user.firstName){
        oldObj.pic = user.pic;
    }
    return { ...oldObj, password: undefined };
}
module.exports.Delete = (user_id) => {
    const user = list[user_id];
    list.splice(user_id, 1);
    return user;
}