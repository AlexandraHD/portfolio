import { useState } from "react";
import emailjs from '@emailjs/browser';

export const useForm = (refForm) => {
    const [info, setInfo] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [showPopup, setShowPopup] = useState(false);

    const handleChange = ({target}) => {
        const {name, value} = target;
        setInfo({...info, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const serviceId = 'service_3qlvgg8';
        const templateId = 'template_lvai6b3';
        const apiKey = 'AHzm4-MPEeyoFxAdj';

        emailjs.sendForm(serviceId, templateId, refForm.current, apiKey)
        .then(result => {
            console.log(result.status, result.text);
            if(result.status === 200) {
                setShowPopup(true);
                onResetForm();
            }
        })
        .catch(error => console.log(error));
    };

    const onResetForm = () => {
        setInfo( {
            name: '',
            email: '',
            message: ''
        } );
    }

    return {
        ...info,
        info,
        handleChange,
        handleSubmit,
        onResetForm,
        showPopup,
        setShowPopup
    }
}