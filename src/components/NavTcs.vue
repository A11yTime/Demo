<template>
  <header>
    <nav class="navbar" aria-label="Main Navigation">
      <div class="logo">
        <router-link to="/">
          <img :src="image1" alt="TATA Consultancy Services">
        </router-link>
      </div>
      <button class="hamburger" @click="toggleMenu" :aria-expanded="isMenuOpen" aria-label="Toggle navigation">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
      <ul class="nav-links" :class="{ 'active': isMenuOpen }" role="menubar">
        <li role="none">
          <router-link to="/" role="menuitem">Home</router-link>
        </li>
        <li role="none">
          <a 
             href="#" 
             role="menuitem" 
             aria-haspopup="true" 
             :aria-expanded="showDropdown" 
             @click.prevent="toggleDropdown"> 
             Services
          </a>
          <ul class="dropdown" v-if="showDropdown" role="menu" aria-label="Services submenu" aria-hidden="false">
            <li role="none">
              <a href="#" role="menuitem">Consulting</a>
            </li>
            <li role="none">
              <a href="#" role="menuitem">Technology</a>
            </li>
            <li role="none">
              <a href="#" role="menuitem">Outsourcing</a>
            </li>
          </ul>
        </li>
        <li role="none">
          <a href="#" role="menuitem">Industries</a>
        </li>
        <li role="none">
          <a href="#" role="menuitem">Insights</a>
        </li>
        <li role="none">
          <a href="#" role="menuitem">About Us</a>
        </li>
        <li role="none">
          <a href="#" role="menuitem">Contact</a>
        </li>
        <li>
          <router-link to="comp" role="menuitem">Components</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showDropdown: false,
      isMenuOpen: false,
      image1: "Images/TCS.png",
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<style scoped>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.logo img {
  height: 50px; /* Set the height to a more appropriate size */
  width: auto;  /* Keep the aspect ratio */
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #003366; /* Navbar background color */
  position: relative; /* Ensure dropdowns are positioned relative to the navbar */
  z-index: 2; /* Ensure navbar is above other content */
}

.nav-links {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.nav-links li {
  position: relative;
  margin: 0 15px;
}

.nav-links a {
  text-decoration: none;
  color: white;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #ffcc00; /* Highlight color on hover */
}

.dropdown {
  position: absolute;
  background-color: #003366; /* Match the navbar background */
  list-style: none;
  padding: 10px 0;
  margin: 5px 0 0 0; /* Add a little space above the dropdown */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1;
  max-width: 200px; /* Set a maximum width for the dropdown */
  /* width: 100%; Ensure it takes the full width up to max-width */
  left: 0; /* Align with the dropdown toggle */
  border-radius: 4px; /* Add rounded corners for better aesthetics */
}

/* Ensure the entire area of the dropdown is clickable */
.dropdown li {
  margin: 0; /* Remove margin for consistent spacing */
}

.dropdown a {
  padding: 10px 20px; /* Consistent padding for links */
  display: block;
  color: white;
  transition: background-color 0.3s;
}

.dropdown a:hover {
  background-color: #ffcc00; /* Highlight color for dropdown items */
  color: black; /* Change text color on hover */
}

/* Hamburger menu styles */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
}

.bar {
  width: 30px;
  height: 3px;
  background-color: white;
  margin: 3px 0;
  transition: all 0.3s ease;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 80px; /* Space from the top to avoid covering the logo */
    left: 0;
    right: 0;
    background-color: #003366; /* Match navbar */
    z-index: 1;
  }

  .nav-links.active {
    display: flex;
  }

  .nav-links li {
    margin: 10px 0; /* Space between items */
  }

  .hamburger {
    display: flex; /* Show hamburger menu on small screens */
  }
  .dropdown {
   right: 0;
  }
}
</style>
