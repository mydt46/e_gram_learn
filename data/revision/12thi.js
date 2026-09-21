// Lesson data extracted from data_test.js
const words = [
  {
    title: "Exercise 1",
    content: [
      {
        use: "Ôn tập",
        practice: [
          {
            sentence_vi: "???",
            sentence_en: "...",
          },
        ],
      },
    ],
    translate: [
      {
        use: "=====================Exercise 1:========================",
        practice: [
          {
            sentence_vi:
              "Bạn đã làm bài kiểm tra này cách đây một giờ phải không?",
            sentence_en: "Did you do this test an hour ago?",
          },
          {
            sentence_vi: "Đây là lần thứ sáu tôi đọc cuốn tiểu thuyết này.",
            sentence_en: "It's the sixth time I have read this novel.",
          },
          {
            sentence_vi: "Thomas đã học tiếng Tây Ban Nha từ năm 2005.",
            sentence_en: "Thomas has learnt Spanish since 2005.",
          },
          {
            sentence_vi: "Paul bắt đầu học tiếng Pháp vào năm 2005.",
            sentence_en: "Paul began to learn French in 2005.",
          },
          {
            sentence_vi: "Họ đã đến thăm Hội An nhiều lần.",
            sentence_en: "They have visited Hoi An several times.",
          },
          {
            sentence_vi: "Mẹ tôi chưa bao giờ có cơ hội đến thăm Huế.",
            sentence_en: "My mother has never had a chance to visit Hue.",
          },
          {
            sentence_vi:
              "Vanessa đã trở thành một ngôi sao nhạc pop nổi tiếng kể từ khi cô ấy 16 tuổi.",
            sentence_en:
              "Vanessa has become a famous pop star since she was 16.",
          },
          {
            sentence_vi: "Bạn đã từng đến Hà Nội trước đây chưa?",
            sentence_en: "Have you ever been in HN before?",
          },
          {
            sentence_vi:
              "Thành phố của chúng tôi đã thay đổi rất nhiều cho đến thời điểm này.",
            sentence_en: "Our city has changed a lot so far.",
          },
          {
            sentence_vi:
              "Bạn đã sống ở Huế vào mùa hè năm ngoái trong bao lâu?",
            sentence_en: "How long did you live in Hue last summer?",
          },
          {
            sentence_vi: "Gần đây họ đã xây dựng một cây cầu mới từ MT đến BT.",
            sentence_en: "They have built a new bridge from MT to BT recently.",
          },
          {
            sentence_vi: "Đây là lần thứ ba tôi mắc phải sai lầm này.",
            sentence_en: "It's the third time I have made this mistake.",
          },
          {
            sentence_vi: "Bố bạn đã cài đặt máy tính cho bạn chưa?",
            sentence_en: "Has your father installed your PC yet?",
          },
          {
            sentence_vi:
              "Thầy Smith đã dạy ở ngôi trường này được bao lâu rồi?",
            sentence_en: "How long has Mr. Smith taught in this school?",
          },
          {
            sentence_vi:
              "Họ vừa mới xây dựng một số phòng học mới trong trường của chúng tôi.",
            sentence_en:
              "They have just built some new classrooms in our school.",
          },
          {
            sentence_vi: "Tôi hứa tôi sẽ giúp bạn làm bài tập về nhà.",
            sentence_en: "I promise I will help you with your homework.",
          },
          {
            sentence_vi: "Nhìn kìa! Thomas đang dẫn em gái đến lớp.",
            sentence_en: "Look! Thomas is bringing his little sister to class.",
          },
          {
            sentence_vi: "Chị gái tôi thường nghe nhạc pop.",
            sentence_en: "My older sister often listens to pop music.",
          },
          {
            sentence_vi:
              "Giáo viên của chúng tôi cho chúng tôi làm bài kiểm tra hàng tháng.",
            sentence_en: "Our teacher gives us a test every month.",
          },
          {
            sentence_vi: "Tôi uống cà phê vào bữa sáng mỗi ngày.",
            sentence_en: "I have coffee for breakfast every day.",
          },
          {
            sentence_vi:
              "Anh trai tôi hiện đang làm việc tại một cửa hàng giày.",
            sentence_en: "My brother is working in a shoe store now.",
          },
          {
            sentence_vi: "Cô ấy đi học mỗi ngày.",
            sentence_en: "She goes to school every day.",
          },
          {
            sentence_vi: "Lúc này chúng tôi đang làm bài tập này.",
            sentence_en: "We are doing this exercise at the moment.",
          },
          {
            sentence_vi:
              "Trời thường mưa nhiều vào mùa hè. Bây giờ trời đang mưa.",
            sentence_en: "It rains much in the summer. It is raining now.",
          },
          {
            sentence_vi: "Hãy giữ trật tự. Đứa bé đang ngủ.",
            sentence_en: "Be quiet. The baby is sleeping.",
          },
          {
            sentence_vi:
              "Bác Hồ đã dành phần lớn cuộc đời mình vì nền độc lập và tự do của dân tộc ta.",
            sentence_en:
              "Uncle Ho spent most of his life for our national Independence and freedom.",
          },
          {
            sentence_vi:
              '"Ngày mai hãy quay lại. Tôi sẽ giải thích tất cả cho bạn."',
            sentence_en: '"Come back tomorrow. I will explain it all to you."',
          },
          {
            sentence_vi: "Tàu đã rời đi trước khi chúng tôi đến ga.",
            sentence_en:
              "The train had already left when we got to the station.",
          },
          {
            sentence_vi:
              "Bên nhà hàng xóm rất ồn ào. Hàng xóm của chúng tôi đang tổ chức tiệc.",
            sentence_en:
              "It was noisy next door. Our neighbors were having a party.",
          },
          {
            sentence_vi:
              '- Nga: "Bạn đang làm gì vào lúc 7 giờ tối hôm qua?" - Hương: "Tôi đang ủi quần áo của mình."',
            sentence_en:
              '- Nga: "What were you doing at 7 o\'clock yesterday evening?" - Huong: "I was ironing my clothes."',
          },
          {
            sentence_vi:
              "Tôi đang đi dạo dọc theo con phố thì bỗng nhiên nghe thấy tiếng bước chân phía sau.",
            sentence_en:
              "I was walking along the street when I suddenly heard footsteps behind me.",
          },
          {
            sentence_vi: "Trái Đất quay quanh Mặt Trời.",
            sentence_en: "The earth goes round the Sun.",
          },
          {
            sentence_vi: "Lần cuối tôi gặp Jane, cô ấy đang cố gắng tìm việc.",
            sentence_en: "When I last saw Jane, she was trying to find a job.",
          },
          {
            sentence_vi: "Tim đã rất mệt. Anh ấy đã học tập chăm chỉ cả ngày.",
            sentence_en: "Tim was tired. He had been studying hard all day.",
          },
          {
            sentence_vi: "Thế vận hội Olympic diễn ra bốn năm một lần.",
            sentence_en: "The Olympic Games take place every four years.",
          },
          {
            sentence_vi: "Khi còn trẻ, tôi đã từng muốn trở thành một ca sĩ.",
            sentence_en: "When I was young, I wanted to be a singer.",
          },
          {
            sentence_vi: "Tôi sẽ rời khỏi đây vào cuối tháng.",
            sentence_en: "I will leave here at the end of the month.",
          },
          {
            sentence_vi: "Tôi hy vọng mọi chuyện sẽ ổn.",
            sentence_en: "I hope everything will be fine.",
          },
          {
            sentence_vi:
              "Hôm qua tôi đi ngang qua nhà Peter nhưng cửa trước đã đóng. Anh ấy đã đi ra ngoài rồi.",
            sentence_en:
              "Yesterday I passed by Peter's house, but the front door was closed. He had gone out.",
          },
          {
            sentence_vi: "Ông Green, ông đã ở đâu lúc 9 giờ tối qua?",
            sentence_en: "Where were you at 9.00 last night, Mr Green?",
          },
          {
            sentence_vi:
              "Tôi đang bật máy rửa bát thì nghe thấy tiếng súng nổ.",
            sentence_en:
              "I was turning on the dishwasher on when I heard the shot.",
          },
          {
            sentence_vi:
              "Tôi sẽ đi nghỉ vào thứ Bảy. Thời điểm này vào tuần tới, tôi sẽ đang nằm trên bãi biển.",
            sentence_en:
              "I'm going on holiday on Saturday. This time next week I will be lying on a beach.",
          },
          {
            sentence_vi: "Ngày mai tôi dự định sẽ đi thăm ông bà của tôi.",
            sentence_en: "Tomorrow I am going to visit my grandparents.",
          },
          {
            sentence_vi:
              "Khi đứa con đầu lòng của họ chào đời, họ đã kết hôn được ba năm.",
            sentence_en:
              "When their first child was born, they had been married for three years.",
          },
          {
            sentence_vi: "Cô ấy sẽ rất tức giận khi biết điều này.",
            sentence_en: "She will be very angry when she knows this.",
          },
          {
            sentence_vi:
              "Chúng tôi đã có một bữa tiệc vào thứ Bảy tuần trước. Thật tuyệt vời - chúng tôi đã mời rất nhiều người.",
            sentence_en:
              "We had a party last Saturday. It was great - we invited lots of people.",
          },
          {
            sentence_vi:
              "Tôi đã rất buồn khi bán chiếc xe của mình. Tôi đã chạy nó suốt một thời gian rất dài.",
            sentence_en:
              "I was sad when I sold my car. I had been running it for a very long time.",
          },
          {
            sentence_vi:
              "Chúng tôi đã vô cùng mệt mỏi vào cuối cuộc hành trình. Chúng tôi đã di chuyển liên tục hơn 24 giờ.",
            sentence_en:
              "We were extremely tired at the end of the journey. We had been traveling for more than 24 hours.",
          },
          {
            sentence_vi:
              "Ngôi nhà rất yên tĩnh khi tôi về đến nhà. Mọi người đã đi ngủ hết rồi.",
            sentence_en:
              "The house was very quiet when I got home. Everybody had gone straight to bed.",
          },
          {
            sentence_vi:
              "Người đàn ông ngồi cạnh tôi trên máy bay đã rất hồi hộp vì trước đó ông ấy chưa từng đi máy bay bao giờ.",
            sentence_en:
              "The man sitting next to me on the plane was nervous because he hadn't flown before.",
          },
        ],
      },
      {
        use: "=====================Exercise 2:========================",
        practice: [
          {
            sentence_vi:
              "Tôi sắp nghỉ hưu rồi. Tính đến ngày đầu tiên của tháng Bảy tới, tôi sẽ làm việc ở đây được 25 năm.",
            sentence_en:
              "I'm going to retire soon. By the first of next July I will have been working here for 25 years.",
          },
          {
            sentence_vi:
              "Đừng lo. Chúng tôi sẽ hoàn thành bản báo cáo trước 11 giờ.",
            sentence_en: "Don't worry. We will have finished the report by 11.",
          },
          {
            sentence_vi:
              "Alice trông thon thả hơn nhiều vì cô ấy đã ăn kiêng suốt vài tháng qua.",
            sentence_en:
              "Alice looked much slimmer because she had been dieting for a few months.",
          },
          {
            sentence_vi:
              "Bởi vì bọn trẻ đã mong chờ xem phim Harry Potter từ rất lâu, tôi đã đưa chúng đi mặc dù điều đó thực sự bất tiện cho tôi.",
            sentence_en:
              "Because the children had been looking forward to seeing Harry Potter for so long, I took them even though it was really inconvenient for me.",
          },
          {
            sentence_vi:
              "Khi đến sân bay, chúng tôi nhận ra rằng mình đã để quên hộ chiếu ở văn phòng.",
            sentence_en:
              "When we arrived at the airport we noticed that we had left our passports at the office.",
          },
          {
            sentence_vi:
              "Anh ấy đã gõ máy hơn ba tiếng đồng hồ khi anh ấy hoàn thành xong bản báo cáo.",
            sentence_en:
              "He had been typing for over three hours when he finished the report.",
          },
          {
            sentence_vi:
              "Ba ngày trước bạn trai của cô ấy đã rời đi và kể từ đó cô ấy cứ khóc liên tục.",
            sentence_en:
              "Three days ago her boyfriend left her and she has been crying continually ever since.",
          },
          {
            sentence_vi:
              "Đây là vị khách đầu tiên chúng tôi bán được món đồ gì đó trong hôm nay.",
            sentence_en:
              "This is the first customer we have sold something today.",
          },
          {
            sentence_vi: "Chúng tôi đã không gặp nhau kể từ khi ra trường.",
            sentence_en: "We haven't met since we left school.",
          },
          {
            sentence_vi:
              "Vào thời điểm này vào tuần tới họ sẽ đang ngồi trên tàu trên đường tới Paris.",
            sentence_en:
              "At this time next week they will be sitting in the train on their way to Paris.",
          },
          {
            sentence_vi:
              "Chiếc xe sẽ sẵn sàng cho anh ấy khi anh ấy đến vào ngày mai.",
            sentence_en:
              "The car will be ready for him when he comes tomorrow.",
          },
          {
            sentence_vi:
              "Bạn của tôi đã đến viện bảo tàng vào cuối tuần trước.",
            sentence_en: "My friend went to the museum last weekend.",
          },
          {
            sentence_vi: "Thu và Lan đã là bạn thân nhiều năm nay.",
            sentence_en: "Thu and Lan have been close friends for years.",
          },
          {
            sentence_vi:
              "Những người bạn Singapore của chúng tôi đã đến thăm trường chúng tôi vào năm ngoái.",
            sentence_en:
              "Our Singaporean friends came to visit our school last year.",
          },
          {
            sentence_vi: "Chúng tôi đã đến thăm Malaysia vào mùa hè năm ngoái.",
            sentence_en: "We visited Malaysia last summer.",
          },
          {
            sentence_vi:
              "Bọn trẻ đã không gặp bố mẹ chúng trong một khoảng thời gian dài.",
            sentence_en:
              "The children haven't seen their parents for a long time.",
          },
          {
            sentence_vi:
              "Tôi và Kenny đã là bạn qua thư kể từ khi tôi đến thăm Singapore.",
            sentence_en:
              "I and Kenny have been pen pal friends since I visited Singapore.",
          },
          {
            sentence_vi: "Bọn trẻ chưa từng xem chương trình đó trước đây.",
            sentence_en: "The kids haven't seen that show before.",
          },
          {
            sentence_vi:
              '"Bạn đã đợi tôi bao lâu rồi?" - "Được một tiếng rồi."',
            sentence_en: '"How long have you waited for me?" - "For an hour."',
          },
          {
            sentence_vi: "Họ sẽ gặp bạn của họ tại sân bay vào ngày mai.",
            sentence_en: "They will see their friend at the airport tomorrow.",
          },
          {
            sentence_vi:
              "Tôi đã dạy tiếng Anh ở đây kể từ khi tốt nghiệp đại học.",
            sentence_en:
              "I have taught English here since I graduated from university.",
          },
          {
            sentence_vi:
              "Cho đến nay, chúng tôi đã được giáo viên giao cho làm 5 bài kiểm tra.",
            sentence_en:
              "Up to now, we have been given 5 tests by our teacher.",
          },
          {
            sentence_vi: "Khi em trai tôi còn nhỏ, nó thường hay khóc.",
            sentence_en: "When my younger brother was young, he usually cried.",
          },
          {
            sentence_vi: "David sinh ra ở London.",
            sentence_en: "David was born in London.",
          },
          {
            sentence_vi: "Làm ơn trật tự! Tôi đang làm việc.",
            sentence_en: "Please be quiet! I am working.",
          },
          {
            sentence_vi: "Mary đến từ London.",
            sentence_en: "Mary comes from London.",
          },
          {
            sentence_vi: "Tôi thức dậy vào lúc năm giờ ba mươi sáng.",
            sentence_en: "I get up at five thirty in the morning.",
          },
          {
            sentence_vi:
              "Khi tôi để lại lời nhắn cho anh ấy, anh ấy đã gọi lại cho tôi ngay lập tức.",
            sentence_en: "When I left him a message, he phoned me immediately.",
          },
          {
            sentence_vi: "David sinh ra sau khi cha anh ấy qua đời.",
            sentence_en: "David was born after his father had died.",
          },
          {
            sentence_vi:
              "Khi tôi còn là một đứa trẻ, tôi đã muốn trở thành bác sĩ.",
            sentence_en: "When I was a child, I wanted to be a doctor.",
          },
          {
            sentence_vi: "Tôi thường gặp bạn bè và trò chuyện để thư giãn.",
            sentence_en: "I often meet my friends and talk to relax.",
          },
          {
            sentence_vi:
              "Tôi đang chuẩn bị hỗ trợ bất cứ điều gì anh ấy nói vào ngày mai.",
            sentence_en: "I'm preparing to support anything he says tomorrow.",
          },
          {
            sentence_vi: "Bố tôi đã nghe đài radio tối hôm qua.",
            sentence_en: "My father listened to the radio last night.",
          },
          {
            sentence_vi: "Mẹ tôi đã về nhà cách đây 3 ngày.",
            sentence_en: "My mother arrived home 3 days ago.",
          },
          {
            sentence_vi: "Học sinh đã không có mặt ở lớp ngày hôm qua.",
            sentence_en: "The students weren't in class yesterday.",
          },
          {
            sentence_vi:
              "Cô ấy đã ở nhà và chẳng làm gì vào thứ Hai tuần trước.",
            sentence_en: "She stayed at home and did nothing last Monday.",
          },
          {
            sentence_vi: "Bạn có xem trận bóng đá trên tivi tối qua không?",
            sentence_en: "Did you watch a soccer match on TV last night?",
          },
          {
            sentence_vi: "Cẩn thận đấy! Con chó đang sủa kìa.",
            sentence_en: "Be careful! The dog is barking.",
          },
          {
            sentence_vi: "Bạn của tôi sẽ kết hôn vào tháng Tám năm nay.",
            sentence_en: "My friend will get married in August this year.",
          },
          {
            sentence_vi: '"Mẹ bạn làm nghề gì?" - "Bà ấy là giáo viên."',
            sentence_en: '"What does your mother do?" - "She is a teacher."',
          },
          {
            sentence_vi: "Ba thích xem tivi mỗi tối.",
            sentence_en: "Ba likes watching TV every night.",
          },
          {
            sentence_vi: "Thời tiết đang ngày càng trở nên lạnh hơn.",
            sentence_en: "The weather is getting colder and colder.",
          },
          {
            sentence_vi: "Tối qua, tôi về đến nhà lúc mười hai giờ rưỡi.",
            sentence_en: "Last night, I arrived home at half past twelve.",
          },
          {
            sentence_vi: "Họ từng sống ở đây khi tôi còn nhỏ.",
            sentence_en: "They used to live here when I was a child.",
          },
          {
            sentence_vi: "Họ sẽ xây nhà vào năm tới.",
            sentence_en: "They will build house the coming year.",
          },
          {
            sentence_vi: "Cô ấy làm một chiếc bánh vào mỗi Chủ nhật.",
            sentence_en: "She makes a cake every Sunday.",
          },
          {
            sentence_vi: "Cô ấy đã mua một ngôi nhà mới vào tuần trước.",
            sentence_en: "She bought a new house last week.",
          },
          {
            sentence_vi: "Hôm qua các cậu bé đã viết vài lá thư.",
            sentence_en: "The boys wrote some letters yesterday.",
          },
          {
            sentence_vi:
              "Hôm qua trên tivi người ta thông báo hôm nay có mưa rào lớn, nhưng tôi vẫn chưa thấy một giọt nước nào cả.",
            sentence_en:
              "Yesterday on TV they announced a heavy shower for today, but I haven't seen even a single drop yet.",
          },
          {
            sentence_vi:
              "Cô ấy vừa mới mở bức thư vài khoảnh khắc trước khi cuộc gọi của tôi kết nối tới.",
            sentence_en:
              "She had just opened the letter a few moments before my call came through.",
          },
          {
            sentence_vi:
              "Ngay khi các chàng trai bước vào hội trường, họ bắt đầu nói về sách và các nhà văn.",
            sentence_en:
              "As soon as the boys entered the hall they began to speak about books and writers.",
          },
          {
            sentence_vi:
              "Trong khi chúng tôi đang ăn tối ở một nhà hàng thì có ai đó đã đến nhà và để lại lời nhắn này.",
            sentence_en:
              "While we were having dinner at a restaurant someone came to the house and left this note.",
          },
          {
            sentence_vi:
              "Trước cuối năm nay chúng tôi sẽ mua một ngôi nhà mới.",
            sentence_en:
              "By the end of this year we will have bought a new house.",
          },
          {
            sentence_vi:
              '"Bạn lúc nào cũng phạm lỗi, bạn cần phải đọc hướng dẫn cẩn thận hơn."',
            sentence_en:
              '"You are always making mistakes, you need to read the instructions more carefully."',
          },
          {
            sentence_vi:
              "Thầy Edwards đã dạy môn lịch sử suốt 35 năm và sắp nghỉ hưu rồi.",
            sentence_en:
              "Mr. Edwards has been teaching history for 35 years, and is retiring soon.",
          },
          {
            sentence_vi:
              "Tôi mệt rồi. Tôi đã dọn dẹp nhà cửa từ lúc 9 giờ sáng nay.",
            sentence_en:
              "I'm tired. I have been cleaning the house since 9 this morning.",
          },
          {
            sentence_vi:
              "Tôi không thể tin rằng bạn đã hoàn thành cả ba bài tập này rồi. Bạn chỉ vừa mới bắt đầu cách đây năm phút thôi mà.",
            sentence_en:
              "I can't believe that you have finished all the three exercises. You just started five minutes ago.",
          },
          {
            sentence_vi: "Anh ấy châm một điếu thuốc rồi bước lại gần cửa sổ.",
            sentence_en: "He lighted a cigarette and walked to the window.",
          },
        ],
      },
    ],
    context: [
      {
        situation: "Test",
        practice: [
          {
            sentence_vi: "test",
            sentence_en: "test",
          },
        ],
      },
    ],
  },
];
