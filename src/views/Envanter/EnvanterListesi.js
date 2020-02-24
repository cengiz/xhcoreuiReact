import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import usersData from '../Users/UsersData';
import firebase, { auth, provider } from '../../firebase';

function EnvanterRow(props) {
  const envanter = props.envanter
  const envanterLink = `/envanter/${envanter.id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
    <tr key={envanter.id.toString()}>
      <th scope="row"><Link to={envanterLink}>{envanter.id}</Link></th>
      <td><Link to={envanterLink}>{envanter.name}</Link></td>
      <td>{envanter.registered}</td>
      <td>{envanter.role}</td>
      <td><Link to={envanterLink}><Badge color={getBadge(envanter.status)}>{envanter.status}</Badge></Link></td>
    </tr>
  )
}

class EnvanterListesi extends Component {

    constructor(props) {
        super(props);
        
        //this.ref = firebase.firestore().collection('Envanterler');
        //const ref = firebase.firestore().collection('Envanterler');
        //console.log('ref:'+this.ref);
        this.unsubscribe = null;
        this.state = {
            envanterler: []
        };

        this.getEnvanterler();
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.getEnvanterler();
    };

    componentWillMount(){
        console.log('componentWillMount');
        this.getEnvanterler()
      }

      getCurrentUsername() {
        this.auth = firebase.auth();
        return this.auth.currentUser && this.auth.currentUser.displayName;
      }

    getEnvanterler() {
        this.auth = firebase.auth();
        let envanterler = [];
        console.log(this.getCurrentUsername());  
        firebase.firestore().collection('Envanterler').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
                // böylede çalıştı : envanterler.push(doc.data());
                const { id, Marka, StokAdi, Status, Aciklama } = doc.data();
                envanterler.push({
                    key: doc.id,
                    id:doc.id,
                    Marka,
                    StokAdi,
                    Status,
                    Aciklama
                });
            });
            this.setState({
                envanterler
              })
        });

        //let envanterler = []
        /*
        firebase.database().ref(`Firmalar`).once('value', snapshot => {
          console.log('ref:'+snapshot);
          snapshot.forEach(snap => {
            console.log('snap:'+snap);
            envanterler.push(snap.val())
          })
          this.setState({
            envanterler
          })
        })
        */
      }
    
  render() {

    //const userList = usersData.filter((user) => user.id < 10)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={6}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Entanter <small className="text-muted">example</small>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">StokAdi</th>
                      <th scope="col">Marka</th>
                      <th scope="col">Aciklama</th>
                      <th scope="col">status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.envanterler.map(kayit =>
                    <tr key={kayit.key}>
                        <td><Link to={`/Envanter/${kayit.key}`}>{kayit.StokAdi}</Link></td>
                        <td>{kayit.StokAdi}</td>
                        <td>{kayit.Marka}</td>
                        <td>{kayit.Aciklama}</td>
                        <td>{kayit.Status}</td>
                    </tr>
                    )}

                   {/* {this.state.firmalar.map((envanter, index) =>
                      <EnvanterRow key={index} envanter={envanter}/>
                    )}
                    */}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default EnvanterListesi;
