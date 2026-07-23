// Add your JavaScript code here (optional).
// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select the button element
    const button = document.querySelector('button');

    // Select the content and loader elements
    const content = document.querySelector('.content');
    const loader = document.querySelector('.loader');

    // Define the image link and the file size
    const imageLink = 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Tokyo_Sky_Tree_2012.JPG'; // Image URL
    const downloadSize = 8185374; // File size in bytes (8.1 MB)

    // Add event listener to the button
    button.addEventListener('click', (e) => {
        let timeStart, timeEnd;
        const downloadImg = new Image();

        // Hide the button and show the loader
        content.classList.add('hide');
        loader.classList.remove('hide');

        // Start timing the image download
        timeStart = new Date().getTime();
        const cacheBuster = "?nn=" + timeStart;
        downloadImg.src = imageLink + cacheBuster;

        // On image load completion
        downloadImg.onload = function () {
            timeEnd = new Date().getTime();

            // Calculate time duration in seconds
            const timeDuration = (timeEnd - timeStart) / 1000;

            // Convert size to bits and calculate Mbps
            const bitsLoaded = downloadSize * 8; // Convert bytes to bits
            const speedMbps = (bitsLoaded / timeDuration / 1024 / 1024).toFixed(2);

            // Display the result
            content.innerHTML = `${speedMbps} <small>Mbps</small>`;
            loader.classList.add('hide');
            content.classList.remove('hide');
            // Change button text
            e.target.innerText = 'CHECK AGAIN';
        };

        // Handle image load error
        downloadImg.onerror = function () {
            content.innerHTML = "Error loading the image. Please try again.";
            loader.classList.add('hide');
            content.classList.remove('hide');
        };
    });
});
