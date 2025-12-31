// JavaScript 최적화 (요구사항 2.4, 7.4)
// 1. 이벤트 위임(Event Delegation) 사용
// 2. 스로틀링(Throttling)/디바운싱(Debouncing) 적용 (스크롤, 리사이즈)
// 3. 불필요한 DOM 조작 제거

// 스로틀링 함수 (요구사항 7.4)
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// 디바운싱 함수 (요구사항 7.4)
function debounce(func, delay) {
    let timeoutId;
    return function() {
        const args = arguments;
        const context = this;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(context, args), delay);
    };
}

// Mobile Menu Toggle (이벤트 위임 사용 - 요구사항 7.4)
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuOverlay.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
    // aria-expanded 속성 업데이트 (접근성)
    const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
    mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
});

// 이벤트 위임(Event Delegation): 모바일 메뉴 링크 클릭 처리 (요구사항 7.4)
mobileMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        mobileMenuOverlay.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        // 메뉴 닫을 때 aria-expanded 업데이트
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
});

// Close mobile menu when clicking outside
mobileMenuOverlay.addEventListener('click', (e) => {
    if (e.target === mobileMenuOverlay) {
        mobileMenuOverlay.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        // 메뉴 닫을 때 aria-expanded 업데이트
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for fade-in animations
const sections = document.querySelectorAll('.section');
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});

// Ghost mascot interactive animation with figure-8 motion
const ghostMascot = document.getElementById('ghostMascot');
const ghostContainer = document.querySelector('.ghost-container');

// 이미지 로드 실패 시 폴백 처리 (요구사항 7.3)
if (ghostMascot) {
    ghostMascot.addEventListener('error', () => {
        // 이미지 로드 실패 시 폴백(Fallback) 텍스트 표시
        const container = ghostMascot.parentElement;
        container.innerHTML = '<div style="width: 300px; height: 300px; display: flex; align-items: center; justify-content: center; background: rgba(124, 58, 237, 0.1); border-radius: 12px; color: var(--color-text-secondary); font-size: 14px; text-align: center;">마스코트 이미지를 불러올 수 없습니다</div>';
    });
}

let mouseX = 0;
let mouseY = 0;
let ghostX = 0;
let ghostY = 0;
let animationTime = 0;

// 누운 8자(∞) 경로 계산 함수
function calculateFigure8Path(t) {
    // t는 0~1 사이의 값 (애니메이션 진행도)
    // Lissajous 곡선을 사용하여 8자 패턴 생성
    const x = Math.sin(t * Math.PI * 2) * 100;
    const y = Math.sin(t * Math.PI * 4) * 50;
    return { x, y };
}

document.addEventListener('mousemove', (e) => {
    // 반응 범위를 조금 더 넓게 설정
    mouseX = (e.clientX / window.innerWidth - 0.5) * 40;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 40;
});

function animateGhost() {
    // 애니메이션 시간 업데이트 (8초 주기로 느리게)
    animationTime = (animationTime + 0.002) % 1; // 약 60fps 기준, 8초 주기

    // 8자 경로 계산
    const figure8 = calculateFigure8Path(animationTime);

    // 마우스 추적과 8자 모션 결합
    const targetX = figure8.x + mouseX;
    const targetY = figure8.y + mouseY;

    // 스무딩 효과(Lerp - Linear Interpolation) - 더 부드럽게
    ghostX += (targetX - ghostX) * 0.05;
    ghostY += (targetY - ghostY) * 0.05;

    if (ghostMascot) {
        // 평면 2D 이동만 적용 (입체감 없음)
        ghostMascot.style.transform = `translate(${ghostX}px, ${ghostY}px)`;
    }

    requestAnimationFrame(animateGhost);
}

animateGhost();

// Parallax effect for gradient orbs (스로틀링 적용 - 요구사항 7.4)
const handleParallax = throttle(() => {
    const scrolled = window.pageYOffset;
    const orbs = document.querySelectorAll('.gradient-orb');

    orbs.forEach((orb, index) => {
        const speed = 0.5 + (index * 0.2);
        orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
}, 16); // 약 60fps

window.addEventListener('scroll', handleParallax);

// Add active state to navigation on scroll (스로틀링 적용 - 요구사항 7.4)
const navLinks = document.querySelectorAll('.nav-links a');

const handleNavUpdate = throttle(() => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}, 16); // 약 60fps

window.addEventListener('scroll', handleNavUpdate);

// Particle animation enhancement
const particles = document.querySelectorAll('.particle');
particles.forEach((particle, index) => {
    setInterval(() => {
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        particle.style.left = `${randomX}%`;
        particle.style.top = `${randomY}%`;
    }, 3000 + (index * 600));
});

// Add hover effect to cards (불필요한 DOM 조작 제거 - 요구사항 7.4)
// CSS에서 transition이 이미 정의되어 있으므로 JS에서 추가 설정 불필요
// 이전 코드 제거: 불필요한 transition 설정

// Scroll indicator hide on scroll (스로틀링 적용 - 요구사항 7.4)
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    const handleScrollIndicator = throttle(() => {
        if (window.scrollY > 100) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.pointerEvents = 'auto';
        }
    }, 16); // 약 60fps

    window.addEventListener('scroll', handleScrollIndicator);
}

