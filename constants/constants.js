module.exports = {

    //Root
    root: 'https://pingpongmessenger.com',
    //Echo
    echoServer: 'https://pingpongmessenger.com',
    echoServerPort: '6001',
    //Secret
    secret: 'secret',

    //Auth
    authorizationEndpoint(){return this.root + '/login'},
    tokenEndpoint(){return this.root + '/oauth/token'},
    revocationEndpoint(){return this.root + '/oauth/revoke'},

    //User
    contactUserEndpoint(){return this.root + '/api/user'},
    profileEndpoint(){return this.root + '/api/user/me'},
    userEndpoint(id){return this.root + '/api/user/${id}'},

    //Message
    getAllMessages(){return this.root + '/api/message'},
    getSingleMessage(id){return this.root + `/api/message/${id}`},
    createNewMessage(id){return this.root + `/api/message/${id}`}
    
}
