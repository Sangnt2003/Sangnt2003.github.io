// Language translations for the workshop
const translations = {
  en: {
    // Main page
    'In-Memory Database Caching Architecture Workshop': 'In-Memory Database Caching Architecture Workshop',
    'Overview': 'Overview',
    'This hands-on workshop guides you through building a production-ready multi-layer caching architecture using Amazon ElastiCache, DynamoDB Accelerator (DAX), and CloudFront. You'll gain practical experience optimizing application performance and reducing database load by up to 90%.': 'This hands-on workshop guides you through building a production-ready multi-layer caching architecture using Amazon ElastiCache, DynamoDB Accelerator (DAX), and CloudFront. You'll gain practical experience optimizing application performance and reducing database load by up to 90%.',
    'Performance Focus': 'Performance Focus',
    'This workshop demonstrates industry-standard caching patterns and AWS best practices for achieving sub-millisecond response times and handling high-traffic applications.': 'This workshop demonstrates industry-standard caching patterns and AWS best practices for achieving sub-millisecond response times and handling high-traffic applications.',
    'Workshop Modules': 'Workshop Modules',
    'Introduction and Architecture Overview': 'Introduction and Architecture Overview',
    'Setup VPC and Network Infrastructure': 'Setup VPC and Network Infrastructure',
    'Setup DynamoDB and DAX': 'Setup DynamoDB and DAX',
    'Setup ElastiCache Redis': 'Setup ElastiCache Redis',
    'Setup Application Server': 'Setup Application Server',
    'Setup Application Load Balancer': 'Setup Application Load Balancer',
    'Setup CloudFront CDN': 'Setup CloudFront CDN',
    'Performance Testing and Analysis': 'Performance Testing and Analysis',
    'Monitoring and Alerting': 'Monitoring and Alerting',
    'Resource Cleanup and Best Practices': 'Resource Cleanup and Best Practices',
    'Throughout this workshop, you'll learn techniques for designing high-performance caching architectures that can be applied to your own production environments, achieving 90%+ cache hit ratios and 50%+ faster response times.': 'Throughout this workshop, you'll learn techniques for designing high-performance caching architectures that can be applied to your own production environments, achieving 90%+ cache hit ratios and 50%+ faster response times.',
    'Workshop Duration:': 'Workshop Duration:',
    'Cost:': 'Cost:',
    '3-4 hours': '3-4 hours',
    '~$1-2 USD': '~$1-2 USD',
    // Sidebar
    'Introduction': 'Introduction',
    'Workshop Overview': 'Workshop Overview',
    'Architecture Overview': 'Architecture Overview',
    'More': 'More',
    'AWS Study Group - Blog': 'AWS Study Group - Blog',
    'AWS Study Group - FB Group': 'AWS Study Group - FB Group',
    'Clear History': 'Clear History',
    'Workshop': 'Workshop',
    'Last Updated': 'Last Updated',
    'Team': 'Team'
  },
  vi: {
    // Main page
    'In-Memory Database Caching Architecture Workshop': 'Workshop Kiến Trúc Caching Đa Tầng Trong Bộ Nhớ',
    'Overview': 'Tổng Quan',
    'This hands-on workshop guides you through building a production-ready multi-layer caching architecture using Amazon ElastiCache, DynamoDB Accelerator (DAX), and CloudFront. You'll gain practical experience optimizing application performance and reducing database load by up to 90%.': 'Workshop thực hành này hướng dẫn bạn xây dựng kiến trúc caching đa tầng sẵn sàng cho production sử dụng Amazon ElastiCache, DynamoDB Accelerator (DAX), và CloudFront. Bạn sẽ có kinh nghiệm thực tế tối ưu hóa hiệu suất ứng dụng và giảm tải cơ sở dữ liệu lên đến 90%.',
    'Performance Focus': 'Tập Trung Vào Hiệu Suất',
    'This workshop demonstrates industry-standard caching patterns and AWS best practices for achieving sub-millisecond response times and handling high-traffic applications.': 'Workshop này trình bày các mẫu caching tiêu chuẩn công nghiệp và best practices của AWS để đạt được thời gian phản hồi dưới millisecond và xử lý các ứng dụng lưu lượng cao.',
    'Workshop Modules': 'Các Module Workshop',
    'Introduction and Architecture Overview': 'Giới Thiệu và Tổng Quan Kiến Trúc',
    'Setup VPC and Network Infrastructure': 'Thiết Lập VPC và Hạ Tầng Mạng',
    'Setup DynamoDB and DAX': 'Thiết Lập DynamoDB và DAX',
    'Setup ElastiCache Redis': 'Thiết Lập ElastiCache Redis',
    'Setup Application Server': 'Thiết Lập Application Server',
    'Setup Application Load Balancer': 'Thiết Lập Application Load Balancer',
    'Setup CloudFront CDN': 'Thiết Lập CloudFront CDN',
    'Performance Testing and Analysis': 'Kiểm Tra Hiệu Suất và Phân Tích',
    'Monitoring and Alerting': 'Giám Sát và Cảnh Báo',
    'Resource Cleanup and Best Practices': 'Dọn Dẹp Tài Nguyên và Best Practices',
    'Throughout this workshop, you'll learn techniques for designing high-performance caching architectures that can be applied to your own production environments, achieving 90%+ cache hit ratios and 50%+ faster response times.': 'Trong suốt workshop này, bạn sẽ học các kỹ thuật thiết kế kiến trúc caching hiệu suất cao có thể áp dụng cho môi trường production của riêng bạn, đạt được tỷ lệ cache hit 90%+ và thời gian phản hồi nhanh hơn 50%+.',
    'Workshop Duration:': 'Thời Gian Workshop:',
    'Cost:': 'Chi Phí:',
    '3-4 hours': '3-4 giờ',
    '~$1-2 USD': '~$1-2 USD',
    // Sidebar
    'Introduction': 'Giới Thiệu',
    'Workshop Overview': 'Tổng Quan Workshop',
    'Architecture Overview': 'Tổng Quan Kiến Trúc',
    'More': 'Thêm',
    'AWS Study Group - Blog': 'AWS Study Group - Blog',
    'AWS Study Group - FB Group': 'AWS Study Group - FB Group',
    'Clear History': 'Xóa Lịch Sử',
    'Workshop': 'Workshop',
    'Last Updated': 'Cập Nhật Lần Cuối',
    'Team': 'Nhóm'
  }
};

