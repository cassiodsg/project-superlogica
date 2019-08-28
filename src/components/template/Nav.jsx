import './Nav.css'
import React, { Component } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import arrow from '../../assets/images/arrow-right-small.svg';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }
  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }
  render() {
    const { isExpanded } = this.state;

    return (

        <aside className="menu-area">
            <nav className="nav">
                <div className="menu-icon">
                    <MenuIcon aria-hidden="true" className="menu" onClick={e => this.handleToggle(e)}/>
                </div>
                <div  className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
                  <div className="menu-wrapper">
                    <div className="menu-1">
                      <ul>
                          <li><p>Home</p></li>
                          <li><p>Serviços</p></li>
                          <li><p>Blog</p></li>
                          <li><p>Eventos</p></li>
                      </ul>
                    </div>
                    <div className="menu-2">
                      <ul>
                          <li><p>Entrar</p></li>
                          <li>Experimente Grátis <img src={arrow} alt="" /></li>
                      </ul>
                    </div>

                  </div>
                  
                </div>
               
            </nav>
        </aside>
    );
  }
}

export default Nav;