<template>
  <div id="production-house" class="layout">
    <div class="production">
      <div class="production-header">
        <div class="logo">
          <img src="../assets/product.svg" class="product-logo" />
          <h1>Production House</h1>
        </div>

        <select class="category">
          <option>Category</option>
        </select>
        <div class="search">
          <img src="../assets/magnifying-glass.svg" class="search-icon" />
          <label for="search">
            <input type="text" id="search" />
          </label>
          <span class="cancel">X</span>
        </div>
      </div>
      <div class="production-table">
        <div class="production-table-header">
          <div class="all">
            <a href="#">
              All Products
              <span>126</span>
            </a>
          </div>
          <div class="awaiting">
            <a href="#">
              Awaiting Products
              <span>10</span>
            </a>
          </div>
          <div class="completed">
            <a href="#">Completed</a>
          </div>
          <div></div>
          <div>
            <button>Print Worksheet</button>
          </div>
          <div>
            <select>
              <option>Mark as Completed</option>
            </select>
          </div>
          <div>
            <button>Save</button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Order #</th>
              <th>Item #</th>
              <th>Details #</th>
              <th>Colors</th>
              <th>Qty</th>
              <th>Print Type</th>
              <th>Delivery Method</th>
              <th  width="150px">Delivery Time</th>
              <th  width="50px">Production Status</th>
            </tr>
          </thead>
          <tbody>
            <tr class="product-row" >
               <!-- <router-link to="/order"> -->
              <td>
                <input type="checkbox" />
              </td>
              <td width="100px">#232JODJSDKN2</td>
              <td width="100px">#232JODJSDKN2</td>
              <td>
                <div class="product">
                  <img src="../assets/product-cloth.png" />
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </td>
              <td>
                <span class="product-color">Royal</span>
              </td>
              <td>L X 4</td>
              <td>DTD Print</td>
              <td width="100px">
                <div class="product-delivery">
                  <img src="../assets/clock.svg" />
              
                <p>Rush Shopping</p>
                  </div>
              </td>
              <td>
                <p width="150px">23 - June, 2019</p>
                <p class="product-time">
                  <span>Time Life</span>
                  <span style="color:green">10:00:00</span>
                </p>
              </td>
              <td width="50px" class="product-status" >
                <p>Running</p>
                <p>2 to 5</p>
              </td>   
              <!-- </router-link> -->
            </tr>
         
          <tr class="product-row">
              <td>
                <input type="checkbox" />
              </td>
              <td width="100px">#232JODJSDKN2</td>
              <td width="100px">#232JODJSDKN2</td>
              <td>
                <div class="product">
                  <img src="../assets/product-cloth.png" />
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </td>
              <td>
                <span class="product-color">Royal</span>
              </td>
              <td>L X 4</td>
              <td>DTD Print</td>
              <td width="100px">
                <div class="product-delivery">
                  <img src="../assets/clock.svg" />
              
                <p>Rush Shopping</p>
                  </div>
              </td>
              <td>
                <p width="150px">23 - June, 2019</p>
                <p class="product-time">
                  <span>Time Life</span>
                  <span style="color:green">10:00:00</span>
                </p>
              </td>
              <td width="50px" class="product-status" >
                <p>Running</p>
                <p>2 to 5</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  
  </div>
  
</template>
<script>

export default {
  data() {
    return{
      product: {
    }
    }
    
  },
  // components: {
  //   "footer-container" : FooterContainer
  // }

  
};
</script>

<style scoped>
.production {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 3fr;
  grid-row-gap: 1rem;
  background: #F4F7F6;
  padding: 2rem 1.5rem;
  height: auto;
}
.layout{
  display: flex;
  justify-content: center;
  align-items: center
}
.logo {
  display: grid;
  grid-template-columns: 30px auto;
  grid-column-gap: 2%;
}
.product-logo {
  text-transform: initial;
  display: flex;
  align-self: center;
  width: 80%;
}

h1 {
  font-size: 1.3rem;
  display: flex;
  align-self: center;
}

.production-header {
  display: grid;
  grid-template-columns: 2fr 0.7fr 1.5fr;
  grid-column-gap: 10px;
  margin: 0;
  height: 50px;
}
.production-header .category {
  background: #007bff;
  text-align: center;
  border-radius: 5px;
  border: none;
  color: #fff;
  padding: 0px 10px;
  height: 40px;
}

.production-header .search {
  background: #eeeeee;
  text-align: center;
  border-radius: 5px;
  border: none;
  color: #fff;
  padding: 0;
  height: 40px;
  display: grid;
  grid-template-columns: 50px 1fr 50px;
}
.search-icon {
  display: flex;
  align-self: center;
  width: 30%;
  margin-left: 30%;
  color: #4b4b4b;
}

.cancel {
  display: flex;
  align-self: center;
  color: #4b4b4b;
  justify-self: center;
}
.production-header .search input {
  background: #eeeeee;

  border-radius: 5px;
  border: none;
  color: #333;
  padding: 0;
  height: 40px;
  width: 90%;
}
.search input:focus {
  outline: none;
}

