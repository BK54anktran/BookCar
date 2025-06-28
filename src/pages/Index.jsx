import { useTranslation } from 'react-i18next';
import { Layout, Typography, Card, Row, Col, Image, Table, Divider } from 'antd';
import { message } from "antd";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from '../components/heder/header';
import i18n from '../i18n';
import { createActive, createActiveConnectApp } from '../api/ActiveApi';
import FingerprintId from '../components/FingerprintId';

const { Title } = Typography;
const { Content, Footer } = Layout;
const { Paragraph } = Typography;

const CarBookingIntroAnt = () => {

  const handleFingerprintReady = (id) => {
    createActive();
  };

  const createActiveConnectApp_function = (appName) => {
    return async () => {
      await createActiveConnectApp(appName);
    };
  };

  const qrPerLanguage = {
    vi: [
      {
        app_name: 'Zalo',
        title: 'Zalo',
        value: 'access/images/Zalo_QR.jpg',
        link: 'https://zalo.me/0345524179'
      }
    ],
    ko: [
      {
        app_name: 'KakaoTalk',
        title: 'KakaoTalk (카카오톡)',
        value: 'access/images/KakaoTalk_QR.jpg',
        // KakaoTalk không hỗ trợ link cá nhân trực tiếp, dùng mã QR tĩnh là chủ yếu
        link: '#'
      }
    ],
    zh: [
      {
        app_name: 'WeChat',
        title: 'WeChat (微信)',
        value: 'access/images/WeChat_QR.jpg',
        // WeChat dùng mã QR tĩnh hoặc WeChat ID, không có URL cố định như Zalo
        link: '#'
      }
    ],
    ja: [
      {
        app_name: 'LINE',
        title: 'LINE (ライン)',
        value: 'access/images/Line_QR.jpg',
        // LINE hỗ trợ link với LINE ID: https://line.me/ti/p/<id>
        link: 'https://line.me/ti/p/~nhatrangcarservice' // bạn có thể thay `carbookingnt` bằng ID thật
      }
    ],
    ru: [
      {
        app_name: 'WhatsApp',
        title: 'WhatsApp (Ватсап)',
        value: 'access/images/WhatsApp_QR.jpg',
        link: 'https://wa.me/84345524179' // 84 là mã quốc gia Việt Nam
      },
      {
        app_name: 'Viber',
        title: 'Viber (Вайбер)',
        value: 'access/images/Viber_QR.jpg',
        link: 'viber://chat?number=+84345524179'
      }
    ],
    en: [
      {
        app_name: 'WhatsApp',
        title: 'WhatsApp',
        value: 'access/images/WhatsApp_QR.jpg',
        link: 'https://wa.me/84345524179'
      },
      {
        app_name: 'Viber',
        title: 'Viber',
        value: 'access/images/Viber_QR.jpg',
        link: 'viber://chat?number=+84345524179'
      }
    ],
    fr: [
      {
        app_name: 'WhatsApp',
        title: 'WhatsApp',
        value: 'access/images/WhatsApp_QR.jpg',
        link: 'https://wa.me/84345524179'
      }
    ],
    uz: [
      {
        app_name: 'WhatsApp',
        title: 'WhatsApp',
        value: 'access/images/WhatsApp_QR.jpg',
        link: 'https://wa.me/84345524179'
      },
      {
        app_name: 'Viber',
        title: 'Viber',
        value: 'access/images/Viber_QR.jpg',
        link: 'viber://chat?number=+84345524179'
      },
      {
        app_name: 'Zalo',
        title: 'Zalo',
        value: 'access/images/Zalo_QR.jpg',
        link: 'https://zalo.me/0345524179'
      }
    ]
  };
  // Ghi chú về các ứng dụng liên lạc phổ biến ở các quốc gia:


  // Việt Nam: Zalo
  // Hàn Quốc: KakaoTalk
  // Trung Quốc: WeChat
  // Nhật Bản: Line
  // Nga: WhatsApp, Viber
  // Anh: WhatsApp, Viber
  // Pháp: WhatsApp
  const { t } = useTranslation();

  const routeData = [
    {
      key: '1',
      route: t('route_1'),
      car4: '300.000 VND',
      car7: '350.000 VND'
    },
    {
      key: '2',
      route: t('route_2'),
      car4: '300.000 VND',
      car7: '350.000 VND'
    },
    {
      key: '3',
      route: t('route_3'),
      car4: '350.000 VND',
      car7: '400.000 VND'
    },
    {
      key: '4',
      route: t('route_4'),
      car4: '350.000 VND',
      car7: '400.000 VND'
    },
    {
      key: '5',
      route: t('route_5'),
      car4: '1.400.000 VND',
      car7: '1.600.000 VND'
    }
  ];



  const columns = [
    {
      title: t('trip'),
      dataIndex: 'route',
      key: 'route'
    },
    {
      title: t('car4'),
      dataIndex: 'car4',
      key: 'car4'
    },
    {
      title: t('car7'),
      dataIndex: 'car7',
      key: 'car7'
    }
  ];



  const items = t('bonus_items', { returnObjects: true });

  const alter_message = async (message_s, app_name) => {
    await createActiveConnectApp_function(app_name)(); // Gọi hàm tạo ra
    message.success(message_s);
  };


  const handleDownload = async (e, qr) => {

    e.preventDefault();

    await alter_message(t('download_qr'), qr.app_name);

    // Sau đó tạo và trigger thẻ <a> để tải file
    const link = document.createElement('a');
    link.href = qr.value;
    link.download = `qr-${qr.app_name || 'image'}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <Layout style={{ minHeight: '100vh' }} className=''>
      <HeaderComponent />
      <FingerprintId onReady={handleFingerprintReady} />
      <Content style={{ padding: '40px', marginTop: 60 }}>
        <Typography.Title level={4} style={{ margin: '0 0 20px 0', textAlign: 'center', color: '#b71c1c' }}>
          “{t('description')}”
        </Typography.Title>

        <Title level={4}>{t('contact_through_apps')}</Title>
        <Row
          gutter={[16, 24]}
          justify="center"
          style={{ marginTop: 40, marginBottom: 40 }}
        >
          {(qrPerLanguage[i18n.language] || []).map((qr, index) => (
            <Col
              key={index}
              xs={24}
              sm={12}
              md={8}
              lg={6}
              xl={6}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <Card
                title={qr.title}
                bordered={false}
                style={{ textAlign: 'center', width: 200 }}
              >
                {qr.link && qr.link !== '#' ? (
                  <a
                    href={qr.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={createActiveConnectApp_function(qr.app_name)}
                  >
                    <Image
                      preview={false}
                      src={qr.value}
                      width={128}
                      height={128}
                      style={{ borderRadius: 8, cursor: 'pointer' }}
                    />
                  </a>
                ) : (
                  <button onClick={(e) => handleDownload(e, qr)} style={{ all: 'unset', cursor: 'pointer' }}>
                    <Image
                      src={qr.value}
                      preview={false}
                      width={128}
                      height={128}
                      style={{ borderRadius: 8 }}
                    />
                  </button>
                )}
              </Card>
            </Col>
          ))}
        </Row>
        <Table columns={columns} dataSource={routeData} pagination={false} bordered style={{ marginBottom: 40 }} />
        <Title level={4} style={{ marginTop: 32 }}>{t('bonus')}</Title>
        <ul>
          {items.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
        <Title level={4}>{t('contact_info')}</Title>
        <Paragraph>{t('phone')}</Paragraph>
        <Paragraph>{t('email')}</Paragraph>

        {/* <Title level={4}>{t('contact_through_apps')}</Title>
        <Row
          gutter={[16, 24]}
          justify="center"
          style={{ marginTop: 40 }}
        >
          {(qrPerLanguage[i18n.language] || []).map((qr, index) => (
            <Col
              key={index}
              xs={24}
              sm={12}
              md={8}
              lg={6}
              xl={6}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <Card
                title={qr.title}
                bordered={false}
                style={{ textAlign: 'center', width: 200 }}
              >
                {qr.link && qr.link !== '#' ? (
                  <a href={qr.link} target="_blank" rel="noopener noreferrer">
                    <Image
                      preview={false}
                      src={qr.value}
                      width={128}
                      height={128}
                      style={{ borderRadius: 8 }}
                    />
                  </a>
                ) : (
                  <Image
                    preview={false}
                    src={qr.value}
                    width={128}
                    height={128}
                    style={{ borderRadius: 8 }}
                  />
                )}
              </Card>
            </Col>
          ))}
        </Row> */}

        <Paragraph>{t('address')}</Paragraph>
        <Paragraph>Link Google Map: <a href='https://maps.app.goo.gl/jguBhYepaBicuNnJ7?g_st=com.google.maps.preview.copy' target='_blank' rel="noreferrer">https://maps.app.goo.gl/jguBhYepaBicuNnJ7?g_st=com.google.maps.preview.copy</a></Paragraph>
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        © {new Date().getFullYear()} Car Booking Service
        <Divider />
        <Paragraph style={{ textAlign: 'center', fontWeight: 'bold', color: 'red' }}>
          {t('thank_you')}
        </Paragraph>

      </Footer>
    </Layout>
  );
};

export default CarBookingIntroAnt;
