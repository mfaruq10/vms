<template>
<main class="bg-utama">
    <div class="container">
		<div class="row justify-content-center">
			<img src="../assets/img/logo.svg" alt="" class="img-fluid top-logo mt-4">
		</div>
         <h5 class="text-center mt-3 text-white">#TheNewNormal  #FightCovid19</h5>
         <h3 class="text-center mt-3 text-white">Check Out Form</h3>
         <p class="text-center text-white">Please Fill in the seurvey</p>

        <form>
            <div class="form-group ml-4 mr-4">
            <label class="text-white mt-3">Overall Cleanliness</label>
            <div class="row">
                <div class="col-6">
            <div class="custom-control custom-radio">
            <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
            <label class="custom-control-label" for="customRadio1">Very Good</label>
            </div></div>
            <div class="custom-control custom-radio">
            <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
            <label class="custom-control-label" for="customRadio2">Fair</label>
            </div></div>
            <div class="row">
                <div class="col-6">
            <div class="custom-control custom-radio">
            <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input">
            <label class="custom-control-label" for="customRadio3">Good</label>
            </div></div>
            <div class="custom-control custom-radio">
            <input type="radio" id="customRadio4" name="customRadio" class="custom-control-input">
            <label class="custom-control-label" for="customRadio4">Poor</label>
            </div>
            </div>

             <label class="text-white mt-3">Overall Safety</label>
            <div class="row">
                <div class="col-6">
            <div class="custom-control custom-radio">
            <input type="radio" id="customRadio5" name="customRadio" class="custom-control-input">
            <label class="custom-control-label" for="customRadio5">Very Good</label>
            </div></div>
            <div class="custom-control custom-radio">
            <input type="radio" id="customRadio6" name="customRadio" class="custom-control-input">
            <label class="custom-control-label" for="customRadio6">Fair</label>
            </div></div>
            <div class="row">
                <div class="col-6">
            <div class="custom-control custom-radio">
            <input type="radio" id="customRadio7" name="customRadio" class="custom-control-input">
            <label class="custom-control-label" for="customRadio7">Good</label>
            </div></div>
            <div class="custom-control custom-radio">
            <input type="radio" id="customRadio8" name="customRadio" class="custom-control-input">
            <label class="custom-control-label" for="customRadio8">Poor</label>
            </div>
            </div>

            <label class="text-white mt-3">Overall response from our Customer Service</label>
            <div class="row">
                <div class="col-6">
            <div class="custom-control custom-radio">
            <input type="radio" id="customRadio9" name="customRadio" class="custom-control-input">
            <label class="custom-control-label" for="customRadio9">Very Good</label>
            </div></div>
            <div class="custom-control custom-radio">
            <input type="radio" id="customRadio10" name="customRadio" class="custom-control-input">
            <label class="custom-control-label" for="customRadio10">Fair</label>
            </div></div>
            <div class="row">
                <div class="col-6">
            <div class="custom-control custom-radio">
            <input type="radio" id="customRadio11" name="customRadio" class="custom-control-input">
            <label class="custom-control-label" for="customRadio11">Good</label>
            </div></div>
            <div class="custom-control custom-radio">
            <input type="radio" id="customRadio12" name="customRadio" class="custom-control-input">
            <label class="custom-control-label" for="customRadio12">Poor</label>
            </div>
            </div>
            
            
            <label class="text-white mt-3">Is there anything you would like to tell us?</label>
            <b-form-textarea
            id="textarea-rows"
            placeholder="type here"
            rows="5"
            border-radius="15"
            ></b-form-textarea>
            </div>

            <div class="row justify-content-center">
            <b-button pill  to="/home" size="lg" class="warning text-white mt-4 mb-4 pl-5 pr-5">Send Feedback</b-button>
            </div>
        </form>
	</div>
</main>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
 name: 'chekin'
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
	min-height: 736px;
	display: block;
}
.bg-utama{
    background-color: #4EA3A7;
}
.warning{
	background-color: #F8D445!important;
}
.custom-control-label{
    color: white;
   
}
</style>