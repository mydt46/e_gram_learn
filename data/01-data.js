// Lesson data extracted from data_test.js
const words = [
  {
    title: "Trọng âm - Stress",
    content: [
      {
        use: "Noun và Adj → thường nhấn âm 1",
        practice: [
          {
            sentence_vi: "TAble, WINdow, HAPpy, CLEver, QUIet, DOCtor",
            sentence_en: "TAble, WINdow, HAPpy, CLEver, QUIet, DOCtor",
          },
        ],
      },
      {
        use: "Verb 2 âm tiết → thường nhấn âm 2",
        practice: [
          {
            sentence_vi: "beGIN, reLAX, deCIDE, forGET, arRIVE",
            sentence_en: "beGIN, reLAX, deCIDE, forGET, arRIVE",
          },
        ],
      },
      {
        use: "-tion, -sion, -ic, -ity → nhấn ngay âm phía trước nó",
        practice: [
          {
            sentence_vi:
              "eduCAtion, inforMAtion, converSAtion, deCIsion, teleVIsion",
            sentence_en:
              "eduCAtion, inforMAtion, converSAtion, deCIsion, teleVIsion",
          },
          {
            sentence_vi:
              "geoGRAphic, draMAtic, fanTAStic, ecoNOmic, scienTIfic",
            sentence_en:
              "geoGRAphic, draMAtic, fanTAStic, ecoNOmic, scienTIfic",
          },
          {
            sentence_vi: "aBIlity, possiBIlity, elecTRIcity, personAlity",
            sentence_en: "aBIlity, possiBIlity, elecTRIcity, personAlity",
          },
        ],
      },
      {
        use: "-ee, -eer → thường chính đuôi đó được nhấn",
        practice: [
          {
            sentence_vi: "employEE, enginEER, voluntEER, carEER",
            sentence_en: "employEE, enginEER, voluntEER, carEER",
          },
        ],
      },
      {
        use: "Một số suffix (-ness, -less, -ful, -ly) thường KHÔNG làm thay đổi trọng âm",
        practice: [
          {
            sentence_vi:
              "HAPpy → HAPpiness, CARE → CAREful, CAREful → CAREfully, USE → USEless, QUIet → QUIetly",
            sentence_en:
              "HAPpy → HAPpiness, CARE → CAREful, CAREful → CAREfully, USE → USEless, QUIet → QUIetlyE",
          },
        ],
      },
      {
        use: "Compound noun (N ghép) → thường nhấn từ đầu tiên",
        practice: [
          {
            sentence_vi: "AIRport, FOOTball, BEDroom, TOOTHbrush, SUNglasses",
            sentence_en: "AIRport, FOOTball, BEDroom, TOOTHbrush, SUNglasses",
          },
        ],
      },
      {
        use: "=> ① Cùng cách viết nhưng noun/verb khác trọng âm",
        practice: [
          {
            sentence_vi:
              "REcord ↔ reCORD, PREsent ↔ preSENT, PROduce ↔ proDUCE, CONtract ↔ conTRACT, INcrease ↔ inCREASE",
            sentence_en: "AIRport, FOOTball, BEDroom, TOOTHbrush, SUNglasses",
          },
        ],
      },
      {
        use: "“cheat sheet”",
        practice: [
          {
            sentence_vi: "Noun 2 syllables --> thường âm 1",
            sentence_en: "thường âm 1",
          },
          {
            sentence_vi: "Verb 2 syllables --> thường âm 2",
            sentence_en: "thường âm 2",
          },
          {
            sentence_vi: "-tion / -sion --> âm ngay trước suffix",
            sentence_en: "trước",
          },
          {
            sentence_vi: "-ic --> âm ngay trước -ic",
            sentence_en: "trước",
          },
          {
            sentence_vi: "-ee / -eer --> thường chính suffix",
            sentence_en: "chính suffix",
          },
          {
            sentence_vi: "-ness/-less/-ful/-ly --> thường giữ stress từ gốc",
            sentence_en: "giữ stress từ gốc",
          },
        ],
      },
    ],
    translate: [],
    context: [
      {
        situation:
          "- Trọng âm không bao giờ rơi vào âm /ə/hoặc là âm /əʊ/.\nví dụ:\nmother / ˈmʌðə /: trọng âm rơi vào âm tiết thứ nhất vì âm thứ hai có chứa âm / ə /\nhotel / ˌhəʊˈtel /: trọng âm rơi vào âm tiết thứ hai vì âm thứ nhất có chứa âm / əʊ /.\n*Lưu ý: Nếu như trong một từ có chứa cả hai loại âm là / ə / và / əʊ / thì trọng âm rơi vào phần có chứa âm / əʊ /\nVí dụ:\nsuppose / səˈpəʊz /: trọng âm rơi vào âm thứ hai\nago / əˈɡəʊ /: trọng âm rơi vào âm thứ hai\nopponent / əˈpəʊnənt /: trọng âm rơi vào âm thứ hai.",
        practice: [
          {
            sentence_vi: "Minh làm việc tại một công ty phần mềm",
            sentence_en: "Minh works for a software company",
          },
        ],
      },
      {
        situation:
          "-Trọng âm thường rơi vào nguyên âm dài/nguyên âm đôi hoặc âm cuối kết thúc với nhiều hơn một phụ âm.\nví dụ:\ndisease/ dɪˈziːz /: trọng âm rơi vào âm tiết thứ hai vì âm thứ hai có chứa nguyên âm dài /i:/\nexplain / ɪksˈpleɪn /: trọng âm rơi vào âm tiết thứ hai vì âm thứ hai có chứa nguyên âm đôi /ei/\ncomprehend / ˌkɒmprɪˈhend /: trọng âm rơi vào âm tiết thứ ba vì âm thứ ba kết thúc với hai phụ âm /nd/.",
        practice: [
          {
            sentence_vi: "Minh làm việc tại một công ty phần mềm",
            sentence_en: "Minh works for a software company",
          },
        ],
      },
      {
        situation:
          "- Nếu tất cả các âm mà ngắn hết thì trọng âm rơi vào âm tiết thứ nhất.\nVí dụ:\nhappy / ˈhæpi /: trọng âm rơi vào âm tiết đầu, vì cả / æ / và /i/ đều là nguyên âm ngắn\nanimal / ˈænɪml̩ /: trọng âm rơi vào âm tiết đầu vì cả / ae /, /i/, / ə / đều là nguyên âm ngắn.",
        practice: [
          {
            sentence_vi: "Minh làm việc tại một công ty phần mềm",
            sentence_en: "Minh works for a software company",
          },
        ],
      },
    ],
  },
];
