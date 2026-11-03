# 🌡️ Temperature Converter

**Oasis Infobyte SIP | Web Development & Designing | Level 1 | Task 3**

A simple, interactive web tool that converts temperature values between Celsius, Fahrenheit and Kelvin, with input validation and absolute zero checking.

## 🚀 Features

- Numeric input field with validation (non-numeric input shows an error message)
- Unit selector to choose the input unit: Celsius, Fahrenheit or Kelvin
- Convert button that triggers the calculation
- Results shown for all units at once, with correct unit labels
- Absolute zero check: shows a friendly message for values below absolute zero (-273.15°C, -459.67°F, 0 K)
- Clean, centred and responsive layout

## 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)

## 📁 Project Structure

```
WebDev-L1-TemperatureConverter/
├── index.html
├── style.css
├── script.js
├── README.md
└── screenshots/
```

## 🧮 Conversion Formulas

| Conversion | Formula |
|---|---|
| Celsius → Fahrenheit | °F = (°C × 9/5) + 32 |
| Fahrenheit → Celsius | °C = (°F − 32) × 5/9 |
| Celsius → Kelvin | K = °C + 273.15 |
| Kelvin → Celsius | °C = K − 273.15 |

## ▶️ How to Run

1. Clone the repository:
   ```
   git clone https://github.com/venu-priya/OIBSIP.git
   ```
2. Open the `WebDev-L1-TemperatureConverter` folder.
3. Open `index.html` in any web browser.

No installation or server is needed.

## 📖 How to Use

1. Enter a temperature value.
2. Select the unit you are converting from.
3. Click **Convert**.
4. View the result in all three units.

## ⚠️ Edge Cases Handled

- Empty or non-numeric input shows an error message
- Values below absolute zero show a warning instead of a result

## 📸 Screenshots

![Home screen](Screenshots/home.png)

![Result](Screenshots/result.png)

## 👩‍💻 Author
Venu Priya
Web Development & Designing Intern, Oasis Infobyte
GitHub: [venu-priya](https://github.com/venu-priya)

#oasisinfobyte #webdevelopment #internship
