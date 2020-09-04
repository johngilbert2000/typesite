import React, { useState, useContext } from 'react';
import {motion} from 'framer-motion';
import { StoreContext } from '../../storeContext';


const ContactBlock: React.FunctionComponent = () => {
  const Context = useContext(StoreContext);
  const [lang, setLang] = Context.lang;

  const [msgSent, setMsgSent] = useState(false);
  const submitHandler = (e: any) => {
    e.preventDefault();
    setMsgSent(!msgSent);
  };

  const init = {opacity: 0, scale: 1};
  const final = {opacity: 1, scale: 1};
  const trans = {type: 'spring', duration: 0.2, stiffness: 120, delay: 0.6};
  
  return(
    <div className="contact-bloc">
      {(lang==="english") && (
        <div className="contact-bloc">
            {
              !msgSent && (
              <div className="card">
                <motion.h1 initial={{opacity: 0, x: -300}} animate={{opacity: 1, x: 0}} transition={{type: "spring", duration: 0.2, stiffness: 70}}>
                  Contact
                </motion.h1>
                <motion.p initial={{...init, scale: 0.2}} animate={final} transition={{...trans, delay: 0.4, stiffnes: 120}}>
                  <i className="far fa-envelope"></i>
                </motion.p>

                <motion.input type="text" name="name" id="contact-name" placeholder="Your Name" initial={init} animate={final} transition={{...trans, delay: 0.7}} />
                <motion.input type="email" name="email" id="contact-email" placeholder="Your Email" initial={init} animate={final} transition={{...trans, delay: 0.8}} />
                <motion.textarea name="contact-message" id="contact-message" placeholder="Message" initial={init} animate={final} transition={{...trans, delay: 0.9}} ></motion.textarea>
                <motion.button className="btn draw-border" type="submit" onClick={submitHandler} initial={init} animate={final} transition={{...trans, delay: 1}}>Submit</motion.button>
              </div>
              )
            }
            {
              msgSent && (
                <div className="card">
                  <div className="message-sent">
                    <motion.h1 initial={{y:100}} animate={{y:0}} transition={{...trans, delay: 0}}>Message Sent</motion.h1>
                    <p><motion.i className="far fa-check-circle fa-6x" initial={{opacity:0, scale: 0.5}} animate={{opacity:1, scale: 1}} transition={{delay: 0.3, duration: 0.4}}></motion.i></p>
                  </div>
                </div>
              )
            }
        </div>
      ) || (lang==="spanish") && (
        <div className="contact-bloc">
            {
              !msgSent && (
              <div className="card">
                <motion.h1 initial={{opacity: 0, x: -300}} animate={{opacity: 1, x: 0}} transition={{type: "spring", duration: 0.2, stiffness: 70}}>
                  Contact
                </motion.h1>
                <motion.p initial={{...init, scale: 0.2}} animate={final} transition={{...trans, delay: 0.4, stiffnes: 120}}>
                  <i className="far fa-envelope"></i>
                </motion.p>

                <motion.input type="text" name="name" id="contact-name" placeholder="Your Name" initial={init} animate={final} transition={{...trans, delay: 0.7}} />
                <motion.input type="email" name="email" id="contact-email" placeholder="Your Email" initial={init} animate={final} transition={{...trans, delay: 0.8}} />
                <motion.textarea name="contact-message" id="contact-message" placeholder="Message" initial={init} animate={final} transition={{...trans, delay: 0.9}} ></motion.textarea>
                <motion.button className="btn draw-border" type="submit" onClick={submitHandler} initial={init} animate={final} transition={{...trans, delay: 1}}>Submit</motion.button>
              </div>
              )
            }
            {
              msgSent && (
                <div className="card">
                  <div className="message-sent">
                    <motion.h1 initial={{y:100}} animate={{y:0}} transition={{...trans, delay: 0}}>Message Sent</motion.h1>
                    <p><motion.i className="far fa-check-circle fa-6x" initial={{opacity:0, scale: 0.5}} animate={{opacity:1, scale: 1}} transition={{delay: 0.3, duration: 0.4}}></motion.i></p>
                  </div>
                </div>
              )
            }
        </div>
      ) || (lang==="chinese_traditional") && (
        <div className="contact-bloc">
            {
              !msgSent && (
              <div className="card">
                <motion.h1 initial={{opacity: 0, x: -300}} animate={{opacity: 1, x: 0}} transition={{type: "spring", duration: 0.2, stiffness: 70}}>
                  Contact
                </motion.h1>
                <motion.p initial={{...init, scale: 0.2}} animate={final} transition={{...trans, delay: 0.4, stiffnes: 120}}>
                  <i className="far fa-envelope"></i>
                </motion.p>

                <motion.input type="text" name="name" id="contact-name" placeholder="Your Name" initial={init} animate={final} transition={{...trans, delay: 0.7}} />
                <motion.input type="email" name="email" id="contact-email" placeholder="Your Email" initial={init} animate={final} transition={{...trans, delay: 0.8}} />
                <motion.textarea name="contact-message" id="contact-message" placeholder="Message" initial={init} animate={final} transition={{...trans, delay: 0.9}} ></motion.textarea>
                <motion.button className="btn draw-border" type="submit" onClick={submitHandler} initial={init} animate={final} transition={{...trans, delay: 1}}>Submit</motion.button>
              </div>
              )
            }
            {
              msgSent && (
                <div className="card">
                  <div className="message-sent">
                    <motion.h1 initial={{y:100}} animate={{y:0}} transition={{...trans, delay: 0}}>Message Sent</motion.h1>
                    <p><motion.i className="far fa-check-circle fa-6x" initial={{opacity:0, scale: 0.5}} animate={{opacity:1, scale: 1}} transition={{delay: 0.3, duration: 0.4}}></motion.i></p>
                  </div>
                </div>
              )
            }
        </div>
      ) || (lang==="chinese_simplified") && (
        <div className="contact-bloc">
            {
              !msgSent && (
              <div className="card">
                <motion.h1 initial={{opacity: 0, x: -300}} animate={{opacity: 1, x: 0}} transition={{type: "spring", duration: 0.2, stiffness: 70}}>
                  Contact
                </motion.h1>
                <motion.p initial={{...init, scale: 0.2}} animate={final} transition={{...trans, delay: 0.4, stiffnes: 120}}>
                  <i className="far fa-envelope"></i>
                </motion.p>

                <motion.input type="text" name="name" id="contact-name" placeholder="Your Name" initial={init} animate={final} transition={{...trans, delay: 0.7}} />
                <motion.input type="email" name="email" id="contact-email" placeholder="Your Email" initial={init} animate={final} transition={{...trans, delay: 0.8}} />
                <motion.textarea name="contact-message" id="contact-message" placeholder="Message" initial={init} animate={final} transition={{...trans, delay: 0.9}} ></motion.textarea>
                <motion.button className="btn draw-border" type="submit" onClick={submitHandler} initial={init} animate={final} transition={{...trans, delay: 1}}>Submit</motion.button>
              </div>
              )
            }
            {
              msgSent && (
                <div className="card">
                  <div className="message-sent">
                    <motion.h1 initial={{y:100}} animate={{y:0}} transition={{...trans, delay: 0}}>Message Sent</motion.h1>
                    <p><motion.i className="far fa-check-circle fa-6x" initial={{opacity:0, scale: 0.5}} animate={{opacity:1, scale: 1}} transition={{delay: 0.3, duration: 0.4}}></motion.i></p>
                  </div>
                </div>
              )
            }
        </div>
      )}

    </div>

  );
}

export default ContactBlock;


// {(lang==="english") && () || (lang==="spanish") && () || (lang==="chinese_traditional") && () || (lang==="chinese_simplified") && ()}