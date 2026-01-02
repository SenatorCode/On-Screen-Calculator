# Modern Calculator

A sleek, fully-functional calculator with a modern glass-morphism design. Built with vanilla HTML, CSS, and JavaScript—no dependencies required.

## Features

✨ **User-Friendly Interface**
- Clean, intuitive design with a beautiful gradient background
- Large, easy-to-read display with calculation history
- Responsive layout that works on mobile, tablet, and desktop

🎯 **Full Calculator Functionality**
- Basic operations: addition, subtraction, multiplication, division
- Decimal support for precise calculations
- Percentage calculations
- Delete (backspace) to remove the last digit
- AC (All Clear) to reset the calculator
- Chain operations without needing to press equals between each

⌨️ **Keyboard Support**
- Number keys (0-9)
- Operators: `+`, `-`, `*`, `/`
- `Enter` or `=` to calculate
- `Backspace` to delete
- `.` for decimals
- `%` for percentages

🛡️ **Error Handling**
- Prevents division by zero with a user-friendly error message
- Validates input before operations
- Rounds results to prevent floating-point precision errors

## File Structure

```
calculator/
├── index.html       # HTML structure
├── styles.css       # Styling (can be extracted)
├── script.js        # JavaScript logic (can be extracted)
└── README.md        # This file
```

## How to Use

1. **Download or clone** the files to your computer
2. **Open `index.html`** in your web browser
3. **Start calculating!**

### Basic Operations

- Click number buttons to enter numbers
- Click an operator button (+, −, ×, ÷) to select an operation
- Enter the second number
- Click `=` to see the result
- Click `AC` to clear everything
- Click `DEL` to remove the last digit

### Keyboard Usage

Just type like you would on a regular calculator:
- Type numbers
- Press `+`, `-`, `*`, or `/` for operations
- Press `Enter` or `=` to calculate
- Press `Backspace` to delete

## Design Details

**Color Scheme:**
- **Purple Gradient Background**: Modern and visually appealing
- **Numeric Buttons** (Gray): Input numbers
- **Operator Buttons** (Purple): Addition, subtraction, multiplication, division
- **Function Buttons** (Red): AC and DEL for clearing
- **Equals Button** (Green): Calculate the result

**Responsive Design:**
- Optimized for 320px - 480px (mobile)
- 481px - 768px (tablet)
- 769px+ (desktop)

## Technical Details

**Browser Compatibility:**
- Chrome, Firefox, Safari, Edge (all modern versions)
- Mobile browsers (iOS Safari, Chrome Mobile, etc.)

**Performance:**
- Lightweight and fast
- No external dependencies
- Minimal CSS and JavaScript

**Accessibility:**
- Keyboard navigation support
- Focus states for better keyboard users
- Clear, readable typography
- High contrast colors

## Future Enhancements

Potential features to add:
- Memory functions (M+, M-, MR, MC)
- Scientific notation
- Calculation history log
- Dark mode toggle
- Export/copy results
- Keyboard shortcut customization

## License

Feel free to use, modify, and distribute this calculator as needed.

---
Enjoy calculating!