document.addEventListener('DOMContentLoaded', () => {
            const sections = document.querySelectorAll('main section');
            const navLinks = document.querySelectorAll('nav .nav-link');
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

            function updateActiveLink() {
                let current = 'home';
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    if (window.pageYOffset >= sectionTop - 100) {
                        current = section.getAttribute('id');
                    }
                });

                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === current) {
                        link.classList.add('active');
                    }
                });
            }

            window.addEventListener('scroll', updateActiveLink);

            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });

            mobileNavLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                });
            });

            const accordionItems = document.querySelectorAll('.accordion-item');
            accordionItems.forEach(item => {
                const header = item.querySelector('.accordion-header');
                header.addEventListener('click', () => {
                    const content = item.querySelector('.accordion-content');
                    const icon = item.querySelector('.accordion-icon');
                    content.classList.toggle('hidden');
                    icon.textContent = content.classList.contains('hidden') ? '+' : '−';
                });
            });

            const ctx = document.getElementById('skillsChart').getContext('2d');
            const skillsChart = new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: ['Adaptability', 'Problem-Solving', 'Active Learning', 'Team Collaboration', 'Communication', 'Attention to Detail'],
                    datasets: [{
                        label: 'Soft Skills',
                        data: [9, 8, 9, 7, 8, 8],
                        backgroundColor: 'rgba(91, 146, 121, 0.2)',
                        borderColor: 'rgba(91, 146, 121, 1)',
                        pointBackgroundColor: 'rgba(91, 146, 121, 1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(91, 146, 121, 1)'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        r: {
                            angleLines: {
                                color: '#d6d3d1'
                            },
                            grid: {
                                color: '#d6d3d1'
                            },
                            pointLabels: {
                                font: {
                                    size: 12,
                                    weight: 'bold'
                                },
                                color: '#44403c'
                            },
                            ticks: {
                                backdropColor: '#f5f5f4',
                                color: '#78716c',
                                stepSize: 2,
                                font: {
                                    weight: 'bold'
                                }
                            },
                            suggestedMin: 0,
                            suggestedMax: 10
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });

          
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    } else {
                        
                        
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.fade-in-section').forEach(section => {
                observer.observe(section);
            });
        });
