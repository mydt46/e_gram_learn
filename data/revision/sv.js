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
              "Mỗi quả bí ngô trên cánh đồng đều ước chúng có thể trở thành đèn lồng Halloween.",
            sentence_en:
              "Each of the pumpkins in the field wishes they could become a jack-o-lantern.",
          },
          {
            sentence_vi: "Các nhân viên đang quyết định cách họ muốn bỏ phiếu.",
            sentence_en: "The staff are deciding how they want to vote.",
          },
          {
            sentence_vi: "Đào hố trong sân là sở thích của Doodle.",
            sentence_en:
              "Digging holes in the yard is Doodle's favorite thing to do.",
          },
          {
            sentence_vi:
              "Toán học là môn học yêu thích của John, trong khi Giáo dục công dân là môn học yêu thích của Andrea.",
            sentence_en:
              "Mathematics is John's favorite subject, while Civics is Andrea's favorite subject.",
          },
          {
            sentence_vi:
              "Cả bạn và anh ấy đều không chịu trách nhiệm tuyển dụng và đào tạo nhân viên mới.",
            sentence_en:
              "Neither you nor he is responsible for recruiting and training new staff.",
          },
          {
            sentence_vi: "Hành vi đột nhập trái phép là vi phạm pháp luật.",
            sentence_en: "Breaking and entering is against the law.",
          },
          {
            sentence_vi: "Không ai trong số họ có hứng thú học đại học.",
            sentence_en:
              "Neither of them is interested in going to university.",
          },
          {
            sentence_vi: "Năm năm là mức án tối đa cho hành vi phạm tội đó.",
            sentence_en: "Five years is the maximum sentence for that offense.",
          },
          {
            sentence_vi: "Một phần ba dân số đã không ủng hộ dự luật.",
            sentence_en:
              "A third of the population were not in favor of the bill.",
          },
          {
            sentence_vi:
              "Sự phấn khích, cũng như sự lo lắng, là nguyên nhân khiến cô ấy run rẩy.",
            sentence_en:
              "Excitement, as well as nervousness, is the cause of her shaking.",
          },
          {
            sentence_vi:
              "Một công ty rất có lợi nhuận như British Telecom, cùng với nhiều công ty khác ở Anh, chưa sẵn sàng trả một khoản tiền hợp lý.",
            sentence_en:
              "A very profitable company such as British Telecom, along with many other companies in the UK, is not prepared to pay a reasonable amount.",
          },
          {
            sentence_vi:
              "Đã có mười lăm viên kẹo trong túi đó. Bây giờ chỉ còn lại một viên!",
            sentence_en:
              "There were fifteen candies in that bag. Now there is only one left!",
          },
          {
            sentence_vi:
              "Bộ phim bao gồm tất cả các đoạn giới thiệu trước mất khoảng hai giờ để xem.",
            sentence_en:
              "The movie, including all the previews, takes about two hours to watch.",
          },
          {
            sentence_vi:
              "Dép sandal và khăn tắm là những vật dụng thiết yếu cho một chuyến đi biển.",
            sentence_en:
              "Sandals and towels are essential gear for a trip to the beach.",
          },
          {
            sentence_vi:
              "Hoặc Cassie hoặc Marie sẽ trả lương cho các nhân viên vào chiều nay.",
            sentence_en:
              "Either Cassie or Marie pays the employees this afternoon.",
          },
          {
            sentence_vi: "Đây là những chiếc đinh bạn cần cho các dự án.",
            sentence_en: "Here are the nails you need for the projects.",
          },
          {
            sentence_vi:
              "Hai mươi phút là khoảng thời gian tôi đi từ nơi làm việc về nhà.",
            sentence_en:
              "Twenty minutes is the amount of time it takes me to get home from work.",
          },
          {
            sentence_vi:
              "Các đấu thủ lần lượt lăn một quả bóng xuống sân. Mỗi đấu thủ lấy một quả bóng và nhắm vào bóng tiêu.",
            sentence_en:
              "The players take turns rolling a ball down the court. Each of the players takes one ball and aims for the pallino.",
          },
          {
            sentence_vi:
              "Chàng trai trẻ mà bạn gặp học cùng trường đại học với em gái tôi.",
            sentence_en:
              "The young man you met goes to the same college as my sister.",
          },
          {
            sentence_vi:
              "Mọi người đăng ký tham gia chuyến đi trượt tuyết bằng ván đều đang học các bài học.",
            sentence_en:
              "Everybody who signed up for the snowboarding trip was taking lessons.",
          },
          {
            sentence_vi: "Quai bị là một trong những căn bệnh khó chịu nhất.",
            sentence_en: "Mumps is one of the most uncomfortable diseases.",
          },
          {
            sentence_vi: "Một số lượng nhỏ trẻ em được giáo dục tại nhà.",
            sentence_en: "A small number of children are educated at home.",
          },
          {
            sentence_vi:
              "Một trăm đô la không phải là một số tiền lớn đối với một số người.",
            sentence_en:
              "One hundred dollars is not a lot of money to some people.",
          },
          {
            sentence_vi:
              "Caffeine, chất được tìm thấy trong cà phê và trà, là một chất kích thích nhẹ.",
            sentence_en:
              "Caffeine, which is found in coffee and tea, is a mild stimulant.",
          },
          {
            sentence_vi:
              "Rất nhiều nỗ lực đã được bỏ ra để làm cho phần mềm trở nên đáng tin cậy.",
            sentence_en:
              "A great deal of effort has gone into making the software reliable.",
          },
          {
            sentence_vi: "Cả bố và mẹ tôi đều không thích bạn trai tôi.",
            sentence_en: "Neither of my parents likes my boyfriend.",
          },
          {
            sentence_vi:
              "Ngôn ngữ học là ngành nghiên cứu khoa học về ngôn ngữ.",
            sentence_en: "Linguistics is the scientific study of language.",
          },
          {
            sentence_vi:
              "Cơ hội trúng số ở bang New York của bạn ít hơn nguy cơ bị sét đánh.",
            sentence_en:
              "Your chances of winning the lottery in New York State are less than being struck by lightning.",
          },
          {
            sentence_vi:
              "Những người thực sự trúng số, dù có ý định đầu tư tốt đẹp, đôi khi cuối cùng vẫn rơi vào cảnh khánh kiệt vì đem hết tiền đi làm từ thiện.",
            sentence_en:
              "People who do win the lottery, though they may have the good intention to invest, occasionally end up becoming impoverished because they give all their money to charity.",
          },
          {
            sentence_vi:
              "Lời đề xuất của hai viên cảnh sát, một thẩm phán và ba luật sư đã được chấp thuận.",
            sentence_en:
              "The recommendation of two policemen, a judge, and three lawyers was accepted.",
          },
          {
            sentence_vi:
              "Một nhân viên trạm xăng hoặc một tấm bản đồ là nguồn thông tin hữu ích.",
            sentence_en:
              "A gas station attendant or a map is a valuable source of information.",
          },
          {
            sentence_vi: "Một số sinh viên đã kiệt sức sau kỳ thi cuối kỳ.",
            sentence_en: "Some of the students were exhausted after finals.",
          },
          {
            sentence_vi:
              "Chúng tôi đang hy vọng thu hút được đối tượng khách hàng chưa bao giờ nghĩ đến việc mở tài khoản trả góp giữ hàng.",
            sentence_en:
              "We are hoping to attract the type of customer who has never thought of opening a layaway account.",
          },
          {
            sentence_vi:
              "Nguyên nhân của căn bệnh khủng khiếp này là do chế độ ăn uống kém và lười vận động.",
            sentence_en:
              "The causes of this horrible disease are poor diet and lack of exercise.",
          },
          {
            sentence_vi:
              "Thành phố và tiểu bang đã áp dụng các hạn chế liên quan đến việc tiêu thụ nước từ 7 giờ sáng đến 8 giờ tối.",
            sentence_en:
              "The city and the state have adopted restrictions involving water consumption between the hours of 7 a.m. and 8 p.m.",
          },
          {
            sentence_vi:
              "Tiếng la hét của người hâm mộ là một vấn đề tại một số sân vận động bóng đá.",
            sentence_en:
              "The noise of the fan's screams is a problem at some football stadiums.",
          },
          {
            sentence_vi:
              "Chiếc ghế bành và ghế tựa tôi mua tại Goodwill trông đắt hơn nhiều so với giá trị thực tế của chúng.",
            sentence_en:
              "The couch and the recliner I bought at Goodwill look a lot more expensive than they actually are.",
          },
          {
            sentence_vi: "Kéo quá nguy hiểm để đưa cho trẻ nhỏ.",
            sentence_en:
              "Scissors are too dangerous to give to small children.",
          },
          {
            sentence_vi:
              "Không có giải thưởng hay huy chương nào được trao cho cậu bé, dù cậu ấy đứng đầu trong kỳ thi.",
            sentence_en:
              "No prize or medal was given to the boy, though he stood first in the examination.",
          },
          {
            sentence_vi:
              "Không thí sinh nào có thể giành được chiến thắng quyết định.",
            sentence_en:
              "Neither of the contestants was able to win a decisive victory.",
          },
          {
            sentence_vi:
              "Lợi nhuận từ việc sở hữu đại lý ô tô và văn phòng tín dụng của riêng bạn khiến bạn phải suy nghĩ kỹ trước khi đầu tư.",
            sentence_en:
              "The profit from owning your own car dealership and credit bureau makes you think twice before investing.",
          },
          {
            sentence_vi: "Bệnh sởi gây sốt cao ở trẻ nhỏ.",
            sentence_en: "The measles causes high fevers in young children.",
          },
          {
            sentence_vi:
              "Không chỉ gia đình Smiths mà cả Tonya cũng đã đồng ý thử một trong những chiếc bánh nướng xốp súp lơ xanh sô-cô-la nổi tiếng thế giới.",
            sentence_en:
              "Not only the Smiths but also Tonya has agreed to try one of the world-famous chocolate-broccoli muffins.",
          },
          {
            sentence_vi:
              "Gia đình Smiths, cùng với Tonya, hy vọng tránh được chứng khó tiêu sau khi ăn những chiếc bánh nướng xốp kỳ lạ này.",
            sentence_en:
              "The Smiths, along with Tonya, hope to avoid indigestion after eating these weird muffins.",
          },
          {
            sentence_vi:
              "Mặc dù bồi thẩm đoàn muốn tin rằng bị cáo không cho Quái vật hồ Loch Ness ăn thịt Elvis, nhưng phần lớn bằng chứng lại chỉ ra tội lỗi của cô ta.",
            sentence_en:
              "Even though the jury want to believe that the defendant did not feed Elvis to the Loch Ness Monster, much of the evidence points to her guilt.",
          },
          {
            sentence_vi:
              "Có nhiều calo trong một bát ngũ cốc ăn sáng súp lơ xanh sô-cô-la hơn bạn nghĩ đấy.",
            sentence_en:
              "There are more calories in a bowl of chocolate-broccoli breakfast cereal than you might think.",
          },
          {
            sentence_vi:
              "Việc cùng một vận động viên giành được năm huy chương là một thành tích hiếm có.",
            sentence_en:
              "The winning of five medals by the same athlete is a rare achievement.",
          },
          {
            sentence_vi:
              "Ủy ban tham gia vào các hoạt động tình nguyện khác nhau trong đời sống riêng tư của họ.",
            sentence_en:
              "The committee participate in various volunteer activities in their private lives.",
          },
          {
            sentence_vi:
              "Hàng hóa sản xuất tại địa phương có lợi thế là chuỗi cung ứng ngắn hơn.",
            sentence_en:
              "Locally produced goods have the advantage of shorter supply chains.",
          },
          {
            sentence_vi:
              "Có một số lý do khiến chúng ta phải giải quyết vấn đề nóng lên toàn cầu.",
            sentence_en:
              "There are several reasons why we must tackle the problem of global warming.",
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
