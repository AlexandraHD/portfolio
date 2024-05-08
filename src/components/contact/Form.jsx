import { useRef } from "react";
import { useForm } from "../../hooks/useForm"
import { Popup } from "./Popup";

export const Form = () => {

  const refForm = useRef();
  const { name, email, message, handleSubmit, handleChange, showPopup, setShowPopup } = useForm(refForm);

  return (
    <>
      <form ref={refForm} onSubmit={handleSubmit} className="form-container">
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            className="form-input" 
            value={name} 
            onChange={handleChange}
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            className="form-input" 
            value={email} 
            onChange={handleChange}
            required
          />
          <textarea 
            name="message" 
            id="" 
            rows="10" 
            placeholder="Message" 
            className="form-input" 
            value={message} 
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="form-btn">Send</button>

      </form>

      <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
    </>
  )
}
