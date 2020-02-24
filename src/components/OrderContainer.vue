<template>
  <div id="order-container" class="layout">
    <div class="production ">
      <div class="production-header">
        <div class="logo">
          <img src="../assets/right-arrow.svg" class="arrow" />
          <p>Back</p>
          <img src="../assets/product.svg" class="product-logo" />
          <h1>Production House</h1>
        </div>
      </div>
      <div class="order-header">
        <p>
          <b>Order #232JODJSDKN2</b>
        </p>
        <div class="order-details">
          <p class="order-account-delivery">Account Setup > Delivery Method</p>
          <p class="order-account-status">
            Production Status
            <span>Running 2 to 4</span>
          </p>
        </div>
      </div>

      <div class="order-summary">
        <div class="order-summary-details">
          <p class="order-summary-detail-item-one">
            <span>
              <img src="../assets/shopping-cart.svg" />
            </span> Order Value
          </p>
          <p class="order-summary-detail-item-two">$40.00</p>
        </div>
        <div class="order-summary-details">
          <p class="order-summary-detail-item-one">Order Date</p>
          <p class="order-summary-detail-item-two">28-june-2017</p>
        </div>
        <div class="order-summary-details">
          <p class="order-summary-detail-item-one">Delivery Method</p>
          <p class="order-summary-detail-item-two">
            Pickup Order
            <span>
              <select>
                <option>Can Edit</option>
              </select>
            </span>
          </p>
        </div>
        <div class="order-summary-details">
          <p class="order-summary-detail-item-one">Rush Option</p>
          <p class="order-summary-detail-item-two">
            <span></span>Rush
          </p>
        </div>
        <div class="order-summary-details">
          <p class="order-summary-detail-item-one">Status</p>
          <p class="order-summary-detail-item-two">Pending</p>
        </div>
        <div class="order-summary-details">
          <p class="order-summary-detail-item-one">Requested By</p>
          <p class="order-summary-detail-item-two">28-june-2017</p>
          <p class="order-summary-detail-item-two">Time Left 10:00:00</p>
        </div>
        <div class="order-summary-details">
          <p class="order-summary-detail-item-one">Shipped or Picked Date</p>
          <p class="order-summary-detail-item-two">28-june-2017</p>
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
        <div class="product-gallery">
          <figure>
            <img src="../assets/product-front-large.png" />
            <figcaption>Front</figcaption>
          </figure>

          <figure>
            <img src="../assets/product-front-large.png" />
            <figcaption>Front</figcaption>
          </figure>
          <figure>
            <img src="../assets/product-front-large.png" />
            <figcaption>Front</figcaption>
          </figure>
          <figure>
            <img src="../assets/product-front-large.png" />
            <figcaption>Front</figcaption>
          </figure>
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
              <th width="150px">Delivery Time</th>
              <th width="50px">Production Status</th>
            </tr>
          </thead>
          <tbody>
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
              <td width="50px" class="product-status">
                <p>Running</p>
                <p>2 to 5</p>
              </td>
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
              <td width="50px" class="product-status">
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
    return {
      product: {}
    };
  }
  // components: {
  //   "footer-container" : FooterContainer
  // }
};
</script>

<style scoped>
.production {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto auto;
  grid-row-gap: 1rem;
  background: #f4f7f6;
  padding: 2rem 1.5rem;
  height: auto;
}
.order-header {
  display: grid;
  grid-auto-rows: 20% 20%;
  grid-row-gap: 20px;
}
.order-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.order-account-delivery {
  display: flex;
  align-self: center;
  color: #007bff;
  font-size: 0.7rem;
  font-weight: bold;
}

.order-account-status {
  display: flex;
  justify-self: flex-end;
  color: #007bff;
  font-size: 0.9rem;
}

.order-account-status span {
  color: #1e8406;
  font-weight: bold;
  padding: 0px 10px;
}

.order-summary {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  background: #ffffff;
  padding: 15px;
  -webkit-box-shadow: 2px 1px 50px #0000000f !important;
  -moz-box-shadow: 2px 1px 50px #0000000f !important;
  box-shadow: 2px 1px 50px #0000000f !important;
  border-radius: 5px;
}
.order-summary-detail-item-one {
  color: #333;
  font-size: 0.8rem;
  font-weight: bold;
}
.order-summary-detail-item-one > span > img {
  width: 10%;
  margin-right: 10px;
}

.order-summary-detail-item-two {
  color: #007bff;
  font-size: 0.7rem;
  font-weight: bold;
  /* margin-left:30px; */
}

.order-summary-details {
  height: 100px;
  position: relative;
  margin: 5px;
}
.order-summary-details::after {
  content: "";
  border-right: 1px solid #ccc;
  height: 40px;
  position: absolute;
  top: 25px;
  margin: 0px -10px;
}

.product-gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 10px;
  text-align: center;
}
/* .production {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows:auto auto auto auto;
  grid-row-gap: 1rem;
  background: #f4f7f6;
  padding: 2rem 1.5rem;
 
} */

.layout{
  display: flex;
  justify-content: center;
  align-items: center
}
.logo {
  display: grid;
  grid-template-columns: 20px 30px 30px auto;
  grid-column-gap: 1.5%;
}

.logo > p::after {
  border-right: 1px solid #ccc;
}

.arrow {
  display: flex;
  align-self: center;
  width: 50%;
  background: #007bff;
  padding: 10px;
  border-radius: 50%;
  justify-self: flex-end;
}
.arrow:hover {
  background: #97c8f8;
  padding: 10px;
  border-radius: 50%;
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
  grid-template-columns: auto;
 
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

.production-table {
  -webkit-box-shadow: 2px 1px 50px #0000000f !important;
  -moz-box-shadow: 2px 1px 50px #0000000f !important;
  box-shadow: 2px 1px 50px #0000000f !important;
  border-radius: 5px;
  padding: 15px;
  background: #fff;
  margin-top: 2%;
}
.production-table-header {
  display: grid;
  grid-template-columns: 1fr 40% 1fr 1fr 1fr 0.4fr;
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
  background: #d80b0b;
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
  background: #d80b0b;
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
  /* -webkit-box-shadow: 0px 3px 50px #1877ff1c !important;
  -moz-box-shadow: 0px 3px 50px #1877ff1c !important;
  box-shadow: 0px 3px 50px #1877ff1c !important;
  z-index: 1; */
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
  background: #529ded;
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

.product-status p {
  padding: 5px;
  margin: 5px;
  line-height: 5px;
  font-weight: bold;
  color: #1e8406;
}
</style>