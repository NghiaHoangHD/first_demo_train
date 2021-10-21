import React from 'react'
import '../../assets/scss/footer.scss'
export default function Footer() {
  return (
    <div>
       <div className="footer" >
            <footer className="page-footer font-small mdb-color lighten-3 pt-4">
              <div className="container">
                <div className='row aboutFooter'>
                  <div className="col-6">
                      <span className="titleFooter">
                        Get our weekly newsletter
                      </span>
                      <div className= 'Email'>
                        <label>
                          Email address*
                        </label>
                        <input type='email' className='inputEmail'></input>
                        <button className='footer__btn'>SUBMIT</button>
                      </div>
                  </div>

                  <div className="col-6">
                    <span>Nghia Hoang</span>
                    <div>
                      <i className="topIcon fab fa-facebook-square"></i>
                      <i className="topIcon fab fa-twitter-square"></i>
                      <i className="topIcon fab fa-pinterest-square"></i>
                      <i className="topIcon fab fa-instagram-square"></i>
                    </div>

                    <div>
                      <div className="footer-copyright py-3">© 2020 Copyright:
                        <a href="https://mdbootstrap.com/">Nghia Hoang 74</a>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="row footer__img">


                  <div className="col-lg-2 col-md-12 mb-4 ">


                    <div className="view overlay z-depth-1-half">
                      <img src="data:image/jpeg;base64,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" className="img-fluid footer-img active "
                        alt=""/>
                      <a href="">
                        <div className="mask rgba-white-light"></div>
                      </a>
                    </div>

                  </div>



                  <div className="col-lg-2 col-md-6 mb-4">


                    <div className="view overlay z-depth-1-half">
                      <img src="https://img.freepik.com/free-photo/young-handsome-man-choosing-clothes-shop_1303-19720.jpg?size=626&ext=jpg&ga=GA1.2.1619591905.1631232000" className="img-fluid footer-img active"
                        alt=""/>
                      <a href="">
                        <div className="mask rgba-white-light"></div>
                      </a>
                    </div>

                  </div>


                  <div className="col-lg-2 col-md-6 mb-4">

                    <div className="view overlay z-depth-1-half">
                      <img src="https://img.dtcn.com/image/themanual/best-cheap-online-clothing-stores-for-men-version-1625041291-2-800x800.jpg" className="img-fluid footer-img active"
                        alt=""/>
                      <a href="">
                        <div className="mask rgba-white-light"></div>
                      </a>
                    </div>

                  </div>

                   <div className="col-lg-2 col-md-12 mb-4">

                    <div className="view overlay z-depth-1-half">
                      <img src="https://media.istockphoto.com/photos/men-formal-wear-classy-outfit-business-suit-picture-id1144368446?k=20&m=1144368446&s=612x612&w=0&h=-VpoEinjalH4bvtksbJpDmIKS6aILuL_pIrah2rpHpg=" className="img-fluid footer-img active"
                        alt=""/>
                      <a href="">
                        <div className="mask rgba-white-light"></div>
                      </a>
                    </div>

                  </div>
                  <div className="col-lg-2 col-md-6 mb-4">


                    <div className="view overlay z-depth-1-half">
                      <img src="https://cdn.luxe.digital/media/2019/09/12090502/business-professional-dress-code-men-style-luxe-digital.jpg" className="img-fluid footer-img active"
                        alt=""/>
                      <a href="">
                        <div className="mask rgba-white-light"></div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6 mb-4">

                    <div className="view overlay z-depth-1-half">
                      <img src="https://oldnavy.gap.com/Asset_Archive/ONWeb/content/0027/312/779/assets/210903_92-M4060_M_DP_NewArrivals.jpg  " className="img-fluid footer-img active"
                        alt=""/>
                      <a href="">
                        <div className="mask rgba-white-light"></div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>




            </footer>

                    </div>
    </div>
  )
}
