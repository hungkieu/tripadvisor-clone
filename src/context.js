import { createContext } from 'react';

const shelve1 = {
  items: [
    {
      text: 'Thanh Tram',
      reviewCount: '57 đánh giá',
      imageUrl:
        'https://media-cdn.tripadvisor.com/media/photo-l/05/8d/6e/3d/fresh-spring-rolls.jpg'
    },
    {
      text: 'Lạ Garden Restaurant',
      reviewCount: '27 đánh giá',
      imageUrl:
        'https://media-cdn.tripadvisor.com/media/photo-i/15/eb/d3/ed/getlstd-property-photo.jpg'
    },
    {
      text: 'MrBBQ',
      reviewCount: '5 đánh giá',
      imageUrl:
        'https://media-cdn.tripadvisor.com/media/photo-l/07/fa/3c/fe/mrbbq.jpg'
    },
    {
      text: 'Quan Dau',
      reviewCount: '6 đánh giá',
      imageUrl:
        'https://media-cdn.tripadvisor.com/media/photo-l/04/85/6b/9c/quan-d-u.jpg'
    },
    {
      text: 'Restaurant Tai',
      reviewCount: '7 đánh giá',
      imageUrl:
        'https://media-cdn.tripadvisor.com/media/photo-f/12/8d/ac/75/nha-hang-tai.jpg'
    },
    {
      text: 'Thanh Hung Restaurant',
      reviewCount: '7 đánh giá',
      imageUrl:
        'https://media-cdn.tripadvisor.com/media/photo-l/05/49/64/68/squid.jpg'
    },
    {
      text: 'Quyen Quyen',
      reviewCount: '3 đánh giá',
      imageUrl:
        'https://media-cdn.tripadvisor.com/media/photo-l/03/b7/39/20/quyen-quyen.jpg'
    },
    {
      text: 'Pho Nuong',
      reviewCount: '6 đánh giá',
      imageUrl:
        'https://media-cdn.tripadvisor.com/media/photo-l/02/f9/c5/ce/pho-nuong.jpg'
    }
  ],
  title: 'Nhà hàng phù hợp cho bữa tối tại Buôn Ma Thuột',
  hasShowAll: true
};

const shelve2 = {
  items: [
    {
      text: 'Coffee Tour Resort',
      reviewCount: '57 đánh giá',
      imageUrl:
        'https://media-cdn.tripadvisor.com/media/photo-i/05/ca/fb/e0/coffee-tour-resort.jpg'
    },
    {
      text: 'Damsan Hotel',
      reviewCount: '84 đánh giá',
      imageUrl:
        'https://media-cdn.tripadvisor.com/media/photo-l/0a/07/85/c8/damsan-hotel.jpg'
    },
    {
      text: 'Khách Sạn Mường Thanh Luxury Buôn Ma Thuột',
      reviewCount: '38 đánh giá',
      imageUrl:
        'https://media-cdn.tripadvisor.com/media/photo-i/0e/d4/c6/fb/main-entrance.jpg'
    },
    {
      text: 'Khách sạn Sài Gòn - Ban Mê',
      reviewCount: '112 đánh giá',
      imageUrl:
        'https://media-cdn.tripadvisor.com/media/photo-i/0e/ae/93/b4/photo1jpg.jpg'
    },
    {
      text: 'Dakruco Hotel',
      reviewCount: '79 đánh giá',
      imageUrl:
        'https://media-cdn.tripadvisor.com/media/photo-l/03/46/f0/8b/dakruco-hotel.jpg'
    },
    {
      text: 'Dam San Hotel',
      reviewCount: '20 đánh giá',
      imageUrl:
        'https://media-cdn.tripadvisor.com/media/photo-l/09/f7/98/cd/dam-san-hotel.jpg'
    },
    {
      text: 'Hai Ba Trung Hotel',
      reviewCount: '20 đánh giá',
      imageUrl:
        'https://media-cdn.tripadvisor.com/media/photo-l/0a/ed/58/78/hai-ba-trung-hotel.jpg'
    },
    {
      text: 'Thanh Mai',
      reviewCount: '5 đánh giá',
      imageUrl:
        'https://media-cdn.tripadvisor.com/media/photo-i/13/a2/96/1f/thanh-mai-hotel.jpg'
    }
  ],
  title: 'Khách sạn hàng đầu tại Buôn Ma Thuột',
  hasShowAll: true
};

const shelve3 = {
  items: [
    {
      text: 'Vườn Troh Bư',
      reviewCount: '3 đánh giá',
      imageUrl:
        'https://media-cdn.tripadvisor.com/media/photo-i/0e/d8/13/3d/nh-d-p-c-a-khach-trong.jpg'
    },
    {
      text: 'Ethnographic Museum',
      reviewCount: '92 đánh giá',
      imageUrl:
        'https://media-cdn.tripadvisor.com/media/photo-l/02/f7/06/e2/ethnographic-museum.jpg'
    },
    {
      text: 'Dray Nur Waterfall',
      reviewCount: '179 đánh giá',
      imageUrl:
        'https://media-cdn.tripadvisor.com/media/photo-l/05/a6/51/6c/dray-nur-waterfalls.jpg'
    },
    {
      text: 'Làng Cà Phê Trung Nguyên',
      reviewCount: '83 đánh giá',
      imageUrl:
        'https://media-cdn.tripadvisor.com/media/photo-i/12/06/37/42/trung-nguyen-village.jpg'
    },
    {
      text: 'Dray Sap Falls',
      reviewCount: '56 đánh giá',
      imageUrl:
        'https://media-cdn.tripadvisor.com/media/photo-i/12/4d/df/de/getlstd-property-photo.jpg'
    },
    {
      text: 'EDE Farm',
      reviewCount: '1 đánh giá',
      imageUrl:
        'https://media-cdn.tripadvisor.com/media/photo-i/16/6f/eb/2a/photo9jpg.jpg'
    },
    {
      text: 'Cội Nguồn Cà Phê Việt',
      reviewCount: '2 đánh giá',
      imageUrl:
        'https://media-cdn.tripadvisor.com/media/photo-i/16/99/d9/11/2019-quy-khach-s-du-c.jpg'
    },
    {
      text: 'Khu du lịch sinh thái Kotam',
      reviewCount: '23 đánh giá',
      imageUrl:
        'https://media-cdn.tripadvisor.com/media/photo-l/09/ac/49/60/kotam-ngay-n-ng-d-p-la.jpg'
    }
  ],
  title: 'Hoạt động giải trí phổ biến tại Buôn Ma Thuột vào tháng 2',
  hasShowAll: false
};

const shelves = [shelve1, shelve2, shelve3];

export const defaultValue = {
  shelves
};

const AppContext = createContext();

export default AppContext;
