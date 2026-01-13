// Main JavaScript file for Deeba's Thread

// Initialize navigation and footer on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeFooter();
    // Initialize WhatsApp button after a small delay to ensure it's outside footer
    setTimeout(function() {
        initializeWhatsAppFloat();
    }, 100);
    
    // Add mobile menu toggle functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    });
});

// Navigation initialization
function initializeNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    const navHTML = `
        <nav class="navbar">
            <div class="nav-container">
                <a href="index.html" class="logo">
                    <img src="images/logo.jpeg" alt="Deeba's Thread" class="logo-image">
                    <span class="logo-text">Deeba's Thread</span>
                </a>
                <button class="mobile-menu-toggle" aria-label="Toggle menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul class="nav-menu">
                    <li><a href="index.html" class="${currentPage === 'index.html' ? 'active' : ''}">Home</a></li>
                    <li><a href="products.html" class="${currentPage === 'products.html' ? 'active' : ''}">Products</a></li>
                    <li><a href="about.html" class="${currentPage === 'about.html' ? 'active' : ''}">About</a></li>
                    <li><a href="contact.html" class="${currentPage === 'contact.html' ? 'active' : ''}">Contact</a></li>
                </ul>
            </div>
        </nav>
    `;
    
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = navHTML;
    }
}

// Footer initialization
function initializeFooter() {
    const footerHTML = `
        <footer class="footer">
            <div class="footer-container">
                <div class="footer-section">
                    <h3>Deeba's Thread</h3>
                    <p>Handcrafted bags with timeless elegance and modern sophistication.</p>
                </div>
                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="products.html">Products</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Contact</h4>
                    <p>Email: info@deebasthread.com</p>
                    <p>WhatsApp: <a href="https://wa.me/923266494874" target="_blank">03266494874</a></p>
                </div>
                <div class="footer-section">
                    <h4>Follow Us</h4>
                    <div class="social-links">
                        <a href="https://www.instagram.com/deebasthread?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" aria-label="Instagram">Instagram</a>
                        <a href="https://www.threads.com/@deebasthread==" aria-label="Instagram">THREADS</a>

                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; ${new Date().getFullYear()} Deeba's Thread. All rights reserved.</p>
            </div>
        </footer>
    `;
    
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
}

// Utility function to format price
function formatPrice(price) {
    return `PKR ${price.toLocaleString()}`;
}

// WhatsApp ordering function
function orderOnWhatsApp(productId, productName) {
    const whatsappNumber = '923266494874'; // International format (92 for Pakistan)
    const productUrl = window.location.href;
    const message = `Hello! I'm interested in ordering:\n\nProduct: ${productName}\n\nI would like to customize this handmade bag according to my preferences.\n\nProduct URL: ${productUrl}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Initialize floating WhatsApp button - Floating independently on screen
function initializeWhatsAppFloat() {
    // Remove any existing button first
    const existingBtn = document.querySelector('.whatsapp-float');
    if (existingBtn) {
        existingBtn.remove();
    }
    
    // Wait for page to be fully loaded
    function createFloatingButton() {
        // Create new button element
        const whatsappFloat = document.createElement('a');
        whatsappFloat.href = 'https://wa.me/923266494874';
        whatsappFloat.target = '_blank';
        whatsappFloat.className = 'whatsapp-float';
        whatsappFloat.setAttribute('aria-label', 'Contact us on WhatsApp');
        whatsappFloat.innerHTML = '💬';
        
        // Apply all styles inline to ensure complete independence
        whatsappFloat.style.cssText = `
            position: fixed !important;
            bottom: 30px !important;
            right: 30px !important;
            top: auto !important;
            left: auto !important;
            z-index: 999999 !important;
            width: 60px !important;
            height: 60px !important;
            margin: 0 !important;
            padding: 0 !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            background-color: #25D366 !important;
            color: white !important;
            border-radius: 50px !important;
            text-decoration: none !important;
            box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4) !important;
            pointer-events: auto !important;
        `;
        
        // Append directly to body - ensure it's the last element
        document.body.appendChild(whatsappFloat);
        
        // Force it to stay on top by moving to end if needed
        setTimeout(function() {
            if (whatsappFloat.parentNode) {
                document.body.appendChild(whatsappFloat);
            }
        }, 50);
    }
    
    // Ensure body exists and page is loaded
    if (document.body && document.readyState === 'complete') {
        createFloatingButton();
    } else {
        window.addEventListener('load', createFloatingButton);
    }
}
