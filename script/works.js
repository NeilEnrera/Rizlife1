// Book data
const books = {
    english: {
        title: "The Philippines a century hence",
        author: "José Rizal",
        description: "José Rizal, in this short work (which originally appeared in Spanish in the Filipino newspaper La Solidaridad, September 1889-January 1890) gives a prediction of the future of the Philippines.",
        publishDate: "1912",
        language: "English",
        pages: "136",
        coverImage: "image/The Philippines a Century Hence.jpg",
        details: "1912, Philippine Education Company"
    }
};

// Work details for modal views
const workDetails = {
    // Literary Works
    noli: {
        title: "Noli Me Tangere (Touch Me Not)",
        image: "image/noli-me-tangere.jpg",
        description: "A seminal novel that exposed the abuses and injustices committed by Spanish authorities in the Philippines.",
        details: `
            <h3>Work Details:</h3>
            <ul>
                <li><strong>Published:</strong> 1887</li>
                <li><strong>Original Language:</strong> Spanish</li>
                <li><strong>English Title:</strong> Touch Me Not</li>
            </ul>
            <h3>Summary:</h3>
            <p>This novel exposes the abuses and injustices committed by Spanish authorities, friars, and the ruling elite in the Philippines. It follows the story of Crisóstomo Ibarra, who returns from Europe with hopes of reforming his country but faces oppression from the Spanish regime.</p>
            <h3>Significance:</h3>
            <p>Noli Me Tangere sparked Filipino nationalism and inspired the revolution against Spanish rule.</p>
        `
    },
    fili: {
        title: "El Filibusterismo (The Reign of Greed)",
        image: "image/el-filibusterismo.jpg",
        description: "The sequel to Noli Me Tangere, presenting a darker and more radical approach to social reform.",
        details: `
            <h3>Work Details:</h3>
            <ul>
                <li><strong>Published:</strong> 1891</li>
                <li><strong>Original Language:</strong> Spanish</li>
                <li><strong>English Title:</strong> The Reign of Greed</li>
            </ul>
            <h3>Summary:</h3>
            <p>The sequel to Noli Me Tangere follows Simoun, the disguised and embittered version of Ibarra, who seeks revenge through revolution and destruction.</p>
            <h3>Significance:</h3>
            <p>El Filibusterismo highlighted the need for stronger resistance against colonial oppression.</p>
        `
    },
    ultimo: {
        title: "Mi Último Adiós (My Last Farewell)",
        image: "image/mi-ultimo-adios.jpg",
        description: "A farewell poem written on the eve of Rizal's execution.",
        details: `
            <h3>Work Details:</h3>
            <ul>
                <li><strong>Written:</strong> December 29, 1896</li>
                <li><strong>Original Language:</strong> Spanish</li>
                <li><strong>English Title:</strong> My Last Farewell</li>
            </ul>
            <h3>Summary:</h3>
            <p>Written on the eve of his execution, this poem expresses Rizal's love for the Philippines, acceptance of death, and hope for national freedom.</p>
            <h3>Notable Verses:</h3>
            <blockquote style="font-style: italic; margin: 20px; padding-left: 20px; border-left: 3px solid #a17f20;">
                "Farewell, dear Fatherland, clime of the sun caressed,<br>
                Pearl of the Orient seas, our Eden lost!"
            </blockquote>
        `
    },
    // Sculptures
    sacred_heart: {
        title: "Sacred Heart of Jesus",
        image: "image/sacred-heart-of-jesus.jpg",
        description: "A religious sculpture created during his exile in Dapitan.",
        details: `
            <h3>Artwork Details:</h3>
            <ul>
                <li><strong>Created:</strong> 1893</li>
                <li><strong>Medium:</strong> Clay/Terra cotta</li>
                <li><strong>Location:</strong> Dapitan Church</li>
                <li><strong>Historical Context:</strong> Created during his exile in Dapitan</li>
                <li><strong>Significance:</strong> Demonstrates Rizal's religious artistry and his continued practice of sculpture during exile</li>
            </ul>
            <p>This sculpture shows Rizal's artistic versatility and his ability to create religious art despite his conflicts with the church authorities.</p>
        `
    },
    prometheus: {
        title: "Prometheus Bound",
        image: "image/prometheus-bound.jpg",
        description: "A sculpture inspired by Greek mythology, representing the struggle for knowledge.",
        details: `
            <h3>Artwork Details:</h3>
            <ul>
                <li><strong>Created:</strong> 1889</li>
                <li><strong>Medium:</strong> Clay</li>
                <li><strong>Theme:</strong> Greek mythology</li>
                <li><strong>Symbolism:</strong> Represents the struggle for enlightenment and the price of knowledge</li>
                <li><strong>Historical Context:</strong> Created during his time in Europe</li>
            </ul>
            <p>The sculpture depicts Prometheus, who stole fire from the gods to give to humanity, symbolizing the pursuit of knowledge and progress.</p>
        `
    },
    triumph: {
        title: "Triumph of Science over Death",
        image: "image/triumph-of-death-over-life.jpg",
        description: "A clay sculpture symbolizing the victory of scientific knowledge over mortality.",
        details: `
            <h3>Artwork Details:</h3>
            <ul>
                <li><strong>Created:</strong> 1890</li>
                <li><strong>Medium:</strong> Clay</li>
                <li><strong>Location:</strong> Fort Santiago Museum</li>
                <li><strong>Symbolism:</strong> Represents the triumph of human knowledge over death</li>
                <li><strong>Historical Context:</strong> Created during his medical studies in Europe</li>
            </ul>
        `
    },
    mother: {
        title: "Mother's Revenge",
        image: "image/mothers-revenge.jpg",
        description: "A sculpture depicting a mother crocodile protecting her nest.",
        details: `
            <h3>Artwork Details:</h3>
            <ul>
                <li><strong>Created:</strong> During Dapitan exile (1892-1896)</li>
                <li><strong>Medium:</strong> Clay</li>
                <li><strong>Theme:</strong> Maternal protection and justice</li>
                <li><strong>Story:</strong> Based on a local tale of a mother crocodile</li>
            </ul>
        `
    },

    leonor: {
        title: "Miguel Morayta",
        image: "image/portrait-of-morayta.jpg",
        description: "A painting of Miguel Morayta, a Spanish professor and historian who supported Filipino rights and reforms.",
        details: `
            <h3>Artwork Details:</h3>
            <ul>
                <li><strong>Created:</strong> Late 19th Century</li>
                <li><strong>Medium:</strong> Unknown (possibly sketch or painting)</li>
                <li><strong>Subject:</strong> Miguel Morayta</li>
                <li><strong>Significance:</strong> Morayta was a professor at the Universidad Central de Madrid and a supporter of Filipino students, including Rizal. His advocacy for liberal reforms greatly influenced Rizal’s nationalist ideas.</li>
            </ul>
        `
    },
    sisters: {
        title: "Portrait of His Sisters",
        image: "image/saturnina-rizal.jpg",
        description: "A painting depicting Rizal's beloved sisters.",
        details: `
            <h3>Artwork Details:</h3>
            <ul>
                <li><strong>Created:</strong> Early 1880s</li>
                <li><strong>Medium:</strong> Oil on canvas</li>
                <li><strong>Subjects:</strong> Rizal's sisters</li>
                <li><strong>Location:</strong> Rizal Family Collection</li>
            </ul>
        `
        },        
        // Paintings
    self_portrait: {
        title: "Immaculate Conception",
        image: "image/immaculate-conception.jpg",
        description: "A religious painting depicting the Virgin Mary, showcasing José Rizal’s artistic skill and deep Catholic faith.",
        details: `
            <h3>Artwork Details:</h3>
            <ul>
                <li><strong>Created:</strong> Late 19th Century</li>
                <li><strong>Medium:</strong> Unknown (possibly oil or watercolor)</li>
                <li><strong>Subject:</strong> The Virgin Mary</li>
                <li><strong>Location:</strong> Rizal Museum</li>
                <li><strong>Significance:</strong> This artwork reflects Rizal’s devotion to Christianity and his artistic talent. It demonstrates his ability to capture religious imagery with great detail and reverence.</li>
            </ul>
        `
    },
    parents: {
        title: "Christ Crucified",
        image: "image/christ-crucified.jpg",
        description: "A sketch or painting of Jesus Christ on the cross, symbolizing sacrifice and redemption.",
        details: `
            <h3>Artwork Details:</h3>
            <ul>
                <li><strong>Created:</strong> Late 19th Century</li>
                <li><strong>Medium:</strong> Unknown (possibly charcoal or watercolor)</li>
                <li><strong>Subjects:</strong> Jesus Christ on the Cross</li>
                <li><strong>Location:</strong> Unknown</li>
                <li><strong>Significance:</strong> This artwork highlights Rizal’s religious influence and personal reflections on martyrdom and suffering, themes that later mirrored his own fate. It may also represent his deep faith and understanding of sacrifice for a greater cause.</li>
            </ul>
        `
    },
    dapitan: {
        title: "Dapitan Landscapes",
        image: "image/dapitan.jpg",
        description: "A series of watercolor paintings depicting the natural beauty of Dapitan.",
        details: `
            <h3>Artwork Details:</h3>
            <ul>
                <li><strong>Created:</strong> 1892-1896</li>
                <li><strong>Medium:</strong> Watercolor</li>
                <li><strong>Subject:</strong> Dapitan landscapes and seascapes</li>
                <li><strong>Historical Context:</strong> Painted during his exile</li>
                <li><strong>Style:</strong> Naturalistic watercolor technique</li>
            </ul>
            <p>These paintings showcase Rizal's appreciation for nature and his artistic documentation of his place of exile. They provide historical glimpses of 19th century Mindanao.</p>
        `
    }
}

