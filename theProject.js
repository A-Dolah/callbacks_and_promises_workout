// SPOTIFY API DATA
// Fetch API - Promise based

const coded = btoa(
  "40321916cd0e44878a981cab0fc9d7f0:36c4adc0ada9408e8570b9957f17ae70"
);

fetch("https://accounts.spotify.com/api/token", {
  method: "POST",
  headers: {
    // 'Content-Type': 'application/json'
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization:
      "Basic NDAzMjE5MTZjZDBlNDQ4NzhhOTgxY2FiMGZjOWQ3ZjA6MzZjNGFkYzBhZGE5NDA4ZTg1NzBiOTk1N2YxN2FlNzA="
  },
  body: ["grant_type=client_credentials"]
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
    return data;
  })
  .then(formatted => {
    fetchData(formatted.access_token);
  });

const fetchData = accessToken => {
  fetch("https://api.spotify.com/v1/search?q=michael+jackson&type=album", {
    method: "GET",
    headers: {
      // 'Content-Type': 'application/json'
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${accessToken}`
    }
  })
    .then(response => response.json())
    .then(data => console.log(data));
};
