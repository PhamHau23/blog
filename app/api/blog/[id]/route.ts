import { NextResponse } from "next/server";

interface BlogPost {
    id: string;
    title: string;
    content: string;
    createdAt: string;
    category: string;
    status: 'draft' | 'published' | 'archived';
    author: {
        id: string;
        name: string;
        avatar: string;
        role: string;
    };
    metadata: {
        readTime: number; // thời gian đọc (phút)
        views: number;    // lượt xem
        likes: number;    // lượt thích
        tags: string[];   // các thẻ liên quan
        comments: number;
        shares: number;
    };
    thumbnail: string;    // ảnh đại diện bài viết
    summary: string;      // tóm tắt ngắn
    lastModified: string; // ngày cập nhật cuối
}

interface BlogDataType {
    [key: string]: BlogPost;
}

const blogData: BlogDataType = {
    'p1': {
        id: 'p1',
        title: 'Chính sách mới về phát triển đô thị',
        content: `Chính phủ vừa ban hành chính sách mới về phát triển đô thị thông minh, bền vững. Theo đó, các thành phố sẽ được đầu tư mạnh mẽ vào hạ tầng công nghệ số, giao thông thông minh và năng lượng sạch.

        Các điểm chính của chính sách bao gồm:
        - Phát triển hệ thống giao thông công cộng hiện đại
        - Ứng dụng công nghệ IoT trong quản lý đô thị
        - Thúc đẩy sử dụng năng lượng tái tạo
        - Xây dựng hệ thống xử lý rác thải thông minh

        Dự kiến, chính sách này sẽ được triển khai từ năm 2024 và áp dụng thí điểm tại các thành phố lớn trước khi nhân rộng ra toàn quốc.`,
        createdAt: '2024-03-18T08:00:00Z',
        category: 'politics',
        status: 'published',
        author: {
            id: 'auth1',
            name: 'Nguyễn Văn A',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=auth1',
            role: 'Biên tập viên'
        },
        metadata: {
            readTime: 5,
            views: 1250,
            likes: 45,
            tags: ['đô thị thông minh', 'chính sách', 'phát triển bền vững'],
            comments: 23,
            shares: 15
        },
        thumbnail: 'https://picsum.photos/seed/p1/800/400',
        summary: 'Chính phủ ban hành chính sách mới về phát triển đô thị thông minh, tập trung vào công nghệ số và năng lượng sạch.',
        lastModified: '2024-03-18T08:00:00Z'
    },
    'e1': {
        id: 'e1',
        title: 'Thị trường chứng khoán khởi sắc',
        content: `VN-Index tăng mạnh trong phiên giao dịch hôm nay, vượt ngưỡng tâm lý quan trọng. Các cổ phiếu ngân hàng và bất động sản dẫn dắt thị trường với mức tăng ấn tượng.

        Các chuyên gia nhận định:
        - Dòng tiền đang quay trở lại thị trường
        - Nhà đầu tư nước ngoài gia tăng mua ròng
        - Triển vọng kinh tế vĩ mô tích cực
        - Kỳ vọng lãi suất tiếp tục giảm

        Tuy nhiên, các nhà đầu tư vẫn cần thận trọng và theo dõi sát diễn biến thị trường trong các phiên tới.`,
        createdAt: '2024-03-18T10:15:00Z',
        category: 'economics',
        status: 'published',
        author: {
            id: 'auth2',
            name: 'Trần Thị B',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=auth2',
            role: 'Chuyên gia phân tích'
        },
        metadata: {
            readTime: 4,
            views: 2100,
            likes: 67,
            tags: ['chứng khoán', 'VN-Index', 'đầu tư', 'tài chính'],
            comments: 45,
            shares: 28
        },
        thumbnail: 'https://picsum.photos/seed/e1/800/400',
        summary: 'VN-Index tăng mạnh vượt ngưỡng tâm lý, dẫn dắt bởi nhóm cổ phiếu ngân hàng và bất động sản.',
        lastModified: '2024-03-18T11:30:00Z'
    },
    'h1': {
        id: 'h1',
        title: 'Phương pháp mới trong điều trị ung thư',
        content: `Các nhà khoa học Việt Nam công bố phương pháp điều trị ung thư mới, kết hợp giữa liệu pháp miễn dịch và công nghệ nano. Nghiên cứu này được đánh giá cao trong cộng đồng y khoa quốc tế.

        Ưu điểm của phương pháp mới:
        - Giảm thiểu tác dụng phụ
        - Tăng hiệu quả điều trị
        - Chi phí điều trị hợp lý
        - Thời gian phục hồi nhanh

        Phương pháp này đang trong giai đoạn thử nghiệm lâm sàng và dự kiến sẽ được áp dụng rộng rãi trong vài năm tới.`,
        createdAt: '2024-03-18T07:45:00Z',
        category: 'health',
        status: 'published',
        author: {
            id: 'auth3',
            name: 'TS. Lê C',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=auth3',
            role: 'Nghiên cứu viên'
        },
        metadata: {
            readTime: 6,
            views: 3500,
            likes: 128,
            tags: ['y tế', 'ung thư', 'nghiên cứu', 'công nghệ nano'],
            comments: 67,
            shares: 89
        },
        thumbnail: 'https://picsum.photos/seed/h1/800/400',
        summary: 'Nghiên cứu đột phá về phương pháp điều trị ung thư mới kết hợp liệu pháp miễn dịch và công nghệ nano.',
        lastModified: '2024-03-18T09:15:00Z'
    }
};

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = params.id;

    if (id in blogData) {
        return NextResponse.json({ blog: blogData[id] });
    }

    return NextResponse.json(
        { error: 'Không tìm thấy bài viết' },
        { status: 404 }
    );
} 