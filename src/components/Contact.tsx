import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useRef} from "react";
import emailjs from '@emailjs/browser';
import Image from "next/image";
import chat from '../../public/chat.png'


export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();
  const [loading, setLoading] = useState(false)


  var form = useRef(null);


  var templateParams = {
    name: name,
    email: email,
    message: message
}


const submitHandler = (e: any) => {
  e.preventDefault();

  setLoading(true);

  emailjs.sendForm('service_7hrbqss', 'template_mgwuyb3', e.target, 'nHEon9fDamYcsCeKw')
    .then((result) => {
        console.log(result.text);
        alert('Your message has been sent!')
        router.refresh();
    }, (error) => {
        console.log(error.text);
    });


  setLoading(false);
};


  return (
    <div id="contact" className="lg:p-20 p-10 bg-[#CED9B8]">
      <h1 className="text-5xl font-bold text-dark">Have any questions?</h1>
      <h1 className="text-xl font-medium text-dark pt-4">
        Contact us with any queries you have!
      </h1>
      <h1 className="text-md font-medium text-dark pt-4">
        All messages will be replied to within a 1-2 business days.
      </h1>
      <div className="grid place-content-center">
      <div className="lg:p-10 mt-8 lg:flex flex-wrap gap-10">
        <div className="flex-3 shadow-xl rounded-3xl lg:p-10 p-4 grid gap-10 bg-back text-dark text-lg">

          <form ref={form} onSubmit={submitHandler} className="grid gap-4">
            <div className="">
            <p className="">Name <span className="text-red-500">*</span></p>
            <input name="name" type="text" onChange={(e)=>{setName(e.target.value)}} value={name} className="rounded-2xl py-2 px-4 bg-white w-900" placeholder="John Doe" required />
            </div>

            <div className="">
            <p>Email <span className="text-red-500">*</span></p>
            <input name="email" type="email" onChange={(e)=>{setEmail(e.target.value)}} value={email} className="rounded-2xl py-2 px-4 bg-white w-900" placeholder="johndoe@gmail.com" required/>
            </div>

            <div className="">
            <p>Message <span className="text-red-500">*</span></p>
            <textarea name="message" onChange={(e)=>{setMessage(e.target.value)}} value={message} className="rounded-2xl py-2 px-4 bg-white w-900" placeholder="Enter your message ..." required />
            </div>


            <div>
              {!loading && <motion.button type="submit" className="bg-secondary rounded-3xl text-white px-4 py-2" whileHover={{scale:1.1, transition: {duration: 0.3}}}>
                Send!
              </motion.button>}

              {loading && <motion.button disabled className="bg-secondary rounded-3xl text-white px-4 py-2" whileHover={{scale:1.1, transition: {duration: 0.3}}}>
                Loading...
              </motion.button>}
            </div>
          </form>
          </div>

        <div id="image" className="flex-1">
          <Image alt="" height={500} src={chat}/>
        </div>
      

      </div>
      </div>
    </div>
  );
}
