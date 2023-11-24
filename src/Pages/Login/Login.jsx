import { useContext, useEffect,  useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate,validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const Login = () => {
    const [disabled,setDisabled]= useState(true);
    const navigate= useNavigate();
    const location= useLocation();
    const from = location.state?.from?.pathname || "/"

    const {login}= useContext(AuthContext)

    useEffect(()=>{
        loadCaptchaEnginge(6);
    },[])
    const handleLogin= event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        
        login(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user)
            Swal.fire({
              title: "Log In!",
              text: "SuccessFull!",
              icon: "success"
            });
            navigate(from, {replace:true})
            


        })
    }

    const handleValidate= (e) =>{
        const user_captcha_value = e.target.value;
        console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
  <div className="hero-content flex-col lg:flex">
    <div className="text-center">
      <h1 className="text-5xl  font-bold">Login now!</h1>
      <p className="py-6 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered"  />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            <p>New here? <Link to={'/signup'}>SingUp</Link></p>
          </label>
        </div>
        <div className="flex flex-col">
          <label className="label">
          <LoadCanvasTemplate />
         </label>
          <input type="text" onBlur={handleValidate} name="captcha" placeholder="type the text above" className="input input-bordered" required />
          <br />
        </div>
        <div className="form-control mt-6">
          <input disabled={disabled} type="submit" className="btn btn-primary" value="Login" />
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;