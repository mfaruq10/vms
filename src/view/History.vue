<template>
<main class="bg-main">
   
    <div class="container bg-header">
        <div class="row justify-content-center">
			<img src="../assets/img/logo.svg" alt="" class="img-fluid top-logo m-4">
		</div>
    </div>
             <section id="tabs" class="project-tab mt-4">
         <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <b-tabs content-class="mt-3" fill>
                    <b-tab title="Chek In/Out" class="tabskiri" active>
                    <ul class="container mt-4">
                          <div class="row">
                        <div class="col-12">
                <b-card class="mt-5 mb-2">
                <b-card-text>
                <p style="text-align:left;">
                   <b> JW Marriot Jakarta</b>
                    <span  class="font-weight-light">
                   (2person)
                    </span>
                </p>
                 2020 / 06 / 14 12:40:30 - 2020 / 06 / 14 12:40:30
                <p>
                </p>
                </b-card-text>
                </b-card>
        </div>
         <div class="col-12">
                <b-card class="mb-2">
                <b-card-text>
                <p style="text-align:left;">
                   <b>  Hakkasan Jakarta</b>
                    <span  class="font-weight-light">
                   (4person)
                    </span>
                </p>
                 2020 / 06 / 14 12:40:30 - 2020 / 06 / 14 12:40:30
                <p>
                </p>
                </b-card-text>
                </b-card>
        </div>
        <div class="col-12">
                <b-card class="mb-2">
                <b-card-text>
                <p style="text-align:left;">
                   <b>   MD Place Mezzanine Level, Setiabudi</b>
                    
                </p>
                 2020 / 06 / 14 12:40:30 - 2020 / 06 / 14 12:40:30
                <p>
                </p>
                </b-card-text>
                </b-card>
        </div>
        <div class="col-12">
                <b-card class="mb-5">
                <b-card-text>
                <p style="text-align:left;">
                   <b>  Alto Restaurant & Bar</b>
                    <span  class="font-weight-light">
                   (2person)
                    </span>
                </p>
                 2020 / 06 / 14 12:40:30 - 2020 / 06 / 14 12:40:30
                <p>
                </p>
                </b-card-text>
                </b-card>
        </div>
        
                    </div>
                    </ul>
                    </b-tab>
                   
                    <b-tab title="Promo Reedem" class="tabskanan mt-5">
                      <ul class="container ">
                          <div class="row justify-content-center">
                       <div class="col-12 mt-3">
                    <b-card class="mb-2">
                <b-card-text>
                <p style="text-align:left;">
                   <b>  Traveloka 15% Disc International </b>
                   <br>
                     Exp : 25 Agustus 2020
                </p>
                <span  class="font-weight-light float-right">
                   <b-button pill variant="warning">Sudah Reedem</b-button>
                    </span>
                </b-card-text>
                </b-card>
        </div>

        <div class="col-12 mt-3">
                    <b-card class="mb-2">
                <b-card-text>
                <p style="text-align:left;">
                   <b>  Traveloka 15% Disc International </b>
                   <br>
                     Exp : 11 Agustus 2020
                </p>
                <span  class="font-weight-light float-right">
                   <b-button pill variant="secondary">Belum Reedem</b-button>
                    </span>
                </b-card-text>
                </b-card>
        </div>
                    </div>
                    </ul>
                    </b-tab>
                  </b-tabs>

                    </div>
                </div>
            </div>
            </section>
    <div class="container ">
    <div class="row  pl-3 pr-3 ">
    <b-nav pills class="floating w-100 justify-content-center">
   <b-nav-item to="/home"><img src="../assets/img/vhome.svg" alt="">Home</b-nav-item>
    <b-nav-item active to="/history"><img src="../assets/img/vhistory.svg" alt="">History</b-nav-item>
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
 name: 'history',


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
	background-color: #F4F5F7;
   
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
    min-height: 150px;
}
.bg-main{
    background-color: #F4F5F7;
}
.t-color{
    color: #218085;
}
.project-tab{
    margin-top: -80px!important;
}


.tabskiri{
    border-bottom-left-radius: 15px!important;
    border-top-left-radius: 15px!important;
}

a.tabskanan{
     color: white!important;
}
.nav-tabs .nav-link {
    border: 1px solid white!important;
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
a.nav-link {
    color: white!important;
}
a.li{
    color: white!important;
}
.nav-tabs{
    border: 1px solid white!important;
}
</style>