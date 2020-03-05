import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import './App.css';
import firebase, { db } from '../../firebase';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.ref = db.collection('Firmalar');
    console.log(this.ref.description);
    this.unsubscribe = null;
    this.state = {
      firmalar: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const firmalar = [];
    querySnapshot.forEach((doc) => {
        console.log(doc.data());
      const { id, title, description, author } = doc.data();
      firmalar.push({
        key: doc.id,
        id:doc.id,
        doc, // DocumentSnapshot
        title,
        description,
        author,
      });
    });
    this.setState({
        firmalar
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              Firma Listesi
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/create">Firma Ekle</Link></h4>
            <table className="table table-stripe">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>
                {this.state.firmalar.map(kayit =>
                  <tr key={kayit.id}>
                    <td><Link to={`/Firmalar/${kayit.key}`}>{kayit.title}</Link></td>
                    <td>{kayit.description}</td>
                    <td>{kayit.author}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;