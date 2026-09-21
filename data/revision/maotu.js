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
            sentence_vi: "Chúng tôi sống trong một ngôi nhà lớn ở giữa làng.",
            sentence_en: "We live in a big house in the middle of the village.",
          },
          {
            sentence_vi:
              "Tôi đang tìm kiếm một công việc. Mary đã nhận được công việc mà cô ấy nộp đơn chưa?",
            sentence_en:
              "I'm looking for a job. Did Mary get the job she applied for?",
          },
          {
            sentence_vi:
              "Cảnh sát đã tìm thấy người đã trộm xe đạp của bạn chưa?",
            sentence_en: "Did the police find the person who stole your bike?",
          },
          {
            sentence_vi:
              "Chúng tôi đã ra ngoài ăn tối tối qua. Nhà hàng chúng tôi đến rất tuyệt vời.",
            sentence_en:
              "We went out for dinner last night. The restaurant we went to was excellent.",
          },
          {
            sentence_vi:
              "Khi tôi đang đi dạo dọc theo con phố, tôi đã nhìn thấy một tờ 10 đô la trên vỉa hè.",
            sentence_en:
              "As I was walking along the street, I saw a $10 note on the pavement.",
          },
          {
            sentence_vi:
              "Liên Xô là quốc gia đầu tiên đưa con người vào không gian.",
            sentence_en:
              "The Soviet Union was the first country to send a man into space.",
          },
          {
            sentence_vi:
              "Bạn đã xem phim 'Titanic' trên truyền hình hay ở rạp chiếu phim?",
            sentence_en:
              "Did you watch 'Titanic' on television or at the cinema?",
          },
          {
            sentence_vi: "Sau bữa trưa, chúng tôi đi dạo bên bờ biển.",
            sentence_en: "After lunch, we went for a walk by the sea.",
          },
          {
            sentence_vi: "Peru là một quốc gia ở Nam Mỹ. Thủ đô là Lima.",
            sentence_en:
              "Peru is a country in South America. The capital is Lima.",
          },
          {
            sentence_vi:
              "Karen sẽ muốn mua một chiếc máy tính mới vào tuần tới.",
            sentence_en: "Karen will want to buy a new computer next week.",
          },
          {
            sentence_vi:
              "Làm ơn gặp tôi tại quán cà phê trong vòng một giờ nữa.",
            sentence_en:
              "Please meet me at the coffee shop in an hour from now.",
          },
          {
            sentence_vi:
              "Jackson thích xem bóng đá trên truyền hình. Đó là một trận đấu rất hay.",
            sentence_en:
              "Jackson likes to watch football on television. It is a very good game.",
          },
          {
            sentence_vi:
              "Anh trai tôi đã giành được một giải thưởng vì là sinh viên xuất sắc nhất trường đại học của chúng tôi.",
            sentence_en:
              "My brother won an award for being the most excellent student in our university.",
          },
          {
            sentence_vi:
              "Tổng thống Hoa Kỳ sẽ đến thăm Việt Nam vào thời điểm này vào tuần tới.",
            sentence_en:
              "The President of the United States will be visiting Viet Nam this time next week.",
          },
          {
            sentence_vi:
              "Tây Ban Nha là một trong những quốc gia châu Âu lớn nhất.",
            sentence_en: "Spain is one of the largest European countries.",
          },
          {
            sentence_vi:
              "Có một nhà hàng ở gần nhà tôi. Nhà hàng đó phục vụ đồ ăn ngon.",
            sentence_en:
              "There is a restaurant near my house. The restaurant serves good food.",
          },
          {
            sentence_vi:
              "Liz không thể tin vào mắt mình khi nhìn thấy một con voi băng qua đường trước cổng trường ngày hôm qua.",
            sentence_en:
              "Liz couldn't believe her eyes when she saw an elephant crossing the road in front of her school yesterday.",
          },
          {
            sentence_vi: "Đừng nhìn vào mặt trời. Bạn sẽ làm đau mắt đấy!",
            sentence_en: "Don't look at the sun. You will hurt your eyes!",
          },
          {
            sentence_vi:
              "Cuộc sống đã thay đổi rất nhiều trong ba mươi năm qua.",
            sentence_en: "Life has changed a lot in the last thirty years.",
          },
          {
            sentence_vi: "Mọi người ngày càng lo lắng về môi trường.",
            sentence_en:
              "People are increasingly worried about the environment.",
          },
          {
            sentence_vi:
              "Neil Armstrong là người đầu tiên đặt chân lên bề mặt mặt trăng.",
            sentence_en:
              "Neil Armstrong was the first person to set foot on the surface of the moon.",
          },
          {
            sentence_vi:
              "Hai thiếu niên nam đã bị bắt và bị buộc tội phơi bày khiếm nhã sau khi tụt quần khoe mông trước một viên cảnh sát.",
            sentence_en:
              "Two male juveniles were arrested and charged with indecent exposure after they mooned a police officer.",
          },
          {
            sentence_vi:
              "Everest là ngọn núi cao nhất trên Trái Đất, nằm ở biên giới giữa Nepal và Tây Tạng ở phía tây Trung Quốc.",
            sentence_en:
              "Everest is the highest mountain on earth, situated on the border between Nepal and Tibet in the west of China.",
          },
          {
            sentence_vi:
              "Chủ yếu nổi tiếng nhờ giọng hát tuyệt vời, Cole cũng là một bậc thầy chơi đàn piano.",
            sentence_en:
              "Famous mainly for his wonderful voice, Cole was also a virtuoso on the piano.",
          },
          {
            sentence_vi:
              "Đang có tình trạng thiếu hụt giáo viên, đặc biệt là trong môn âm nhạc và khoa học.",
            sentence_en:
              "There is a shortage of teachers, especially in music and science.",
          },
          {
            sentence_vi:
              "Sau ngần ấy năm trông bạn vẫn y hệt như xưa – bạn chẳng thay đổi chút nào.",
            sentence_en:
              "After all these years you look exactly the same - you haven't changed a bit.",
          },
          {
            sentence_vi:
              '"Bạn có bao nhiêu tiền trong người?" - "100 euro tiền giấy và vài đồng xu."',
            sentence_en:
              '"How much money do you have on you?" - "€100 in notes and a few coins."',
          },
          {
            sentence_vi:
              "Công việc không mấy thú vị, nhưng tiền lương thì tốt.",
            sentence_en: "The job wasn't exciting, but the money was good.",
          },
          {
            sentence_vi:
              "Chúng tôi không hề lên kế hoạch ở Pháp cùng lúc với Ann và Charles - đó chỉ là một sự trùng hợp may mắn.",
            sentence_en:
              "We hadn't planned to be in France at the same time as Ann and Charles - it was just a happy coincidence.",
          },
          {
            sentence_vi:
              "Thời đi học được cho là những ngày tháng hạnh phúc nhất trong cuộc đời bạn.",
            sentence_en:
              "School days are said to be the happiest days of your life.",
          },
          {
            sentence_vi:
              "Một nỗi hoảng loạn kinh hoàng đã bùng phát khi mọi người cố gắng trốn thoát khỏi các thành phố trên khắp nước Mỹ.",
            sentence_en:
              "A terrible panic broke out as people tried to escape from cities across the USA.",
          },
          {
            sentence_vi:
              "Chính Ptolemy là người đưa ra thuyết cho rằng trái đất là trung tâm của vũ trụ.",
            sentence_en:
              "It was Ptolemy who propounded the theory that the earth was at the centre of the universe.",
          },
          {
            sentence_vi:
              "Sao Hỏa đôi khi được gọi là Hành tinh Đỏ vì màu sắc đặc trưng của nó.",
            sentence_en:
              "Mars is sometimes called the Red Planet because of its distinctive colour.",
          },
          {
            sentence_vi:
              "Brazil kiếm được nhiều triệu bảng mỗi năm từ xuất khẩu cà phê.",
            sentence_en:
              "Brazil earns many millions of pounds a year from coffee exports.",
          },
          {
            sentence_vi: "Anh ấy đã dành rất nhiều thời gian trong tù.",
            sentence_en: "He's spent a lot of time in prison.",
          },
          {
            sentence_vi:
              "Trường học bắt đầu lúc 9 giờ sáng và kết thúc lúc 3 giờ 30 chiều.",
            sentence_en: "School starts at 9 a.m. and finishes at 3.30 p.m.",
          },
          {
            sentence_vi:
              "Khuôn khổ mới được đề xuất đã nhận được nhiều lời khen ngợi vì cung cấp một cách tiếp cận đồng nhất đối với vấn đề xử lý rác thải.",
            sentence_en:
              "The proposed new framework has been widely praised for providing a uniform approach to the problem of waste disposal.",
          },
          {
            sentence_vi:
              "Là một diễn viên, anh ấy có thể truyền tải trọn vẹn nhiều cung bậc cảm xúc.",
            sentence_en:
              "As an actor he could communicate a whole range of emotions.",
          },
          {
            sentence_vi:
              "Các hãng hàng không giá rẻ ở châu Âu đang mua rất nhiều máy bay mới.",
            sentence_en:
              "Discount airlines in Europe are buying lots of new planes.",
          },
          {
            sentence_vi:
              "Anh ấy chắc chắn là nam diễn viên xuất sắc nhất ở Hollywood hiện nay.",
            sentence_en: "He is certainly the finest actor in Hollywood today.",
          },
          {
            sentence_vi:
              "Thái Bình Dương là đại dương nằm ở phía đông của châu Á và châu Đại Dương và ở phía tây của Bắc và Nam Mỹ.",
            sentence_en:
              "The Pacific Ocean is the ocean that is to the east of Asia and Australasia and to the west of North and South America.",
          },
          {
            sentence_vi:
              "Quốc ca của các đội tuyển được phát vào lúc bắt đầu của một trận bóng đá quốc tế lớn.",
            sentence_en:
              "The national anthems of the teams are played at the beginning of a big international football match.",
          },
          {
            sentence_vi:
              "Sẽ tốt hơn cho môi trường nếu có nhiều người sử dụng xe đạp hơn ô tô.",
            sentence_en:
              "It would be better for the environment if more people used bikes rather than cars.",
          },
          {
            sentence_vi:
              "Chris làm công việc buổi tối là một nhân viên vệ sinh văn phòng.",
            sentence_en: "Chris has an evening job as an office cleaner.",
          },
          {
            sentence_vi: "Công thức nấu ăn yêu cầu bạn dùng một pound rưỡi bơ.",
            sentence_en:
              "The recipe tells you to use a pound and a half of butter.",
          },
          {
            sentence_vi:
              "Cô ấy chắc chắn đã có thêm sự tự tin trong vài năm qua.",
            sentence_en:
              "She's certainly gained in confidence over the last couple of years.",
          },
          {
            sentence_vi:
              "Vào cuối một mùa hè oi bức, bạo lực đã bùng phát ở các khu nội thành.",
            sentence_en:
              "At the end of a hot summer, violence erupted in the inner cities.",
          },
          {
            sentence_vi: "Đó là một trong những bộ phim hay nhất tôi từng xem.",
            sentence_en: "That was one of the best films I've ever seen.",
          },
          {
            sentence_vi:
              "Anh ấy có một phong thái tự tin, thậm chí ngạo mạn, về những gì mình làm.",
            sentence_en:
              "He has a sense of confidence, even arrogance, about what he does.",
          },
        ],
      },
      {
        use: "=====================Exercise 2:========================",
        practice: [],
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
