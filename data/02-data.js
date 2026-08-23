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
          },
        ],
      },
      {
        use: "Thói quen",
        practice: [
          {
            sentence_vi:
              "Chị gái tôi thường thức khuya và ngủ dậy muộn vào sáng hôm sau",
            sentence_en:
              "My sister often sleeps late at night and gets up late in the next morning",
          },
        ],
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
          },
        ],
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
          },
        ],
      },
      {
        use: "nghề nghiệp",
        practice: [
          {
            sentence_vi: "Mẹ tôi là bác sĩ trong một bệnh viện lớn",
            sentence_en: "My mother is a doctor in a big hospital",
          },
          {
            sentence_vi: "Các anh trai tôi đều làm thợ sửa chữa.",
            sentence_en: "My brothers work as mechanics.",
          },
        ],
      },
      {
        use: "sở thích",
        practice: [
          {
            sentence_vi:
              "Tôi thích đi bộ dưới trời mưa vì nó cho tôi sự dễ chịu.",
            sentence_en:
              "I love walking in the rain because it gives me a pleasure.",
          },
        ],
      },
      {
        use: "nguồn gốc",
        practice: [
          {
            sentence_vi: "Tôi đến từ thành phố Thái Nguyên.",
            sentence_en: "I come from Thai Nguyen city.",
          },
        ],
      },
      {
        use: "Bình phẩm",
        practice: [
          {
            sentence_vi: "Cô ấy không những xinh đẹp mà còn thông minh nữa.",
            sentence_en: "She is not only beautiful but also intelligent.",
          },
        ],
      },
      {
        use: "Nhận thức, tri giác: to be, see,hear,smell, understand,know, like,love,want,hate, feel,think,realize,seem, remember,forget,... ",
        practice: [
          {
            sentence_vi: "Hiện tại tôi thấy mệt",
            sentence_en: "I am tired now",
          },
          {
            sentence_vi: "Bạn có hiểu bài không?",
            sentence_en: "Do you understand your lesson?",
          },
        ],
      },
    ],
    translate: [
      {
        use: "=====================Dịch câu========================",
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
        ],
      },
      {
        use: "Câu phủ định (-): S + do/does + not + V (nguyên dạng)",
        practice: [
          {
            sentence_vi: "Tôi không thích cà phê.",
            sentence_en: "I don't like coffee.",
          },
          {
            sentence_vi: "Tôi không đi học vào Chủ nhật.",
            sentence_en: "I don't go to school on Sundays.",
          },
          {
            sentence_vi: "Chúng tôi không xem TV vào buổi sáng.",
            sentence_en: "We don't watch TV in the morning.",
          },
          {
            sentence_vi: "Họ không sống ở Hà Nội.",
            sentence_en: "They don't live in Hanoi.",
          },
          {
            sentence_vi: "Bạn không cần chiếc máy tính này.",
            sentence_en: "You don't need this computer.",
          },
          {
            sentence_vi: "Bố mẹ tôi không làm việc vào cuối tuần.",
            sentence_en: "My parents don't work on weekends.",
          },
          {
            sentence_vi: "Tôi không chơi bóng đá sau giờ học.",
            sentence_en: "I don't play football after school.",
          },
          {
            sentence_vi: "Chúng tôi không ăn tối ở nhà hàng.",
            sentence_en: "We don't have dinner at a restaurant.",
          },
          {
            sentence_vi: "Họ không học tiếng Anh vào buổi tối.",
            sentence_en: "They don't study English in the evening.",
          },
          {
            sentence_vi: "Tôi không thức dậy sớm vào Chủ nhật.",
            sentence_en: "I don't get up early on Sundays.",
          },
          {
            sentence_vi: "Anh ấy không thích đồ ăn cay.",
            sentence_en: "He doesn't like spicy food.",
          },
          {
            sentence_vi: "Cô ấy không đi làm bằng xe buýt.",
            sentence_en: "She doesn't go to work by bus.",
          },
          {
            sentence_vi: "Nam không chơi bóng đá mỗi ngày.",
            sentence_en: "Nam doesn't play football every day.",
          },
          {
            sentence_vi: "Lan không xem TV vào buổi tối.",
            sentence_en: "Lan doesn't watch TV in the evening.",
          },
          {
            sentence_vi: "Anh ấy không uống cà phê vào buổi sáng.",
            sentence_en: "He doesn't drink coffee in the morning.",
          },
          {
            sentence_vi: "Cô ấy không học tiếng Nhật.",
            sentence_en: "She doesn't study Japanese.",
          },
          {
            sentence_vi: "Mẹ tôi không làm việc vào Chủ nhật.",
            sentence_en: "My mother doesn't work on Sundays.",
          },
          {
            sentence_vi: "Em trai tôi không đi bộ đến trường.",
            sentence_en: "My brother doesn't walk to school.",
          },
          {
            sentence_vi: "John không sống ở Việt Nam.",
            sentence_en: "John doesn't live in Vietnam.",
          },
          {
            sentence_vi: "Con mèo không ngủ trong phòng của tôi.",
            sentence_en: "The cat doesn't sleep in my room.",
          },
        ],
      },
      {
        use: "Câu nghi vấn (?): Do/ does + S + V (nguyên dạng)?",
        practice: [
          {
            sentence_vi: "Bạn có thích cà phê không?",
            sentence_en: "Do you like coffee?",
          },
          {
            sentence_vi: "Bạn có đi học mỗi ngày không?",
            sentence_en: "Do you go to school every day?",
          },
          {
            sentence_vi: "Bạn có chơi bóng đá vào cuối tuần không?",
            sentence_en: "Do you play football on weekends?",
          },
          {
            sentence_vi: "Họ có sống ở Hà Nội không?",
            sentence_en: "Do they live in Hanoi?",
          },
          {
            sentence_vi: "Bố mẹ bạn có làm việc vào Chủ nhật không?",
            sentence_en: "Do your parents work on Sundays?",
          },
          {
            sentence_vi: "Bạn có xem TV vào buổi tối không?",
            sentence_en: "Do you watch TV in the evening?",
          },
          {
            sentence_vi: "Họ có học tiếng Anh mỗi ngày không?",
            sentence_en: "Do they study English every day?",
          },
          {
            sentence_vi: "Bạn có thường đi làm bằng xe buýt không?",
            sentence_en: "Do you usually go to work by bus?",
          },
          {
            sentence_vi: "Bạn có ăn sáng ở nhà không?",
            sentence_en: "Do you have breakfast at home?",
          },
          {
            sentence_vi: "Họ có chơi tennis sau giờ học không?",
            sentence_en: "Do they play tennis after school?",
          },
          {
            sentence_vi: "Anh ấy có thích đồ ăn cay không?",
            sentence_en: "Does he like spicy food?",
          },
          {
            sentence_vi: "Cô ấy có làm việc ở ngân hàng không?",
            sentence_en: "Does she work at a bank?",
          },
          {
            sentence_vi: "Nam có đi học bằng xe buýt không?",
            sentence_en: "Does Nam go to school by bus?",
          },
          {
            sentence_vi: "Lan có học tiếng Anh mỗi ngày không?",
            sentence_en: "Does Lan study English every day?",
          },
          {
            sentence_vi: "Anh ấy có uống cà phê vào buổi sáng không?",
            sentence_en: "Does he drink coffee in the morning?",
          },
          {
            sentence_vi: "Cô ấy có xem TV vào buổi tối không?",
            sentence_en: "Does she watch TV in the evening?",
          },
          {
            sentence_vi: "John có sống ở Việt Nam không?",
            sentence_en: "Does John live in Vietnam?",
          },
          {
            sentence_vi: "Mẹ bạn có nấu ăn mỗi ngày không?",
            sentence_en: "Does your mother cook every day?",
          },
          {
            sentence_vi: "Em trai bạn có đi bộ đến trường không?",
            sentence_en: "Does your brother walk to school?",
          },
          {
            sentence_vi: "Con mèo có ngủ trong phòng của bạn không?",
            sentence_en: "Does the cat sleep in your room?",
          },
          {
            sentence_vi: "Bạn sống ở đâu?",
            sentence_en: "Where do you live?",
          },
          {
            sentence_vi: "Bạn đi làm lúc mấy giờ?",
            sentence_en: "What time do you go to work?",
          },
          {
            sentence_vi: "Bạn thường làm gì vào cuối tuần?",
            sentence_en: "What do you usually do on weekends?",
          },
          {
            sentence_vi: "Họ học tiếng Anh ở đâu?",
            sentence_en: "Where do they study English?",
          },
          {
            sentence_vi: "Tại sao bạn học tiếng Anh?",
            sentence_en: "Why do you study English?",
          },
          {
            sentence_vi: "Anh ấy sống ở đâu?",
            sentence_en: "Where does he live?",
          },
          {
            sentence_vi: "Cô ấy đi làm lúc mấy giờ?",
            sentence_en: "What time does she go to work?",
          },
          {
            sentence_vi: "Nam thường làm gì sau giờ học?",
            sentence_en: "What does Nam usually do after school?",
          },
          {
            sentence_vi: "Cô ấy đi học bằng cách nào?",
            sentence_en: "How does she go to school?",
          },
          {
            sentence_vi: "Tại sao anh ấy thức dậy sớm mỗi ngày?",
            sentence_en: "Why does he get up early every day?",
          },
        ],
      },
      {
        use: "----------------------Luyện thêm----------------------",
        practice: [
          {
            sentence_vi: "Bạn gội đầu bao lâu một lần?",
            sentence_en: "How often do you wash your hair?",
          },
          {
            sentence_vi: "Anh ấy thường về nhà vào khoảng sáu giờ.(get home)",
            sentence_en: "He usually gets home about six o'clock.",
          },
          {
            sentence_vi:
              "Anh ấy thường chỉ ăn một chiếc bánh sandwich vào bữa trưa.(have)",
            sentence_en: "He usually just has a sandwich for lunch.",
          },
          {
            sentence_vi:
              "Không bao giờ là quá muộn để bắt đầu một chế độ ăn uống lành mạnh.(start eating)",
            sentence_en: "It is never too late to start eating a healthy diet.",
          },
          {
            sentence_vi: "Chị gái tôi là y tá tại một bệnh viện địa phương.",
            sentence_en: "My sister is a nurse in a local hospital.",
          },
          {
            sentence_vi: "Bạn đến từ đâu? Tôi đến từ Nhật Bản.",
            sentence_en: "Where do you come from? I come from Japan.",
          },
          {
            sentence_vi:
              "Anh ấy đẹp trai, thông minh, dí dỏm và nhìn chung là tâm điểm của sự chú ý.(brilliant/witty)",
            sentence_en:
              "He is handsome, brilliant, witty, and generally the center of attention.",
          },
          {
            sentence_vi: "Bạn có thích cá không?",
            sentence_en: "Do you like fish?",
          },
          {
            sentence_vi:
              "Cô ấy làm công việc dọn dẹp tại bệnh viện.(the hospital)",
            sentence_en: "She works as a cleaner at the hospital.",
          },
          {
            sentence_vi:
              "Anh ấy thường ăn tối và xem TV lúc 7 giờ tối mỗi ngày.",
            sentence_en:
              "He often has dinner and watches TV at 7 pm every day.",
          },
          {
            sentence_vi:
              "Cô ấy luôn mua tất cả các tạp chí thời trang mới nhất.",
            sentence_en: "She always buys all the latest fashion magazines.",
          },
          {
            sentence_vi:
              "Mẹ tôi luôn khóc mỗi khi bà ấy xem những câu chuyện tình yêu.(whenever)",
            sentence_en:
              "My mother always cries whenever she sees love stories.",
          },
          {
            sentence_vi:
              "Bạn không cô đơn trên thế giới này bởi vì tôi luôn ở bên bạn.",
            sentence_en:
              "You are not lonely in the world because I always stand by you.",
          },
          {
            sentence_vi: "Bạn muốn làm gì sau khi rời trường?",
            sentence_en: "What do you want to do after leaving school?",
          },
          {
            sentence_vi:
              "Dạo này chúng tôi không thường xuyên đi xem phim.(cinema/very often)",
            sentence_en: "We don't go to the cinema very often these days.",
          },
        ],
      },
    ],
    context: [
      {
        situation:
          "Minh làm việc tại một công ty phần mềm. Anh ấy thường thức dậy lúc 6 giờ 30 mỗi sáng. Sau khi thức dậy, anh ấy uống một cốc nước và tập thể dục khoảng 20 phút. Anh ấy không ăn sáng ở nhà vì thường mua đồ ăn trên đường đến công ty. Công việc của Minh bắt đầu lúc 8 giờ 30. Anh ấy làm việc với một nhóm gồm năm người và thường có cuộc họp vào sáng thứ Hai. Minh thích công việc của mình vì anh ấy được gặp và giải quyết nhiều vấn đề thú vị.",
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
            sentence_vi:
              "Sau khi thức dậy, anh ấy uống một cốc nước và tập thể dục khoảng 20 phút",
            sentence_en:
              "After he gets up, he drinks a glass of water and exercises for about twenty minutes",
          },
        ],
      },
      {
        situation:
          "Lan là một sinh viên đại học và sống cùng gia đình ở Hà Nội. Cô ấy thường thức dậy lúc 6 giờ mỗi sáng và ăn sáng cùng bố mẹ. Cô ấy đi học bằng xe buýt vì trường khá xa nhà. Lan học tiếng Anh mỗi ngày và thường đọc sách tiếng Anh vào buổi tối. Cô ấy không xem TV vào các ngày trong tuần vì cô ấy có nhiều bài tập. Vào cuối tuần, cô ấy thường gặp bạn bè và uống cà phê cùng họ.",
        practice: [
          {
            sentence_vi:
              "Lan là một sinh viên đại học và sống cùng gia đình ở Hà Nội.",
            sentence_en:
              "Lan is a university student and lives with her family in Hanoi.",
          },
          {
            sentence_vi:
              "Cô ấy thường thức dậy lúc 6 giờ mỗi sáng và ăn sáng cùng bố mẹ.",
            sentence_en:
              "She usually gets up at 6 a.m. every morning and has breakfast with her parents.",
          },
          {
            sentence_vi: "Cô ấy đi học bằng xe buýt vì trường khá xa nhà.",
            sentence_en:
              "She goes to school by bus because her school is quite far from home.",
          },
          {
            sentence_vi:
              "Lan học tiếng Anh mỗi ngày và thường đọc sách tiếng Anh vào buổi tối.",
            sentence_en:
              "Lan studies English every day and often reads English books in the evening.",
          },
          {
            sentence_vi:
              "Cô ấy không xem TV vào các ngày trong tuần vì cô ấy có nhiều bài tập.",
            sentence_en:
              "She doesn't watch TV on weekdays because she has a lot of homework.",
          },
          {
            sentence_vi:
              "Vào cuối tuần, cô ấy thường gặp bạn bè và uống cà phê cùng họ.",
            sentence_en:
              "On weekends, she usually meets her friends and drinks coffee with them.",
          },
        ],
      },
    ],
  },
];
