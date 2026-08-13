// Lesson data extracted from data_test.js
const words = [
  {
    title: "Exercise 1",
    content: [
      {
        use: "Thường xuyên, lặp đi lặp lại hiện tại",
        practice: [
          {
            sentence_vi: "Hằng ngày tôi đến trường bằng xe buýt",
            sentence_en: "I go to school by bus every day",
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
              "Quần áo của tôi không ở trong phòng. Họ vừa mới mang chúng đi.",
            sentence_en:
              "My clothes are not in the room. They have just taken them away.",
          },
          {
            sentence_vi: "Đây là nơi đẹp nhất mà tôi từng đến thăm.",
            sentence_en:
              "This is the most beautiful place I have ever visited.",
          },
          {
            sentence_vi:
              "Chúng tôi rất mệt. Chúng tôi đã đi bộ được ba tiếng rồi.",
            sentence_en:
              "We are very tired. We have been walking for three hours.",
          },
          {
            sentence_vi: "Tôi đã xem bộ phim đó vài lần vì tôi thích nó.",
            sentence_en:
              "I have seen that film several times because I like it.",
          },
          {
            sentence_vi:
              "Cho đến bây giờ, giáo viên đã cho lớp chúng tôi 5 bài kiểm tra.",
            sentence_en: "Up to now, the teacher has given our class 5 tests.",
          },
          {
            sentence_vi: "Làm ơn im lặng! Tôi đang làm việc.",
            sentence_en: "Please be quiet! I am working.",
          },
          {
            sentence_vi: "Mary đến từ London.",
            sentence_en: "Mary comes from London.",
          },
          {
            sentence_vi: "Đôi khi tôi thức dậy trước khi mặt trời mọc.",
            sentence_en: "Sometimes I get up before the sun rises.",
          },
          {
            sentence_vi: "Cô ấy đã yêu cầu tôi kể về anh ấy vài lần.",
            sentence_en: "She has asked me to tell about him several times.",
          },
          {
            sentence_vi: "Ông Jackson đã sơn ngôi nhà của mình từ tháng trước.",
            sentence_en:
              "Mr Jackson has been painting his house since last month.",
          },
          {
            sentence_vi: "Bạn đã đợi tôi bao lâu rồi? - Chỉ vài phút thôi.",
            sentence_en:
              "How long have you been waiting for me? - Just a few minutes.",
          },
          {
            sentence_vi: "Anh ấy thường nói chuyện khi ăn cùng khách.",
            sentence_en: "He often talks when he eats with the guests.",
          },
          {
            sentence_vi: "Tom sẽ không đến đây vào ngày mai.",
            sentence_en: "Tom will not come here tomorrow.",
          },
          {
            sentence_vi: "Nghe kìa! Con chim đang hót.",
            sentence_en: "Listen! The bird is singing.",
          },
          {
            sentence_vi: "Ai đó đã chặt hết cây trong vườn.",
            sentence_en: "Someone has cut down all the trees in the garden.",
          },
          {
            sentence_vi: "Một số loài động vật không ăn trong mùa đông.",
            sentence_en: "Some animals do not eat during winter.",
          },
          {
            sentence_vi: "Nhanh lên! Tàu đang đến.",
            sentence_en: "Hurry up! The train is coming.",
          },
          {
            sentence_vi:
              "Bây giờ bạn đang ở đâu? - Tôi ở trên tầng. Tôi đang tắm.",
            sentence_en:
              "Where are you now? - I'm upstairs. I am having a bath.",
          },
          {
            sentence_vi: "Bạn đã học ở ngôi trường này được bao lâu rồi?",
            sentence_en: "How long have you been studying in this school?",
          },
          {
            sentence_vi: "Chúng tôi đã không gặp họ trong một thời gian dài.",
            sentence_en: "We have not seen them for a long time.",
          },
        ],
      },
      {
        use: "=====================Exercise 2:========================",
        practice: [
          {
            sentence_vi: "Bạn đã nhận được lá thư nào từ bố mẹ chưa?",
            sentence_en: "Have you received any letters from your parents yet?",
          },
          {
            sentence_vi: "Bob và Mary đã kết hôn được bao lâu rồi?",
            sentence_en: "How long have Bob and Mary been married?",
          },
          {
            sentence_vi: "Bố tôi đã không hút thuốc được 5 năm rồi.",
            sentence_en: "My father has not smoked for 5 years.",
          },
          {
            sentence_vi:
              "Chim xây tổ vào mùa hè và bay về phía nam vào mùa đông.",
            sentence_en:
              "Birds build their nests in the summer and fly to the south in winter.",
          },
          {
            sentence_vi:
              "Hiện tại tôi đang bận. Tôi đang trang trí lại phòng khách.",
            sentence_en:
              "I'm busy at the moment. I am redecorating the sitting room.",
          },
          {
            sentence_vi:
              "Tôi luôn mua vé số nhưng tôi chưa bao giờ trúng gì cả.",
            sentence_en:
              "I always buy lottery tickets but I never win anything.",
          },
          {
            sentence_vi:
              "Tôi đã làm việc cho ông ấy được 10 năm và ông ấy chưa từng một lần nói 'chào buổi sáng' với tôi.",
            sentence_en:
              'I have worked for him for 10 years and he has never once said "good morning" to me.',
          },
          {
            sentence_vi:
              "Ông Jone đã làm hiệu trưởng trường chúng tôi từ năm ngoái.",
            sentence_en:
              "Mr Jone has been principal of our school since last year.",
          },
          {
            sentence_vi: "Hoa violet nở vào mùa xuân.",
            sentence_en: "Violets bloom in Spring.",
          },
          {
            sentence_vi: "Chúng tôi đã không sống ở Anh được 2 năm rồi.",
            sentence_en: "We have not lived in England for 2 years now.",
          },
          {
            sentence_vi: "Hiện tại họ đang chuẩn bị bữa tối Giáng sinh.",
            sentence_en:
              "They are preparing the Christmas dinner at the moment.",
          },
          {
            sentence_vi: "George làm việc tại trường đại học cho đến nay.",
            sentence_en: "George works at the university so far.",
          },
          {
            sentence_vi: "Cô ấy đã học tiếng Đức được hai năm.",
            sentence_en: "She has been learning German for two years.",
          },
          {
            sentence_vi:
              "Nhìn kìa! Người đàn ông đó đang cố mở cửa xe của bạn.",
            sentence_en:
              "Look! That man is trying to open the door of your car.",
          },
          {
            sentence_vi: "Nghe kìa! Họ đang học một bài hát mới.",
            sentence_en: "Listen! They are learning a new song.",
          },
          {
            sentence_vi:
              "David đang sửa chiếc TV. Anh ấy đã sửa nó được một giờ rồi.",
            sentence_en:
              "David is repairing the TV set at the moment. He has been working at it for one hour.",
          },
          {
            sentence_vi:
              "Tôi không thể đi cùng bạn vì tôi vẫn chưa làm xong bài tập về nhà.",
            sentence_en:
              "I can't go with you because I have not finished my homework yet.",
          },
          {
            sentence_vi: "John đang rửa tay. Anh ấy vừa sửa xong chiếc xe đạp.",
            sentence_en:
              "John is washing his hands now. He has just repaired the bike.",
          },
          {
            sentence_vi:
              "Tôi đã làm báo cáo từ thứ Hai. Bây giờ tôi đang viết phần kết luận.",
            sentence_en:
              "I have been working at my report since Monday. Now I am writing the conclusion.",
          },
          {
            sentence_vi:
              "Trái Đất quay quanh Mặt Trời một vòng sau mỗi 365 ngày.",
            sentence_en: "The earth circles the sun once every 365 days.",
          },
          {
            sentence_vi:
              "Bạn đã gặp anh ấy bao nhiêu lần kể từ khi anh ấy đến Edinburgh?",
            sentence_en:
              "How many times have you seen him since he went to Edinburgh?",
          },
          {
            sentence_vi: "Nhìn kìa! Cậu bé đang khóc.",
            sentence_en: "Look! The boy is crying.",
          },
          {
            sentence_vi: "Mary đã làm mất mũ được 2 ngày rồi.",
            sentence_en: "Mary has lost her hat for 2 days.",
          },
          {
            sentence_vi: "Anh ấy vẫn chưa làm xong việc đó.",
            sentence_en: "He has not finished doing it yet.",
          },
          {
            sentence_vi: "Cô ấy đã không gặp anh ấy kể từ Giáng sinh.",
            sentence_en: "She has not seen him since Christmas.",
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
    ],
  },
];
