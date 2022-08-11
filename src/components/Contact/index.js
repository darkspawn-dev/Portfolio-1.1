import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
      return () => {setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)}
    }, [])
    
    const sendEmail = (e) => {
      e.preventDefault()
  
      emailjs
        .sendForm(
          'service_k22v38g',
          'template_x2w862j',
          form.current,
          'CWnSjIXrzs4swq65q'
        )
        .then(
          () => {
            alert('Message successfully sent!')
            window.location.reload(false)
          },
          () => {
            alert('Failed to send the message, please try again')
          }
        )
    }

    return (
        <>
          <div className="container contact-page">
            <div className="text-zone">
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                  idx={15}
                />
              </h1>
              <p>
               Je suis intéréssé par le devfront, très motivé à parfaire mes
               connaissances dans ces domaines. Si vous avez des questions ou autre n'hésitez pas à me contacter.
               en utilisant le formulaire ci-dessous. 
              </p>
              <div className="contact-form">
                <form ref={form} onSubmit={sendEmail}>
                  <ul>
                    <li className="half">
                      <input placeholder="Name" type="text" name="name" required />
                    </li>
                    <li className="half">
                      <input
                        placeholder="Email"
                        type="email"
                        name="email"
                        required
                      />
                    </li>
                    <li>
                      <input
                        placeholder="Subject"
                        type="text"
                        name="subject"
                        required
                      />
                    </li>
                    <li>
                      <textarea
                        placeholder="Message"
                        name="message"
                        required
                      ></textarea>
                    </li>
                    <li>
                      <input type="submit" className="flat-button" value="SEND" />
                    </li>
                  </ul>
                </form>
              </div>

            </div>

          </div>

          <Loader type="pacman" />
        </>
      )
    }
    
    export default Contact