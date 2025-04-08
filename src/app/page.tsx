


'use client';

import { useState } from "react";

export default function Home() {

  const [alertMessage, setAlertMessage] = useState({
    message: '',
    status: ''
  });

  const [emailInfo, setEmailInfo] = useState({
    from: '',
    to: '',
    subject: '',
    content: ''
  });

  const sendEmail = async () => {
    // envio del correo

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(emailInfo)
    });

    const responseJson = await response.json();

    if (responseJson.success) {
      setEmailInfo({
        from: '',
        to: '',
        subject: '',
        content: ''
      })

      setAlertMessage({
        message: 'Correo enviado correctamente',
        status: 'success'
      })

    } else {
      setAlertMessage({
        message: 'Error al enviar el correo',
        status: 'error'
      })
    }

  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-3 mt-5">
      <h1 className="text-3xl underline text-blue-500">Send Email - API</h1>
      <div className="max-w-lg bg-blue-100 border-2 border-blue-600 rounded-lg p-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <div className="w-full flex flex-col">
            <label className="text-blue-600 font-semibold">De:</label>
            <input 
              value={ emailInfo.from }
              onChange={(e) => setEmailInfo({ ...emailInfo, from: e.target.value })}
              type="text" 
              placeholder="de" 
              className="border-2 border-blue-600 p-2 rounded placeholder-blue-300" />
          </div>
          <div className="w-full flex flex-col">
            <label className="text-blue-600 font-semibold">Destinatario:</label>
            <input 
              value={ emailInfo.to }
              onChange={(e) => setEmailInfo({ ...emailInfo, to: e.target.value })}
              type="text" 
              placeholder="destinatario" 
              className="border-2 border-blue-600 p-2 rounded placeholder-blue-300" />
          </div>
          <div className="flex flex-col">
            <label className="text-blue-600 font-semibold">Asunto:</label>
            <input
              value={ emailInfo.subject }
              onChange={(e) => setEmailInfo({ ...emailInfo, subject: e.target.value })} 
              type="text" 
              placeholder="asunto" 
              className="border-2 border-blue-600 p-2 rounded placeholder-blue-300" />
          </div>
        </div>
        <div className="w-full h-1/2 flex flex-col mt-2">
          <label className="text-blue-600 font-semibold">Mensaje:</label>
          <textarea 
            value={ emailInfo.content }
            onChange={(e) => setEmailInfo({ ...emailInfo, content: e.target.value })}
            rows={5} 
            placeholder="mensaje" 
            className="border-2 border-blue-600 p-2 rounded placeholder-blue-300">
          </textarea>
        </div>

        {
          alertMessage.message && <div className={`mt-2 p-2 text-center font-semibold ${alertMessage.status === 'success' ? 'bg-green-100 text-green-500 border-2 border-green-500' : 'bg-red-100 text-red-500 border-2 border-red-500'} rounded`}>
            { alertMessage.message }
          </div>
        }

        <div className="flex justify-end items-center">
          <button 
            onClick={sendEmail}
            type="submit"
            className="w-full sm:w-1/3 border-2 border-blue-600 text-blue-600 font-semibold rounded p-2 mt-4 cursor-pointer">
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
