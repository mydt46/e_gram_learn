// Lesson data extracted from data_test.js
const words = [
    {
        title: "The present simple tence",
        content: [
            {
                use: "Thường xuyên, lặp đi lặp lại hiện tại",
                practice: [
                    {
                        sentence_vi: "Hằng ngày tôi đến trường bằng xe buýt",
                        sentence_en: "I go to school by bus every day",
                    },
                    {
                        sentence_vi: "Cô ấy luôn uống sữa vào buổi sáng",
                        sentence_en: "she always has milk for breakfast",
                    }
                ]
            },
            {
                use: "Thói quen",
                practice: [
                    {
                        sentence_vi: "Chị gái tôi thường thức khuya và ngủ dậy muộn vào sáng hôm sau",
                        sentence_en: "My sister often sleeps late at night and gets up late in the next morning",
                    }
                ]
            },
            {
                use: "Chân lý, sự thật",
                practice: [
                    {
                        sentence_vi: "Trái Đất quay quanh Mặt Trời",
                        sentence_en: "The Earth moves around the Sun",
                    },
                    {
                        sentence_vi: "Mẹ của mẹ là bà",
                        sentence_en: "Mother's mother is grandmother",
                    }
                ]
            },
            {
                use: "thời gian biểu, lịch trình",
                practice: [
                    {
                        sentence_vi: "Chiếc máy bay cất cánh lúc 3 giờ chiều nay",
                        sentence_en: "The plane takes off at 3 p.m this afternoon",
                    },
                    {
                        sentence_vi: "Tàu khởi hành lúc 8 giờ sáng mai",
                        sentence_en: "The train leaves at 8 a.m tomorrow",
                    }
                ]
            },
            {
                use: "nghề nghiệp, sở thích",
                practice: [
                    {
                        sentence_vi: "Mẹ tôi là bác sĩ trong một bệnh viện lớn",
                        sentence_en: "My mother is a doctor in a big hospital",
                    },
                    {
                        sentence_vi: "Các anh trai tôi đều làm thợ sửa chữa.",
                        sentence_en: "My brothers work as mechanics.",
                    },
                    {
                        sentence_vi: "Tôi thích đi bộ dưới trời mưa vì nó cho tôi sự dễ chịu.",
                        sentence_en: "I love walking in the rain because it gives me a pleasure.",
                    },
                ]
            },{
                use: "nguồn gốc",
                practice: [
                    {
                        sentence_vi: "Tôi đến từ thành phố Thái Nguyên.",
                        sentence_en: "I come from Thai Nguyen city.",
                    }
                ]
            },
            {
                use: "Bình phẩm",
                practice: [
                    {
                        sentence_vi: "Cô ấy không những xinh đẹp mà còn thông minh nữa.",
                        sentence_en: "She is not only beautiful but also intelligent.",
                    }
                ]
            },
            {
                use: "=====================Bài tập========================",
                practice: [
                    {
                        sentence_vi: "Anh ấy đi học mỗi ngày.",
                        sentence_en: "He goes to school every day.",
                    },
                    {
                        sentence_vi: "Cô ấy đến từ Đức.",
                        sentence_en: "She comes from Germany.",
                    },
                    {
                        sentence_vi: "Bố mẹ tôi thường đi làm bằng ô tô.",
                        sentence_en: "My parents usually go to work by car.",
                    },
                    {
                        sentence_vi: "Chúng tôi xem TV mỗi tối.",
                        sentence_en: "We watch TV every night.",
                    },
                    {
                        sentence_vi: "Anh ấy đi bộ đi làm mỗi ngày.",
                        sentence_en: "He walks to work every day.",
                    },
                    {
                        sentence_vi: "Anh ấy ở Cà Mau.",
                        sentence_en: "He is in Ca Mau.",
                    },
                    {
                        sentence_vi: "Họ là học sinh.",
                        sentence_en: "They are students.",
                    },
                    {
                        sentence_vi: "Cô ấy giặt quần áo vào mỗi Chủ nhật.",
                        sentence_en: "She washes her clothes every Sunday.",
                    },
                    {
                        sentence_vi: "Cô ấy học tiếng Anh mỗi ngày.",
                        sentence_en: "She studies English every day.",
                    },
                    {
                        sentence_vi: "Anh ấy muốn trở thành một giáo viên.",
                        sentence_en: "He wants to become a teacher.",
                    },
                    {
                        sentence_vi: "Cô ấy thường đi bộ đến trường.",
                        sentence_en: "She usually walks to school.",
                    },
                    {
                        sentence_vi: "Mary thường thức dậy lúc mấy giờ mỗi sáng?",
                        sentence_en: "What time does Mary usually get up every morning?",
                    },
                    {
                        sentence_vi: "Cô ấy không giặt quần áo vào mỗi cuối tuần.",
                        sentence_en: "She doesn't wash her clothes every weekend.",
                    },
                    {
                        sentence_vi: "Họ có phải là giáo viên không?",
                        sentence_en: "Are they teachers?",
                    },
                    {
                        sentence_vi: "Trời thường không lạnh vào mùa hè.",
                        sentence_en: "It isn't often cold in summer.",
                    },
                ]
            },
        ],
        context: [
            {
                situation: "Minh làm việc tại một công ty phần mềm. Anh ấy thường thức dậy lúc 6 giờ 30 mỗi sáng. Sau khi thức dậy, anh ấy uống một cốc nước và tập thể dục khoảng 20 phút. Anh ấy không ăn sáng ở nhà vì thường mua đồ ăn trên đường đến công ty. Công việc của Minh bắt đầu lúc 8 giờ 30. Anh ấy làm việc với một nhóm gồm năm người và thường có cuộc họp vào sáng thứ Hai. Minh thích công việc của mình vì anh ấy được gặp và giải quyết nhiều vấn đề thú vị.",
                practice: [
                    {
                        sentence_vi: "Minh làm việc tại một công ty phần mềm",
                        sentence_en: "Minh works for a software company",
                    },
                    {
                        sentence_vi: "Anh ấy thường thức dậy lúc 6 giờ 30 mỗi sáng",
                        sentence_en: "He usually gets up at 6:30 every morning",
                    },
                    {
                        sentence_vi: "Sau khi thức dậy, anh ấy uống một cốc nước và tập thể dục khoảng 20 phút",
                        sentence_en: "After he gets up, he drinks a glass of water and exercises for about twenty minutes",
                    }
                ]
            },
        ],
    }
];
