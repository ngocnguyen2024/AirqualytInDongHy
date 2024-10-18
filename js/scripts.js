// scripts.js

// Danh sách người dùng mẫu
const users = [];

// Đăng ký người dùng
document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Kiểm tra xem người dùng đã tồn tại chưa
    const userExists = users.some(u => u.username === username);
    
    if (userExists) {
        alert('Tên đăng nhập đã tồn tại!');
    } else {
        // Thêm người dùng mới vào danh sách
        users.push({ username, password });
        alert('Đăng ký thành công! Bạn có thể đăng nhập ngay bây giờ.');
    }
});

// Đăng nhập người dùng
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Kiểm tra thông tin đăng nhập
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        // Đăng nhập thành công
        document.getElementById('auth').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        fetchAirQualityData(); // Gọi dữ liệu khi đã đăng nhập
    } else {
        alert('Tên đăng nhập hoặc mật khẩu không đúng!');
    }
});

// Hàm giả lập để lấy dữ liệu chất lượng không khí
function fetchAirQualityData() {
    // Giả lập dữ liệu để hiển thị biểu đồ
    const ctx = document.getElementById('airQualityChart').getContext('2d');
    const airQualityChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Chất lượng không khí',
                data: [30, 40, 35, 50, 40, 70, 60],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false,
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

    // Thêm bài viết vào danh sách
    const articles = [
        { title: "Phân Tích Chất Lượng Không Khí Tháng 1", content: "Dữ liệu cho thấy mức độ ô nhiễm cao vào tháng 1..." },
        { title: "Tác Động của Ô Nhiễm Đến Sức Khỏe", content: "Ô nhiễm không khí có thể gây ra nhiều vấn đề sức khỏe..." },
    ];

    const articlesList = document.getElementById('articles-list');
    articles.forEach(article => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${article.title}</strong>: ${article.content}`;
        articlesList.appendChild(li);
    });
}
