<template>
  <header>
    <!--Sidhuvud-->
    <header>
      <!--Logotyp-->
      <img src="../assets/logo-big.png" alt="logotyp" id="logo" />
      <!--Navigering: -->
      <div class="nav-container">
        <nav>
          <ul class="nav-menu">
            <li class="link">
              <RouterLink to="/" class="link">Hem</RouterLink>
            </li>
            <li class="link">
              <RouterLink to="/about" class="link">Vårt gym</RouterLink>
            </li>
            <li class="link">
              <RouterLink to="/sports" class="link">Våra sporter</RouterLink>
            </li>
            <li class="link">
              <RouterLink to="/schedule" class="link">Schema</RouterLink>
            </li>
            <li class="link">
              <RouterLink to="/contact" class="link">Kontakt</RouterLink>
            </li>
          </ul>
        </nav>
      </div>

      <!--Knappar:-->
      <div class="buttons">
        <button class="menu_btn" @click="openMenu">Meny</button>
        <button class="trial_btn" @click="goBooking">Provträna</button>
        <button class="member_btn" @click="goMember">Bli medlem!</button>
      </div>
    </header>

    <!--Mobil-meny-->
    <div class="mobile-nav-container" ref="mobileNav" v-show="isMenuOpen">
      <ul class="mobile-nav-menu">
        <li class="link">
          <RouterLink to="/" class="link">Hem</RouterLink>
        </li>
        <li class="link">
          <RouterLink to="/about" class="link">Vårt gym</RouterLink>
        </li>
        <li class="link">
          <RouterLink to="/sports" class="link">Våra sporter</RouterLink>
        </li>
        <li class="link">
          <RouterLink to="/schedule" class="link">Schema</RouterLink>
        </li>
        <li class="link">
          <RouterLink to="/contact" class="link">Kontakt</RouterLink>
        </li>
      </ul>
      <button @click="closeMenu" class="close_btn">Stäng menyn</button>
    </div>
  </header>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "SiteHeader",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  mounted() {
    this.animateHeaderContent(); // Call the animation when the component mounts
  },
  methods: {
    openMenu() {
      console.log("Opening menu..."); // Debugging line
      this.isMenuOpen = true;
      this.$nextTick(() => { // Ensures DOM updates before GSAP runs
        let mobileNav = this.$refs.mobileNav;
        gsap.set(mobileNav, { y: "-100%" }); // Set initial position
        gsap.to(mobileNav, {
          y: "0%",
          duration: 0.5,
          ease: "power1.out",
        });
      });
    },
    closeMenu() {
      console.log("Closing menu..."); // Debugging line
      let mobileNav = this.$refs.mobileNav;
      gsap.to(mobileNav, {
        y: "-100%",
        duration: 0.5,
        ease: "power1.out",
        onComplete: () => {
          this.isMenuOpen = false; // Hide after animation
        },
      });
    },
    animateHeaderContent() {
      const headerContent = this.$el.querySelectorAll("header *"); // Select elements within the header
      headerContent.forEach((element) => {
        gsap.fromTo(
          element,
          {
            y: "-200%", // Start position
            opacity: 0, // Start invisible
          },
          {
            y: "0%", // End position
            opacity: 1, // Fully visible
            duration: 0.8, // Animation duration
            ease: "power1.out", // Easing for smooth animation
            stagger: 0.3, // Stagger for sequential animation
          }
        );
      });},
      goBooking() {
        this.$router.push({ name: 'booking' });
      },
      goMember() {
        this.$router.push({ name: 'contact' });
      }
  },
};
</script>


<style scoped>
/*--------------------------Sidhuvud: -----------------------------*/

header {
  width: 100%;
  height: 5.8rem;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
}

/*-----------------------Vanlig meny-------------------*/

/*Logotyp: */
#logo {
  height: 5.5rem;
  margin-left: 4vmin;
}

/*Navigering: */
nav {
  font-family: "Montserrat Alternates", sans-serif;
}

