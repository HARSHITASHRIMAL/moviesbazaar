// import React  { useState }from "react";
// function LoginPage(){
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
// const handleLogin = () => {

// };
// return(
// <div>
// <h1>Login</h1>
//  <input
//  type="text"
//  placeholder="Username"
//  value={username}
//  onChange={(e) =>
//  setUsername(e.target.value)}
// />
// <input
//  type="password"
//  placeholder="Password"
//  value={password}
//  onChange={(e) =>
//  setpassword(e.target.value)}
// />
// <button onClick={handleLogin}>Login</button>
//  </div>
//  );
//  }
// export default LoginPage;

// import React, { useState } from "react";
// import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

// // import "./Login.css";

// export default function Login() {

//   const [email, setEmail] = useState("");

//   const [password, setPassword] = useState("");

//   function validateForm() {

//     return email.length > 0 && password.length > 0;

//   }

//   function handleSubmit(event) {

//     event.preventDefault();

//   }

//   return (
// <>
//     <div className="Login">

//       <Form onSubmit={handleSubmit}>

//         <Form.Group size="lg" controlId="email">

//           <Form.Label>Email</Form.Label>

//           <Form.Control

//             autoFocus

//             type="email"

//             value={email}

//             onChange={(e) => setEmail(e.target.value)}

//           />

//         </Form.Group>

//         <Form.Group size="lg" controlId="password">

//           <Form.Label>Password</Form.Label>

//           <Form.Control

//             type="password"

//             value={password}

//             onChange={(e) => setPassword(e.target.value)}

//           />

//         </Form.Group>

//         <Button block size="lg" type="submit" disabled={!validateForm()}>

//           Login

//         </Button>

//       </Form>

//     </div>
// </>
//   );

// }
function LoginPage() {
return (
    <>
    <h1>home</h1>
    </>
);

}
export default LoginPage;