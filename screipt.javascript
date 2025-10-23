document.addEventListener('DOMContentLoaded', function() {
    const productOptions = document.querySelectorAll('.product-option');
    const selectedProductInput = document.getElementById('selected-product');
    const selectedPriceInput = document.getElementById('selected-price');
    const priceDisplay = document.querySelector('.price');
    
    // تحديد الخيار الأول افتراضيًا
    if (productOptions.length > 0) {
        productOptions[0].classList.add('selected');
        const productName = productOptions[0].querySelector('.product-name').textContent;
        const productPrice = productOptions[0].getAttribute('data-price');
        
        selectedProductInput.value = productName;
        selectedPriceInput.value = productPrice;
        priceDisplay.textContent = `السعر ${productPrice} شيكل`;
    }
    
    // إضافة حدث النقر لخيارات المنتج
    productOptions.forEach(option => {
        option.addEventListener('click', function() {
            // إزالة التحديد من جميع الخيارات
            productOptions.forEach(opt => opt.classList.remove('selected'));
            
            // إضافة التحديد للخيار المختار
            this.classList.add('selected');
            
            // تحديث القيم المخفية
            const productName = this.querySelector('.product-name').textContent;
            const productPrice = this.getAttribute('data-price');
            
            selectedProductInput.value = productName;
            selectedPriceInput.value = productPrice;
            priceDisplay.textContent = `السعر ${productPrice} شيكل`;
        });
    });
    
    // معالجة إرسال النموذج
    document.getElementById('order-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // هنا يمكنك إضافة كود لإرسال البيانات إلى الخادم
        alert('تم تسجيل طلبك بنجاح! سنتصل بك قريبًا.');
        
        // إعادة تعيين النموذج
        this.reset();
        
        // إعادة تعيين اختيار المنتج إلى الافتراضي
        productOptions.forEach(opt => opt.classList.remove('selected'));
        if (productOptions.length > 0) {
            productOptions[0].classList.add('selected');
            const productName = productOptions[0].querySelector('.product-name').textContent;
            const productPrice = productOptions[0].getAttribute('data-price');
            
            selectedProductInput.value = productName;
            selectedPriceInput.value = productPrice;
            priceDisplay.textContent = `السعر ${productPrice} شيكل`;
        }
    });
});