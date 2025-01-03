import Link from "next/link";
import Image from "next/image";

export default function Index() {
	
  return (
    <>
      <div className="py-20 mb-30 max-w-3xl mx-auto">
        <div className="flex w-full justify-center">
      <img width="500" src="/img/bck.png" />
      </div>
        <p className="animateHeader text-4xl font-extrabold text-center text-white">
          Levis Group
        </p>
        <p className="animateHeader text-white text-opacity-50 text-center mt-5">
        Levis Group sayesinde tüm müzik platformlarında şarkı paylaşıp resmi sanatçı olmaya ne dersin?
	  </p>
        <div className="animateHeader mt-10 flex flex-wrap items-center justify-center gap-x-4">
  
            <Link href={"https://instagram.com/groupoflevis/"}>
              <a
                className={
                  "flex items-center px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " 
                }
              >
          Bize Ulaş
              </a>
              </Link>
        </div>

        <div style={{ zIndex: '-1' }} className="hidden xl:block undrag pointer-events-none opacity-10 -left-[10vw] absolute top-[8vw] h-[35vw] flex-shrink-0 grayscale rotate-[1deg]">
        <Image width="600" height="600" src="/img/gift-left.png"  />
        </div>
        <div style={{ zIndex: '-1' }} className="hidden xl:block undrag opacity-10 pointer-events-none -right-[15vw] absolute top-[13vw] h-[90vw] grayscale -rotate-9">
        <Image  width="600" height="600" src="/img/gift-right.png"  />
        </div>
      </div>



      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12 py-24">
          <div className="col-span-4">
            <p className="text-white text-4xl font-bold" dangerouslySetInnerHTML={{ __html:"Levis Group" }} />
            <p className="text-white text-md font-medium text-gray-500/75" dangerouslySetInnerHTML={{ __html: "Şarkıları nasıl yükleyeceğini bilmiyor musun? YouTube hesabımızdaki videolara göz atabilirsin." }}/>
            <a href="https://www.youtube.com/@LevisGroup" className={"mt-10 flex items-center px-4 justify-center gap-x-2 shadow-lg shadow-amber-600/20 cursor-pointer rounded-xl py-4 font-medium bg-gradient-to-r from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white"}>
              <i className="fab fa-youtube mr-2" />YouTube Hesabımız
            </a>
          </div>

          <div className="col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
           
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-cogs text-2xl text-amber-500`} /> Özel Seçenekler</p>
                  <p className="text-gray-500 line-clamp-4">Şarkılarınız sadece sizin istediğiniz platformlarda paylaşılır!</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-universal-access text-2xl text-amber-500`} /> Kişiselleştirme</p>
                  <p className="text-gray-500 line-clamp-4">Şarkılarınız yapay zeka ve özel müzik ekibimizle gözden geçirilir istediğiniz özellikler şarkınıza eklenir!</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-shield text-2xl text-amber-500`} /> Güvenlik</p>
                  <p className="text-gray-500 line-clamp-4">Göz atabileceğiniz ve geliştirmemize yardımcı olabileceğiniz güvenli bir plak şirketi!</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-ticket text-2xl text-amber-500`} /> Destek</p>
                  <p className="text-gray-500 line-clamp-4">En iyi ekip arkadaşlarımızla, yardıma ihtiyacı olan herkese en hızlı şekilde yanıt veriyoruz.</p>
                </div>
              </div>
          </div>
      </div>



      <div className="flex flex-row w-full h-auto lg:h-56 my-14 lg:my-40 bg-gradient-to-br lg:px-30 from-neutral-900/90 flex items-center justify-start to-neutral-900/50 rounded-lg p-1 shadow-md">
              <>
                <div className="lg:mx-4 lg:p-8 py-4 lg:py-16 flex items-center justify-center flex-col text-center w-full lg:w-auto lg:text-left lg:flex-none">
                  <img src="https://instagram.fist4-1.fna.fbcdn.net/v/t51.2885-19/472055492_614647347752184_8141419209685174006_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fist4-1.fna.fbcdn.net&_nc_cat=100&_nc_oc=Q6cZ2AETdHbISgN3DHdDWKJGd1W6gOGW7JoByzUSV_2jwgO1uZshd-TEQ8zKnliT6nbhFaw&_nc_ohc=CFjS3yfXXX4Q7kNvgHS-07G&_nc_gid=417f9ad4b2d74362a58e6e50c72c0333&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYDZUi46BcyuZjqTnKxhiQngdDZmqvBb0H3Wcr2Md5EdYA&oe=677E2EBA&_nc_sid=7d3ac5"  width="256" className="lg:hidden rounded-xl mb-5 shadow-xl shadow-black" />
                  <p className="text-3xl text-white font-semibold">Hemen başla!</p>
                  <p className="text-md text-white font-medium text-gray-500 line-clamp-5">Eğer hazırsan şimdi bize ulaş ve şarkıların günü gününe yükleme sürecine geçsin!</p>
                </div>
                <img src="https://instagram.fist4-1.fna.fbcdn.net/v/t51.2885-19/472055492_614647347752184_8141419209685174006_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fist4-1.fna.fbcdn.net&_nc_cat=100&_nc_oc=Q6cZ2AETdHbISgN3DHdDWKJGd1W6gOGW7JoByzUSV_2jwgO1uZshd-TEQ8zKnliT6nbhFaw&_nc_ohc=CFjS3yfXXX4Q7kNvgHS-07G&_nc_gid=417f9ad4b2d74362a58e6e50c72c0333&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYDZUi46BcyuZjqTnKxhiQngdDZmqvBb0H3Wcr2Md5EdYA&oe=677E2EBA&_nc_sid=7d3ac5" className="hidden lg:block rounded-xl perspective-right shadow-xl shadow-black" />
              </>
      
        </div>

      </>
  )
}
