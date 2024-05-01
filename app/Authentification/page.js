'use client'

import { BsFillShieldLockFill, BsTelephoneFill } from 'react-icons/bs';
import OtpInput from 'otp-input-react';
import { useState } from 'react';
import {CgSpinner} from 'react-icons/cg'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import { auth } from "../firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';
function Auth() {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const[loading, setLoading]= useState(false);
  const[showOTP,setShowOTP]=useState(false);
  const [user,steUser]=useState(null);

  function onCaptchVerify(){
    if(!window.recaptchaverifier){ 
       window.recaptchaVerifier = new RecaptchaVerifier(auth, 
        'recaptcha-container', 
       {
        'size': 'invisible',
           'callback': (response) => {
            onSignup()
           },
            'expired-callback': () => {},
        },
        [auth]
    );
    }
  }
  function onSignup(){
    setLoading(true)
    onCaptchVerify()

    const appVerifier = window.recaptchaVerifier
   
const formatPh ='+' + ph
signInWithPhoneNumber(auth, formatPh, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      setLoading(false);
      setShowOTP(true);
      toast.success('OTP envoyer avec succés!')
     }).catch((error) => {
      console.log(error);
      setLoading(false);
    });
    

  }
  function onOTPverify(){
    setLoading(true)
    window.confirmationResult.confirm(otp).then(async(res)=>{
        console.log(res);
        steUser(res.user);
        setLoading(false);
    
    })
    .catch(err=>{
        console.log(err);
        setLoading(false);
    });
  }

  return (
    <section className='bg-black flex items-center justify-center h-screen'>
        <div className='bg-white w-50 pl-20 pr-20 rounded-lg text-center' >
            <Toaster toasOptions={{ duration: 4000 }}/>
            <div id='recaptcha-container'></div>
            {
                user?(
                
                    <h2 className='text-center text-black font-medium text-2xl mb-6'>
                    Vérifier avec succés
                  </h2>):(
                      
                    <div className='w-full font-bold flex flex-col gap-4 rounded-lg p-4'>
                  <h1 className='text-center leading-normal text-black font-medium text-3xl mb-6'>
                    Bienvenue chez TAXIK
                  </h1><h1 className='font-bold text-2xl'>Vous avez déjà un compte ? <Link className='text-blue-700' href="/"> Connectez-vous</Link></h1>{
           showOTP ?
                  <>
                    <div className='bg-white text-black w-fit mx-auto p-4 rounded-full'>
                      <BsFillShieldLockFill size={30} />
                    </div>
                    <label htmlFor='otp' className='font-bold text-2xl text-white text-center'>
                      Entrez votre OTP
                    </label>
                    <div className="flex justify-center">
                      <OtpInput
                        value={otp}
                        onChange={setOtp}
                        OTPLength={6}
                        otpType="number"
                        disabled={false}
                        autoFocus
                        className="otp-container"
                        />
                        </div>
                        <button onClick={onOTPverify} 
                        className='bg-gray-300 hover:bg-gray-400 w-full flex gap-1 items-center justify-center py-2.5 text-gray-600 rounded'>
                          {
                              loading &&  <CgSpinner size={20} className='mt-1 animate-spin'/>
                          }
                          
                          <span>Vérifier</span>
                        </button>
                      </>:
                      
                      <>
                        <div className='bg-white text-black w-fit mx-auto p-4 rounded-full'>
                          <BsTelephoneFill size={30} />
                        </div>
                        <label htmlFor='' className='font-bold text-xl text-black text-center'>
                         vérifier votre numéro de Téléphone
                        </label>
                        <PhoneInput country={'in'}
                         value={ph} 
                        onChange={setPh}/>
                        <button onClick={onSignup} className='bg-gray-300 hover:bg-gray-400 w-full flex gap-1 items-center justify-center py-2.5 text-gray-600 rounded'>
                          {
                              loading &&  <CgSpinner size={20} className='mt-1 animate-spin'/>
                            }
            
                            <span>Envoyer le code par SMS</span>
                          </button>
                        </>
                } 
                          </div>
                        )
                        }
                        </div>
                    </section>
                );
                }
                
export default Auth;
              
          

