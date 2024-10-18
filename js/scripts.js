const users = [];

// Đăng ký người dùng
document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const userExists = users.some(u => u.username === username);

    if (userExists) {
        alert('Tên đăng nhập đã tồn tại!');
    } else {
        users.push({ username, password });
        alert('Đăng ký thành công! Bạn có thể đăng nhập ngay bây giờ.');
        document.getElementById('register-form').reset(); // Reset form sau khi đăng ký
    }
});

// Đăng nhập người dùng
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        document.getElementById('auth').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        fetchAirQualityData(); // Gọi dữ liệu khi đã đăng nhập
    } else {
        alert('Tên đăng nhập hoặc mật khẩu không đúng!');
    }
});

// Hàm để lấy dữ liệu chất lượng không khí từ API
async function fetchAirQualityData() {
    const apiKey = '7ddf9100e89da55116139544d0fa21e15d4038ee'; // Thay 'YOUR_API_KEY' bằng API key của bạn
    const city = 'Thai Nguyen'; // Tên thành phố bạn muốn lấy dữ liệu
    const url = `https://api.waqi.info/feed/${city}/?token=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.status === "ok") {
            const aqi = data.data.aqi;
            const aqiCategory = getAQICategory(aqi);
            alert(`Chất lượng không khí hiện tại: ${aqi} (${aqiCategory})`);
            displayAQIChart(data.data.iaqi); // Hiển thị biểu đồ
        } else {
            alert('Không thể lấy dữ liệu chất lượng không khí.');
        }
    } catch (error) {
        console.error('Lỗi:', error);
    }
}

// Hàm phân loại chất lượng không khí
function getAQICategory(aqi) {
    if (aqi <= 50) return 'Tốt';
    else if (aqi <= 100) return 'Trung bình';
    else if (aqi <= 150) return 'Kém';
    else if (aqi <= 200) return 'Xấu';
    else if (aqi <= 300) return 'Rất xấu';
    else return 'Nguy hiểm';
}

// Hàm hiển thị biểu đồ chất lượng không khí
function displayAQIChart(iaqData) {
    const ctx = document.getElementById('airQualityChart').getContext('2d');
    const labels = Object.keys(iaqData);
    const values = Object.values(iaqData).map(item => item.v); // Lấy giá trị AQI cho từng chỉ số

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Chỉ số chất lượng không khí',
                data: values,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                }
            }
        }
    });
}

// Hàm giả lập để thêm bài viết vào danh sách
function addArticles() {
    const articles = [
        { title: "Phân Tích Chất Lượng Không Khí Tháng 1", content: "Dữ liệu cho thấy mức độ ô nhiễm cao vào tháng 1..." },
        { title: "Tác Động của Ô Nhiễm Đến Sức Khỏe", content: "Ô nhiễm không khí có thể gây ra nhiều vấn đề sức khỏe..." },
    ];
    const articlesList = document.getElementById('articles-list');
    articles.forEach(article => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${article.title}:</strong> ${article.content}`;
        articlesList.appendChild(li);
    });
}

// Thêm bài viết vào danh sách khi trang được tải
addArticles();
