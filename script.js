
const contacts = [
    { id: 1, name: "Asfiya", gmail: "asfiyarudbar@gmail.com" },
    { id: 2, name: "Sarah", gmail: "sarahkhan55@gmail.com" },
    { id: 3, name: "Habiba", gmail: "habibatauqeer591@gmail.com" },
];

function renderContacts(contacts) {
    const contactList = document.getElementById("contact-List");
    contactList.innerHTML = "";
    for (const contact of contacts) {
        const contactDiv = document.createElement("div");
        contactDiv.className = "contact"; 
        contactDiv.innerHTML = `
            <b>${contact.name}</b>
            <p>${contact.gmail}</p>
        `;
        contactList.appendChild(contactDiv);
    }
}

function filterContacts() {
    const filterInput = document.getElementById("filter-input").value.toLowerCase();
    const filteredContacts = contacts.filter(contact => 
        contact.name.toLowerCase().includes(filterInput)
    );
    renderContacts(filteredContacts);
}

renderContacts(contacts);
document.getElementById('filter-button').addEventListener('click', filterContacts);
document.getElementById('filter-input').addEventListener('input', filterContacts); 

