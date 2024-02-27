import "../Styles/Error.css"
const Error = () => {
    return (
        <div className="error">
            <h1>404 </h1>
            <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="" />
            <div class="contant_box_404">
                <h3 class="h2">
                    Look like you're lost
                </h3>

                <p>the page you are looking for not available!</p>
            </div>
        </div>
    );
}

export default Error;