<template>
  <div class="header-container">
    <div class="main-logo">
      <img src="../assets/desktop-logo-optimized.svg" class="logo" />
    </div>
    <div class="main-search">
      <div id="search-box">
        <input type="search" placeholder="search" />
        <button>
          <img src="../assets/magnifying-glass.svg" class="search-icon" />
        </button>
      </div>
    </div>
    <div class="main-massages">
      <img src="../assets/mail.svg" />
      <span>Massage</span>
      <span class="badge">2</span>
    </div>
    <div class="main-market">
      <img src="../assets/shopping-cart.svg" />
      <select>
        <option>Market Place</option>
      </select>
      <span class="badge">2</span>
    </div>
    <div class="main-notify">
      <img src="../assets/mail.svg" />
      <span>Notifications</span>
      <span class="badge">2</span>
    </div>
    <div class="main-profile-img">
      <img src="../assets/ibe-arua.jpg" class="profile" />
      <span class="profile-img">Me</span>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.header-container {
  background: #ffffff 0% 0% no-repeat padding-box;

  opacity: 1;
  height: 100%;
  display: grid;
  grid-template-columns: 2fr 1.5fr 1fr 1fr 1fr 0.5fr;
  font-size: 0.8rem;
 
}
.main-logo {
  display: flex;
  align-self: center;
  justify-self: center;
}
.logo {
  width: 50%;
  margin-left: 10%;
}
.main-massages {
  display: grid;
  grid-template-columns: 20px 1fr;
  grid-column-gap: 5%;
  position: relative;
  border-left: 1px solid #f4f7f6;
  height: 50%;
  top: 12px;
  padding-left: 10px;
}
.badge {
  position: absolute;
  top: 5px;
  left: 20px;
  background: #007bff;
  width: auto;
  height: auto;
  font-size: 0.5rem;
  text-align: center;
  color: #ffffff;
  border-radius: 50%;
  padding: 2px 4px;
}

.main-massages img {
  width: 80%;
  align-self: center;
}
.main-massages span {
  align-self: center;
}

.main-market {
  display: grid;
  grid-template-columns: 20px 1fr;
  grid-column-gap: 5%;
  position: relative;
  border-left: 1px solid #f4f7f6;
  height: 50%;
  top: 12px;
  padding-left: 10px;
}

.main-market img {
  width: 80%;
  align-self: center;
}
.main-market select {
  width: 50%;
  align-self: center;
  border: none;
  width: 100%;
  background: inherit;
}

.main-notify {
  display: grid;
  grid-template-columns: 20px 1fr;
  grid-column-gap: 5%;
  position: relative;
  border-left: 1px solid #f4f7f6;
  border-right: 1px solid #f4f7f6;
  height: 50%;
  top: 12px;
  padding-left: 10px;
}

/* .main-notify::after{
    content: "\00007C";
    color: beige;
    padding-left: 5px;
} */
.main-notify img {
  width: 80%;
  align-self: center;
}
.main-notify span {
  align-self: center;
}
.main-profile-img {
  display: grid;
}
.profile {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-self: center;
  border: 1px solid #007bff;
  margin-top: 7px;
  justify-self: center;
}
.profile-img {
  display: flex;
  align-self: center;
  justify-self: center;
}

.profile-img::after {
  content: "\0025BC";
  margin-left: 4px;
  color: #007bff;
}

#search-box {
  width: 100px;
  padding: 10px;

  position: absolute;
  top: 20%;
  right: 0px;
  background: #fff;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
  display: grid;
  grid-template-columns: 1fr 30px;
  margin-right:6px;

}

#search-box input,
button {
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;

  outline: none;
  border: 0;
  background: transparent;
  
}

#search-box input {
  width: 0;
  margin: 0px 4px;
  direction:rtl;
}

#search-box:hover {
  width: 200px;
  border-bottom: 1px solid #333;
 
}

#search-box:hover input {
  width: 100%;
  direction:rtl;
  
 
}
#search-box:hover input:focus {
  width: 100%;
  direction:rtl;
  
 
}

.main-search {
  position: relative;
}

.search-icon {
  display: flex;
  align-self: center;
  width: 80%;
  margin-left: 30%;
  color: #4b4b4b;
}
</style>