const loadAllTubeItems = async () => {

    const allVideos = await fetch('https://openapi.programming-hero.com/api/videos/categories');

    const data = await allVideos.json();
    console.log(data.data);

    const catchTabContainer = document.getElementById('tab-container');
    data.data.slice(0, 4).forEach((category) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <a onclick="handleTubeTab('${category.category_id}')" class="tab bg-gray-200 container mx-auto rounded-md m-4">${category.category}</a> 
        
        `;
        catchTabContainer.appendChild(div);
    });

    // console.log("hello from js");

};


const handleTubeTab = async (category_id) => {

    const res = await fetch(`
    https://openapi.programming-hero.com/api/videos/category/${category_id}
    `);

    const data = await res.json();
    console.log(data);

    console.log(category_id);
}


loadAllTubeItems();