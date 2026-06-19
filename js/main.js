
// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {

    // 1. ENQUIRY FORM VALIDATION

    // Volunteer Form
    const volunteerForm = document.getElementById('volunteerForm');
    if (volunteerForm) {
        volunteerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('volunteer-name').value.trim();
            const email = document.getElementById('volunteer-email').value.trim();           const phone = document.getElementById('volunteer-phone').value.trim();
            const age = document.getElementById('volunteer-age').value;
            const availability = document.getElementById('volunteer-availability').value;
            const motivation = document.getElementById('volunteer-motivation').value.trim();
            
            // Validate name
            if (name.length < 2) {
                alert('Please enter your full name (minimum 2 characters).');
                return;
            }
            
            // Validate email
            if (!email.includes('@') || !email.includes('.')) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Validate phone
            if (phone.length < 10) {
                alert('Please enter a valid phone number (minimum 10 digits).');
                return;
            }
            
            // Validate age
            if (age < 18 || age > 99) {
                alert('You must be at least 18 years old to volunteer.');
                return;
            }
            
            // Validate availability
            if (availability === '') {
                alert('Please select your availability.');
                return;
            }
            
            // Validate motivation
            if (motivation.length < 50) {
                alert('Please tell us more about your motivation (minimum 50 characters).');
                return;
            }
            
            // If all valid, show success message
            alert('Thank you for your volunteer application! We will contact you within 3 working days.');
            volunteerForm.reset();
        });
    }

    // Sponsor Form
    const sponsorForm = document.getElementById('sponsorForm');
    if (sponsorForm) {
        sponsorForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const org = document.getElementById('sponsor-org').value.trim();
            const contact = document.getElementById('sponsor-name').value.trim();
            const email = document.getElementById('sponsor-email').value.trim();
            const phone = document.getElementById('sponsor-phone').value.trim();
            const type = document.getElementById('sponsor-type').value;
            const message = document.getElementById('sponsor-message').value.trim();
            
            // Validate organisation name
            if (org.length < 2) {
                alert('Please enter your organisation name.');
                return;
            }
            
            // Validate contact name
            if (contact.length < 2) {
                alert('Please enter the contact person\'s name.');
                return;
            }
            
            // Validate email
            if (!email.includes('@') || !email.includes('.')) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Validate phone
            if (phone.length < 10) {
                alert('Please enter a valid phone number.');
                return;
            }
            
            // Validate sponsorship type
            if (type === '') {
                alert('Please select a sponsorship type.');
                return;
            }
            
            // Validate message
            if (message.length < 30) {
                alert('Please provide more details about your enquiry (minimum 30 characters).');
                return;
            }
            
            // If all valid, show success message
            alert('Thank you for your sponsorship enquiry! Our team will respond within 3 working days.');
            sponsorForm.reset();
        });
    }

    // 2. CONTACT FORM VALIDATION

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('contact-name').value.trim();
            const email = document.getElementById('contact-email').value.trim();
            const subject = document.getElementById('contact-subject').value;
            const message = document.getElementById('contact-message').value.trim();
            
            // Validate name
            if (name.length < 2) {
                alert('Please enter your name.');
                return;
            }
            
            // Validate email
            if (!email.includes('@') || !email.includes('.')) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Validate subject
            if (subject === '') {
                alert('Please select a subject.');
                return;
            }
            
            // Validate message
            if (message.length < 20) {
                alert('Please provide more details about your enquiry (minimum 20 characters).');
                return;
            }
            
            // If all valid, show success message
            alert('Your message has been sent! We will respond within 2-3 business days.');
            contactForm.reset();
        });
    }

    // 3. IMAGE LIGHTBOX GALLERY
    
    // Find all images inside programme cards
    const cardImages = document.querySelectorAll('.card img, .programme-detail img, .news-item img');
    
    cardImages.forEach(function(img) {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            // Create lightbox overlay
            const overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.background = 'rgba(0,0,0,0.9)';
            overlay.style.display = 'flex';
            overlay.style.alignItems = 'center';
            overlay.style.justifyContent = 'center';
            overlay.style.zIndex = '9999';
            overlay.style.cursor = 'pointer';
            
            // Create enlarged image
            const enlargedImg = document.createElement('img');
            enlargedImg.src = this.src;
            enlargedImg.alt = this.alt;
            enlargedImg.style.maxWidth = '90%';
            enlargedImg.style.maxHeight = '90%';
            enlargedImg.style.borderRadius = '10px';
            enlargedImg.style.boxShadow = '0 0 30px rgba(255,255,255,0.3)';
            
            // Add image to overlay
            overlay.appendChild(enlargedImg);
            
            // Add close instruction
            const closeText = document.createElement('p');
            closeText.textContent = 'Click anywhere to close';
            closeText.style.color = 'white';
            closeText.style.position = 'absolute';
            closeText.style.bottom = '30px';
            closeText.style.fontFamily = 'Open Sans, sans-serif';
            closeText.style.fontSize = '14px';
            closeText.style.opacity = '0.7';
            overlay.appendChild(closeText);
            
            // Add overlay to page
            document.body.appendChild(overlay);
            
            // Close when clicked
            overlay.addEventListener('click', function() {
                document.body.removeChild(overlay);
            });
        });
    });

   
    // 4. LEAFLET INTERACTIVE MAPS
    

    // Soweto Hub Coordinates
    const sowetoLat = -26.2485;
    const sowetoLng = 27.8580;

    // Tembisa Hub Coordinates
    const tembisaLat = -25.9964;
    const tembisaLng = 28.2268;

    // Create Soweto Map
    const sowetoMap = document.getElementById('sowetoMap');
    if (sowetoMap) {
        const map1 = L.map('sowetoMap').setView([sowetoLat, sowetoLng], 15);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map1);
        
        L.marker([sowetoLat, sowetoLng]).addTo(map1)
            .bindPopup('<b>EduBridge SA - Soweto Hub</b><br>123 Vilakazi Street, Orlando West, Soweto, 1804')
            .openPopup();
    }

    // Create Tembisa Map
    const tembisaMap = document.getElementById('tembisaMap');
    if (tembisaMap) {
        const map2 = L.map('tembisaMap').setView([tembisaLat, tembisaLng], 15);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map2);
        
        L.marker([tembisaLat, tembisaLng]).addTo(map2)
            .bindPopup('<b>EduBridge SA - Tembisa Hub</b><br>45 Reverend RTJ Namane Drive, Tembisa, 1632')
            .openPopup();
    }

    // 5. PROGRAMME SEARCH FILTER

    const searchInput = document.getElementById('programmeSearch');
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            const filter = this.value.toLowerCase();
            const cards = document.querySelectorAll('.card, .programme-detail');
            
            cards.forEach(function(card) {
                const text = card.textContent.toLowerCase();
                if (text.includes(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

});