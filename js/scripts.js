// Lấy dữ liệu chất lượng không khí từ API (giả sử API có sẵn)
async function fetchAirQualityData() {
    try {
        const response = await fetch('7ddf9100e89da55116139544d0fa21e15d4038eey'); // Thay thế URL với API thực tế
        const data = await response.json();
        
        // Hiển thị dữ liệu
        document.getElementById('aqi-data').innerText = `AQI hiện tại: ${data.aqi}`;
        
        // Cập nhật dữ liệu cho các biểu đồ
        updateCharts(data);
        
        // Hiển thị các bài viết phân tích
        displayArticles(data.articles);
    } catch (error) {
        console.error('Lỗi khi lấy dữ liệu:', error);
    }
}

// Cập nhật biểu đồ
function updateCharts(data) {
    const airQualityData = {
        labels: data.timestamps,
        datasets: [
            {
                label: 'PM2.5',
                data: data.pm25, // Dữ liệu PM2.5 từ API
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
            },
            {
                label: 'PM10',
                data: data.pm10, // Dữ liệu PM10 từ API
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
            },
            {
                label: 'CO2',
                data: data.co2, // Dữ liệu CO2 từ API
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            }
        ]
    };

    // Tạo các biểu đồ
    const pm25Ctx = document.getElementById('pm25Chart').getContext('2d');
    new Chart(pm25Ctx, { type: 'line', data: airQualityData, options: { responsive: true } });
    
    const pm10Ctx = document.getElementById('pm10Chart').getContext('2d');
    new Chart(pm10Ctx, { type: 'line', data: airQualityData, options: { responsive: true } });
    
    const co2Ctx = document.getElementById('co2Chart').getContext('2d');
    new Chart(co2Ctx, { type: 'line', data: airQualityData, options: { responsive: true } });
}

// Hiển thị các bài viết
function displayArticles(articles) {
    const articlesContainer = document.getElementById('articles');
    articlesContainer.innerHTML = ''; // Xóa nội dung hiện tại

    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.innerHTML = `<h3>${article.title}</h3><p>${article.content}</p>`;
        articlesContainer.appendChild(articleElement);
    });
}

// Xử lý đăng nhập
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    // Kiểm tra thông tin đăng nhập (ví dụ, gọi API xác thực)
    // Nếu thành công, hiện thị phần chất lượng không khí
    document.getElementById('auth').style.display = 'none';
    document.getElementById('air-quality').style.display = 'block';
    fetchAirQualityData(); // Gọi dữ liệu khi đã đăng nhập
});

// Xử lý đăng ký
document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Thực hiện đăng ký (gọi API đăng ký)
});
