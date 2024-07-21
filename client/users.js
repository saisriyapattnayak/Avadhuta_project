// Sample data
const expenses = [
    { category: 'Entertainment', amount: 700 },
    { category: 'Food', amount: 300 },
    { category: 'Transporttation', amount: 350 },
    
];

// Get the canvas element
const canvas = document.getElementById('pie-chart');
const ctx = canvas.getContext('2d');

// Set the pie chart dimensions
const pieChartWidth = canvas.width;
const pieChartHeight = canvas.height;
const radius = pieChartWidth / 2;
const centerX = pieChartWidth / 2;
const centerY = pieChartHeight / 2;

// Set the pie chart colors
const colors = [
    '#FFC107',
    '#2196F3',
    '#9C27B0',
    '#4CAF50',
    '#E91E63',
];

// Draw the pie chart
ctx.clearRect(0, 0, pieChartWidth, pieChartHeight);
ctx.fillStyle = '#f0f0f0';
ctx.fillRect(0, 0, pieChartWidth, pieChartHeight);

// Calculate the total amount
let totalAmount = 0;
expenses.forEach((expense) => {
    totalAmount += expense.amount;
});

// Draw the pie chart slices
let startAngle = 0;
expenses.forEach((expense, index) => {
    const sliceAngle = (expense.amount / totalAmount) * 2 * Math.PI;
    ctx.fillStyle = colors[index];
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
    ctx.lineTo(centerX, centerY);
    ctx.fill();
    startAngle += sliceAngle;
});

// Draw the category labels
ctx.font = '12px Arial';
ctx.textAlign = 'end';
ctx.textBaseline = 'middle';
expenses.forEach((expense, index) => {
    const angle = (index / expenses.length) * 2 * Math.PI;
    const labelX = centerX + (radius / 2) * Math.cos(angle);
    const labelY = centerY + (radius / 2) * Math.sin(angle);
    ctx.fillStyle = colors[index];
    ctx.fillText(expense.category, labelX, labelY);
});