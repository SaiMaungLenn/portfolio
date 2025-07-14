// Articles Data - Easy to add new posts
const articlesData = [
    {
        id: 1,
        title: "The Art of Mindful Writing",
        excerpt: "Exploring how mindfulness can enhance your writing process and creativity. Discover practical techniques to improve focus and unlock your creative potential...",
        category: "writing",
        date: "2023-12-15",
        image: "images/sample1.jpg",
        tags: ["Writing", "Mindfulness", "Creativity"],
        author: "Your Name",
        readingTime: "5 min read",
        content: "Full article content would go here..."
    },
    {
        id: 2,
        title: "Digital Minimalism for Creators",
        excerpt: "How reducing digital clutter can boost your creative output and focus. Learn strategies to create a more intentional digital environment...",
        category: "productivity",
        date: "2023-12-10",
        image: "images/sample2.jpg",
        tags: ["Productivity", "Digital Minimalism", "Focus"],
        author: "Your Name",
        readingTime: "7 min read",
        content: "Full article content would go here..."
    },
    {
        id: 3,
        title: "Finding Your Creative Voice",
        excerpt: "Practical exercises to discover and develop your unique writing style. Explore techniques that help you find your authentic voice...",
        category: "creativity",
        date: "2023-12-05",
        image: "images/sample3.jpg",
        tags: ["Creativity", "Voice", "Style"],
        author: "Your Name",
        readingTime: "6 min read",
        content: "Full article content would go here..."
    },
    {
        id: 4,
        title: "Morning Rituals for Creative Success",
        excerpt: "Transform your mornings with these powerful rituals that set the tone for a productive and creative day. Learn how to create lasting habits...",
        category: "mindfulness",
        date: "2023-11-28",
        image: "images/sample4.jpg",
        tags: ["Mindfulness", "Morning Routine", "Habits"],
        author: "Your Name",
        readingTime: "8 min read",
        content: "Full article content would go here..."
    },
    {
        id: 5,
        title: "Creating Your Ideal Writing Space",
        excerpt: "Design a writing environment that inspires creativity and productivity. From furniture to lighting, discover what makes the perfect writing space...",
        category: "lifestyle",
        date: "2023-11-20",
        image: "images/sample5.jpg",
        tags: ["Lifestyle", "Workspace", "Environment"],
        author: "Your Name",
        readingTime: "4 min read",
        content: "Full article content would go here..."
    },
    {
        id: 6,
        title: "Overcoming Writer's Block",
        excerpt: "Proven strategies to break through creative blocks and get your writing flowing again. Learn to recognize and overcome common obstacles...",
        category: "writing",
        date: "2023-11-15",
        image: "images/sample6.jpg",
        tags: ["Writing", "Writer's Block", "Creativity"],
        author: "Your Name",
        readingTime: "9 min read",
        content: "Full article content would go here..."
    },
    {
        id: 7,
        title: "The Pomodoro Technique for Writers",
        excerpt: "How to adapt the Pomodoro Technique specifically for writing projects. Boost your productivity with focused writing sessions...",
        category: "productivity",
        date: "2023-11-10",
        image: "images/sample7.jpg",
        tags: ["Productivity", "Pomodoro", "Time Management"],
        author: "Your Name",
        readingTime: "6 min read",
        content: "Full article content would go here..."
    },
    {
        id: 8,
        title: "Meditation for Creative Flow",
        excerpt: "Simple meditation techniques that can enhance your creative process and help you access deeper levels of inspiration...",
        category: "mindfulness",
        date: "2023-11-05",
        image: "images/sample8.jpg",
        tags: ["Mindfulness", "Meditation", "Flow"],
        author: "Your Name",
        readingTime: "7 min read",
        content: "Full article content would go here..."
    }
    // ADD NEW ARTICLES HERE - Just copy and paste the structure above
    // Example:
    // {
    //     id: 9,
    //     title: "Your New Article Title",
    //     excerpt: "Your article excerpt here...",
    //     category: "writing", // or "productivity", "creativity", "mindfulness", "lifestyle"
    //     date: "2024-01-15",
    //     image: "images/your-image.jpg",
    //     tags: ["Tag1", "Tag2", "Tag3"],
    //     author: "Your Name",
    //     readingTime: "5 min read",
    //     content: "Your full article content..."
    // }
];

// Function to add a new article
function addNewArticle(articleData) {
    articlesData.push(articleData);
    // You can add logic here to save to localStorage or update the display
    console.log('New article added:', articleData);
}

// Function to get articles by category
function getArticlesByCategory(category) {
    return articlesData.filter(article => article.category === category);
}

// Function to search articles
function searchArticles(searchTerm) {
    const term = searchTerm.toLowerCase();
    return articlesData.filter(article => 
        article.title.toLowerCase().includes(term) ||
        article.excerpt.toLowerCase().includes(term) ||
        article.tags.some(tag => tag.toLowerCase().includes(term))
    );
}

// Function to sort articles
function sortArticles(articles, sortBy) {
    const sortedArticles = [...articles];
    
    switch (sortBy) {
        case 'latest':
            return sortedArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
        case 'oldest':
            return sortedArticles.sort((a, b) => new Date(a.date) - new Date(b.date));
        case 'title':
            return sortedArticles.sort((a, b) => a.title.localeCompare(b.title));
        case 'popular':
            // Sort by reading time (longer = more popular for demo)
            return sortedArticles.sort((a, b) => 
                parseInt(b.readingTime) - parseInt(a.readingTime)
            );
        default:
            return sortedArticles;
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { articlesData, addNewArticle, getArticlesByCategory, searchArticles, sortArticles };
} 