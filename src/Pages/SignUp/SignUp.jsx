import { useContext, useEffect } from "react";
// import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import SocialLog from "../Shared/Social/SocialLog";
import useAxiosPublic from "../../useAxiosPublic ";



const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data)
    createUser(data.email, data.password)
      .then(result => {
        const logged = result.user;
        console.log(logged);
        updateUserProfile(data.name, data.photo)

          .then(() => {
            const userInfo = {
              name: data.name,
              email: data.email
            }
            axiosPublic.post('/user', userInfo)
              .then(res => {
                if (res.data.insertedId) {
                  reset();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User created successfully",
                    showConfirmButton: false,
                    timer: 1000
                  });
                }
              })
              navigate('/');

          })
          .catch(error => {
            console.log(error)
          });



      })
  }

  useEffect(() => {
    document.title= "T.B.P| Sign Up";
  }, []);
  return (
    <div className="hero min-h-screen bg-base-200">

      <div className="hero-content flex-col lg:flex">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="name" {...register("name", { required: true })} name="name" className="input input-bordered" />
              {errors.name && <span className="text-red-500">This field is required <span className="text-red-600 font-bold">*</span></span>}

            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" {...register("email", { required: true })} name="email" className="input input-bordered" />
              {errors.email && <span className="text-red-500">This field is required <span className="text-red-600 font-bold">*</span></span>}

            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input type="photoUrl " placeholder="Photo" {...register("photo", { required: true })} name="photo" className="input input-bordered" />
              {errors.photo && <span className="text-red-500">This field is required <span className="text-red-600 font-bold">*</span></span>}

            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" {...register("password", {
                required: true, maxLength: 15,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                , minLength: 8
              })} name="password" className="input input-bordered" />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 character</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">password must be less then 20 character</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">password must have one uppercase one lowercase and one special character</p>
              )}


              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-4">
              <input className="primaryBtn btn" type="submit" value="Sign Up" />
            </div>
          </form>
          <div className="divider mt-1 h-0 ">OR</div>
          <div className="form-control ">
            <SocialLog />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;