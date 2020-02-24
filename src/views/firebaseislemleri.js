/*
//import app from 'firebase/app';
//import 'firebase/auth';
//import 'firebase/firebase-firestore';
import app from '../firebase';

const ayarlar = {
  apiKey: "AIzaSyD2U-4w-FU7U1Jh8ZQkid-LUn4PWmiASKM",
  authDomain: "minienvanter.firebaseapp.com",
  databaseURL: "https://minienvanter.firebaseio.com",
  projectId: "minienvanter",
  storageBucket: "minienvanter.appspot.com",
  messagingSenderId: "147745854938",
  appId: "1:147745854938:web:7cd95dbb6e0545d4a51ce3"
};

class firebaseislemleri {
  constructor() {

    this.state = {
        title: 'baslik',
        description: 'aciklama',
        author: 'kullanici'
    };

    //app.initializeApp(ayarlar);
    //firebase.initiliazeApp(ayarlar);
    this.auth = app.auth();
    this.db = app.firestore();
    this.ref = this.db.collection('Firmalar');
  }

  login2(email, password) {
    this.auth.signInWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      return error;
    });
  }

  login(email, password) {
    const provider = new this.app.firebase.auth.GoogleAuthProvider();

    this.app.auth.signInWithPopup(provider).then((result) => {
      this.setState({
          user: result.user
      })
    })

    return app.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
  }

  logout() {
    return app.auth().signOut();
  }

  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name
    });
  }

  addQuote(quote) {
    if (!this.auth.currentUser) {
      return alert('Not authorized');
    }

    return this.db.doc(`users_info/${this.auth.currentUser.uid}`).set({
      quote
    }).catch(
      function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      }
    )};

  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  writeUserData = () => {
    //this.ref.set(this.state);
    const { title, description, author } = this.state;

    this.ref.add({
      title,
      description,
      author
    }).then((docRef) => {
      this.setState({
        title: '',
        description: '',
        author: ''
      });
      //this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });

    console.log("DATA SAVED");
  };

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }

  async  getData() {
    const val = await this.db.doc(`Envanterler/Envanterbilgileri`).get();
    return val;
  }

  async getCurrentUserQuote() {
    const quote = await this.db.doc(`users_info/${this.auth.currentUser.uid}`).get();
    return quote.get('quote');
  }
}

export default new firebaseislemleri()
*/