// Add loading animation (최적화됨 - 요구사항 7.4)
// CSS 애니메이션으로 처리하여 JS 오버헤드 제거
// 이전 코드 제거: 불필요한 JS 애니메이션

// Console easter egg
console.log('%c🚀 Kiro 한국 유저그룹에 오신 것을 환영합니다!',
    'color: #7c3aed; font-size: 20px; font-weight: bold;');
console.log('%c💡 AI 코딩의 미래를 함께 만들어가요!',
    'color: #3b82f6; font-size: 14px;');
console.log('%c🔗 https://kiro.dev',
    'color: #ec4899; font-size: 12px;');


// Events 섹션 데이터 렌더링
async function loadAndRenderEvents() {
    const eventsList = document.getElementById('eventsList');
    const eventsLoading = document.getElementById('eventsLoading');
    const eventsError = document.getElementById('eventsError');

    try {
        // 로딩 상태 표시
        eventsLoading.style.display = 'block';
        eventsList.style.display = 'none';
        eventsError.style.display = 'none';

        // events.json 파일 로드
        const response = await fetch('events.json');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const allEvents = await response.json();

        // 로딩 상태 숨김
        eventsLoading.style.display = 'none';

        // 이벤트 데이터 검증
        if (!Array.isArray(allEvents) || allEvents.length === 0) {
            throw new Error('이벤트 데이터가 없습니다.');
        }

        // 현재 날짜 (시간 제거)
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // 이벤트를 지난 이벤트와 예정된 이벤트로 분류 (현재 날짜 기준)
        const pastEvents = allEvents.filter(event => {
            const eventDate = new Date(event.date);
            eventDate.setHours(0, 0, 0, 0);
            return eventDate < today;
        }).sort((a, b) => new Date(b.date) - new Date(a.date)); // 최신순 정렬

        const upcomingEvents = allEvents.filter(event => {
            const eventDate = new Date(event.date);
            eventDate.setHours(0, 0, 0, 0);
            return eventDate >= today;
        }).sort((a, b) => new Date(a.date) - new Date(b.date)); // 오름차순 정렬

        // 지난 이벤트 1개, 예정된 이벤트 최대 2개만 선택
        const displayEvents = [
            ...pastEvents.slice(0, 1),
            ...upcomingEvents.slice(0, 2)
        ];

        if (displayEvents.length === 0) {
            throw new Error('표시할 이벤트가 없습니다.');
        }

        // 이벤트 카드 렌더링
        eventsList.innerHTML = displayEvents.map(event => {
            const eventDate = new Date(event.date);
            eventDate.setHours(0, 0, 0, 0);
            const isPast = eventDate < today;
            
            const year = eventDate.getFullYear();
            const month = eventDate.toLocaleString('ko-KR', { month: 'short' });
            const day = eventDate.getDate();
            const dateString = `${year}년 ${eventDate.getMonth() + 1}월 ${day}일`;

            return `
                <div class="event-card ${isPast ? 'past' : ''}" aria-label="${escapeHtml(event.title)} - ${dateString}">
                    ${isPast ? '<div class="event-badge past">종료된 이벤트</div>' : ''}
                    <div class="event-date-badge" aria-label="${dateString}">
                        <div class="event-date-badge-year">${year}년</div>
                        <div class="event-date-badge-month">${month}</div>
                        <div class="event-date-badge-day">${day}일</div>
                    </div>
                    <div class="event-content">
                        <h3 class="event-title">${escapeHtml(event.title)}</h3>
                        <p class="event-description">${escapeHtml(event.description)}</p>
                        <div class="event-meta">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <span>${escapeHtml(event.location)}</span>
                        </div>
                        ${!isPast ? `
                            <a href="${escapeHtml(event.link)}" target="_blank" rel="noopener noreferrer" class="event-link" aria-label="${escapeHtml(event.title)} 자세히 보기 (새 탭에서 열림)">
                                자세히 보기
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        ` : ''}
                    </div>
                </div>
            `;
        }).join('');

        eventsList.style.display = 'grid';

    } catch (error) {
        console.error('이벤트 데이터 로드 오류:', error);
        
        // 에러 상태 표시
        eventsLoading.style.display = 'none';
        eventsList.style.display = 'none';
        eventsError.style.display = 'block';
        eventsError.innerHTML = '<p>이벤트 데이터를 불러올 수 없습니다. 잠시 후 다시 시도해주세요.</p>';
    }
}

// HTML 특수문자 이스케이프 함수 (XSS 방지)
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// 페이지 로드 시 이벤트 데이터 렌더링
document.addEventListener('DOMContentLoaded', () => {
    loadAndRenderEvents();
});
