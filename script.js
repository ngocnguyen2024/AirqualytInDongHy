// API key
const apiKey = '7ddf9100e89da55116139544d0fa21e15d4038ee';

// Địa chỉ API với tham số thành phố Thái Nguyên
const city = 'Thai Nguyen';  // Địa điểm lấy dữ liệu
const apiUrl = `https://api.waqi.info/feed/${city}/?token=${apiKey}`;

// Hàm lấy dữ liệu AQI
async function fetchAQIData() {
    try {
        const response = await fetch(apiUrl);  // Gọi API
        const data = await response.json();    // Chuyển đổi dữ liệu sang định dạng JSON
        
        // Kiểm tra nếu dữ liệu hợp lệ
        if (data.status === 'ok') {
            const aqi = data.data.aqi;  // Lấy chỉ số AQI từ dữ liệu
            document.getElementById('aqi-data').innerText = `Chỉ số AQI hiện tại tại ${city}: ${aqi}`;
        } else {
            document.getElementById('aqi-data').innerText = `Không thể lấy dữ liệu AQI: ${data.data}`;
        }
    } catch (error) {
        document.getElementById('aqi-data').innerText = 'Lỗi khi lấy dữ liệu từ API';
    }
}

// Gọi hàm để lấy dữ liệu khi trang được tải
fetchAQIData();
