export type LocalMedia =
  | { type: "video"; src: string; poster?: string }
  | { type: "image"; src: string; alt?: string };

export type PostItem = {
  url: string; // Unique identifier for the post
  caption: string;
  media: LocalMedia;
};

export const posts: PostItem[] = [
  {
    url: "https://www.instagram.com/p/DLP7qzNiBi5/",
    caption: "Bu farkındalık bir devrimdir.\n\nGerçekten sevip sevmediğini sormak, özsaygının, özdeğerinin ve duygusal olgunluğunun işaretidir.\n\nSeviliyorsan değerli hissetmek kolaydır.\nAma severek değer vermek, kim olduğunu fark ettiğin yerdir.\nArtık sadece sevilmeye değil, seçmeye de başlarsın.\n\nÇünkü en derin bağlar, “beni seviyorlar mı?” telaşından değil,\n“ben bu bağda var mıyım, kalbim burada mı?” sorusundan doğar.",
  media: { type: "video", src: "/media/video/1/first_v.mp4", poster: "/media/pics/icebakis.jpg" }
  },
  {
    url: "https://www.instagram.com/p/DMiwNPmiLuv/",
    caption: "Seçebileceğini, durabileceğini, “hayır” diyebileceğini içselleştirdiğin dönem…\nİçsel ve dışsal beklentilere yetişmek zorunda olmadığını fark ettin.\nVe bu özgürlük, içindeki hafifliği büyütüyor.\nDünya dönmeye devam ediyor ama sen ilk kez kendi ritmini buluyorsun.\nÇünkü artık biliyorsun:\nHayatta, zorunda olduğun hiçbir şey yok.\nSadece senin için doğru olanı seçme hakkın var.",
  media: { type: "video", src: "/media/video/2/second_v.mp4", poster: "/media/pics/icebakis.jpg" }
  },
  {
    url: "https://www.instagram.com/p/DMAvhIBCHnB/",
    caption: "Bu senenin Yks veya Lgs öğrensiysen ve süreç arzuladığın gibi gitmediyse ya da geçmiş senelerde girdiğin senin için hayat memat meselesi olan bazı sınavlardan/mülakatlardan elde ettiğin sonuçlar seni tatmin etmediyse, hatta \"Başarısız\" hissediyorsan bu yazı hikayesini sahiplenen tüm arkadaşlarıma gelsin!🫠\n\nMental sağlıĝımla ilgili sorunlar yaşadığım uzuuun bir hayat dönemecim oldu. Bu dönemde iki sınava girdim: Teog ve Yks. Bana bu sınavların sonuçlarının HER ŞEYİ belirleyeceği empoze edildi. Çok akademik bir çocuk ve genç olmama rağmen benden beklenen ve benim de kendimden beklediğim sonuçları elde edemedim [neyse ki azıcık(!) uzun da sürse beklentilere hizmet etmek için yaratılmadığımın, kimsenin gururunu kabartmak zorunda olmadığımın bilincine erebildim]. Yorgun ve hüzünlüydüm.\n\nSınavlar geçince, süreç boyunca kendimle/ mentalimle verdiğim mücadeleyi sadece psikoloğum takdir etti ahahsj Amaaan insanlar hikayemizin ne kadarına hakim ki zaten🤭\nİnsanın böyle takdir edilmesi ne pozitif bir şeymiş! \"Aferin sana!\"yı duymak için illa öğretmeninin, babanın sana \"yakıştırdıkları\" hayalleri gerçekleştirmen gerekmiyormuş. Hayatın için gösterdiğin gayret, pes etmeyişlerin, koi balığı gibi akıntıya karşı yüzüşlerin olayın EN muhteşem kısmıymış🤩 O yüzden kimseye sırayı kaptırmadan hemen takdir et kendini🤙🏻 Kimsenin seni görmesini bekleme. Başkalarının seni onaylamasına gerek YOK:))Hop bi fun fact: Onlar henüz kendi hikayelerini de onaylayamıyor:( Perdenin arkasında neler yaşandığını en iyi sen biliyorsun, bu yeterli🤝🏼\nEskiden, hayalini kurduğum şeylerin olmamasına üzülürdüm, yalan yok bazen içimdeki şu çocuk hala minnoş minnoş dövünüyor...Ben de o mükemmel çocuğun üzüntüsünü ya da hırsını hissettiğim anda ona şunu hatırlatıyorum: Sosyal çevrenin at gözlüğüyle kendi güzel dünyanı çoook sıkıştırıyorsun ve başardığımız onlarca şeye kayıtsız kalıyorsun:(( Sınavlarının hepsi önemliydi, ama hayatımızı şekillendiren ana şey paylaştığımız o harlı ateşimiz olacak🤠😎 Yaşamımız sığ bir yol olmayacak. Çok fazla kavisi, değişken dinamikleri var. Ve biz iyi Koileriz🫡😏\nMoralini bozup hikayenin peşini bırakma🩷🧡",
  media: { type: "video", src: "/media/video/3/third_v.mp4", poster: "/media/pics/icebakis.jpg" }
  },
  {
    url: "https://www.instagram.com/p/DMAkmnECyCX/?img_index=1",
    caption: "Onun yanındayken zihnin susuyorsa, bedenin gevşiyorsa, bu iyi bir işarettir. Kendin gibi konuşabiliyor, hata yapmaktan korkmadan var olabiliyorsan…\n\nDuygularını bastırmadan paylaşabiliyorsan ve yanında olmaktan sonra değilken de huzur kalıyorsa, o kişi sana iyi geliyordur.\n\nGerçekten iyi gelen biri, seni senden çalmadan, sana seni geri verir.",
  media: { type: "video", src: "/media/video/4/fourth_v.mp4", poster: "/media/pics/icebakis.jpg" }
  },
];
