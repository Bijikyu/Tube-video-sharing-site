const loadAllTubeItems = async() => {

    const allVideos = await fetch('https://openapi.programming-hero.com/api/videos/categories');

    const data = await allVideos.json();
    console.log(data.data);


    // console.log("hello from js");

}

loadAllTubeItems();