import { SpeedInsights } from "@vercel/speed-insights/next"
const darkModeToggle = document.getElementById('darkModeToggle');


const darkMode = localStorage.getItem('darkMode');

if (darkMode === 'enabled') {
    document.documentElement.setAttribute('data-theme', 'dark');
    darkModeToggle.checked = true;
}

darkModeToggle.addEventListener('change', function() {
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('darkMode', null);
    }
});

function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    
    // Get selected units
    const weightUnit = document.querySelector('input[name="weightUnit"]:checked').value;
    const heightUnit = document.querySelector('input[name="heightUnit"]:checked').value;
    
    if (weight > 0 && height > 0) {
        // Convert weight to kg if in pounds
        let weightInKg = weight;
        if (weightUnit === 'lb') {
            weightInKg = weight * 0.453592; // Convert pounds to kg
        }
        
        // Convert height to meters if in cm
        let heightInMeters = height;
        if (heightUnit === 'cm') {
            heightInMeters = height / 100; // Convert cm to meters
        }
        
        // Calculate BMI using converted values
        const bmi = weightInKg / (heightInMeters * heightInMeters);
        let category;

        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 25) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi < 30) {
            category = 'Overweight';
        } else {
            category = 'Obesity';
        }

        resultText = `Your BMI is: ${bmi.toFixed(2)} (${category})`;
    } else {
        resultText = 'Please enter valid weight and height values.';
    }

    document.getElementById("result").textContent = resultText;
}