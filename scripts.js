document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const blogContainer = document.getElementById("blog-container");
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalContent = document.getElementById("modal-content");
    const closeModal = document.querySelector(".close");
  
    // Function to open the modal and display full blog post content
    function openModal(title, content) {
      modalTitle.textContent = title;
      modalContent.innerHTML = content;
      modal.style.display = "block";
    }
  
    // Function to close the modal
    function closeModalFn() {
      modal.style.display = "none";
    }
  
    // Close modal when the "X" button is clicked
    closeModal.addEventListener("click", closeModalFn);
  
    // Close modal when clicking outside the modal content
    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeModalFn();
      }
    });
  
    // Function to dynamically load blog posts
    function loadBlogPosts() {
      // Simulated blog posts data
      const blogPosts = [
        {
          title: "Early Life and Education",
          content: "B.R. Ambedkar was born in Mhow..."
        },
        {
          title: "Fight Against Caste Discrimination",
          content: "Ambedkar dedicated his life to..."
        },
        {
          title: "Contribution to Indian Constitution",
          content: "As the Chairman of the Drafting..."
        }
        // Add more blog posts as required
      ];
  
      // Function to filter blog posts based on search input
      function filterBlogPosts() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredPosts = blogPosts.filter(post => post.title.toLowerCase().includes(searchTerm));
        displayBlogPosts(filteredPosts);
      }
  
      // Function to display blog posts
      function displayBlogPosts(posts) {
        blogContainer.innerHTML = "";
  
        posts.forEach(post => {
          const article = document.createElement("article");
          article.innerHTML = `
            <h2 class="post-title">${post.title}</h2>
            <p>${post.content.slice(0, 150)}...</p>
          `;
          article.addEventListener("click", function () {
            openModal(post.title, post.content);
          });
          blogContainer.appendChild(article);
        });
      }
  
      // Display all blog posts initially
      displayBlogPosts(blogPosts);
  
      // Search for blog posts when the search input changes
      searchInput.addEventListener("input", filterBlogPosts);
    }
  
    // Load blog posts when the page is ready
    loadBlogPosts();
  });
  