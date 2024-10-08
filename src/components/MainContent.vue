<template>
  <div>
    <div>
      <h1>Transforming Businesses Through Technology</h1>
    </div>
  <section class="carousel-wrapper" role="group" aria-roledescription="carousel" aria-label="description/name of section">
    <div class="carousel">
      <div class="slides" id="myCarousel-items" :aria-live="autoRotate ? 'off' : 'polite'" @focus="stopAutoRotate" @blur="startAutoRotate" :style="{ transform: 'translateX(' + (-currentIndex * 100) + '%)' }">
        <div v-for="(slide, index) in slides" :key="index"
          :id="index"
          :tabindex="index === currentIndex ? 0 : -1" 
          role="group" 
          aria-roledescription="slide" 
          class="slide"  
          :aria-hidden="index !== currentIndex">
          <img :src="slide.image" :alt="slide.alt">
          <p>{{ slide.caption }}</p>
        </div>
      </div>
    </div>

    <!-- Control Buttons Container -->
    <div class="controls">
      <button @click="toggleAutoRotate" class="control-btn" :aria-label="autoRotate ? 'Stop' : 'Start'">{{ autoRotate ? 'Stop' : 'Start' }}</button>
      <button class="previous round" aria-controls="myCarousel-items" aria-label="previous" @click="prevSlide1">&#8249;</button>
      <button class="next round" aria-controls="myCarousel-items" aria-label="next" @click="nextSlide1">&#8250;</button>
    </div>
  </section>
</div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      slides: [
        { image: 'Images/tcs.jpg', alt: 'Image 1', caption: 'Image description 1' },
        { image: 'Images/TCS1.avif', alt: 'Image 2', caption: 'Image description 2' },
        { image: 'Images/TCS5.jpg', alt: 'Image 3', caption: 'Image description 3' },
        { image: 'Images/TCS3.jpg', alt: 'Image 4', caption: 'Image description 4' },
        { image: 'Images/TCS4.jpg', alt: 'Image 5', caption: 'Image description 5' }
      ],
      autoRotate: true,
      intervalId: null
    };
  },
  mounted() {
    this.startAutoRotate();
  },
  methods: {
    startAutoRotate() {
      this.intervalId = setInterval(this.nextSlide, 5000);
    },
    stopAutoRotate() {
      clearInterval(this.intervalId);
    },
    nextSlide() {
      if (this.autoRotate) {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      }
    },
    nextSlide1() {
      if (!this.autoRotate) {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      }
    },
    prevSlide() {
      if (this.autoRotate) {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
      }
    },
    prevSlide1() {
      if (!this.autoRotate) {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
      }
    },
    toggleAutoRotate() {
      this.autoRotate = !this.autoRotate;
      if (this.autoRotate) {
        this.startAutoRotate();
      } else {
        this.stopAutoRotate();
      }
    }
  },
  beforeUnmount() {
    this.stopAutoRotate();
  }
};
</script>

<style scoped>
.carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.slides {
  display: flex;
  transition: transform .5s ease;
}

.slide {
  flex: 0 0 100%;
}

.slide img {
  width: 100%;
  height: 100%; /* Set height to 100% */
  object-fit: cover; /* Ensures the image covers the area without cutting off */
}

.slide p {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(7, 7, 87, 0.321);
  color: #fff;
  padding: 10px;
  margin: 0;
}

div > h1 {
  background-color: rgb(12, 77, 197);
  color:white;
  padding: 2rem;
  margin: 0;
}

.controls {
  position: absolute;
  top: 17rem; /* Adjust as needed */
  left: 8%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column; /* Stack buttons vertically */
  gap: 10px; /* Space between buttons */
  z-index: 10; /* Ensure buttons are above other elements */
}

.control-btn {
  padding: 5px 10px;
  background-color: rgba(51, 51, 51, 0.8); /* Semi-transparent background */
  color: #fff;
  border: none;
  cursor: pointer;
  outline-offset: 2px;
  border-radius: 5px;
}

button {
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
  outline-offset: 1px;
}

button:hover {
  background-color: black;
  color: #f1f1f1;
}

.previous, .next {
  background-color: #f1f1f1;
  color: black;
}

.round {
  border-radius: 50%;
}
</style>