// Function to scroll to book details
function scrollToBookDetails() {
    const bookDetails = document.getElementById('mainBookDisplay');
    bookDetails.scrollIntoView({ behavior: 'smooth' });
}

// Function to update main book display
function updateMainBookDisplay(bookKey) {
    const book = books[bookKey];
    const mainDisplay = document.getElementById('mainBookDisplay');
    
    if (!mainDisplay) {
        console.error('mainBookDisplay element not found');
        return;
    }

    mainDisplay.style.opacity = '0';
    
    setTimeout(() => {
        mainDisplay.innerHTML = `
            <div class="book-left">
                <div class="book-cover">
                    <img src="${book.coverImage}" alt="${book.title}">
                </div>
                <button class="read-button">Read</button>
            </div>
            <div class="book-right">
                <h2>${book.title}</h2>
                <div class="book-authors">
                    by <a href="#">${book.author}</a>
                </div>
                <div class="book-description">
                    ${book.description}
                </div>
                <div class="book-metadata">
                    <div class="metadata-row">
                        <div class="metadata-item">
                            <span class="label">Publish Date:</span>
                            <span class="value">${book.publishDate}</span>
                        </div>
                        <div class="metadata-item">
                            <span class="label">Language:</span>
                            <span class="value">${book.language}</span>
                        </div>
                        <div class="metadata-item">
                            <span class="label">Pages:</span>
                            <span class="value">${book.pages}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;

        mainDisplay.style.opacity = '1';
        attachReadButtonListeners();
    }, 300);
}

// Function to handle read button clicks
function handleReadButtonClick() {
    const currentTitle = document.querySelector('.book-right h2').textContent;
    let bookToRead = currentTitle.includes('Philippines') ? 'english' : 'spanish';
    window.location.href = `read.html?book=${bookToRead}`;
}

// Function to attach read button event listeners
function attachReadButtonListeners() {
    const readButtons = document.querySelectorAll('.read-button, .read-btn');
    readButtons.forEach(button => {
        button.addEventListener('click', handleReadButtonClick);
    });
}

// Function to view work details in modal
function viewWork(workId) {
    const modal = document.getElementById('workModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalDetails = document.getElementById('modalDetails');
    
    const work = workDetails[workId];
    if (!work) {
        console.error('Work not found:', workId);
        return;
    }
    
    modalImage.src = work.image;
    modalTitle.textContent = work.title;
    modalDescription.textContent = work.description;
    modalDetails.innerHTML = work.details;
    
    modal.style.display = 'block';
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Set initial book display
    updateMainBookDisplay('english');

    // Modal functionality
    const modal = document.getElementById('workModal');
    const closeButton = document.querySelector('.close-button');
    
    if (closeButton) {
        closeButton.onclick = function() {
            modal.style.display = 'none';
        }
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Initial attachment of read button listeners
    attachReadButtonListeners();
});