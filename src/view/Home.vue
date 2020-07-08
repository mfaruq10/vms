<template>
<main class="bg-main">
    <div class="container bg-header">
		<div class="row justify-content-center">
			<img src="../assets/img/logo.svg" alt="" class="img-fluid top-logo mt-4">
		</div>
        <div class="row justify-content-center">
			<img src="../assets/img/gist.svg" alt="" class="img-fluid top-logo mt-3">
		</div>
        <h5 class="text-center mt-3 text-white">#TheNewNormal  #FightCovid19</h5>

        <div class="row justify-content-center">
         <b-button pill  to="/chekin" size="lg" class="chekin text-white mt-3 pl-5 pr-5 mr-3"><b>Chek In</b></b-button>
         <b-button pill  to="/home" size="lg" class="chekout text-white mt-3 pl-5 pr-5"><b>Chek Out</b></b-button>
        </div>
        <h5 class="text-center mt-3 text-white pb-3">Your Position : -</h5>
	</div>

    <div class="container">
        <div class="row p-2">
        <img src="../assets/img/giftcard.svg" alt="" class="img-fluid top-logo mt-3 ml-4">
        <h4 class="t-color mt-3 ml-2">JW Marriot Jakarta</h4>
        </div>
        <div class="row justify-content-center">
        <img src="../assets/img/restmenu.svg" alt="" class="img-fluid top-logo w-100 pl-3 pr-3">
        </div>
        <div class="row p-2">
        <img src="../assets/img/giftcard.svg" alt="" class="img-fluid top-logo mt-3 ml-4">
        <h4 class="t-color mt-3 ml-2">Surprize untuk Anda</h4>
        </div>
        
        <div class="card ">
        <img class="card-img-top " src="../assets/img/traveloka1.svg" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">Traveloka</h5>
        <p class="card-text">Masa Berlaku 20 Januari 2020</p>
        </div>
        </div>

        <div class="card mt-3">
        <img class="card-img-top " src="../assets/img/airasia1.svg" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">AIR ASIA</h5>
        <p class="card-text">Masa Berlaku 20 Januari 2020</p>
        </div>
        </div>

         <div class="row p-2">
        <img src="../assets/img/dolar.svg" alt="" class="img-fluid top-logo mt-3 ml-4">
        <h4 class="t-color mt-3 ml-2">Promo Lainya</h4>
        </div>

        <div class="row  p-2 justify-content-center ">
    <b-nav pills class="floating justify-content-center ">
   <b-nav-item  active to="/home"><img src="../assets/img/vhome.svg" alt="">Home</b-nav-item>
    <b-nav-item to="/history"><img src="../assets/img/vhistory.svg" alt="">History</b-nav-item>
    <b-nav-item to="/account"><img src="../assets/img/vaccount.svg" alt="" class="transparant">Account</b-nav-item>
    <b-nav-item to="/setting"><img src="../assets/img/vsettings.svg" alt="">Setting</b-nav-item>
    </b-nav>
    </div>
        
    </div>
</main>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
 name: 'home'
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
    background-color: white;
    padding-bottom: 20px;
    
}
.bg-header{
    background-color: #4EA3A7;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    z-index: 99999;
}
.chekin{
	background-color: #F8D445;
    
}
.chekout{
    background-color: #E76963;
}
.bg-main{
    background-color: #F4F5F7;
}
.t-color{
    color: #218085;
}
.floating{
    padding: 10px;
    border-radius: 35px;
    background-color: #218085;
}
.active{
    background-color: #F8D445!important;
    border-radius: 35px;
    color: #218085!important;
}
a{
    color: white!important;
}
</style>