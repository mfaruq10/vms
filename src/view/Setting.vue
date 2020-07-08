<template>
<main class="bg-main">
    <div class="container bg-header">
		<div class="row justify-content-center">
			<img src="../assets/img/logo.svg" alt="" class="img-fluid top-logo mt-4">
		</div>
        <div class="row justify-content-center">
        <div class="col-12">

       <h5 class="text-center text-white mt-2 mb-3">Setting</h5>
        </div>
        </div>
    </div>

    <div class="container">
        <!-- content -->
    </div>

    <div class="container ">
    <div class="row fixed-bottom justify-content-center ">
    <b-nav pills class="floating justify-content-center">
    <b-nav-item to="/home"><img src="../assets/img/vhome.svg" alt="">Home</b-nav-item>
    <b-nav-item to="/history"><img src="../assets/img/vhistory.svg" alt="">History</b-nav-item>
    <b-nav-item to="/account"><img src="../assets/img/vaccount.svg" alt="" class="transparant">Account</b-nav-item>
    <b-nav-item active to="/setting"><img src="../assets/img/vsettings.svg" alt="">Setting</b-nav-item>
    </b-nav>
</div>
   </div>
</main>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
 name: 'setting'
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
.bg-main{
    background-color: #F4F5F7;
}
.floating{
    padding: 10px;
    border-radius: 35px;
    background-color: #218085;
}
.active.nav-link{
    background-color: #F8D445!important;
    border-radius: 35px;
    color: #218085!important; 
}
a{
    color: white!important;
}

</style>