/*Navigeringsmeny: */
.nav-menu {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 4vmin;
  font-weight: 300;
}

/*Navigerings-länkar:*/
.nav-menu li {
  position: relative;
  color: #f0f0f0;
}

.nav-menu a {
  text-decoration: none;
  color: #f0f0f0;
  font-size: 1.2rem;
  padding: 5px 0;
  display: inline-block;
  position: relative;
}

.nav-menu a:hover {
  color: #4a9dff;
}

.nav-menu a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background-color: #dbcb13;
  transition: width 0.3s ease-in-out;
}

.nav-menu a:hover::after {
  width: 100%;
}

/*----------------- Knappar: -------------*/

/*Knapparnas behållare: */
.buttons {
  height: 5.8rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 8vmin;
  margin-right: 4vmin;
}

/*Menyknapp: */
.menu_btn {
  display: none;
  background-color: rgba(0, 0, 0, 0);
  color: #136835;
  border: #44ff8c solid 2px;
  padding: 0.5rem;
  cursor: pointer;
  transition: 0.8s ease-in, background-color 0.4s ease-in, border 0.4s ease-in;
}

/*Knapp för att stänga menyn: */
.close_btn {
  background-color: rgba(0, 0, 0, 0);
  color: #fab1b1;
  border: #db6565 solid 2px;
  padding: 0.5rem;
  cursor: pointer;
  transition: 0.8s ease-in, background-color 0.4s ease-in, border 0.4s ease-in;
  margin-bottom: 2rem;
}

/*Knapp för att boka prov-träning: */
.trial_btn {
  background-color: rgba(0, 0, 0, 0);
  color: #ffcc4a;
  border: #ffcc4a solid 2px;
  padding: 0.5rem;
  cursor: pointer;
  transition: 0.8s ease-in, background-color 0.4s ease-in, border 0.4s ease-in;
}

.trial_btn:hover {
  background-color: #ffcc4a;
  border: solid rgb(0, 117, 113) 2px;
  color: black;
}

/*Knapp för att bli medlem: */
.member_btn {
  background-color: rgba(0, 0, 0, 0);
  color: #4a9dff;
  border: #4a9dff solid 2px;
  padding: 0.5rem;
  cursor: pointer;
  transition: 0.8s ease-in, background-color 0.4s ease-in, border 0.4s ease-in;
}

.member_btn:hover {
  background-color: #4a9dff;
  border: #ffcc4a solid 2px;
  color: black;
}

.member_btn,
.trial_btn,
.menu_btn{
  width: 100px;
  height: 60px;
  font-family: "Montserrat Alternates", sans-serif;
}

/*--------------------------Mobil-meny: ---------------*/

.mobile-nav-container {
  display: none;
  background-color: black;
  transform: translateY(-500%);
  flex-direction: column;
  align-items: center;
  align-content: center;
}

.mobile-nav-menu {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  gap: 6vmin;
  font-weight: 300;
}

.mobile-nav-menu li {
  position: relative;
  color: #f0f0f0;
}

.mobile-nav-menu a {
  text-decoration: none;
  color: #f0f0f0;
  font-size: 2.2rem;
  padding: 5px 0;
  display: inline-block;
  position: relative;
}


/*För små skärmar: */
@media only screen and (max-width: 640px) {
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    height: fit-content;
  }

  .mobile-nav-container {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 101;
  }

  .nav-menu {
    display: none;
    visibility: hidden;
  }

  .menu_btn {
    display: block;
  }

  .member_btn,
.trial_btn,
.menu_btn{
  width: 80px;
  height: 60px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-content: center;
 align-items: center;
}

}


  @media only screen and (min-width: 641px) and (max-width: 840px) {

    header {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    height: fit-content;
  }

  .mobile-nav-container {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 101;
  }

  .nav-menu {
    display: none;
    visibility: hidden;
  }

  .menu_btn {
    display: block;
  }
  }






</style>