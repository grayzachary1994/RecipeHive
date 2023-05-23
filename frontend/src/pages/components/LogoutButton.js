import useAuth from "../../auth/useAuth";

function LogoutButton() {
    const { setAuth } = useAuth();

    function handleClick() {
        setAuth(['', '', '', '']);
    }
    return (
        <div className="logout-button">
            <button onClick={handleClick}>Log Out</button>
        </div>
    );
}

export default LogoutButton;