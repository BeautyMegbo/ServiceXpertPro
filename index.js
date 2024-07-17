document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const serviceList = document.getElementById('serviceList');

    const services = [];

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = event.target.name.value;
        const email = event.target.email.value;
        const role = event.target.role.value;
        const skills = event.target.skills.value;
        const subscription = event.target.subscription.value;

        const service = {
            name,
            email,
            role,
            skills,
            subscription,
        };

        services.push(service);
        displayServices();
        registerForm.reset();
    });

    function displayServices() {
        serviceList.innerHTML = '';

        services.forEach(service => {
            if (service.role === 'provider') {
                const serviceCard = document.createElement('div');
                serviceCard.classList.add('service-card');
                
                serviceCard.innerHTML = `
                    <h3>${service.name}</h3>
                    <p>Skills: ${service.skills}</p>
                    <p>Email: ${service.email}</p>
                `;
                
                serviceList.appendChild(serviceCard);
            }
        });
    }
});
