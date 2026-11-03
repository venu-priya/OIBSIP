
         // Single Page Tab Navigation Logic
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('main section');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('data-target');
                switchTab(targetId);
            });
        });

        function switchTab(targetId) {
            sections.forEach(section => {
                section.classList.remove('active');
                if(section.id === targetId) {
                    section.classList.add('active');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if(link.getAttribute('data-target') === targetId) {
                    link.classList.add('active');
                }
            });
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Dark / Light Mode Toggle Logic
        const themeToggle = document.getElementById('themeToggle');
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'dark') {
                document.documentElement.removeAttribute('data-theme');
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
            }
        });