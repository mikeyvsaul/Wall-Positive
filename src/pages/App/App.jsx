import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import * as messageAPI from '../../services/messages-api';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import MessageListPage from '../../components/MessageListPage/MessageListPage';
import AddMessagePage from '../../components/AddMessagePage/AddMessagePage';
import MessageDetailPage from '../../components/MessageDetailPage/MessageDetailPage';
import EditMessagePage from '../../components/EditMessagePage/EditMessagePage';
import Wall from '../../components/Wall/Wall';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      messages: [],
      place: []
    };
  }

  async componentDidMount() {
    const messages = await messageAPI.getAll();
    this.setState({messages});
    // document.getElementById('circles')
    //   .addEventListener('click', this.handleClick)
  }

  handleClick = (e) => {
    let locX = e.clientX;
    let locY = e.clientY;
    const positionArr = [locX, locY];
    console.log(locX, locY)
    this.props.history.push({
      pathname: '/add',
      state: {
        position: positionArr
      }
    })
    this.setState({position: positionArr})
    // console.log(this.props.history.state.place)
  }

  /*--- Callback Methods ---*/
  handleLogout = () => {
    userService.logout();
    this.setState({user: null})
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()})
  }

  handleAddMessage = async newMessageData => {
    const newMessage = await messageAPI.create(newMessageData);
    this.setState(state => ({
      messages: [...state.messages, newMessage],
      user: userService.getUser()
    }),
    () => this.props.history.push('/'));
  }

  handleDeleteMessage = async id => {
    await messageAPI.deleteOne(id);
    this.setState(state => ({
      messages: state.messages.filter(m => m._id !== id)
    }), () => this.props.history.push('/'));
  }

  handleUpdateMessage = async updatedMessageData => {
    const updatedMessage = await messageAPI.update(updatedMessageData);
    const newMessagesArray = this.state.messages.map(m => 
      m._id === updatedMessage._id ? updatedMessage : m
    );
    this.setState(
      {messages: newMessagesArray},
      () => this.props.history.push('/')
    );
  }

  /*--- Lifecycle Methods ---*/

  render() {
    return (
      <div>
        <NavBar 
        user={this.state.user} 
        handleLogout={this.handleLogout}
        />
        <Switch>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({history}) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/add' render={() => 
            <AddMessagePage
              user={this.state.user}
              state={this.state}
              handleClick={this.handleClick} 
              handleAddMessage={this.handleAddMessage}
            />
          } />
          <Route exact path='/' render={({history}) => 
            <Wall
              history={history}
              messages={this.state.messages}
              handleClick={this.handleClick}
            />
          } />
          <Route exact path='/list' render={({history}) => 
            <MessageListPage
              history={history}
              user={this.state.user}
              messages={this.state.messages}
              handleDeleteMessage={this.handleDeleteMessage}
            />
          } />
          <Route exact path='/details' render={({location}) =>
            <MessageDetailPage location={location} />
          } />
          <Route exact path='/edit' render={({location}) =>
            <EditMessagePage
              handleUpdateMessage={this.handleUpdateMessage}
              location={location}
            />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;
