<template>
<main class="bg-utama">
    <div class="container">
		<div class="row justify-content-center">
			<img src="../assets/img/logo.svg" alt="" class="img-fluid top-logo mt-4">
		</div>
         <h5 class="text-center mt-3 text-white">#TheNewNormal  #FightCovid19</h5>
         <h3 class="text-center mt-3 text-white">Check In Form</h3>
         <p class="text-center text-white">Please Fill your form at balow</p>

        <form>
            <div class="form-group ml-4 mr-4">
            <label class="text-white">Date & Time Check in</label>
            <input type="datetime-local" class="form-control">
            <label class="text-white mt-3">Phone Number</label>
            <input type="number" class="form-control" placeholder="0888888888">
            <label class="text-white mt-3">Your Name</label>
            <input type="text" class="form-control" placeholder="Your Name">
            <label class="text-white mt-3">Date Of birth *optional</label>
            <div class="row">
            <div class="col-3">
            <input type="day" class="form-control" placeholder="City">
            </div>
            <div class="col-5">
            <input type="month" class="form-control" placeholder="State">
            </div>
            <div class="col-4">
            <input type="years" class="form-control" placeholder="Zip">
            </div>
            
            </div>
            <label class="text-white mt-3">Email <small>*optional</small> </label>
            <input type="email" class="form-control" placeholder="Yourmail@gmail.com">

             <label class="text-white mt-3">Visitor <small>*Max. 5 People Check in on 1 mobile device </small> </label>
            <div>
            
                <b-button block class="list-user mb-2 p-2">
                    <a class="float-left"> Clarisa Yosephine</a>
                    <span>  <b-icon icon="pencil" scale="1" class="float-right" to="/"></b-icon></span>
              
                
                </b-button>
               
  <b-button class="btn-add" block="" v-b-modal.modal-1>Add More Friends...</b-button>

    <b-modal id="modal-1"
    cancel-footer
    hide-header
    hide-footer
    class="m-5"
   
    >
    <div class="header-modal text-center">
    <h3 class=" t-color">Form Input</h3>
    <small class="t-color ">Please Fill your form at balow</small>
    </div>
    <div class="form-modal mt-3 p-3">
     <form ref="form" @submit.stop.prevent="handleSubmit">
         <label><h4 class="t-color">Visitor 1</h4></label>
        <b-form-group
          :state="phoneState"
          label="Phone Number"
          class="t-color"
          label-for="phone-input"
          invalid-feedback="Phone is required"
        >
          <b-form-input
            id="phone-input"
            type="number"
            v-model="phone"
            :state="phoneState"
            required
          ></b-form-input>
        </b-form-group>
          <b-form-group
          :state="nameState"
          label="Your Name"
          class="t-color"
          label-for="phone-input"
          invalid-feedback="Name is required"
        >
          <b-form-input
            id="name-input"
            v-model="phone"
            :state="phoneState"
            required
          ></b-form-input>
        </b-form-group>
             <label><h4 class="t-color">Visitor 2</h4></label>
        <b-form-group
          :state="phoneState"
          label="Phone Number"
          class="t-color"
          label-for="phone-input"
          invalid-feedback="Phone is required"
        >
          <b-form-input
            id="phone-input"
            type="number"
            v-model="phone"
            :state="phoneState"
            required
          ></b-form-input>
        </b-form-group>
          <b-form-group
          :state="nameState"
          label="Your Name"
          class="t-color"
          label-for="phone-input"
          invalid-feedback="Name is required"
        >
          <b-form-input
            id="name-input"
            v-model="phone"
            :state="phoneState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
      <div class="row justify-content-center">
       <b-button variant="link" class="t-color"><h4><b>Add More</b></h4></b-button>
        <b-button  pill class="text-white w-75 mt-4 pt-3 pb-4 warning">Save</b-button>
       </div>
         </div>
    </b-modal>
    </div>
         

    
            <label class="text-white mt-3">Have you recently travelled (within last 14 days) to on area with community transmission? Countries of : USA, China, Iran, South Korea, Italy, Japan & Hongkong </label>
            <div class="custom-control custom-radio">
            <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
            <label class="custom-control-label" for="customRadio1">Yes</label>
            </div>
            <div class="custom-control custom-radio">
            <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
            <label class="custom-control-label" for="customRadio2">No</label>
            </div>

            <label class="text-white mt-3">Have you had recent contact with a covid-19 area or persons?</label>
            <div class="custom-control custom-radio">
            <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input">
            <label class="custom-control-label" for="customRadio3">Yes</label>
            </div>
            <div class="custom-control custom-radio">
            <input type="radio" id="customRadio4" name="customRadio" class="custom-control-input">
            <label class="custom-control-label" for="customRadio4">No</label>
            </div>

            <label class="text-white mt-3">Have you had symptoms including faver or signs? symptoms of lover respiratory illness including cough or shortness of breath?</label>
            <div class="custom-control custom-radio">
            <input type="radio" id="customRadio5" name="customRadio" class="custom-control-input">
            <label class="custom-control-label" for="customRadio5">Yes</label>
            </div>
            <div class="custom-control custom-radio">
            <input type="radio" id="customRadio6" name="customRadio" class="custom-control-input">
            <label class="custom-control-label" for="customRadio6">No</label>
            </div>
            </div>

            <div class="row justify-content-center">
            <b-button pill  to="/otp"  class="warning text-white w-50 mt-4 mb-4 pt-3 pb-3">Check In</b-button>
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
.btn-add{
    background-color: #218085;
}
.t-color{
     color: #218085;
}
.warning{
    background-color: #F8D445!important;

}
.list-user{
    border: 1px solid white;
   color: white;
    background-color: #6BBEC1;
}
</style>