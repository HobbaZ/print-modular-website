function getCurrentYear() {
  let date = new Date();
  return date.getFullYear();
}

const footer = (document.querySelector("#footer").innerHTML = `
    <div class="container-fluid">
    <hr />
    <div class="row">
    <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 class="text-uppercase">Print Modular, ${getCurrentYear()}</h5>

        <p>
        Print Modular is a small 3D printer business based in Sydney, NSW, Australia. We develop and create our own designs with an interest in modular solutions to everyday problems and sometimes not so everyday problems. </p>
        </p><b>We only print our products and are not available for outside commissions.</b>
        </p>
      </div>

      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase">Navigation</h5>

        <ul class="list-unstyled mb-0">
          <li>
            <a href="#!" class="text-dark"><i class="fa-solid fa-house"></i> Home</a>
          </li>
          <li>
            <a href="#!" class="text-dark"><i class="fa-solid fa-address-card"></i> About</a>
          </li>
          <li>
            <a href="#!" class="text-dark"><i class="fa-solid fa-screwdriver-wrench"></i> Projects</a>
          </li>
          <li>
            <a href="#!" class="text-dark"><i class="fa-solid fa-boxes-stacked"></i> Products</a>
          </li>
          <li>
            <a href="#!" class="text-dark"><i class="fa-solid fa-message"></i> Contact Us</a>
          </li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase">Socials</h5>

        <ul class="list-unstyled mb-0">
          <li>
            <a href="#!" class="text-dark"><i class="fa-brands fa-etsy"></i> Etsy</a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCBeAOp5JIZNvlWO-_92DXBA" class="text-dark"><i class="fa-brands fa-youtube"></i> Youtube</a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@printmodular" class="text-dark"><i class="fa-brands fa-tiktok"></i> Tiktok</a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@printmodular" class="text-dark"><i class="fa-brands fa-instagram"></i> Instagram</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
    `);
