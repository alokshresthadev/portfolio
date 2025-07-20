// Mobile menu toggle functionality
    const hamburger = document.getElementById('hamburger');
    const navbarLinks = document.getElementById('navbarLinks');
    
    hamburger.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
    });
    
    // Close menu when a link is clicked
    document.querySelectorAll('#navbarLinks a').forEach(link => {
        link.addEventListener('click', () => {
            navbarLinks.classList.remove('active');
        });
    });


    //image change

    function changeimage(type){
        const service_image = document.querySelector('.service-image-bug');
        if(type === 'web'){
            service_image.src="mainweb.jpg"
        }
        else if(type === 'api'){
            service_image.src= "api.png"
        }
        else if(type === 'recon'){
            service_image.src= "recon.png"
        }
        else if(type === 'burp'){
            service_image.src = "burp.jpg"
        }
        else if(type === 'bounty'){
            service_image.src = "bounty.jpg"
        }

    }
