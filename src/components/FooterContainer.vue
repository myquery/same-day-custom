<template>
  <div class="container">
    <div class="store">
      <h5>Download App</h5>
      <div class="store-icons">
        <img src="../assets/apple.svg" />
        <img src="../assets/google-play-store.svg" />
      </div>
    </div>
    <div class="footer-content">
      <p>
        Again, Jonathan points out that the browser treats the markup that comes down the wire as a stream (this is particular clear in the render pause demo), and the CSS selectors are applied to that stream as the elements are built in the DOM.
        The problem with E:has(s)
      </p>
      <ul>
        <li>Lorem Ipsum is simply</li>
        <li>Lorem Ipsum is simply</li>
        <li>Lorem Ipsum is simply</li>
      </ul>
    </div>

    <div class="social">
      <h5>Connect with us:</h5>
      <div class="social-icons">
        <img src="../assets/twitter.svg" />
        <img src="../assets/facebook.svg" />
        <img src="../assets/instagram.svg" />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.container {
  height: 40%;
  display: grid;
  grid-template-columns: 30% 1fr 30%;
  width: 100%;
   background: #EEEEEE;
  /* padding: 1rem; */
  /* position: absolute;
  bottom: 0%; */
  z-index: 1;
}

.store {
  padding: 0 20px;
  margin: 20% 5%;
  color: #007bff;
  font-size: 0.9rem;
}
.store-icons {
  display: grid;
  grid-template-columns: 40px 40px;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 15px;
}
.store-icons img {
  padding: 10px;
  width: 40%;
  margin: 0 10px;
}
.store-icons img:hover {
  background: #ccc;
  border-radius: 50%;
 
}

.social {
  padding: 20px;
  padding: 0 20px;
  margin: 20% 5%;
  text-align: right;
  font-size: 0.8rem;
  color: #007bff;
  position: relative;
}
.social-icons {
  display: grid;
  grid-template-columns: 50px 50px 50px;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 15px;
  position: absolute;
  right: 10px;
}
.social-icons img {
  width: 40%;
  padding: 10px;

  margin: 10px 10px;
}

.social-icons  img:hover {
  background: #ccc;
  border-radius: 50%;
 
}


.footer-content {
  font-size: 0.7rem;
  padding: 0 5px;
  margin: 20% 5%;
}

.footer-content ul {
  font-size: 0.7rem;
  list-style: none;
  padding-left: 0px;
  margin-top: 10%;
}

.footer-content ul li {
  display: inline;
  margin: 10px;
  text-align: left;
}

.footer-content ul li:hover {
  color: #007bff;
  text-decoration: underline;
}
</style>