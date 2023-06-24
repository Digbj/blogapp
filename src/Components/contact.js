import React from "react";
import { AiOutlineArrowRight,AiOutlineGoogle } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook ,FaTwitter} from "react-icons/fa";
const Contact=()=>{
    return(
        <div className="cont" id="about">
            <div className="W1">
                <h3>About Us</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia atque nemo ad modi officiis. </p>
            </div>
            <div className="W1">
                <h3>Newsletter</h3>
                <p>Stay update with our latest</p>
                <div><input id="inpt" placeholder="Email.."/><span><AiOutlineArrowRight/></span></div>
            </div>
            <div className="W1">
                <h3>Follow us</h3>
                <p>Let us be Social</p>
                <div id="icons">
                    <a href="https://www.facebook.com/"><FaFacebook/></a>
                    <a href="https://www.instagram.com/"><BsInstagram/></a>
                    <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"><FaTwitter/></a>
                    <a href="https://accounts.google.com/v3/signin/identifier?dsh=S-1744096990%3A1687595171506974&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ifkv=Af_xneF5bT1UaXomqX_nmU5N3g0JcM3AHvzDBfn9ZjuOOqSEp0k6sDIR4UHx9UN1ECtjZmHfvwA2RQ&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin"><AiOutlineGoogle/></a>
                </div>
            </div>
        </div>
    )
}
export default Contact;