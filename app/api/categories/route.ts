import { NextResponse } from "next/server";

const fakeBlogs = {
    politics: [
        {
            id: 'p1',
            title: 'Chính sách mới về phát triển kinh tế xanh',
            content: 'Chính phủ vừa công bố kế hoạch mới nhằm thúc đẩy phát triển kinh tế xanh, tập trung vào các ngành công nghiệp thân thiện với môi trường và tạo việc làm mới cho người lao động.',
            createdAt: '2024-03-15T08:30:00Z',
            thumbnail: 'https://picsum.photos/seed/politics1/800/600',
            category: 'politics',
            author: {
                name: 'Nguyễn Văn A',
                role: 'Chuyên gia kinh tế'
            },
            metadata: {
                readTime: '5 phút',
                views: 1234,
                likes: 89,
                comments: 23,
                shares: 45
            },
            tags: ['Kinh tế xanh', 'Chính sách', 'Môi trường']
        },
        {
            id: 'p2',
            title: 'Cải cách hành chính: Những bước tiến mới',
            content: 'Hệ thống hành chính công đang trải qua những thay đổi lớn với việc ứng dụng công nghệ số và cải thiện chất lượng phục vụ người dân.',
            createdAt: '2024-03-14T10:15:00Z',
            thumbnail: 'https://picsum.photos/seed/politics2/800/600',
            category: 'politics',
            author: {
                name: 'Trần Thị B',
                role: 'Chuyên viên hành chính'
            },
            metadata: {
                readTime: '4 phút',
                views: 987,
                likes: 67,
                comments: 18,
                shares: 32
            },
            tags: ['Cải cách', 'Hành chính', 'Công nghệ']
        }
    ],
    economics: [
        {
            id: 'e1',
            title: 'Thị trường bất động sản: Xu hướng mới 2024',
            content: 'Phân tích chi tiết về những xu hướng mới trong thị trường bất động sản Việt Nam năm 2024, bao gồm tác động của chính sách và nhu cầu thị trường.',
            createdAt: '2024-03-15T09:45:00Z',
            thumbnail: 'https://picsum.photos/seed/economics1/800/600',
            category: 'economics',
            author: {
                name: 'Lê Văn C',
                role: 'Chuyên gia bất động sản'
            },
            metadata: {
                readTime: '6 phút',
                views: 2345,
                likes: 156,
                comments: 45,
                shares: 78
            },
            tags: ['Bất động sản', 'Thị trường', 'Đầu tư']
        },
        {
            id: 'e2',
            title: 'Crypto: Tương lai của tài chính số',
            content: 'Phân tích sâu về vai trò và tác động của tiền điện tử trong hệ thống tài chính toàn cầu, cùng những dự báo cho tương lai.',
            createdAt: '2024-03-14T14:20:00Z',
            thumbnail: 'https://picsum.photos/seed/economics2/800/600',
            category: 'economics',
            author: {
                name: 'Phạm Thị D',
                role: 'Chuyên gia tài chính'
            },
            metadata: {
                readTime: '7 phút',
                views: 3456,
                likes: 234,
                comments: 67,
                shares: 89
            },
            tags: ['Crypto', 'Tài chính số', 'Blockchain']
        }
    ],
    health: [
        {
            id: 'h1',
            title: 'Bí quyết sống khỏe: Chế độ ăn uống khoa học',
            content: 'Hướng dẫn chi tiết về chế độ ăn uống khoa học, cân bằng dinh dưỡng và những thực phẩm tốt cho sức khỏe.',
            createdAt: '2024-03-15T11:30:00Z',
            thumbnail: 'https://picsum.photos/seed/health1/800/600',
            category: 'health',
            author: {
                name: 'Bác sĩ Nguyễn Văn E',
                role: 'Chuyên gia dinh dưỡng'
            },
            metadata: {
                readTime: '5 phút',
                views: 4567,
                likes: 345,
                comments: 89,
                shares: 123
            },
            tags: ['Dinh dưỡng', 'Sức khỏe', 'Lối sống']
        },
        {
            id: 'h2',
            title: 'Tập luyện tại nhà: Phương pháp hiệu quả',
            content: 'Các bài tập đơn giản nhưng hiệu quả có thể thực hiện tại nhà, phù hợp với mọi lứa tuổi và thể trạng.',
            createdAt: '2024-03-14T16:45:00Z',
            thumbnail: 'https://picsum.photos/seed/health2/800/600',
            category: 'health',
            author: {
                name: 'Huấn luyện viên Trần Văn F',
                role: 'Chuyên gia thể hình'
            },
            metadata: {
                readTime: '4 phút',
                views: 3456,
                likes: 234,
                comments: 56,
                shares: 78
            },
            tags: ['Tập luyện', 'Thể hình', 'Sức khỏe']
        }
    ],
    sports: [
        {
            id: 's1',
            title: 'U23 Việt Nam: Chiến lược cho SEA Games 2024',
            content: 'Phân tích chi tiết về đội hình, chiến thuật và cơ hội của U23 Việt Nam tại SEA Games 2024.',
            createdAt: '2024-03-15T13:15:00Z',
            thumbnail: 'https://picsum.photos/seed/sports1/800/600',
            category: 'sports',
            author: {
                name: 'Phóng viên Lê Văn G',
                role: 'Chuyên gia bóng đá'
            },
            metadata: {
                readTime: '5 phút',
                views: 5678,
                likes: 456,
                comments: 123,
                shares: 234
            },
            tags: ['Bóng đá', 'SEA Games', 'U23']
        },
        {
            id: 's2',
            title: 'Tennis: Những kỹ thuật cơ bản cần nắm vững',
            content: 'Hướng dẫn chi tiết về các kỹ thuật cơ bản trong môn tennis, từ cách cầm vợt đến các cú đánh cơ bản.',
            createdAt: '2024-03-14T15:30:00Z',
            thumbnail: 'https://picsum.photos/seed/sports2/800/600',
            category: 'sports',
            author: {
                name: 'Huấn luyện viên Nguyễn Thị H',
                role: 'Chuyên gia tennis'
            },
            metadata: {
                readTime: '6 phút',
                views: 2345,
                likes: 167,
                comments: 45,
                shares: 67
            },
            tags: ['Tennis', 'Thể thao', 'Kỹ thuật']
        }
    ],
    technology: [
        {
            id: 't1',
            title: 'AI: Cách mạng trong ngành công nghiệp',
            content: 'Phân tích sâu về tác động của trí tuệ nhân tạo trong các ngành công nghiệp và xu hướng phát triển trong tương lai.',
            createdAt: '2024-03-15T10:00:00Z',
            thumbnail: 'https://picsum.photos/seed/tech1/800/600',
            category: 'technology',
            author: {
                name: 'TS. Trần Văn I',
                role: 'Chuyên gia AI'
            },
            metadata: {
                readTime: '7 phút',
                views: 6789,
                likes: 567,
                comments: 145,
                shares: 345
            },
            tags: ['AI', 'Công nghệ', 'Tương lai']
        },
        {
            id: 't2',
            title: '5G: Cơ hội và thách thức',
            content: 'Đánh giá toàn diện về công nghệ 5G, những cơ hội phát triển và những thách thức cần vượt qua.',
            createdAt: '2024-03-14T11:45:00Z',
            thumbnail: 'https://picsum.photos/seed/tech2/800/600',
            category: 'technology',
            author: {
                name: 'KS. Phạm Văn K',
                role: 'Chuyên gia viễn thông'
            },
            metadata: {
                readTime: '6 phút',
                views: 3456,
                likes: 234,
                comments: 67,
                shares: 89
            },
            tags: ['5G', 'Viễn thông', 'Công nghệ']
        }
    ],
    entertainment: [
        {
            id: 'en1',
            title: 'Phim Việt 2024: Những tác phẩm đáng chờ đợi',
            content: 'Tổng hợp những bộ phim Việt Nam đáng chờ đợi nhất trong năm 2024, từ phim điện ảnh đến phim truyền hình.',
            createdAt: '2024-03-15T12:30:00Z',
            thumbnail: 'https://picsum.photos/seed/entertainment1/800/600',
            category: 'entertainment',
            author: {
                name: 'Nhà phê bình Lê Thị L',
                role: 'Chuyên gia điện ảnh'
            },
            metadata: {
                readTime: '5 phút',
                views: 4567,
                likes: 345,
                comments: 89,
                shares: 123
            },
            tags: ['Phim ảnh', 'Giải trí', 'Văn hóa']
        },
        {
            id: 'en2',
            title: 'Âm nhạc: Xu hướng mới 2024',
            content: 'Khám phá những xu hướng mới trong âm nhạc Việt Nam và thế giới năm 2024, từ nhạc pop đến nhạc điện tử.',
            createdAt: '2024-03-14T13:15:00Z',
            thumbnail: 'https://picsum.photos/seed/entertainment2/800/600',
            category: 'entertainment',
            author: {
                name: 'DJ Nguyễn Văn M',
                role: 'Chuyên gia âm nhạc'
            },
            metadata: {
                readTime: '4 phút',
                views: 2345,
                likes: 167,
                comments: 45,
                shares: 67
            },
            tags: ['Âm nhạc', 'Giải trí', 'Văn hóa']
        }
    ]
};

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');

    if (!category) {
        return NextResponse.json({ error: 'Category parameter is required' }, { status: 400 });
    }

    const blogs = fakeBlogs[category as keyof typeof fakeBlogs] || [];

    return NextResponse.json({ blogs });
} 