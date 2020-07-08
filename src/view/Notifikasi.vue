<template>
<main class="bg-main">
    <div class="container bg-header">
		<div class="row justify-content-center">
			<img src="../assets/img/logo.svg" alt="" class="img-fluid top-logo mt-4">
		</div>
        <div class="row mt-3">
        <div class="col-1">
        <b-button size="lg" variant="transparant" to="/home">
        <b-icon icon="chevron-left" style="color: #fff"></b-icon>
        </b-button>
        </div>
        <div class="col-10">
       <h5 class="text-center text-white mt-2"> Notification</h5>
        </div>
        </div>
    </div>

    <div class="container">
        <div class="row mt-3">
            <div class="col-12">
                <b-card>
                <b-card-text>
                <p style="text-align:left;">
                   <b> You sign in Grand Indonesia</b>
                    <span style="float:right;" class="font-weight-light">
                   2020/ 06 / 14 12:40:30
                    </span>
                </p>
                </b-card-text>
                </b-card>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-12">
                <b-card>
                <b-card-text>
                <p style="text-align:left;">
                   <b> You sign in Grand Indonesia</b>
                    <span style="float:right;" class="font-weight-light">
                   2020/ 06 / 14 12:40:30
                    </span>
                </p>
                </b-card-text>
                </b-card>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-12">
                <b-card>
                <b-card-text>
                <p style="text-align:left;">
                   <b> You sign in Grand Indonesia</b>
                    <span style="float:right;" class="font-weight-light">
                   2020/ 06 / 14 12:40:30
                    </span>
                </p>
                </b-card-text>
                </b-card>
            </div>
        </div>
    </div>
</main>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
 name: 'notifikasi'
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
.t-color{
    color: #218085;
}

</style>