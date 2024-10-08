<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <h1>Articles</h1>
        <p>Explore our collection of articles on web accessibility topics.</p>
      </div>
    </section>

    <!-- Articles List Section -->
    <section class="articles">
      <div class="container">
        <div class="article" v-for="article in articles" :key="article.id">
          <h2 id="title-sr">{{ article.title }}</h2>
          <p>{{ article.description }}</p>
          <router-link :to="article.link" :aria-label="'read more about ' + article.title">Read more</router-link>
        </div>
      </div>
    </section>
   
  </div>
</template>

<script>
export default {

  name: 'ArticlePage',
  data() {
    return {
      articles: [
        {
          id: 1,
          title: 'Introduction to Web Accessibility',
          description: 'Learn the basics of web accessibility and why it is important for everyone.',
          link: '/intro'
        },
        {
          id: 2,
          title: 'Accessible Web Design Principles',
          description: 'Discover key principles for designing accessible web interfaces.',
          link: '/design'
        },
        {
          id: 3,
          title: 'Testing for Accessibility',
          description: 'Understand how to test your website for accessibility issues.',
          link: 'test'
        },
        {
          id: 4,
          title: 'ARIA: Accessible Rich Internet Applications',
          description: 'Learn how to use ARIA to enhance accessibility for dynamic web content.',
          link: 'aria'
        },
        {
          id: 5,
          title: 'Accessible Forms',
          description: 'Find out how to create accessible forms that are easy to use for everyone.',
          link: 'form'
        },
        {
          id: 6,
          title: 'Accessible Didalog',
          description: 'Learn how to create a Modal dialog that are accessible to everyone regardless of their abilities.',
          link: 'modal'
        },
        {
          id: 7,
          title: 'EU digital accessibility standard',
          description: 'Understanding Accessibility: EAA, EN 301549, and WCAG',
          link: 'eaa'
        },
        {
          id: 8,
          title: 'American digital accessibility standard',
          description: 'Understanding Section 508, ADA, and WCAG',
          link: 'ada'
        },
        {
          id: 9,
          title: 'American digital accessibility standard and WCAG',
          description: 'Understanding Section 508, ADA, and WCAG',
          link: 'sect'
        },
        {
          id: 10,
          title: 'Plan for Accessibility',
          description: 'Planning for accessibility is crucial',
          link: 'plan'
        },
        {
          id: 11,
          title: 'Accessibility Guide',
          description: 'Ensuring that software is accessible involves various strategies',
          link: 'aest'
        },
        {
          id: 12,
          title: 'Basic Git Commands',
          description: 'Learn about basic git commands',
          link: 'git'
        },
        {
          id: 13,
          title: 'Design Accessible button',
          description: 'Designing button with accessiblity in mind',
          link: 'button'
        },
        {
          id: 14,
          title: 'Design Accessible link',
          description: 'Designing link with accessibility in mind',
          link: 'link'
        },
        {
          id: 14,
          title: 'Design Accessible Form',
          description: 'Designing form with accessibility in mind',
          link: 'df'
        },
        {
          id: 15,
          title: 'Accessibility Chekclist',
          description: 'Accessibility Check to create content',
          link: 'dc'
        },
        {
          id: 16,
          title: 'Accessibility Test Matrix',
          description: 'Accessibility Test matrix is crucial',
          link: 'testm'
        },
        {
          id: 17,
          title: 'Accessibility test matrix',
          description: 'Accessibility test report',
          link: 'tm'
        },
        {
          id: 18,
          title: 'Accessible Mobile App',
          description: 'Accessibility Consideratons for Mobile App',
          link: 'mob'
        },
        {
          id: 19,
          title: 'Automated Test for Reat',
          description: 'Learn how to run accessibility test on React',
          link: 'rtest'
        },
        {
          id: 20,
          title: 'Automated Test for Vue',
          description: 'Learn how to run accessibility test on Vue',
          link: 'vtest'
        },
        {
          id: 21,
          title: 'Selenium Automation Interview Question',
          description: 'Learn about Selenium interview questions',
          link: 'sint'
        },
        {
          id: 22,
          title: 'Selenium WebDriver Locators in Java',
          description: 'Learn about Selenium WebDriver Locators in Java ',
          link: 'locator'
        },
        {
          id: 23,
          title: 'Form Accessibility',
          description: 'How to make form field Accessible ',
          link: 'form'
        },
        {
          id: 24,
          title: 'Accessible modal dialog',
          description: 'Learn more bout mixins and focus trap ',
          link: 'parent'
        },
        {
          id: 25,
          title: 'Accessibile carousel',
          description: 'Learn more about accessibility ',
          link: 'caro'
        },
      ]
    };
  }
};
</script>

<style scoped>
/* General styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  color: #333;
}

/* Hero Section */
.hero {
  background-color: #0077c8;
  color: white;
  padding: 2em 1em;
  text-align: center;
}

.hero .container {
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 2.5em;
  margin: 0.5em 0;
}

.hero p {
  font-size: 1.2em;
  margin: 0.5em 0 1.5em;
}

/* Articles List Section */
.articles {
  background-color: #f9f9f9;
  padding: 2em 1em;
}

.articles .container {
  max-width: 60rem;
  margin: 0 auto;
}

.article {
  background: white;
  padding: 1.5em;
  margin: 1em 0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.article h2 {
  font-size: 1.5em;
  margin: 0.5em 0;
}

.article p {
  font-size: 1em;
  margin: 0.5em 0 1em;
}

.article a {
  color: #1a73e8;
  text-decoration: none;
  font-size: 1em;
}

.article a:hover {
  text-decoration: underline;
}
</style>

