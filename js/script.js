// Select the photo element
const photo = document.getElementById('photo');
const cake = document.querySelector('.cake'); // Select the cake

let isDragging = false; // Track drag state
let offsetX, offsetY; // Track offsets during drag

// Mouse down event to initiate dragging
photo.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    photo.style.cursor = 'grabbing';
});

// Mouse move event to drag the photo
document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const container = document.getElementById('photo-container');
        const rect = container.getBoundingClientRect();
        
        // Update photo's position relative to the container
        const x = e.clientX - rect.left - offsetX;
        const y = e.clientY - rect.top - offsetY;

        photo.style.position = 'absolute';
        photo.style.left = `${x}px`;
        photo.style.top = `${y}px`;
    }
});

// Mouse up event to end dragging
document.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        photo.style.cursor = 'grab';
        photo.classList.add('hidden'); // Hide photo after dragging
        cake.classList.remove('hidden'); // Show cake after dragging
    }
});

// Prevent text selection while dragging
document.addEventListener('selectstart', (e) => {
    if (isDragging) e.preventDefault();
});
