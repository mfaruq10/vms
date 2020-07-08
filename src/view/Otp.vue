<template>
<main class="bg-utama">
    <div class="container">
		<div class="row justify-content-center">
			<img src="../assets/img/logo.svg" alt="" class="img-fluid top-logo mt-4">
		</div>
         <h5 class="text-center mt-3 text-white">#TheNewNormal  #FightCovid19</h5>
         <div class="row justify-content-center">
			<img src="../assets/img/wa.svg" alt="" class="img-fluid top-logo mt-5">
		</div>
        <h3 class="text-center mt-3 text-white">Verify Mobile Number</h3>
        <p class="text-center mt-2 pr-5 pl-5 text-white">OTP has been send to your whatsapp number please check your whatsapp chat.</p>
	<div class="row justify-content-center">
    
     <b-form-input type="text" maxlength="1" size="1" class="form-control col-1 mr-3"></b-form-input>
  <b-form-input type="text" maxlength="1" size="1" class="form-control col-1 mr-3"></b-form-input>
   <b-form-input type="text" maxlength="1" size="1" class="form-control col-1 mr-3"></b-form-input>
   <b-form-input type="text" maxlength="1" size="1" class="form-control col-1"></b-form-input>
  

      </div>
      <h6 class="text-center mt-5 text-white">Don’t received OTP ?</h6>
        <div class="row justify-content-center mt-5">
            <b-button pill  size="lg" class="warning text-white mt-5 mb-4 pl-5 pr-5">Resend In 54s</b-button>
            </div>
    </div>
</main>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
 name: 'otp'
}
</script>
<style scoped>
body,
html {
	max-width: 100vw;
	overflow-x: hidden;
	font-family: "Poppins", sans-serif;
	color: #ffffff;
	transition: all .3s ease;
	background-color: #616161;
}
main {
	max-width: 480px;
	margin: 0 auto;
	display: block;
    min-height: 736px;
}
.bg-utama{
    background-color: #4EA3A7;
}
.warning{
	background-color: #F8D445!important;
}

</style>