const zodiac = document.getElementById("zodiac");


const changeBg = () => {
    
    let bgColor;

    switch (zodiac.value.toLowerCase()) {
        case 'aries':
            bgColor = '#FF5733'; // Fiery Orange
            break;
        case 'taurus':
            bgColor = '#228B22'; // Forest Green
            break;
        case 'gemini':
            bgColor = '#FFD700'; // Golden Yellow
            break;
        case 'cancer':
            bgColor = '#4682B4'; // Steel Blue
            break;
        case 'leo':
            bgColor = '#FF4500'; // Orange Red
            break;
        case 'virgo':
            bgColor = '#32CD32'; // Lime Green
            break;
        case 'libra':
            bgColor = '#87CEEB'; // Sky Blue
            break;
        case 'scorpio':
            bgColor = '#800080'; // Purple
            break;
        case 'sagittarius':
            bgColor = '#FF6347'; // Tomato Red
            break;
        case 'capricorn':
            bgColor = '#2F4F4F'; // Dark Slate Gray
            break;
        case 'aquarius':
            bgColor = '#00FFFF'; // Cyan
            break;
        case 'pisces':
            bgColor = '#6A5ACD'; // Slate Blue
            break;
        default:
            bgColor = '#ffffff'; // Default to white if zodiac sign not recognized
            break;
    }
    document.body.style.backgroundColor = bgColor;
}