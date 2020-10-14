import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import * as messageAPI from '../../services/messages-api';
import MessageListPage from '../../components/MessageListPage/MessageListPage';
import AddMessagePage from '../../components/AddMessagePage/AddMessagePage';
import MessageDetailPage from '../../components/MessageDetailPage/MessageDetailPage';
import EditMessagePage from '../../components/EditMessagePage/EditMessagePage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      messages: []
    };
  }

  async componentDidMount() {
    const messages = await messageAPI.getAll();
    this.setState({messages});
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
      messages: [...state.messages, newMessage]
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
              handleAddMessage={this.handleAddMessage}
            />
          } />
          <main>
            <Route exact path='/' render={({history}) => 
              <MessageListPage
                history={history}
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
          </main>
        </Switch>
      </div>
    );
  }
}

export default App;
