import { Button, Dropdown, Menu } from 'antd';
import { useTranslation } from 'react-i18next';

const HeaderComponent = () => {
    const languageMenu = (
        <Menu
            onClick={(e) => handleChangeLanguage(e.key)}
            items={[
                { key: 'vi', label: '🇻🇳 Tiếng Việt' },
                { key: 'ko', label: '🇰🇷 한국어' },
                { key: 'zh', label: '🇨🇳 中文' },
                { key: 'ja', label: '🇯🇵 日本語' },
                { key: 'ru', label: '🇷🇺 Русский' },
                { key: 'en', label: '🇬🇧 English' },
                { key: 'fr', label: '🇫🇷 Français' },
                { key: 'uz', label: '🇺🇿 Oʻzbekcha' } // Uzbek
            ]}
        />
    );
    const { t, i18n } = useTranslation();
    const handleChangeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng); // ✅ lưu lại
    };

    return (
        <header style={{ background: '#2a2b30', height: "60px", position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
            <div style={{ display: 'flex', alignItems: 'center', height: '100%', justifyContent: "space-evenly" }}>
                <div style={{ display: 'flex', height: '100%', justifyContent: "space-evenly", alignItems: 'center' }}>
                    <img
                        src="/access/images/Logo_white.png" // 👈 bạn có thể đổi thành ảnh riêng như "/images/logo.png"
                        alt="Logo"
                        style={{ height: "100%" }}
                    />
                    <h6 style={{ color: 'white', margin: 0 }}>Nha Trang <br /> Car Booking Service</h6>
                </div>
                <title level={4} style={{ color: 'white', margin: 0 }}>
                    Nha Trang Car Booking Service
                </title>
                <Dropdown overlay={languageMenu} placement="bottomCenter" arrow>
                    <Button
                        style={{
                            backgroundColor: "#3e4041",
                            color: 'white',
                            border: 'none',
                            outline: 'none',
                            fontSize: '16px',
                            fontWeight: '500',
                            // width: '150px',
                        }}
                    >
                        🌐 {t('language_name')}
                    </Button>
                </Dropdown>

            </div>
        </header>
    );
};

export default HeaderComponent;
