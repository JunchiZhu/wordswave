<template>
  <div class="video-section">
    <h2>C3 AI Applications</h2>
    <div class="video-card">
      <iframe
          src="https://www.youtube.com/embed/example"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
      ></iframe>
      <div class="video-info">
        <h3>C3 AI Reliability</h3>
        <p>Description of the application...</p>
        <button>View Demo</button>
        <button>Learn More</button>
      </div>
    </div>
    <!-- Add more video cards as needed -->
  </div>
</template>

<script>
export default {
  name: 'VideoSection',
};
</script>

<style scoped>
.video-section {
  padding: 20px;
}

.video-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #333;
  padding: 10px;
  margin: 10px 0;
  border-radius: 8px;
}

.video-card iframe {
  width: 100%;
  height: 400px;
  border-radius: 8px;
}

.video-info {
  text-align: center;
  color: white;
}

.video-info h3 {
  margin-top: 10px;
}

.video-info button {
  margin-top: 10px;
  padding: 8px 20px;
  background-color: #555;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.video-info button:hover {
  background-color: #666;
}
</style>
