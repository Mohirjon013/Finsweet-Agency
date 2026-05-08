import axios from "axios"
import { useState } from "react"



const BOT_TOKEN = '8634189073:AAEwycQCD46nx9PJwpB6ie3JANOPclfspWo'
const CHAT_ID = '1419589267'
const API = 'https://api.telegram.org/bot'
function useTelegramForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [status, setStatus] = useState("idle")
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading")
        
        const text = `📬 New message!\n👤 Name: ${name}\n📧 Email: ${email}\n🧩 Subject: ${subject}\n💬 User meesage: ${message}`;
        
        try{
            const res = await fetch(`${API}${BOT_TOKEN}/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ chat_id: CHAT_ID, text })
            })
            if (res.ok) {
                setStatus("success");
                setName("");
                setEmail("");
                setSubject("")
                setMessage("");
            } else {
                setStatus("error");
            }
        }
        catch{
            setStatus('error')
        }
    }
    
    
    return {
        name, setName,
        email, setEmail,
        message, setMessage,
        subject, setSubject,
        status,
        handleSubmit,
    };
}

export default useTelegramForm
