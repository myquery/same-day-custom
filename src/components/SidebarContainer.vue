<template>
  <div class="container">
    <div id="mySidebar" class="sidebar">
        <div class="aside-menu">
            <div class="menu-btn"> 
           
              
              <a href="javascript:void(0)" class="closebtn" v-on:click="openNav($event)"><img src="../assets/menu-open.svg" class="menu-img"/></a>
            
              </div>
     <div class="sidebar-menu">
        <div class="sidebar-item">
          <div class="sidebar-img"><img src="../assets/menu-icon.svg"/></div>
          <div class="sidebar-label"><a href="#">Dashboard</a>
          </div>
          </div>
             <div class="sidebar-item">
          <div class="sidebar-img"><img src="../assets/time-left.svg"/></div>
          <div class="sidebar-label"><a href="#">Operations</a>
          </div>
          </div>
                <div class="sidebar-item">
          <div class="sidebar-img"><img src="../assets/file.svg"/></div>
          <div class="sidebar-label"><a href="#">Records</a>
          </div>
          </div>

                 <div class="sidebar-item">
          <div class="sidebar-img"><img src="../assets/shopping-cart.png"/></div>
          <div class="sidebar-label"><a href="#">Supply Store</a>
          </div>
          </div>

                  <div class="sidebar-item">
          <div class="sidebar-img"><img src="../assets/chat.svg"/></div>
          <div class="sidebar-label"><a href="#">Forums</a>
          </div>
          </div>
 
     </div>

      <div class="setting">
                  <div class="sidebar-item">
          <div class="sidebar-img"><img src="../assets/settings.svg"/></div>
          <div class="sidebar-label"><a href="#">Setting</a>
          </div>
          </div>
      </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {

  data(){
   return {
     gridline: '',
   }
  },
  methods: {
    openNav(event) {
      const sidebar = this.$el.querySelector("#mySidebar");
       sidebar.style.width = "250px";
      const main = this.$el.querySelector("#main");
      main.style.marginLeft = "250px";

      const bkg = this.$el.querySelector(".sidebar")
      bkg.style.backround = "blue"
        this.$emit("openNav", "");
          console.log('message emit from child component')
    },

    /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
    closeNav() {
     this.$el.querySelector("#mySidebar").style.width = "0";
      this.$el.querySelector("#main").style.marginLeft = "0";
    }
  }
};
</script>
<style scoped>
/* The sidebar menu */
.sidebar {
  height: 100%; /* 100% Full-height */
  width: 50px; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0;
  left: 0;
  background-color: #007AFE; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidebar */
    -webkit-box-shadow: 2px 1px 30px #ADADAD !important;
  -moz-box-shadow:  2px 1px 30px #ADADAD !important;
  box-shadow:  2px 1px 30px  #ADADAD !important;
  z-index: 1;
  padding: 1rem;
}

/* The sidebar links */
.sidebar a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

/* When you mouse over the navigation links, change their color */
.sidebar a:hover {
  color: #f1f1f1;
}

/* Position and style the close button (top right corner) */
.sidebar .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

/* The button used to open the sidebar */
.openbtn {
  font-size: 20px;
  cursor: pointer;
  background-color: #111;
  color: white;
  padding: 10px 15px;
  border: none;
}

.openbtn:hover {
  background-color: #444;
}

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
#main {
  transition: margin-left 0.5s; /* If you want a transition effect */
  padding: 20px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidebar {
    padding-top: 15px;
  }
  .sidebar a {
    font-size: 18px;
  }
}

.aside-menu{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 10% 1fr 20%;
    padding-top: 50px;
}


.sidebar-item{
  display: grid;
  grid-template-columns: 70px 1fr;
  grid-column-gap: 10px;
  padding: 0.5rem;
  margin-top: 1%;
  
}
.sidebar-img{
display: flex;
align-self: center;


}
.sidebar-img img{
width: 30%;
padding: 12px;


}

.menu-img{
width: 20px;
padding: 12px;


}


.sidebar-img img:hover{
background: #E9ECF4;
padding: 12px;
border-radius: 50%;

}
.sidebar-label{
  border-bottom: 1px solid #999;
  font-size: 13px;

}
.sidebar-label a{
   font-size: 15px;
  color: #fff;
}
.sidebar-label a:hover{
  font-size: 15px;
  color: #fff;
  background: #007AFE;
}

.setting > .sidebar-item > .sidebar-label{
   border:none;
  font-size: 13px;
  display: flex;
align-items: center;
}
.setting{
  position: absolute;
  bottom: 0px;
  margin-bottom: 30%;
}
</style>