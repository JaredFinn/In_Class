//import LoginBadge from "./LoginBadge"
import logo from '../logo.svg';

function Nav() {
    const isActive = false;
    return (
        <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                    <img src={logo} className="App-logo" alt="logo" />
                    Insta-Gratitude
                    </a>
                
                    <a role="button" class={"navbar-burger" + (isActive ? 'is-active' : '')} aria-label="menu" aria-expanded="false" click="isActive = !isActive">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>
                
                <div class={`navbar-menu ${isActive ? 'is-active' : ''}`} class="{'is-active': isActive}">
                    <div class="navbar-start">

                    <router-link to="/feed" class="navbar-item">Feed</router-link>
                    <router-link to="/mywall" class="navbar-item">My Wall</router-link>
                    <router-link to="/Documentation" class="navbar-item">Documentation</router-link>
                
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                        More
                        </a>
                
                        <div class="navbar-dropdown">
                        <router-link to="/about" class="navbar-item">
                            About
                        </router-link>
                        <a class="navbar-item">
                            Jobs
                        </a>
                        <a class="navbar-item">
                            Contact
                        </a>
                        <hr class="navbar-divider" />
                        <a class="navbar-item">
                            Report an issue
                        </a>
                        </div>
                    </div>
                    </div>
                
                    <div class="navbar-end">
                        <router-link to="/Shop" class="navbar-item">Shop</router-link>
                    <div class="navbar-item">
                        {/*<LoginBadge />*/}
                    </div>
                    </div>
                </div>
        </nav>
        );
}

export default Nav;