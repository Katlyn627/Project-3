<<<<<<< Updated upstream
// import React, { Component } from 'react';

// // Joana's code starts here

// class Header extends Component {
//   render() {
//       return(
//         <nav className="NavbarItems">
//           <h1 className="navbar-logo">Sike Hike</h1>
//           <div className="menu-icon">
=======
import React, { Component } from 'react';
import { NavbarItems } from "./NavbarItems"
import logo from 'client/public/img/logo.png';
// Joana's code starts here

class Header extends Component {
  render() {
      return(
        <nav className="NavbarItems">
          <h1 className="navbar-logo">Sike Hike<i className={logo}></i></h1>
          <div className="menu-icon">

          </div>
          <ul>
            {NavbarItems.map((item, index) => {
                return (
                  <li key={index}><a className={item.cName} href={item.url}>
                    {item.title}
                    </a></li>
                )
            })} 
          </ul>
        </nav>
      )
  }
}
>>>>>>> Stashed changes

//           </div>
//           <ul>
//             <li><a href=""></a></li>
//           </ul>
//         </nav>
//       )
//   }
// }

// // Joana's code ends here

// const Header = () => {
//   return (
//     <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
//       <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
//         <h1 className="m-0" style={{ fontSize: '3rem' }}>
//           Sike Hike
//         </h1>
//         <p className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
//           Meet your new hiking friends.

//         {/* adding fixing */}
//         </p>
//       </div>
//     </header>
//   );
// };

// export default Header;
