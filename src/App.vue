<template>
  <div id="app" class="container">
    <header class="header">
      <header-container />
    </header>
    <aside class="sidebar">
      <sidebar-container @openNav="openRootNav"/>
    </aside>
    <main class="main">
      <!-- <production-house /> -->
        <router-view></router-view>
    </main>

    <!-- <employee-form @add:employee="addEmployee" />
    <employee-table
      :employees="employees"
      @delete:employee="deleteEmployee"
      @edit:employee="editEmployee"
    />-->
    <footer class="footer">
      <footer-container/>
    </footer>
  </div>
</template>

<script>
import EmployeeTable from "@/components/EmployeeTable.vue";
import EmployeeForm from "@/components/EmployeeForm.vue";
import ProductionHouse from "@/components/ProductionHouse.vue";
import HeaderContainer from "@/components/HeaderContainer.vue";
import FooterContainer from "@/components/FooterContainer.vue";
import SidebarContainer from "@/components/SidebarContainer.vue";
import OrderContainer from "@/components/OrderContainer.vue";


export default {
  name: "app",
  props: ['gridline'],
  components: {
    EmployeeTable,
    EmployeeForm,
    ProductionHouse,
    HeaderContainer,
    FooterContainer,
    SidebarContainer,
    OrderContainer
  },
  data() {
    return {
      employees: [],
      gridline: '--gridline'
    };
  },

  computed: {
   gridline(){
     return this.gridline
   }
  },

  mounted() {
    this.getEmployees();

  },

  methods: {

         openRootNav(event) {
           
  const container = this.$el.querySelector(".container");
container.style.setProperty(gridline, "15% 85%");
console.log(container)
console.log(event)


},

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
},

    async getEmployees() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        this.employees = data;
      } catch (error) {
        console.error(error);
      }
    },

    async addEmployee(employee) {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          {
            method: "POST",
            body: JSON.stringify(employee),
            headers: { "Content-type": "application/json; charset=UTF-8" }
          }
        );
        const data = await response.json();
        this.employees = [...this.employees, data];
      } catch (error) {
        console.error(error);
      }
    },

    async editEmployee(id, updatedEmployee) {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`,
          {
            method: "PUT",
            body: JSON.stringify(updatedEmployee),
            headers: { "Content-type": "application/json; charset=UTF-8" }
          }
        );
        const data = await response.json();
        this.employees = this.employees.map(employee =>
          employee.id === id ? data : employee
        );
      } catch (error) {
        console.error(error);
      }
    },

    async deleteEmployee(id) {
      try {
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
          method: "DELETE"
        });
        this.employees = this.employees.filter(employee => employee.id !== id);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style>
:root{
   --grid-line: 5% 95%;
}
/* button {
  background: #009435;
  border: 1px solid #009435;
}

button:hover,
button:active,
button:focus {
  background: #32a95d;
  border: 1px solid #32a95d;
} */

.container {
  max-width: 100%;
  width: 100%;
  height: vh;
  font-family: Arial, Helvetica, sans-serif;
  display: grid;
  grid-template-columns: var( --grid-line);
 grid-auto-rows: auto auto auto;
  grid-template-areas:
    "sidebar header"
    "sidebar main"
    "sidebar footer";
      /* margin-left: -150px; */
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

.footer{
  grid-area: footer;
  position: relative;
 
  
  
}
.main {
  grid-area: main;
}
</style>
