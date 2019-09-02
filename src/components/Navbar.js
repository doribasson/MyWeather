// // // import React from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import { Link } from 'react-router-dom';


// // const Navbar = () => {

// // const style = {
// //   display: 'inline-block',
// //   margin: 10,
// //   marginBottom: 10,
// //   color: "white",
// //   backgroundColor: '#800080',
// // };

// //     const changeColorli = () => {
// //     console.log("color favorite");
// //     return {
// //       backgroundColor: '#f4f4f4'
// //     }
// // }


// //   return (
// //     <nav>
// //       {/* <div className="hamburger">
// //         <div className="line"></div>
// //         <div className="line"></div>
// //         <div className="line"></div>
// //       </div> */}
// //       <ul className="nav-links" >

// //         <li className="li1"> <Link to='/'>Home</Link> </li>
// //          <li className="li2"><Link to='/Favorite' >Favorite</Link></li>
// //       </ul>

// //     </nav >
// //   )
// // }


// // export default Navbar;












// // import React from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import { Link } from 'react-router-dom';


// // function Navbar() {

// //   const style = {
// //     display: 'inline-block',
// //     // margin: 55,
// //     marginBottom: 10,
// //     color: "white",


// //     // backgroundColor: '#800080',
// //   };
// //   // navbar navbar-dark secondary-color
// //   return (
// //     // <div>dffdfd</div>
// //     // <nav className="navbar navbar-expand-lg navbar-light bg-light">
// //     <nav className="navbar navbar-expand-md navbar-dark secondary-color" >
// //       {/* <a className="navbar-brand"> <Link to='/'><h5 style={style}>Home</h5></Link></a> */}
// //       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
// //         <span className="navbar-toggler-icon"></span>
// //       </button>
// //       <div className="collapse navbar-collapse" id="navbarText"> 
// //         <ul className="navbar-nav ml-auto">
// //           <li className="nav-item active">
// //             <span className="nav-link"> <Link to='/'><div className="homeFavorite">Home</div></Link> <span className="sr-only">(current)</span></span>
// //           </li>
// //           <li className="nav-item active">
// //             <span className="nav-link"> <Link to='/favorite'><div className="homeFavorite">Favorite</div></Link> <span className="sr-only">(current)</span></span>
// //           </li>
// //         </ul>
// //       </div>
// //     </nav>
// //   );

// // }

// // export default Navbar;






// // import React from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import { Link } from 'react-router-dom';


// // function Navbar() {

// //   // const style = {
// //   //   display: 'inline-block',
// //   //   // margin: 55,
// //   //   marginBottom: 10,
// //   //   color: "white",
// //   //   // backgroundColor: '#800080',
// //   // };

// //   return (

// // <nav className="mb-1 navbar navbar-expand-lg navbar-dark info-color">
// //   <a className="navbar-brand" href="#">Navbar</a>
// //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
// //     aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
// //     <span className="navbar-toggler-icon"></span>
// //   </button>
// //   <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
// //     <ul className="navbar-nav ml-auto">
// //       <li className="nav-item active">
// //         <a className="nav-link"> <Link to='/'>Home</Link>
// //           <span className="sr-only">(current)</span>
// //         </a>
// //       </li>
// //       <li className="nav-item">
// //         <a className="nav-link"> <Link to='favorite'>favorite</Link> </a>

// //       </li>
// //       <li className="nav-item dropdown">
// //         <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-4" data-toggle="dropdown"
// //           aria-haspopup="true" aria-expanded="false">
// //           <i className="fas fa-user"></i> Profile </a>
// //         <div className="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbarDropdownMenuLink-4">
// //           <li className="dropdown-item"> <Link to='/'>Home</Link>></li>
// //           <li className="dropdown-item"> <Link to='/Favorite'>Favorite</Link></li>
// //         </div>
// //       </li>
// //     </ul>
// //   </div>
// // </nav>

// //   );

// // }

// // export default Navbar;















// // import React from 'react';
// // import useDarkMode from 'use-dark-mode';

// // import {Toggle} from "react-toggle-component"

// // const Navbar = () => {
// //   const darkMode = useDarkMode(false);

// //   return (
// //     <div>
// //       <button type="button" onClick={darkMode.disable}>
// //         ☀
// //       </button>
// //       <Toggle name="toggle-1" checked={darkMode.value} onChange={darkMode.toggle} />
// //       <button type="button" onClick={darkMode.enable}>
// //         ☾
// //       </button>
// //     </div>
// //   );
// // };
// // export default Navbar;




// // import React from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import { Link } from 'react-router-dom';


// // function Navbar() {
// //   return (
// //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
// //       <ul className="navbar-nav ">
// //         <li className="nav-item ">
// //           <span className="nav-link"><Link to='/'>Home</Link></span>
// //         </li>
// //         <li className="nav-item">
// //           <span className="nav-link"><Link to='favorite'>Favorite</Link></span>
// //         </li>
// //       </ul>
// //     </nav>

// //   )
// // }

// // export default Navbar;















// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link, NavLink } from 'react-router-dom';


// function Navbar() {
//   return (
//     // navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar
//     <nav className="navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
//       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation" >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
//         <span className="navbar-brand">Herolo Weather Task</span>
//         <ul className="navbar-nav ml-auto mt-2 mt-lg-0 ">
//           <li className="nav-item active">
//             <span className="nav-link"> <NavLink to='/'><span className="navbar-brand">Home</span></NavLink></span><span className="sr-only">(current)</span>
//           </li>
//           <li className="nav-item">
//             <span className="nav-link"><NavLink to='favorite'><span className="navbar-brand">Favorites</span></NavLink></span>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   )
// }
// export default Navbar;