.search input:parent(.search) {
  border: 1px solid #333;
}
.production-table-header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 0.5fr 1fr 1fr 0.4fr;
  grid-column-gap: 5px;
  font-size: 0.8rem;
  margin-bottom: -16px;
}

.production-table-header .all {
 display: flex;
  align-self: center;
  padding: 6px 0 !important;
  margin-bottom: 0.4rem;
 
}
.production-table-header .all a {
  border-right: 1px solid #ccc;
  width: 100%;
  padding: 6px 0 !important;
  margin-bottom: 0.4rem;
  text-decoration: none;
  color: #333;
  text-align: center;
   font-weight: bold;
}
.production-table-header .all:hover {
 border-bottom: 3px solid blue;
  margin-bottom: 0.2rem;
 
}

.production-table-header .all a > span {
  color: #fff;
  background: #D80B0B;
  margin-left: 1.6rem;
  font-weight: none;
  border-radius: 50%;
  padding: 3px;
  font-size: 0.7rem;
}
.production-table-header .all a:hover > span {
  color: #ccc;
  background: none;
  font-weight: none;
font-size: 0.7rem;
}

.production-table-header .awaiting {
  display: flex;
  align-self: center;
  padding: 6px 0 !important;
  margin-bottom: 0.4rem;
}
.production-table-header .awaiting:hover {
  border-bottom: 3px solid blue;
  margin-bottom: 0.2rem;
}
.production-table-header .awaiting a {
  border-right: 1px solid #ccc;
  width: 100%;
  padding: 6px 0 !important;
  margin-bottom: 0.2rem;
  text-align: center;
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.production-table-header .awaiting a > span {
  color: #fff;
  background: #D80B0B;
  margin-left: 1rem;
  font-weight: none;
  border-radius: 50%;
  padding: 3px;
   font-size: 0.7rem;
}
.production-table-header .awaiting a:hover > span {
  color: #ccc;
  background: none;
  font-weight: none;
   font-size: 0.7rem;
}

.production-table-header .completed {
  display: flex;
  align-self: center;
  padding: 6px 0 !important;
  margin-bottom: 0.4rem;
}

.production-table-header .completed:hover {
  border-bottom: 3px solid blue;
  margin-bottom: 0.2rem;
}
.production-table-header .completed a {
  width: 100%;
  padding: 6px 0 !important;
  margin-bottom: 0.4rem;
  display: flex;
  align-self: center;
  justify-self: center;
  text-decoration: none;
  color: #333;
   font-weight: bold;
}

.production-table-header a:hover {
  padding: 1rem;
  /* border-bottom: 3px solid blue; */
  color: blue;
}
.production-table-header button {
  border-radius: 0.3rem;
  height: 2rem;
  border: 1px solid #ccc;
  background-color: inherit;
  padding: 0 1.5rem;
  font-weight: bold;
  display: flex;
  align-self: center;
}
.production-table-header button:hover {
  border: none;
  box-sizing: border-box;
  background-color: #ddd;
  padding: 0 1.5rem;
  border-radius: 0.3rem;
  border: 1px solid #ccc;
}
.production-table-header select {
  border-radius: 0.3rem;
  height: 2rem;
  border: none;
  margin: 0 auto;
  display: flex;
  align-self: center;
  background: inherit;
}
table {
  width: 100%;
  border-spacing: 0px 10px;
}
thead {
  background: #eeeeee;
}
tr,
th {
  padding: 1rem;
  font-size: 0.7rem;
}
th input {
  height: 20px;
  width: 20px;
}

tbody > tr {
  background: #fff;
  margin: 10px;
  box-shadow: 0px 1px 5px "#333";
}

tbody > tr td {
  background: #fff;
  margin: 20px;
}
tbody > tr td input {
  height: 20px;
  width: 20px;
}
.product-row {
  margin: 10px;
  -webkit-box-shadow: 0px 3px 50px #1877ff1c !important;
  -moz-box-shadow: 0px 3px 50px #1877ff1c !important;
  box-shadow: 0px 3px 50px #1877ff1c !important;
  z-index: 1;
  padding: 15px;
  /* font-weight: bold; */
  font-size: 0.7rem;
  text-align: center;
}
.product {
  display: grid;
  grid-template-columns: 80px 200px;
}
.product p {
  font-size: 0.6rem;
  display: flex;
  align-self: center;
}
.product img {
  display: flex;
  align-self: center;
  justify-self: center;
  width: 60%;
}

.product-color {
  background: #529DED;
  padding: 0.7rem;
  border-radius: 5px;
  text-align: center;
  color: #fff;
  width: 60%;
}

.product-delivery {
  display: grid;
  grid-template-columns: 20% 40%;
  grid-column-gap: 10px;
}

.product-delivery img {
  width: 80%;
  display: flex;
  align-self: center;
  justify-self: center;
}

.product-delivery p {
  color: #ff0000;
  display: flex;
  align-self: center;
  justify-self: center;
  text-align: left !important;
  font-weight: bold;
}
.product-date {
  font-weight: none !important;
}

.product-status  p{
  padding: 5px;
  margin:5px;
  line-height: 5px;
  font-weight: bold;
  color: #1E8406;
}
</style>