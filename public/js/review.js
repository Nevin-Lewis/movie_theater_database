const reviewaddHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const review = document.querySelector('#review-signup').value();
  const movie_id = 1;
  if (review ) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/reviews', {
      method: 'POST',
      body: JSON.stringify({review, movie_id}),
      headers: {'Content-Type': 'application/json'},
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};
document.querySelector('.review-form')
    .addEventListener('submit', reviewaddHandler);
