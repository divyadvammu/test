import React from 'react'

function Section5() {
  return (
    <div className="Section">
     
		<div id="demo" class="carousel slide cate-sli caro-home" data-ride="carousel">
			{/*<div class="carousel-inner">
				<div class="carousel-item active">
					<img src="images/slider/1.jpg" alt="Los Angeles"/>
					<a href="https://bizbookdirectorytemplate.com/demo.html" target="_blank"></a>
				</div>
				<div class="carousel-item ">
					<img src="images/slider/2.jpg" alt="Los Angeles"/>
					<a href="https://bizbookdirectorytemplate.com/demo.html" target="_blank"></a>
				</div>
			</div>
			<a class="carousel-control-prev" href="#demo" data-slide="prev"> <span class="carousel-control-prev-icon"></span>
			</a>
			<a class="carousel-control-next" href="#demo" data-slide="next"> <span class="carousel-control-next-icon"></span>
			</a>

  </div>  */}
{/* <!-- Carousel --> */}

<div id="myCarousel" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src="images/slider/1.jpg" alt="Los Angeles"/>
    </div>
    <div class="carousel-item">
    <img src="images/slider/1.jpg" alt="Los Angeles"/>
    </div>
  {/*   <div class="carousel-item">
      <img src="image3.jpg" class="d-block w-100" alt="Slide 3"/>
    </div> */}
  </div>

  <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
			
      
   </div>
  )
}

export default Section5
