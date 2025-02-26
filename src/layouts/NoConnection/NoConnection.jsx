import "./NoConnection.scss"
import NoConnectionImage from "../../assets/images/no-connection.png"
const NoConnection = () => {
    return (
        <div className="no-connection-container">
            <div className="no-connection-image-container">
                <img className='no-connection-image' src={NoConnectionImage} alt="no-connection" />
                <div className="no-connection-text-container">
                <p className='no-connection-text'>
                    عدم برقراری
                    <br />
                    ارتباط با سرور
                </p>
            </div>
            </div>
        </div>
    )
}
export default NoConnection