import { Form } from "./Form";
import { Social } from "./Social";


export const Contact = () => {

  return (
    <div className="contact-container">
      <section id="contact" className="section-header">
          <div className="line-left" />
          <div className="header-title">Contact me</div>
          <div className="line-right" />
      </section>
      <p>You can send me a message. I will contact you as soon as possible!</p>

      {/* FOrm */}
      <Form />

      <p>Or</p>
      <p>You can contact me through social media</p>

      {/* Socialm */}
      <Social />
    </div>
  )
}
