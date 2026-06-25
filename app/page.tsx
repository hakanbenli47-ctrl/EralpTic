"use client";

import { useState } from "react";

export default function Page() {
  const [menuAcik, setMenuAcik] = useState(false);

  const whatsappLink =
    "https://wa.me/905370150863?text=Merhaba%2C%20Eralp%20Ticaret%20web%20sitenizden%20ula%C5%9F%C4%B1yorum.%20Kraft%20Hortum%20%C3%BCr%C3%BCn%C3%BCn%C3%BCz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

  const konumLink =
    "https://www.google.com/maps/search/?api=1&query=Top%C3%A7ular%20Mahallesi%20%C3%87iftlik%20Sokak%20No%208%20Daire%203%20De%C4%9Firmendere%20G%C3%B6lc%C3%BCk%20Kocaeli";

  const kullanimAlanlari = [
    "Gemiler",
    "Buzhaneler",
    "Otobüsler",
    "Tırlar",
    "Karavanlar",
    "Seralar",
    "Havalandırma Sistemleri",
    "Endüstriyel Alanlar",
  ];

  const galeriGorselleri = [
    {
      src: "/gorseller/kraft-hortum-1.jpg",
      baslik: "Rulo Hortum Görünümü",
      aciklama: "Kraft hortumun rulo formunu ve stok ürün görünümünü gösterir.",
    },
    {
      src: "/gorseller/kraft-hortum-2.jpg",
      baslik: "Yakın Plan Ürün Yapısı",
      aciklama: "Esnek hava hortumu yüzeyini ve ürün dokusunu daha net gösterir.",
    },
    {
      src: "/gorseller/kraft-hortum-3.jpg",
      baslik: "Esnek Hortum Detayı",
      aciklama: "Farklı soğutma ve havalandırma sistemlerine uyum sağlayan yapıyı gösterir.",
    },
    {
      src: "/gorseller/kraft-hortum-4.jpg",
      baslik: "Açık Uç ve Çap Görünümü",
      aciklama: "Hortum çapı ve ağız yapısını incelemek isteyen müşteriler için ürün detayı.",
    },
    {
      src: "/gorseller/kraft-hortum-5.jpg",
      baslik: "Sanayi Tipi Kullanım",
      aciklama: "Endüstriyel havalandırma ve soğutma sistemlerine uygun ürün görünümü.",
    },
    {
      src: "/gorseller/kraft-hortum-6.jpg",
      baslik: "Ürün Hazırlığı",
      aciklama: "Sipariş öncesi ürün hazırlığı ve sevkiyat sürecini gösteren görsel.",
    },
  ];

  return (
    <main className="sayfa">
      <header className="ust-menu">
        <div className="menu-ic">
          <a href="#anasayfa" className="logo" onClick={() => setMenuAcik(false)}>
            <strong>Eralp Ticaret</strong>
            <span>Kraft Hortum</span>
          </a>

          <button
            className="hamburger"
            type="button"
            onClick={() => setMenuAcik((onceki) => !onceki)}
            aria-label="Menüyü aç"
          >
            ☰
          </button>

          <nav className={`menu-linkleri ${menuAcik ? "aktif" : ""}`}>
            <a href="#urun" onClick={() => setMenuAcik(false)}>
              Ürün
            </a>
            <a href="#kullanim" onClick={() => setMenuAcik(false)}>
              Kullanım Alanları
            </a>
            <a href="#teknik" onClick={() => setMenuAcik(false)}>
              Teknik Bilgi
            </a>
            <a href="#galeri" onClick={() => setMenuAcik(false)}>
              Görseller
            </a>
            <a href="#iletisim" onClick={() => setMenuAcik(false)}>
              İletişim
            </a>
            <a className="menu-cta" href={whatsappLink}>
              WhatsApp
            </a>
          </nav>
        </div>
      </header>

      <section className="hero" id="anasayfa">
        <div className="hero-metin">
          <span className="ust-etiket">Kraft Hortum Satışı ve Ürün Bilgisi</span>

          <h1>
            Kraft Hortum
            <br />
            <em>ve Esnek Hava Hortumu</em>
          </h1>

          <p>
            Soğutma, havalandırma ve hava yönlendirme sistemleri için kullanılan
            25 metre kraft hortum çözümleri. Gemiler, buzhaneler, otobüsler,
            tırlar, karavanlar, seralar ve endüstriyel alanlar için uygun çap
            seçenekleri hakkında hızlı bilgi alın.
          </p>

          <div className="hero-butonlar">
            <a className="ana-buton" href={whatsappLink}>
              Çap ve Fiyat Bilgisi Al
            </a>

            <a className="koyu-buton" href="tel:+905370150863">
              Telefonla Bilgi Al
            </a>

            <a
              className="cizgi-buton"
              href={konumLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Konumu Gör
            </a>
          </div>

          <div className="hero-bilgiler">
            <div>
              <strong>25 m</strong>
              <span>Standart ürün uzunluğu</span>
            </div>

            <div>
              <strong>Çap</strong>
              <span>İhtiyaca uygun seçenekler</span>
            </div>

            <div>
              <strong>Destek</strong>
              <span>Ürün ve kullanım bilgisi</span>
            </div>
          </div>
        </div>

        <div className="hero-gorsel">
          <div className="gorsel-zemin">
            <img
              src="/gorseller/kraft-hortum-ana.jpg"
              alt="Kraft hortum ve esnek hava yönlendirme hortumu"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

            <div className="hava-efekti" />

            <div className="gorsel-bilgi">
              <strong>Soğutma ve havalandırma sistemleri için kraft hortum</strong>
              <span>
                Hava akışını taşımak ve yönlendirmek için pratik, esnek ve
                sanayi tipi hortum çözümü.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bolum" id="urun">
        <div className="bolum-baslik">
          <span>Ürün Bilgisi</span>
          <h2>Kraft hortum, hava akışını ihtiyaç duyulan alana taşımak için kullanılır.</h2>
          <p>
            Esnek yapısı sayesinde soğutma ve havalandırma sistemlerinde hava
            yönlendirme ihtiyacı olan birçok alanda tercih edilir. Kullanım
            alanınıza göre doğru çap ve ürün bilgisi için Eralp Ticaret ile
            iletişime geçebilirsiniz.
          </p>
        </div>

        <div className="urun-alani">
          <div className="urun-gorsel">
            <img
              src="/gorseller/hortum-yakin-plan.jpg"
              alt="Kraft hortum yakın plan ürün yapısı"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          </div>

          <div className="urun-metin">
            <h3>Kraft Hortum Ne İşe Yarar?</h3>

            <p>
              Kraft hortum; soğuk veya sıcak hava akışının taşınması, sistemden
              çıkan havanın yönlendirilmesi ve ihtiyaç duyulan bölgeye kontrollü
              şekilde iletilmesi için kullanılan esnek hava hortumudur.
            </p>

            <p>
              Gemilerde, buzhanelerde, araç içi havalandırma sistemlerinde,
              seralarda ve sanayi tipi uygulamalarda kullanılabilir. Ürün 25
              metre uzunluğundadır ve farklı çap seçenekleriyle sistem ihtiyacına
              göre değerlendirilebilir.
            </p>

            <div className="ozellik-listesi">
              <span>25 metre kraft hortum</span>
              <span>Farklı çap seçenekleri</span>
              <span>Esnek hava yönlendirme</span>
              <span>Sanayi tipi kullanım</span>
              <span>Soğutma sistemlerine uygun</span>
              <span>Havalandırma desteği</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bolum" id="kullanim">
        <div className="bolum-baslik">
          <span>Kullanım Alanları</span>
          <h2>Kraft hortum birçok sektörde hava taşıma ve havalandırma amacıyla kullanılır.</h2>
          <p>
            Ürünü nerede kullanacağınızı ileterek doğru çap, uzunluk ve uygunluk
            hakkında hızlı bilgi alabilirsiniz.
          </p>
        </div>

        <div className="kullanim-listesi">
          {kullanimAlanlari.map((alan, index) => (
            <div className="kullanim-satir" key={alan}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{alan}</strong>
              <p>
                Hava taşıma, soğutma, havalandırma ve yönlendirme ihtiyacı olan
                sistemlerde kraft hortum çözümü değerlendirilebilir.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bolum" id="teknik">
        <div className="bolum-baslik">
          <span>Teknik Bilgi</span>
          <h2>Kullanım alanınıza göre doğru kraft hortum çapı seçilmelidir.</h2>
          <p>
            Hortum seçerken kullanılacak sistem, hava akışı ihtiyacı, bağlantı
            noktası ve çap ölçüsü önemlidir. Emin değilseniz kullanım alanınızı
            paylaşarak destek alabilirsiniz.
          </p>
        </div>

        <div className="teknik-akis">
          <div className="teknik-satir">
            <strong>01</strong>
            <div>
              <h3>Standart Uzunluk</h3>
              <p>
                Ürün standart olarak 25 metre uzunluğundadır. Kullanım alanına
                göre kesim, bağlantı ve montaj ihtiyacı ayrıca değerlendirilmelidir.
              </p>
            </div>
          </div>

          <div className="teknik-satir">
            <strong>02</strong>
            <div>
              <h3>Çap Seçenekleri</h3>
              <p>
                Farklı çap seçenekleri sayesinde farklı havalandırma ve soğutma
                sistemlerine uyum sağlayabilir.
              </p>
            </div>
          </div>

          <div className="teknik-satir">
            <strong>03</strong>
            <div>
              <h3>Ürün Uygunluk Desteği</h3>
              <p>
                Kullanım alanınızı, sistem ölçünüzü ve ihtiyacınızı ileterek
                hangi kraft hortum seçeneğinin daha uygun olduğunu öğrenebilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bolum" id="galeri">
        <div className="bolum-baslik">
          <span>Ürün Görselleri</span>
          <h2>Kraft hortum görselleriyle ürün yapısını yakından inceleyin.</h2>
          <p>
            Rulo formu, yüzey yapısı, ağız ve çap görünümü gibi detayları ürün
            görselleri üzerinden inceleyebilirsiniz.
          </p>
        </div>

        <div className="gelgit-galeri">
          <div className="gelgit-sahne">
            {galeriGorselleri.map((gorsel, index) => (
              <div
                className="gelgit-resim"
                key={gorsel.baslik}
                style={{ animationDelay: `${index * 4}s` }}
              >
                <img src={gorsel.src} alt={gorsel.baslik} />

                <div className="gelgit-yazi">
                  <span>Ürün Görseli</span>
                  <strong>{gorsel.baslik}</strong>
                  <p>{gorsel.aciklama}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="gelgit-bilgi">
            <span>01</span>
            <strong>Ürünü sipariş öncesi daha net değerlendirin.</strong>
            <p>
              Kraft hortumun yapısını, esnekliğini ve kullanım detaylarını
              görseller üzerinden inceleyebilir; çap ve uygunluk bilgisi için
              doğrudan iletişime geçebilirsiniz.
            </p>
          </div>
        </div>
      </section>

      <section className="bolum">
        <div className="cta-alani">
          <div>
            <span>Hızlı İletişim</span>
            <h2>Kraft hortum için çap, fiyat ve uygunluk bilgisi alın.</h2>
            <p>
              Kullanım alanınızı, ihtiyacınız olan çap bilgisini ve miktarı
              WhatsApp üzerinden iletin. Size uygun kraft hortum seçeneği
              hakkında hızlıca bilgi alın.
            </p>
          </div>

          <a className="ana-buton" href={whatsappLink}>
            WhatsApp’tan Bilgi Al
          </a>
        </div>
      </section>

      <section className="bolum" id="iletisim">
        <div className="bolum-baslik">
          <span>İletişim</span>
          <h2>Kraft hortum siparişi ve ürün bilgisi için Eralp Ticaret ile iletişime geçin.</h2>
          <p>
            Ürün uygunluğu, çap seçenekleri, stok ve fiyat bilgisi için telefon
            veya WhatsApp üzerinden hızlıca ulaşabilirsiniz.
          </p>
        </div>

        <div className="iletisim-alani">
          <div className="iletisim-satir">
            <span>Firma</span>
            <strong>Eralp Ticaret</strong>
          </div>

          <div className="iletisim-satir">
            <span>Adres</span>
            <strong>
              Topçular Mah. Çiftlik Sokak No: 8 Daire: 3 Değirmendere /
              Gölcük / Kocaeli
            </strong>
          </div>

          <div className="iletisim-satir">
            <span>Telefon</span>
            <strong>+90 537 015 08 63</strong>
          </div>

          <div className="iletisim-butonlar">
            <a className="ana-buton" href={whatsappLink}>
              WhatsApp’tan Yaz
            </a>

            <a className="koyu-buton" href="tel:+905370150863">
              Telefonla Ara
            </a>

            <a
              className="cizgi-buton"
              href={konumLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Konum Aç
            </a>
          </div>
        </div>
      </section>

      <footer className="alt">
        © 2026 Eralp Ticaret. Kraft hortum, esnek hava hortumu, soğutma ve
        havalandırma hortumu ürün bilgisi.
      </footer>

     <div className="mobil-yuzen-butonlar">
  <a className="mobil-yuzen-satir whatsapp" href={whatsappLink}>
    <span className="mobil-yuzen-yazi">Hemen iletişime geç</span>
    <span className="mobil-yuzen-icon">✉</span>
  </a>

  <a className="mobil-yuzen-satir telefon" href="tel:+905370150863">
    <span className="mobil-yuzen-yazi">Hemen ara</span>
    <span className="mobil-yuzen-icon">☎</span>
  </a>

  <a
    className="mobil-yuzen-satir konum"
    href={konumLink}
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="mobil-yuzen-yazi">Konum</span>
    <span className="mobil-yuzen-icon">⌖</span>
  </a>
</div>
    </main>
  );
}