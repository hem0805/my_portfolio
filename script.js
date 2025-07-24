function showProject(id) {
  const projects = {
    depression: {
      title: "Multimodal Depression Detection",
      body: "An AI model fusing text, audio, and video for emotional analysis in healthcare and wellbeing applications."
    },
    activity: {
      title: "Human Activity Recognition",
      body: "Real-time action detection using multi-sensor deep CNNs for smart devices and safety monitoring."
    },
    skincare: {
      title: "AI Skincare Recommendation",
      body: "A Streamlit app leveraging MobileNetV2 and LLMs for personalized skincare powered by computer vision."
    }
  };
  const modal = document.getElementById('project-modal');
  const content = document.getElementById('modal-content');
  content.innerHTML = `<span class="close" onclick="closeModal()">&times;</span><h3>${projects[id].title}</h3><p>${projects[id].body}</p>`;
  modal.style.display = 'block';
}
function closeModal() { document.getElementById('project-modal').style.display = 'none'; }
document.querySelectorAll('nav a').forEach(link =>
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  })
);
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Your message has been sent!');
});
