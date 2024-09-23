window.onload = function() {
    // تحديد عنصر الصورة
    var imageElement = document.getElementById('dayNightImage');
    
    // الحصول على الوقت الحالي
    var now = new Date();
    var hours = now.getHours();
    
    // تحديد النهار أو الليل بناءً على الساعة
    if (hours >= 6 && hours < 18) {
        // النهار: من 6 صباحًا إلى 6 مساءً
        imageElement.src = 'sun.jpg'; // صورة الشمس
    } else {
        // الليل: من 6 مساءً إلى 6 صباحًا
        imageElement.src = 'moon.jpg'; // صورة القمر
    }
};
