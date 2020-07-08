<template>
<main class="bg-utama">
    <div class="container">
		<div class="row justify-content-center">
			<img src="../assets/img/logo.svg" alt="" class="img-fluid top-logo mt-4">
		</div>

        <div class="row justify-content-center mt-3">
        <b-dropdown id="dropdown-1" text="Bahasa Indonesia" class="mt-3" variant="light">
            <b-dropdown-item>Bahasa Indonesia</b-dropdown-item>
        </b-dropdown>
        </div>

        <h3 class="text-center mt-5 text-white">Surprize Visitor System</h3>
        <p class="text-center mt-2 text-white">is QR technology used to track visitors in a formal way. Surprize Visitor System is the process of tracking everyone who enters your building/office, store/outlet, hotel, tourist sites, etc. A visitor may be an employee, customer, a delivery person, traveller, and others.</p>

        <div class="row justify-content-center mt-5">
			<img src="../assets/img/hero.svg" alt="" class="img-fluid top-logo">
		</div>

		<div class="row justify-content-center mt-4">
         <b-button pill  to="/home" size="lg" class="warning text-white mt-5 pl-5 pr-5"><b>Get Started</b></b-button>
		</div>

	</div>
</main>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
 name: 'home1'
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
</style>