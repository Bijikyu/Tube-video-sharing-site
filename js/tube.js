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
    // Catching dynamic-card-append-container for appending card one by one and then show card in display.

    const dynamicCardAppendContainer = document.getElementById('dynamic-card-append-container');

    // Creating div by forEach for dynamicCardAppendContainer

    data.data.forEach((tube) => {

        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>

        <div class="card-body">

            <div>
                <!-- <img src="./Logo.png" alt="">
                <p>a</p> -->
                <p class="card-title">
                    <img src="./Icon.png" alt=""> building a winning UX Strategy
                </p>
            </div>

            <h2 class="">
                Awlad hossain
                <div class="badge badge-xs rounded-full badge-primary">a</div>
            </h2>
            <!-- <p>If a dog chews shoes whose shoes does he choose?</p> -->
            <!-- <div class="card-actions justify-end">
                <div class="badge badge-outline">Fashion</div>
                <div class="badge badge-outline">Products</div>
            </div> -->
            <!-- show views -->
            <p>91k views</p>
        </div>

    </div>
    
    `;

    // Appending card in container for showing in display for user

    dynamicCardAppendContainer.appendChild(div);

    }
    );

    console.log(data.data);

    console.log(category_id);
}


loadAllTubeItems();