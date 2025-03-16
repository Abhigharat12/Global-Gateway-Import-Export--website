fetch('structuredData.json')
  .then(response => response.json())
  .then(data => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  })
  .catch(error => {
    console.error('Error loading structured data:', error);
  });