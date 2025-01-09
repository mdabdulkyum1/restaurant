import { FaFacebook, FaGithub } from "react-icons/fa";
import authBg from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication1.png";
import { Helmet } from "react-helmet-async";
import ContinueGoogle from "../../components/shared/GoogleSignUp/ContinueGoogle";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/GetAuthInfo/useAuth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { loadCaptchaEnginge, LoadCanvasTemplate } from 'react-simple-captcha';



const Login = () => {
  const [err, setErr] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const targetPath = location?.state ? `${location.state}` : "/";

  const onSubmit = async (data) => {
    const { email, password } = data;

    try {
      const result = await loginUser(email, password);
      if (result?.user) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        navigate(targetPath);
      }
    } catch (error) {
      setErr(error.message);
    }
    console.log(email, password);
  };

  useEffect(()=>{
    loadCaptchaEnginge(6); 
  },[])

  return (
    <>
      <Helmet>
        <title>Foods | Login</title>
      </Helmet>
      <div className="absolute top-2 left-52">
        <Link to="/">
          <button className="btn btn-sm bg-yellow-500">Back to home</button>
        </Link>
      </div>
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
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                  {...register("email", { required: true })}
                  placeholder="Type here"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  required
                />
                {errors.email && (
                  <span className="text-red-500">Email field is required</span>
                )}
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
                  type="text"
                  id="password"
                  name="password"
                  {...register("password", {
                    required: "Password field is required",
                  })}
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 rounded-lg p-2"
                />

                {/* Error Messages */}
                {errors.password && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {err && <span className="text-red-500">{err}</span>}
              </div>
              {/* Captcha Input */}
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="password"
                >
                 <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  id="captcha"
                  name="captcha"
                  {...register("captcha", {
                    required: "Password field is required",
                  })}
                  placeholder="Enter Captcha"
                  className="w-full border border-gray-300 rounded-lg p-2"
                />

                {/* Error Messages */}
                {errors.captcha && (
                  <span className="text-red-500">
                    {errors.captcha.message}
                  </span>
                )}
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
