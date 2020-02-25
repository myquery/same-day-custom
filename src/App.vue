<template>
  <div id="app" :class="getExpand">
    <header class="header">
      <header-container />
    </header>
    <aside class="sidebar">
      <sidebar-container @isClicked="openRootNav($event)" />
    </aside>
    <main class="main">
      <!-- <production-house /> -->
      <router-view></router-view>
    </main>

    />-->
    <footer class="footer">
      <footer-container />
    </footer>
  </div>
</template>

<script>

import HeaderContainer from "@/components/HeaderContainer.vue";
import FooterContainer from "@/components/FooterContainer.vue";
import SidebarContainer from "@/components/SidebarContainer.vue";


export default {
  name: "app",
  props: ["gridline"],
  components: {
    // EmployeeTable,
    // EmployeeForm,
    // ProductionHouse,
    HeaderContainer,
    FooterContainer,
    SidebarContainer
    // OrderContainer
  },
  data() {
    return {
      employees: [],

      expanded: true,
      gridTemplateChange: "container",
      gridTemplateExpanded: "container-expanded",
 

      // gridline: '--gridline'
    };
  },

  // computed: {
  //  gridline(){
  //    return this.gridline
  //  }
  // },

  mounted() {
    this.getEmployees();
  },

  computed: {
    getExpand() {
      return this.expanded ? "container" : "container-expanded";
    },



  },
  methods: {
    openRootNav() {
     // this.getTransition();
      this.expanded = !this.expanded;
     
    },

    /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
    closeNav() {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
    },


  }
};
</script>

<style>
:root {
  --grid-line: 5% 95%;
  --grid-expanded: 18.9% 81.1%;
}


.container {
  max-width: 100%;
  width: 100%;
  height: vh;
  font-family: Arial, Helvetica, sans-serif;
  display: grid;
  grid-template-columns: var(--grid-line);
  grid-auto-rows: auto auto auto;
  grid-template-areas:
    "sidebar header"
    "sidebar main"
    "sidebar footer";
  /* margin-left: -150px; */
}

.container-expanded {
  max-width: 100%;
  width: 100%;
  height: vh;
  font-family: Arial, Helvetica, sans-serif;
  display: grid;
  grid-template-columns: var(--grid-expanded);
  grid-auto-rows: auto auto auto;
  grid-template-areas:
    "sidebar header"
    "sidebar main"
    "sidebar footer";
  /* margin-left: -150px; */
}

.transit {
  transition: width 5s;
}

.header {
  grid-area: header;

  -webkit-box-shadow: 0px 3px 50px #1877ff1c !important;
  -moz-box-shadow: 0px 3px 50px #1877ff1c !important;
  box-shadow: 0px 3px 50px #1877ff1c !important;
  z-index: 1;
}
.sidebar {
  grid-area: sidebar;
  background: #007bff;
  height: vh;
  /* position: absolute; */
}

.footer {
  grid-area: footer;
  position: relative;
  align-self: flex-end;
}
.main {
  grid-area: main;
}
</style>
