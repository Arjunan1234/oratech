const MapIframe = () => {
  return (
    <iframe
      title="OraTech Solution"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14057.212235540448!2d77.1982085!3d28.5174588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1e33aea18cd:0xdd2c24cda8f1d31e!2sYour+Location!5e0!3m2!1sen!2sin!4v1692719400000!5m2!1sen!2sin"
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default MapIframe;
