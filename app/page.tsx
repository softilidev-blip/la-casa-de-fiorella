"use client"

import { useEffect, useState } from "react";

export default function Home() {
  const [fechaEntrada, setFechaEntrada] = useState("");
  const [fechaSalida, setFechaSalida] = useState("");
  const [personas, setPersonas] = useState("");
  const [heroIndex, setHeroIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [galleryLightboxImage, setGalleryLightboxImage] = useState<string | null>(null);

  const heroImages = [
    "/images/casa-1.jpeg",
    "/images/casa-2.jpeg",
    "/images/casa-3.jpeg",
    "/images/casa-6.jpeg",
    "/images/casa-7.jpeg",
    "/images/casa-8.jpeg",
    "/images/casa-9.jpeg",
    "/images/casa-10.jpeg",
    "/images/casa-15.jpeg",
    "/images/casa-16.jpeg",
    "/images/casa-19.jpeg",
    "/images/casa-20.jpeg",
    "/images/casa-21.jpeg",
    "/images/casa-22.jpeg",
    "/images/casa-23.jpeg",
    "/images/casa-24.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  useEffect(() => {
    if (!lightboxImage) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImage]);

  const handleWhatsAppClick = () => {
    const phone = "593999999999";
    const message = `Hola, somos ${personas} personas y queremos hospedarnos del ${fechaEntrada} al ${fechaSalida}. \u00bfTienes disponibilidad?`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#f6f1e9] text-slate-800 antialiased">
      
      {/* Header */}
      <header className="w-full border-b border-[#d8d1c5]">
        <div className="mx-auto flex w-full max-w-5xl items-center px-6 py-5">
          <h1 className="text-base font-semibold tracking-tight text-[#3f4a3a] md:text-lg">
            La Casa de Fiorella
          </h1>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <img
              key={image}
              src={image}
              alt=""
              className={`absolute inset-0 h-full w-full cursor-pointer object-cover transition-opacity duration-1000 ease-in-out ${
                index === heroIndex ? "opacity-100" : "opacity-0"
              }`}
              onClick={() => setLightboxImage(image)}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-5xl items-end px-6 pb-16 pt-28 md:min-h-[80vh] md:pb-24 md:pt-36">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              La Casa de Fiorella
            </h2>
            <p className="mt-4 text-base text-white/85 md:text-xl">
              Tu descanso frente al mar
            </p>
          </div>
        </div>
      </section>
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative mx-6 max-h-[90vh] w-full max-w-6xl">
            <button
              type="button"
              className="absolute right-3 top-3 rounded-sm bg-[#3f4a3a] px-3 py-1 text-xs font-semibold text-[#f6f1e9] shadow-sm"
              onClick={() => setLightboxImage(null)}
              aria-label="Cerrar"
            >
              Cerrar
            </button>
            <img
              src={lightboxImage}
              alt=""
              className="h-full max-h-[90vh] w-full rounded-md object-contain"
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        </div>
      )}
      {galleryLightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setGalleryLightboxImage(null)}
        >
          <div className="relative max-h-[90vh] max-w-[95vw]">
            <button
              type="button"
              className="absolute right-3 top-3 rounded-full bg-black/60 px-2 py-1 text-xs font-semibold text-white/90"
              onClick={() => setGalleryLightboxImage(null)}
              aria-label="Cerrar"
            >
              ×
            </button>
            <img
              src={galleryLightboxImage}
              alt=""
              className="max-h-[90vh] max-w-[95vw] rounded-md object-contain"
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* La Casa */}
      <section id="disponibilidad" className="scroll-mt-24 border-t border-transparent bg-[linear-gradient(to_right,transparent,rgba(0,0,0,0.08),transparent)] bg-[length:100%_1px] bg-[position:top_left] bg-no-repeat px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h3 className="text-2xl font-semibold tracking-tight text-[#3f4a3a] md:text-3xl">
            La Casa
          </h3>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700 md:text-lg">
            Descripcion de la casa.
          </p>
        </div>
      </section>

      {/* Fotos */}
      <section className="border-t border-transparent bg-[linear-gradient(to_right,transparent,rgba(0,0,0,0.08),transparent)] bg-[length:100%_1px] bg-[position:top_left] bg-no-repeat px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h3 className="text-2xl font-semibold tracking-tight text-[#3f4a3a] md:text-3xl">
            Fotos
          </h3>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <img src="/images/casa-1.jpeg" alt="Casa 1" className="h-56 w-full cursor-pointer rounded-md object-cover transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-md md:h-64" onClick={() => setGalleryLightboxImage("/images/casa-1.jpeg")} />
            <img src="/images/casa-2.jpeg" alt="Casa 2" className="h-56 w-full cursor-pointer rounded-md object-cover transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-md md:h-64" onClick={() => setGalleryLightboxImage("/images/casa-2.jpeg")} />
            <img src="/images/casa-3.jpeg" alt="Casa 3" className="h-56 w-full cursor-pointer rounded-md object-cover transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-md md:h-64" onClick={() => setGalleryLightboxImage("/images/casa-3.jpeg")} />
            <img src="/images/casa-4.jpeg" alt="Casa 4" className="h-56 w-full cursor-pointer rounded-md object-cover transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-md md:h-64" onClick={() => setGalleryLightboxImage("/images/casa-4.jpeg")} />
            <img src="/images/casa-5.jpeg" alt="Casa 5" className="h-56 w-full cursor-pointer rounded-md object-cover transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-md md:h-64" onClick={() => setGalleryLightboxImage("/images/casa-5.jpeg")} />
            <img src="/images/casa-6.jpeg" alt="Casa 6" className="h-56 w-full cursor-pointer rounded-md object-cover transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-md md:h-64" onClick={() => setGalleryLightboxImage("/images/casa-6.jpeg")} />
            <img src="/images/casa-7.jpeg" alt="Casa 7" className="h-56 w-full cursor-pointer rounded-md object-cover transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-md md:h-64" onClick={() => setGalleryLightboxImage("/images/casa-7.jpeg")} />
            <img src="/images/casa-8.jpeg" alt="Casa 8" className="h-56 w-full cursor-pointer rounded-md object-cover transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-md md:h-64" onClick={() => setGalleryLightboxImage("/images/casa-8.jpeg")} />
            <img src="/images/casa-9.jpeg" alt="Casa 9" className="h-56 w-full cursor-pointer rounded-md object-cover transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-md md:h-64" onClick={() => setGalleryLightboxImage("/images/casa-9.jpeg")} />
            <img src="/images/casa-10.jpeg" alt="Casa 10" className="h-56 w-full cursor-pointer rounded-md object-cover transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-md md:h-64" onClick={() => setGalleryLightboxImage("/images/casa-10.jpeg")} />
            <img src="/images/casa-11.jpeg" alt="Casa 11" className="h-56 w-full cursor-pointer rounded-md object-cover transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-md md:h-64" onClick={() => setGalleryLightboxImage("/images/casa-11.jpeg")} />
            <img src="/images/casa-12.jpeg" alt="Casa 12" className="h-56 w-full cursor-pointer rounded-md object-cover transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-md md:h-64" onClick={() => setGalleryLightboxImage("/images/casa-12.jpeg")} />
            <img src="/images/casa-13.jpeg" alt="Casa 13" className="h-56 w-full cursor-pointer rounded-md object-cover transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-md md:h-64" onClick={() => setGalleryLightboxImage("/images/casa-13.jpeg")} />
            <img src="/images/casa-14.jpeg" alt="Casa 14" className="h-56 w-full cursor-pointer rounded-md object-cover transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-md md:h-64" onClick={() => setGalleryLightboxImage("/images/casa-14.jpeg")} />
            <img src="/images/casa-15.jpeg" alt="Casa 15" className="h-56 w-full cursor-pointer rounded-md object-cover transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-md md:h-64" onClick={() => setGalleryLightboxImage("/images/casa-15.jpeg")} />
            <img src="/images/casa-16.jpeg" alt="Casa 16" className="h-56 w-full cursor-pointer rounded-md object-cover transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-md md:h-64" onClick={() => setGalleryLightboxImage("/images/casa-16.jpeg")} />
            <img src="/images/casa-17.jpeg" alt="Casa 17" className="h-56 w-full cursor-pointer rounded-md object-cover transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-md md:h-64" onClick={() => setGalleryLightboxImage("/images/casa-17.jpeg")} />
            <img src="/images/casa-19.jpeg" alt="Casa 19" className="h-56 w-full cursor-pointer rounded-md object-cover transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-md md:h-64" onClick={() => setGalleryLightboxImage("/images/casa-19.jpeg")} />
            <img src="/images/casa-20.jpeg" alt="Casa 20" className="h-56 w-full cursor-pointer rounded-md object-cover transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-md md:h-64" onClick={() => setGalleryLightboxImage("/images/casa-20.jpeg")} />
            <img src="/images/casa-21.jpeg" alt="Casa 21" className="h-56 w-full cursor-pointer rounded-md object-cover transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-md md:h-64" onClick={() => setGalleryLightboxImage("/images/casa-21.jpeg")} />
            <img src="/images/casa-22.jpeg" alt="Casa 22" className="h-56 w-full cursor-pointer rounded-md object-cover transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-md md:h-64" onClick={() => setGalleryLightboxImage("/images/casa-22.jpeg")} />
            <img src="/images/casa-23.jpeg" alt="Casa 23" className="h-56 w-full cursor-pointer rounded-md object-cover transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-md md:h-64" onClick={() => setGalleryLightboxImage("/images/casa-23.jpeg")} />
            <img src="/images/casa-24.jpeg" alt="Casa 24" className="h-56 w-full cursor-pointer rounded-md object-cover transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-md md:h-64" onClick={() => setGalleryLightboxImage("/images/casa-24.jpeg")} />
          </div>
        </div>
      </section>

      {/* Disponibilidad */}
      <section className="border-t border-transparent bg-[linear-gradient(to_right,transparent,rgba(0,0,0,0.08),transparent)] bg-[length:100%_1px] bg-[position:top_left] bg-no-repeat px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h3 className="text-2xl font-semibold tracking-tight text-[#3f4a3a] md:text-3xl">
            Disponibilidad
          </h3>
          <div className="mt-8 max-w-3xl rounded-md border border-[#d8d1c5] bg-white/70 p-5 md:p-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-slate-600" htmlFor="fecha-entrada">
                  Fecha de entrada
                </label>
                <input
                  id="fecha-entrada"
                  type="date"
                  value={fechaEntrada}
                  onChange={(event) => setFechaEntrada(event.target.value)}
                  className="w-full rounded-sm border border-[#cfc7bb] bg-white px-3 py-2 text-slate-800 focus:border-[#8b947f] focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-slate-600" htmlFor="fecha-salida">
                  Fecha de salida
                </label>
                <input
                  id="fecha-salida"
                  type="date"
                  value={fechaSalida}
                  onChange={(event) => setFechaSalida(event.target.value)}
                  className="w-full rounded-sm border border-[#cfc7bb] bg-white px-3 py-2 text-slate-800 focus:border-[#8b947f] focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-slate-600" htmlFor="personas">
                  Numero de personas
                </label>
                <input
                  id="personas"
                  type="number"
                  min="1"
                  value={personas}
                  onChange={(event) => setPersonas(event.target.value)}
                  className="w-full rounded-sm border border-[#cfc7bb] bg-white px-3 py-2 text-slate-800 focus:border-[#8b947f] focus:outline-none"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={handleWhatsAppClick}
              className="mt-6 w-full rounded-sm bg-[#3f4a3a] px-5 py-3 text-sm font-semibold text-[#f6f1e9] transition duration-300 ease-out hover:-translate-y-px hover:bg-[#475242] hover:shadow-sm sm:w-auto"
            >
              Consultar disponibilidad por WhatsApp
            </button>
            <p className="mt-2 text-xs text-slate-500">
              Respuesta r\u00e1pida \u00b7 Atenci\u00f3n directa \u00b7 Sin intermediarios
            </p>
          </div>
        </div>
      </section>

      {/* Ubicacion */}
      <section className="border-t border-transparent bg-[linear-gradient(to_right,transparent,rgba(0,0,0,0.08),transparent)] bg-[length:100%_1px] bg-[position:top_left] bg-no-repeat px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h3 className="text-2xl font-semibold tracking-tight text-[#3f4a3a] md:text-3xl">
            Ubicacion
          </h3>
          <div className="mt-6 overflow-hidden rounded-md border border-[#d8d1c5] bg-white/70">
            <div className="relative h-64 w-full sm:h-80 lg:h-[420px]">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.google.com/maps?q=-2.202338,-80.979256&z=15&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicacion aproximada"
              />
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-600">
            Zona tranquila \u00b7 Ubicaci\u00f3n aproximada por privacidad
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-transparent bg-[linear-gradient(to_right,transparent,rgba(0,0,0,0.08),transparent)] bg-[length:100%_1px] bg-[position:top_left] bg-no-repeat px-6 py-8 text-sm text-slate-600">
        <div className="mx-auto max-w-5xl">
          Ac La Casa de Fiorella
        </div>
      </footer>

    </main>
  );
}
