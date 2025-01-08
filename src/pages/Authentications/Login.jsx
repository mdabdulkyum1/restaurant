import { FaFacebook, FaGithub } from "react-icons/fa";
import authBg from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication1.png";
import { Helmet } from "react-helmet-async";
import ContinueGoogle from "../../components/shared/GoogleSignUp/ContinueGoogle";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Foods | Login</title>
      </Helmet>
      <div
        className="min-h-screen flex items-center justify-center px-4"
        style={{
          backgroundImage: `url(${authBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full flex flex-col md:flex-row">
          {/* Illustration Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center mb-6 md:mb-0">
            <img
              src={loginImg}
              alt="Login Illustration"
              className="rounded-lg max-w-full"
            />
          </div>

          {/* Form Section */}
          <div className="w-full md:w-1/2 md:pl-8">
            <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
              Login
            </h2>
            <form className="space-y-4">
              {/* Email Input */}
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Type here"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  required
                />
              </div>

              {/* Password Input */}
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-yellow-600 text-white py-2 rounded-lg font-medium"
              >
                Login
              </button>
            </form>

            {/* Sign Up Link */}
            <p className="text-sm text-gray-500 mt-4 text-center md:text-left">
              Don{"'"}t have an account?{" "}
              <Link to="/signup" className="text-yellow-600 font-medium">
                Sign Up
              </Link>
            </p>

            {/* Social Media Login */}
            <div className="flex items-center justify-center mt-6">
              <p className="text-sm text-gray-500">Or login with</p>
            </div>
            <div className="flex justify-center mt-4 space-x-4">
              {/* Social Media Buttons */}
              <button className="p-3 bg-gray-100 rounded-full shadow-lg">
                <FaFacebook className="text-blue-600" size={24} />
              </button>
              <ContinueGoogle></ContinueGoogle>
              <button className="p-3 bg-gray-100 rounded-full shadow-lg">
                <FaGithub className="text-gray-800" size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
