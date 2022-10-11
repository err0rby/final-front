import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./emailVerify.module.css";
import axios from "axios"

const EmailVerifyPage = () => {

  const navigate = useNavigate();

  const [validUrl, setValidUrl] = useState(false);
  const [msg, setMsg] = useState({});
  const params = useParams();

  const handleNavigate = () => {
    navigate("/");
  };

  const verifyEmailUrl = async () => {
    try {
        const url = `http://localhost:3030/user/${params.id}/verify/${params.token}`
        const {data} = await axios.get(url)
        setMsg(data)
        setValidUrl(true)
    } catch (error) {
        setValidUrl(false)
    }
}

  useEffect(() => {
    verifyEmailUrl()
  },[setValidUrl])

  return (
    <div className={styles.container}>
      {validUrl ? (
        <div className={styles.message} onClick={() => handleNavigate()}><h2>{msg.message}</h2></div>
      ) : (
        <div><h1>404 <h2>NOT FOUND</h2></h1></div>
      )}
    </div>
  );
};

export default EmailVerifyPage;
