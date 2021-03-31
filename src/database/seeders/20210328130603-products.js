'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
    */
      await queryInterface.bulkInsert('Products', 
      [{
        productName: "Samsung 32 Inch UA32N4003ARSHE Television",
        productLink: "https://www.sastodeal.com/samsung-32-inch-ua32n4003arshe-television-him-sam-tv-2.html",
        price: 26500,
        source: "Sastodeal",
        imageUrl: "https://cdn.sastodeal.com/catalog/product/3/_/3_135.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        productName: "Samsung 40 Inch UA40N5000ARSHE Full HD LED TV",
        productLink: "https://www.sastodeal.com/samsung-40-inch-ua40n5000arshe-full-hd-led-tv-him-sam-tv-4.html",
        price: 49623,
        source: "Sastodeal",
        imageUrl: "https://cdn.sastodeal.com/catalog/product/8/_/8_16_2.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        productName: "Samsung UA49N5300ARSHE 49 Inch Smart Full HD LED TV Black",
        productLink: "https://www.sastodeal.com/samsung-ua49n5300arshe-49-inch-smart-full-hd-led-tv-black-him-sam-tv-6.html",
        price: 76815,
        source: "Sastodeal",
        imageUrl: "https://cdn.sastodeal.com/catalog/product/1/2/12_2_4.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        productName: "Samsung UA43NU7100RSHE 43 Inch Smart UHD LED TV Black",
        productLink: "https://www.sastodeal.com/samsung-ua43nu7100rshe-43-smart-uhd-led-tv-black-him-sam-tv-7.html",
        price: 81391,
        source: "Sastodeal",
        imageUrl: "https://cdn.sastodeal.com/catalog/product/1/3/13a_1.png",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        productName: "Samsung UA43RU7100RSHE 43 Inch Smart 4K UHD LED TV Black",
        productLink: "https://www.sastodeal.com/samsung-ua43ru7100rshe-43-smart-4k-uhd-led-tv-black-him-sam-tv-8.html",
        price: 81391,
        source: "Sastodeal",
        imageUrl: "https://cdn.sastodeal.com/catalog/product/1/4/14_4_3.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        productName: "Samsung UA49NU7100RSHE 49 Inch Smart UHD LED TV Black",
        productLink: "https://www.sastodeal.com/samsung-ua49nu7100rshe-49-smart-uhd-led-tv-black-him-sam-tv-9.html",
        price: 113247,
        source: "Sastodeal",
        imageUrl: "https://cdn.sastodeal.com/catalog/product/1/6/16_7.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        productName: "Samsung UA49RU7100RSHE 49 Inch Smart 4K UHD LED TV Black",
        productLink: "https://www.sastodeal.com/samsung-ua49ru7100rshe-49-smart-4k-uhd-led-tv-black-him-sam-tv-10.html",
        price: 113247,
        source: "Sastodeal",
        imageUrl: "https://cdn.sastodeal.com/catalog/product/1/7/17_1_3.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        productName: "Samsung Ultra HD LED 55 Inch Smart TV UA55RU7100",
        productLink: "https://www.sastodeal.com/samsung-ultra-hd-led-55-inch-smart-tv-ua55ru7100-him-sam-tv-11.html",
        price: 134279,
        source: "Sastodeal",
        imageUrl: "https://cdn.sastodeal.com/catalog/product/1/9/19_2.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        productName: "Samsung Ultra HD LED 65 Inch Smart TV with Built-in Receiver 4K UA65RU7100",
        productLink: "https://www.sastodeal.com/samsung-ultra-hd-led-65-inch-smart-tv-with-built-in-receiver-4k-ua65ru7100-him-sam-tv-12.html",
        price: 206351,
        source: "Sastodeal",
        imageUrl: "https://cdn.sastodeal.com/catalog/product/2/0/20.png",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        productName: "Samsung 55 Inch QLED Ultra HD Premium HDR Smart Led TV QA55Q60RARXHE",
        productLink: "https://www.sastodeal.com/samsung-55-inch-qled-ultra-hd-premium-hdr-smart-led-tv-qa55q60rarxhe-him-sam-tv-13.html",
        price: 273671,
        source: "Sastodeal",
        imageUrl: "https://cdn.sastodeal.com/catalog/product/1/_/1_12_1.png",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        productName: "Samsung 65-Inch Flat Smart 4K UHD TV QA65Q60RA",
        productLink: "https://www.sastodeal.com/samsung-65-inch-flat-smart-4k-uhd-tv-qa65q60ra-him-sam-tv-14.html",
        price: 351991,
        source: "Sastodeal",
        imageUrl: "https://cdn.sastodeal.com/catalog/product/1/_/1_12.png",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        productName: "Samsung 55 Inch QLED Ultra HD Premium HDR Smart Led TV QA55Q7F",
        productLink: "https://www.sastodeal.com/samsung-55-inch-qled-ultra-hd-premium-hdr-smart-led-tv-qa55q7f-him-sam-tv-15.html",
        price: 466391,
        source: "Sastodeal",
        imageUrl: "https://cdn.sastodeal.com/catalog/product/2/6/26.png",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        productName: "Samsung 65 Inch Curved QLED Ultra HD Premium HDR 1500 Smart Led TV QA65Q7",
        productLink: "https://www.sastodeal.com/samsung-65-inch-curved-qled-ultra-hd-premium-hdr-1500-smart-led-tv-qa65q7-him-sam-tv-16.html",
        price: 695191,
        source: "Sastodeal",
        imageUrl: "https://cdn.sastodeal.com/catalog/product/2/7/27.png",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        productName: "Samsung Q60R 82 inch 4K Ultra HD Smart QLED TV - QA82Q60R",
        productLink: "https://www.sastodeal.com/samsung-q60r-82-inch-4k-ultra-hd-smart-qled-tv-qa82q60r-him-sam-tv-17.html",
        price: 703991,
        source: "Sastodeal",
        imageUrl: "https://cdn.sastodeal.com/catalog/product/9540/HIM-SAM-TV-17/28a.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        productName: "Samsung Ua43N5300 43 Inch Full Hd Led Smart Tv",
        productLink: "https://www.sastodeal.com/samsung-ua43n5300-43-inch-full-hd-led-smart-tv-sd-ue-sam-tv-2.html",
        price: 47500,
        source: "Sastodeal",
        imageUrl: "https://cdn.sastodeal.com/catalog/product/14259/SD-UE-SAM-TV-2/3.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        productName: "Samsung UA55TU8000 Crystal UHD 55 Inch 4K Smart LED TV",
        productLink: "https://www.sastodeal.com/samsung-ua55tu8000-crystal-uhd-55-inch-4k-smart-led-tv-rn-sam-bor-3-rn-sam-bor-3-rn-sam-bor-3-rn-sam-bor-3-rn-sam-bor-3-rn-sam-bor-3-rn-sam-bor-3-rn-sam-bor-3-rn-sam-bor-3-rn-sam-bor-3-rn-sam-bor-3-rn-sam-bor-3.html",
        price: 99000,
        source: "Sastodeal",
        imageUrl: "https://cdn.sastodeal.com/catalog/product/14343/RN-SAM-",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        productName: "Samsung Led TV 24 Inch UA24H4003",
        productLink: "https://www.sastodeal.com/samsung-led-tv-24-inch-ua24h4003-smsm-ua24h4003.html",
        price: 22041,
        source: "Sastodeal",
        imageUrl: "https://cdn.sastodeal.com/catalog/product/u/a/ua-24h4003-1_1_.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        productName: "Samsung 32 Inch Television UA32N4003ARSHE",
        productLink: "https://www.sastodeal.com/samsung-32-inch-television-ua32n4003arshe-tvv-byyp-ua32n4003arshe.html",
        price: 30141,
        source: "Sastodeal",
        imageUrl: "https://cdn.sastodeal.com/catalog/product/3/c/3c_1_2.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        productName: "Samsung 32″ Smart HD LED TV UA32N4300ARSHE",
        productLink: "https://www.sastodeal.com/samsung-32-smart-hd-led-tv-ua32n4300arshe-trb-vvv-2-ua32n4300arshe.html",
        price: 42921,
        source: "Sastodeal",
        imageUrl: "https://cdn.sastodeal.com/catalog/product/5/a/5a_7_1.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        productName: "Samsung 32''Smart LED TV UA32T4500",
        productLink: "https://www.sastodeal.com/samsung-32-smart-led-tv-ua32t4500-tbh-byop-5-ua32t4500.html",
        price: 44991,
        source: "Sastodeal",
        imageUrl: "https://cdn.sastodeal.com/catalog/product/1/_/1_1933.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        productName: "Samsung 40 Inch Full Hd Smart Led Tv Ua40N5000Arshe",
        productLink: "https://www.sastodeal.com/samsung-40-inch-full-hd-smart-led-tv-ua40n5000arshe-tvv-bapo-7-ua40n5000arshe.html",
        price: 50751,
        source: "Sastodeal",
        imageUrl: "https://cdn.sastodeal.com/catalog/product/4/0/40_4.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        productName: "Samsung 43″ Smart Full HD LED TV UA43N5300ARSHE",
        productLink: "https://www.sastodeal.com/samsung-43-smart-full-hd-led-tv-ua43n5300arshe-tri-bpyr-43-ua43n5300arshe.html",
        price: 66681,
        source: "Sastodeal",
        imageUrl: "https://cdn.sastodeal.com/catalog/product/s/a/samsung-ua43n5300arshe.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        productName: "Samsung 43″ Smart LED TV-UA43T5400",
        productLink: "https://www.sastodeal.com/samsung-43-smart-led-tv-ua43t5400-tvv-bpr-09-ua43t5400.html",
        price: 67941,
        source: "Sastodeal",
        imageUrl: "https://cdn.sastodeal.com/catalog/product/2/b/2b6d0b18aff6bcda5cb79fba3aa3f03d_1_.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        productName: "Samsung 43\" (108 cm) Smart Full HD LED TV UA43T5500",
        productLink: "https://www.sastodeal.com/samsung-43-108-cm-smart-full-hd-led-tv-ua43t5500-tvv-04-ua43t5500.html",
        price: 70191,
        source: "Sastodeal",
        imageUrl: "https://cdn.sastodeal.com/catalog/product/i/n/in-full-hd-tv-t5500-ua43t5500akxxl-ua--r----auxxl-227105592.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        "productName": "HOCO J77 LED Power Bank With Cable 10000 mAh",
        "productLink": "https://www.okdam.com/hoco-j77-led-power-bank-with-cable-10000-mah-56114",
        "price": " 1999",
        "source": "Okdam",
        "imageUrl": "https://www.okdam.com/public/upload/product/tiny/j77-10,000mAh-with-logo-6053288fbfc06.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        "productName": "X-AGE ConvE Power 10000 Slim Power Bank - (XPB02) - Black",
        "productLink": "https://www.okdam.com/x-age-conve-power-10000-slim-power-bank-xpb02-black-25411",
        "price": " 1199",
        "source": "Okdam",
        "imageUrl": "https://www.okdam.com/public/upload/product/tiny/XPB02-_-1-6051c39237a94.png",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        "productName": "12 Volt 1 Amp Adaptor",
        "productLink": "https://www.okdam.com/12-volt-1-amp-adaptor",
        "price": " 200",
        "source": "Okdam",
        "imageUrl": "https://www.okdam.com/public/upload/product/tiny/s-l300-5e8b1a427dd8d3578.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        "productName": "HUAWEI 6700 mAh Power Bank",
        "productLink": "https://www.okdam.com/huawei-6700-mah-power-bank",
        "price": " 2000",
        "source": "Okdam",
        "imageUrl": "https://www.okdam.com/public/upload/product/tiny/71242-5efdb9c6b646d8100.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        "productName": "PTron Indigo 2A 3 In 1 Sync Charging Cable Jeans Cloth USB Data Cable For Smartphones (Red)",
        "productLink": "https://www.okdam.com/ptron-indigo-2a-3-in-1-sync-charging-cable-jeans-cloth-usb-data-cable-for-smartphones-red",
        "price": " 690",
        "source": "Okdam",
        "imageUrl": "https://www.okdam.com/public/upload/product/tiny/ptron-indigo-2a-3-in-1-sync-charging-cable-jeans-cloth-usb-data-cable-for-smartphones-red2374.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        "productName": "Hoco C33A Little Superior Double Port Charger - Black",
        "productLink": "https://www.okdam.com/hoco-c33a-little-superior-double-port-charger-black",
        "price": " 625",
        "source": "Okdam",
        "imageUrl": "https://www.okdam.com/public/upload/product/tiny/hoco-c33a-little-superior-double-port-charger-black2024.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        "productName": "Hoco C33A Little Superior Double Port Charger - White",
        "productLink": "https://www.okdam.com/hoco-c33a-little-superior-double-port-charger-white",
        "price": " 625",
        "source": "Okdam",
        "imageUrl": "https://www.okdam.com/public/upload/product/tiny/hoco-c33a-little-superior-double-port-charger-white-and-black3992.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        "productName": "9 Volt 1 Ampere Adaptor",
        "productLink": "https://www.okdam.com/9-volt-1-ampere-adaptor",
        "price": " 180",
        "source": "Okdam",
        "imageUrl": "https://www.okdam.com/public/upload/product/tiny/s-l300-5e8b19dc19fd02013.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        "productName": "USAMS T14 PD USB-C FAST TRAVEL CHARGER - 18W - WHITE",
        "productLink": "https://www.okdam.com/usams-t14-pd-usb-c-fast-travel-charger-18w-white",
        "price": " 1600",
        "source": "Okdam",
        "imageUrl": "https://www.okdam.com/public/upload/product/tiny/Usams-T14-PD-USB-C-Fast-Travel-Charger-18W-th1-5ef5b4871775e5787.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        "productName": "BASEUS Brand Mirror Charging Monitoring Intelligent Digital Display 3 USB EU Travel Charger 3.4A For iPhone Samsung Mobile Phone",
        "productLink": "https://www.okdam.com/baseus-brand-mirror-charging-monitoring-intelligent-digital-display-3-usb-eu-travel-charger-34a-for-iphone-samsung-mobile-phone",
        "price": " 1650",
        "source": "Okdam",
        "imageUrl": "https://www.okdam.com/public/upload/product/tiny/32658-bgbfve-5ef5b54d694878899.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        "productName": "PTron Cradle USB Type C Docking Station Charger For All Type C Compatible SmartPhones (Gold)",
        "productLink": "https://www.okdam.com/ptron-cradle-usb-type-c-docking-station-charger-for-all-type-c-compatible-smartphones-gold",
        "price": " 520",
        "source": "Okdam",
        "imageUrl": "https://www.okdam.com/public/upload/product/tiny/ptron-cradle-usb-type-c-docking-station-charger-for-all-type-c-compatible-smartphones-gold0833.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        "productName": "5 Volt 1 Ampere Adaptor",
        "productLink": "https://www.okdam.com/5-volt-1-ampere-adaptor",
        "price": " 180",
        "source": "Okdam",
        "imageUrl": "https://www.okdam.com/public/upload/product/tiny/s-l300-5e8b1a13155ac2075.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        "productName": "USB-C / TYPE-C Male to 3.5mm Female Audio Adapter Cable for Samsung Galaxy Note 10",
        "productLink": "https://www.okdam.com/usb-c-type-c-male-to-35mm-female-audio-adapter-cable-for-samsung-galaxy-note-10",
        "price": " 750",
        "source": "Okdam",
        "imageUrl": "https://www.okdam.com/public/upload/product/tiny/SAS7790-5ef5df7cd98a24215.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        "productName": "Tuddrom D6 Sport Bluetooth Neckband Earphone Ipx5 Water,Sweat And Dust Resistant Light Weight Mic For Phone Call Tangle Cable-4545454",
        "productLink": "https://www.okdam.com/tuddrom-d6-sport-bluetooth-neckband-earphone-ipx5-watersweat-and-dust-resistant-light-weight-mic-for-phone-call-tangle-cable-4545454",
        "price": " 2090",
        "source": "Okdam",
        "imageUrl": "https://www.okdam.com/public/upload/product/tiny/couple-challeng-5f7474352aebd0887.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        "productName": "PTron Indigo 2A 3 In 1 Sync Charging Cable Jeans Cloth USB Data Cable For Smartphones (Blue)",
        "productLink": "https://www.okdam.com/ptron-indigo-2a-3-in-1-sync-charging-cable-jeans-cloth-usb-data-cable-for-smartphones-blue",
        "price": " 690",
        "source": "Okdam",
        "imageUrl": "https://www.okdam.com/public/upload/product/tiny/ptron-indigo-2a-3-in-1-sync-charging-cable-jeans-cloth-usb-data-cable-for-smartphones-blue3192.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        "productName": "Micro Pack Power Bank-PB-7200",
        "productLink": "https://www.okdam.com/micro-pack-power-bank-pb-7200",
        "price": " 3780",
        "source": "Okdam",
        "imageUrl": "https://www.okdam.com/public/upload/product/tiny/micropack-power-bank-pb-72008873.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        "productName": "Baseus Green U-shaped lamp Mobile Game Cable USB For iPhone",
        "productLink": "https://www.okdam.com/baseus-green-u-shaped-lamp-mobile-game-cable-usb-for-iphone",
        "price": " 1000",
        "source": "Okdam",
        "imageUrl": "https://www.okdam.com/public/upload/product/tiny/th4-5ef5b2de9b5409001.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        "productName": "Joyroom L-Q18Z Yida Serties 18W QC 3.0 1USB Travel Charger",
        "productLink": "https://www.okdam.com/joyroom-l-q18z-yida-serties-18w-qc-30-1usb-travel-charger",
        "price": " 1200",
        "source": "Okdam",
        "imageUrl": "https://www.okdam.com/public/upload/product/tiny/joyroom_joyroom_l-a12z_usb_yida_series_travel_adaptor_charger_-12_w_-eu_-1_port-_full05_qmri2ivm-5ef5e53cec46f0927.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        "productName": "USB Android Fast Charging Micro USB 3.0 Data Line Cable",
        "productLink": "https://www.okdam.com/usb-android-fast-charging-micro-usb-30-data-line-cable",
        "price": " 275",
        "source": "Okdam",
        "imageUrl": "https://www.okdam.com/public/upload/product/tiny/511GDftn1TL._AC_-5ef5e27a361ee3573.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        "productName": "Hoco C22A Little Superior Charger-Black",
        "productLink": "https://www.okdam.com/hoco-c22a-little-superior-charger-black",
        "price": " 438",
        "source": "Okdam",
        "imageUrl": "https://www.okdam.com/public/upload/product/tiny/hoco-c22a-little-superior-charger-black1068.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        "productName": "Hoco K10B Magnificent Wireless Selfie Stick With Backlight - 1.6M (Black)",
        "productLink": "https://www.okdam.com/hoco-k10b-magnificent-wireless-selfie-stick-with-backlight-16m-black",
        "price": " 3275",
        "source": "Okdam",
        "imageUrl": "https://www.okdam.com/public/upload/product/tiny/selfie-stick-k10b-magnificent-wireless-monopod-remote-control2837.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        "productName": "Trinx Mobile Phone Holder For Bicycles Handle Bar",
        "productLink": "https://www.okdam.com/trinx-mobile-phone-holder-for-bicycles-handle-bar-14482",
        "price": " 2500",
        "source": "Okdam",
        "imageUrl": "https://www.okdam.com/public/upload/product/tiny/trinex-mount-holder-605b1b4103e0c.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        "productName": "Usams T15 Dual Port PD Travel Charger 18W USB Fast Charger QC 3.0 Quick Wall Charger For iPhone X 8 8 Plus For Samsung S9 10 10+  Note 9 10",
        "productLink": "https://www.okdam.com/usams-t15-dual-port-pd-travel-charger-18w-usb-fast-charger-qc-30-quick-wall-charger-for-iphone-x-8-8-plus-for-samsung-s9-10-10-note-9-10",
        "price": " 1800",
        "source": "Okdam",
        "imageUrl": "https://www.okdam.com/public/upload/product/tiny/Usams-T15-PD-USB-C-Fast-Travel-Charger-18W-th1-5ef5b45af37c19338.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        "productName": "USB Type C Fast Charging Micro USB 3.0 Data Line Cable",
        "productLink": "https://www.okdam.com/usb-type-c-fast-charging-micro-usb-30-data-line-cable",
        "price": " 275",
        "source": "Okdam",
        "imageUrl": "https://www.okdam.com/public/upload/product/tiny/511GDftn1TL._AC_-5ef5e3632fd4a7437.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
    }], {});
   
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
