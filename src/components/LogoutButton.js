import React from "react";
import { useNavigate } from "react-router-dom";

// function LogoutButton({ logout, history }) {
//     const onClick = () => {
//         logout();
//         history.push("/");
//     };
//     return <button onClick={onClick}>Logout</button>;
// }

// export default withRouter(LogoutButton);

const WithRouter = ({ logout, history }) => {
    let navigate = useNavigate();
    const onClick = () => {
        logout();
        navigate("/");
    };
    return <button onClick={onClick}>Logout</button>;
}

export default WithRouter;