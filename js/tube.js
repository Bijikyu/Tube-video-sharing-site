// This file/module contains functions to load video categories and display videos based on the selected category from an API.

// Function to load all video categories and display them as tabs.
const loadAllTubeItems = async () => {

    const allVideos = await fetch('https://openapi.programming-hero.com/api/videos/categories'); // Fetches video categories from the API.
    const data = await allVideos.json(); // Parses the response to JSON.
    console.log(data.data); // Logs the data to the console.

    const catchTabContainer = document.getElementById('tab-container'); // Gets the tab container element from the DOM.

    // Iterates over each category and creates a tab for it.
    data.data.forEach((category) => {
        const div = document.createElement('div'); // Creates a new div element.
        div.innerHTML = `
        <a onclick="handleTubeTab('${category.category_id}')" class="tab bg-gray-200 container mx-auto rounded-md m-4">${category.category}</a> 
        
        `; // Sets the inner HTML of the div with a clickable tab.
        catchTabContainer.appendChild(div); // Appends the div to the tab container.
    });

};

// Function to handle the click event on a category tab and display the videos of that category.
const handleTubeTab = async (category_id) => {

    const res = await fetch(`
    https://openapi.programming-hero.com/api/videos/category/${category_id}
    `); // Fetches videos of a specific category from the API.

    const data = await res.json(); // Parses the response to JSON.

    const dynamicCardAppendContainer = document.getElementById('dynamic-card-append-container'); // Gets the container element for appending video cards.

    dynamicCardAppendContainer.innerHTML = ""; // Clears the container before adding new video cards.

    // Checks if there are no videos in the category and displays a message.
    if(data.data.length === 0){
      dynamicCardAppendContainer.innerHTML =`
      
      <div class="mt-12">
       <img class="ml-14" src="./Icon.png"></img>
       <p class="mt-4">Opps! Sorry, There is no content here...</p>
      </div>
      
      `
    }

    // Iterates over each video and creates a card for it.
    else{
      data?.data?.forEach((tube) => {
        const seconds = (tube.others.posted_date) // Gets the posted date in seconds.
        const hours = Math.floor(seconds/3600); // Converts seconds to hours.
        const mins = Math.floor((seconds % 3600) / 60); // Converts the remainder to minutes.
          const div = document.createElement('div'); // Creates a new div element.
          div.innerHTML = `
          <div class="card relative bg-base-100 m-4 rounded-lg shadow-xl">
          <figure class=" h-40 w-full rounded-lg" ><img src="${tube?.thumbnail}" alt="Shoes" /></figure>
          <p id = "posted-time" class="absolute bg-black rounded-md bottom-40 left-64 text-white font-medium text-sm ">${hours} hrs ${mins} mins ago</p>
  
          <div class="card-body">
  
              <div class="flex gap-4">
              <div class="left-div"><img class=" h-10 w-10 rounded-full" src="${tube?.authors[0]?.profile_picture}" alt=""></div> 
  
              <div class="right-div" >
              <h2 class="font-semibold" >${tube.title}</h2>
              <div class="flex gap-4" >
              <p>${tube?.authors[0].profile_name}</p>
              <p class="badge badge-xs rounded-full mt-2">${tube?.authors[0]?.verified === true ? `
              <!-- SVG for verified badge -->
              ` : ''}</p>
              </div>
              <p>${tube?.others?.views}</p>
              </div>
          </div>
  
      </div>
      
      `;
  
      if( seconds === ''){
        div.querySelector('#posted-time').style.display = 'none'; // Hides the posted time if it is not available.
      }
  
          dynamicCardAppendContainer.appendChild(div); // Appends the video card to the container.
  
      }
      );
    }

}

// Function to navigate to the blog page.
const blog = () =>{
  window.location.href = './js/blog.html'; // Changes the current window location to the blog page.
}

loadAllTubeItems(); // Calls the function to load all video categories.

handleTubeTab('1000'); // Calls the function to display videos of the default category.