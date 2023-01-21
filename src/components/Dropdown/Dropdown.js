// import React, { useState } from "react";
// import './Dropdown.css';

// const Dropdown = ({handleStateOfUrl}) => {

//     const [open, setOpen] = useState(false);

//     return (
//         <div className="Dropdown">
//             <div className="menu-container">
//                 <div className="menu-trigger" onClick={() => {setOpen(!open)}}>
//                     <div className="pseudoimage"></div>
//                 </div>
//                 <div className={`dropdown-menu ${open? 'acitve' : 'inactive'}`}>
//                 <ul className="ul">
//                 <li onClick={() => handleStateOfUrl('animal')} className="dropdownItem">animal</li>
//                 <li className="dropdownItem">career</li>
//                 <li className="dropdownItem">celebrity</li>
//                 <li className="dropdownItem">dev</li>
//                 <li className="dropdownItem">explicit</li>
//                 <li className="dropdownItem">fashion</li>
//                 <li className="dropdownItem">food</li>
//                 <li className="dropdownItem">history</li>
//                 <li className="dropdownItem">money</li>
//                 <li className="dropdownItem">movie</li>
//                 <li className="dropdownItem">music</li>
//                 <li className="dropdownItem">political</li>
//                 <li className="dropdownItem">religion</li>
//                 <li className="dropdownItem">science</li>
//                 <li className="dropdownItem">sport</li>
//                 <li className="dropdownItem">travel</li>
                    
//                 </ul>
//                 </div>
//             </div>
//         </div>
//     )
// }

// // const DropdownItem = (props) => {
// //     return(
// //         <li className="dropdownItem">
            
// //         </li>
// //     );
// // }


// export default Dropdown;