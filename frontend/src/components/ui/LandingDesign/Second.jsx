import logo from "../../../assets/images/clean.png";
import Bucket from "../../../assets/images/bucket.jpeg"; // Import the second image

const Second = () => {
    return(
        <div className="flex h-screen justify-center items-start pt-16 mb-16">
            <div className="flex flex-col items-center">
                <img src={logo} alt="clean" className="w-[5rem] h-[5rem]" />
                <h1 className="text-3xl font-semibold text-center mt-4">
                    We remove dirt, grime, and stains with high-pressure water,<br />
                    restoring your surfaces quickly and efficiently.<br />
                    Let us bring your property back to life!
                </h1>
                <img src={Bucket} alt="another-image" className="w-[60rem] h-auto  mt-6" /> {/* New image below content */}
            </div>
        </div>
    );
}

export default Second;
