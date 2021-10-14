import app from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/storage'
// import 'firebase/compat/auth'


import firebaseConfig from './config'

class Firebase{
    constructor(){
        if(!app.apps.length){
            app.initializeApp(firebaseConfig)
        }
      
        this.db = app.firestore()
        this.storage = app.storage()
        // this.auth = app.auth()
    }

    // Registrar un usuario

    // async registrar(nombre, email, password){
    //     const nuevoUsuario = await this.auth.createUserWithEmailAndPassword(email, password)
    //     console.log(nuevoUsuario)
    //     return await nuevoUsuario.user.updateProfile({
    //         displayName: nombre
    //     })
    // }

    // async login(email, password){
    //     return this.auth.signInWithEmailAndPassword(email, password)
    // }

    // async cerrarSesion(){
    //     await this.auth.signOut()
    // }


}


const firebase = new Firebase()

export default firebase;