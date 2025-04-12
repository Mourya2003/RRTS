// Sample data - you can fetch this from backend later
const complaints = [
    {
        id: "C101",
        description: "Street light not working",
        status: "Pending",
        reply: "Under review"
    },
    {
        id: "C102",
        description: "Water leakage",
        status: "Resolved",
        reply: "Fixed yesterday"
    }
];

window.onload = () => {
    const table = document.getElementById("complaintsTable");
    complaints.forEach(c => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${c.id}</td>
            <td>${c.description}</td>
            <td>${c.status}</td>
            <td>${c.reply}</td>
        `;
        table.appendChild(row);
    });
};