// Function to translate text content
function translateText(element, lang) {
  const text = element.textContent.trim();
  if (translations[lang] && translations[lang][text]) {
    element.textContent = translations[lang][text];
  }
}

// Function to translate all elements
function translatePage(lang) {
  // Store current language in localStorage
  localStorage.setItem('preferredLanguage', lang);
  
  // Translate all text nodes
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );
  
  const textNodes = [];
  let node;
  while (node = walker.nextNode()) {
    if (node.parentElement && node.textContent.trim()) {
      textNodes.push(node);
    }
  }
  
  textNodes.forEach(textNode => {
    const text = textNode.textContent.trim();
    if (translations[lang] && translations[lang][text]) {
      textNode.textContent = translations[lang][text];
    }
  });
  
  // Update language selector
  const langSelect = document.getElementById('select-language');
  if (langSelect) {
    langSelect.value = lang === 'vi' ? '/vi/1-introduce/' : '/1-introduce/';
  }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
  const savedLang = localStorage.getItem('preferredLanguage') || 'en';
  
  // Check if URL contains /vi/ to determine language
  const isVietnamese = window.location.pathname.includes('/vi/');
  const currentLang = isVietnamese ? 'vi' : savedLang;
  
  if (currentLang === 'vi') {
    translatePage('vi');
  }
  
  // Add event listener to language selector
  const langSelect = document.getElementById('select-language');
  if (langSelect) {
    langSelect.addEventListener('change', function(e) {
      e.preventDefault();
      const selectedValue = this.value;
      
      if (selectedValue.includes('/vi/')) {
        translatePage('vi');
      } else {
        translatePage('en');
      }
    });
  }
});