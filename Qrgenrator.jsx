export const Qrgenrator = () => {
  const [qr, setQr] = useState("");
  const [loading ,setLoading] = useState("false")
  const [dataQr , setDataQr] = useState("")
  const [qrSize ,setQrSize] = useState("150")

  async function generateQr() {
    try{
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}*${qrSize}&data=${encodeURIComponent(dataQr)}`
      setQr(url)
    }catch(error){
      console.log("Error in QR code generator",error);
    }finally{
      setLoading(false)
    }
  }


  return (
    <div className="container">

      <h3>QR CODE GENERATOR APP</h3>
       {loading && <p>please wait...</p>}
       {qr && <img src={qr} className="image" />}
      <br />

      <center>
        <label htmlFor="pasteURL">Paste URL:</label>
        <input type="text" value={dataQr} id="pasteURL" placeholder="Enter the URL link" onChange={(e)=>setDataQr(e.target.value)}/>

        <label htmlFor="QR size">QR size:</label>
        <input type="text" value={qrSize} id="QR size" onChange={(e)=>setQrSize (e.target.value)}/><br />
      </center>

      <div className="button-container">
        <button className="generate" onClick={generateQr}>Generate QR</button>
        <button className="download">Download QR</button>
      </div>

    </div>
  );
}
