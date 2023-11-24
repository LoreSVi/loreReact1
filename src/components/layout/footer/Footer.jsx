import FacebookIcon from "@mui/icons-material/Facebook";


function Footer() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center footer pt-1 mt-4">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-9 col-12">
          <p>CASA CENTRAL</p>
          <div className='row d-flex'>
            <span className='col-12'>Buenos Aires.Argentina</span>
            <span className='col-12'>Email: dogstoremila@gmail.com</span>
          </div>
          <div className="col-12">
            <span>CONTACTO VENTAS De 8 a 16 hs: 11012356789 / 110123567891 </span>
          </div>
        </div>
        <div className="col-md-3 col-12 text-center d-flex flex-column justify-content-center align-items-center">
          <div>
            <p>seguinos nuestras redes:</p>
            <FacebookIcon fontSize="large" color="primary" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Footer;
