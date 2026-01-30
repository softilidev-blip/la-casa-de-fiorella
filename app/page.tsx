"use client"

import { useEffect, useState } from "react";

export default function Home() {
  const [fechaEntrada, setFechaEntrada] = useState("");
  const [fechaSalida, setFechaSalida] = useState("");
  const [personas, setPersonas] = useState("");
  const [whatsAppError, setWhatsAppError] = useState("");
  const [heroIndex, setHeroIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [galleryLightboxImage, setGalleryLightboxImage] = useState<string | null>(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  // Array de todas las imágenes de la galería (47 fotos)
  const galleryImages = [
    "/images/casa-1.jpeg",
    "/images/casa-2.jpeg",
    "/images/casa-3.jpeg",
    "/images/casa-4.jpeg",
    "/images/casa-5.jpeg",
    "/images/casa-6.jpeg",
    "/images/casa-7.jpeg",
    "/images/casa-8.jpeg",
    "/images/casa-9.jpeg",
    "/images/casa-10.jpeg",
    "/images/casa-11.jpeg",
    "/images/casa-12.jpeg",
    "/images/casa-13.jpeg",
    "/images/casa-14.jpeg",
    "/images/casa-15.jpeg",
    "/images/casa-16.jpeg",
    "/images/casa-17.jpeg",
    "/images/casa-18.jpeg",
    "/images/casa-19.jpeg",
    "/images/casa-20.jpeg",
    "/images/casa-21.jpeg",
    "/images/casa-22.jpeg",
    "/images/casa-23.jpeg",
    "/images/casa-24.jpeg",
    "/images/casa-25.jpeg",
    "/images/casa-26.jpeg",
    "/images/casa-27.jpeg",
    "/images/casa-28.jpeg",
    "/images/casa-29.jpeg",
    "/images/casa-30.jpeg",
    "/images/casa-31.jpeg",
    "/images/casa-32.jpeg",
    "/images/casa-33.jpeg",
    "/images/casa-34.jpeg",
    "/images/casa-35.jpeg",
    "/images/casa-36.jpeg",
    "/images/casa-37.jpeg",
    "/images/casa-38.jpeg",
    "/images/casa-39.jpeg",
    "/images/casa-40.jpeg",
    "/images/casa-41.jpeg",
    "/images/casa-42.jpeg",
    "/images/casa-43.jpeg",
    "/images/casa-44.jpeg",
    "/images/casa-45.jpeg",
    "/images/casa-46.jpeg",
    "/images/casa-47.jpeg",
  ];

  // Configuración de paginación
  const photosPerPage = 24;
  const totalPages = Math.ceil(galleryImages.length / photosPerPage);
  const startIndex = (currentPage - 1) * photosPerPage;
  const endIndex = startIndex + photosPerPage;
  const currentPhotos = galleryImages.slice(startIndex, endIndex);

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

  // useEffect para navegación con teclado en la galería
  useEffect(() => {
    if (!galleryLightboxImage) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setGalleryLightboxImage(null);
      } else if (event.key === "ArrowLeft") {
        navigatePrevious();
      } else if (event.key === "ArrowRight") {
        navigateNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [galleryLightboxImage, currentGalleryIndex]);

  const navigateNext = () => {
    const nextIndex = (currentGalleryIndex + 1) % galleryImages.length;
    setCurrentGalleryIndex(nextIndex);
    setGalleryLightboxImage(galleryImages[nextIndex]);
  };

  const navigatePrevious = () => {
    const prevIndex = (currentGalleryIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentGalleryIndex(prevIndex);
    setGalleryLightboxImage(galleryImages[prevIndex]);
  };

  const openGalleryLightbox = (imagePath: string) => {
    const index = galleryImages.indexOf(imagePath);
    setCurrentGalleryIndex(index);
    setGalleryLightboxImage(imagePath);
  };

  const handleWhatsAppClick = () => {
    if (!fechaEntrada || !fechaSalida || !personas) {
      setWhatsAppError("Por favor completa las fechas y el número de personas.");
      return;
    }

    const phone = "593993424558";
    const message = `Hola, quisiera consultar la disponibilidad en La Casa de Fiorella.

Estamos interesados en hospedarnos desde el ${fechaEntrada} hasta el ${fechaSalida} y seríamos ${personas} personas.

¿Tendrían disponibilidad en esas fechas?`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    setWhatsAppError("");
    window.open(url, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#f6f1e9] text-slate-800 antialiased">

      {/* Header */}
      <header className="w-full border-b border-[#d8d1c5] bg-white">
        <div className="mx-auto flex w-full max-w-5xl items-center px-6 py-4">
          <img
            src="/images/lacasadefiorellaOK.jpg"
            alt="La Casa de Fiorella"
            className="h-20 w-auto object-contain"
          />
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
              className={`absolute inset-0 h-full w-full cursor-pointer object-cover transition-opacity duration-1000 ease-in-out ${index === heroIndex ? "opacity-100" : "opacity-0"
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setGalleryLightboxImage(null)}
        >
          {/* Botón anterior (izquierda) - Fijo en desktop */}
          <button
            type="button"
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/30 p-2 text-black transition-all hover:bg-white/50 hover:scale-110 md:fixed md:left-8 md:p-3"
            onClick={(e) => {
              e.stopPropagation();
              navigatePrevious();
            }}
            aria-label="Foto anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-7 md:h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Botón siguiente (derecha) - Fijo en desktop */}
          <button
            type="button"
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/30 p-2 text-black transition-all hover:bg-white/50 hover:scale-110 md:fixed md:right-8 md:p-3"
            onClick={(e) => {
              e.stopPropagation();
              navigateNext();
            }}
            aria-label="Foto siguiente"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-7 md:h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Contenedor de la imagen */}
          <div className="relative max-h-[90vh] max-w-[95vw] md:max-w-[70vw]">
            {/* Botón cerrar */}
            <button
              type="button"
              className="absolute right-3 top-3 z-10 rounded-full bg-black/60 px-2 py-1 text-xs font-semibold text-white/90 transition-all hover:bg-black/80"
              onClick={(e) => {
                e.stopPropagation();
                setGalleryLightboxImage(null);
              }}
              aria-label="Cerrar"
            >
              ×
            </button>

            {/* Imagen */}
            <img
              src={galleryLightboxImage}
              alt=""
              className="max-h-[90vh] max-w-[95vw] rounded-md object-contain md:max-w-[70vw]"
              onClick={(event) => event.stopPropagation()}
            />

            {/* Indicador de posición */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-xs text-white/90 md:bottom-3">
              {currentGalleryIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}

      {/* La Casa */}
      <section className="scroll-mt-24 border-t border-transparent bg-[linear-gradient(to_right,transparent,rgba(0,0,0,0.08),transparent)] bg-[length:100%_1px] bg-[position:top_left] bg-no-repeat px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h3 className="text-2xl font-semibold tracking-tight text-[#3f4a3a] md:text-3xl">
            La Casa
          </h3>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700 md:text-lg">
            Casa acogedora con piscina, ideal para descansar en familia o con amigos. Está cerca del mar y en una zona tranquila de Salinas, con espacios amplios y todas las comodidades necesarias para una estadía cómoda y privada.
          </p>
        </div>
      </section>

      {/* Fotos */}
      <section className="border-t border-transparent bg-[linear-gradient(to_right,transparent,rgba(0,0,0,0.08),transparent)] bg-[length:100%_1px] bg-[position:top_left] bg-no-repeat px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          {/* Header con título y paginador */}
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold tracking-tight text-[#3f4a3a] md:text-3xl">
              Fotos
            </h3>

            {/* Paginador */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="rounded-sm bg-[#3f4a3a] px-3 py-1.5 text-xs font-semibold text-[#f6f1e9] transition duration-300 ease-out hover:-translate-y-px hover:bg-[#475242] hover:shadow-sm disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                Anterior
              </button>
              <span className="text-sm text-slate-600">
                {currentPage} / {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="rounded-sm bg-[#3f4a3a] px-3 py-1.5 text-xs font-semibold text-[#f6f1e9] transition duration-300 ease-out hover:-translate-y-px hover:bg-[#475242] hover:shadow-sm disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                Siguiente
              </button>
            </div>
          </div>

          {/* Grid de fotos dinámico */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {currentPhotos.map((photo, index) => {
              const photoNumber = startIndex + index + 1;
              return (
                <img
                  key={photo}
                  src={photo}
                  alt={`Casa ${photoNumber}`}
                  className="h-56 w-full cursor-pointer rounded-md object-cover transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-md md:h-64"
                  onClick={() => openGalleryLightbox(photo)}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Disponibilidad */}
      <section id="disponibilidad" className="border-t border-transparent bg-[linear-gradient(to_right,transparent,rgba(0,0,0,0.08),transparent)] bg-[length:100%_1px] bg-[position:top_left] bg-no-repeat px-6 py-16 md:py-24">
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
                  onChange={(event) => {
                    setFechaEntrada(event.target.value);
                    setWhatsAppError("");
                  }}
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
                  onChange={(event) => {
                    setFechaSalida(event.target.value);
                    setWhatsAppError("");
                  }}
                  className="w-full rounded-sm border border-[#cfc7bb] bg-white px-3 py-2 text-slate-800 focus:border-[#8b947f] focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-slate-600" htmlFor="personas">
                  Número de personas
                </label>
                <input
                  id="personas"
                  type="number"
                  min="1"
                  value={personas}
                  onChange={(event) => {
                    setPersonas(event.target.value);
                    setWhatsAppError("");
                  }}
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
            {whatsAppError && (
              <p className="mt-2 text-xs text-rose-600">{whatsAppError}</p>
            )}
            <p className="mt-2 text-xs text-slate-500">
              Respuesta rápida · Atención directa · Sin intermediarios
            </p>
          </div>

          {/* Redes Sociales */}
          <h3 className="mt-10 text-2xl font-semibold tracking-tight text-[#3f4a3a] md:text-3xl">
            Redes Sociales
          </h3>
          <div className="mt-8 flex flex-wrap items-center justify-start gap-6 md:gap-10">
            <a
              href="https://www.instagram.com/la_casa_de_fiorella?utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110 focus:outline-none"
            >
              <img
                src="/images/instagramicon.png"
                alt="Instagram"
                className="h-12 w-12 object-contain"
              />
            </a>
            <a
              href="https://www.tiktok.com/@la_casa_de_fiorella"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110 focus:outline-none"
            >
              <img
                src="/images/tiktokicon.png"
                alt="TikTok"
                className="h-12 w-12 object-contain"
              />
            </a>
            <a
              href="https://www.airbnb.com/rooms/1452135696889919950?source_impression_id=p3_1769032465_P3CjrFA58gVCLvJ1"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110 focus:outline-none"
            >
              <img
                src="/images/airbnbicon.png"
                alt="Airbnb"
                className="h-10 w-10 object-contain"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <section className="border-t border-transparent bg-[linear-gradient(to_right,transparent,rgba(0,0,0,0.08),transparent)] bg-[length:100%_1px] bg-[position:top_left] bg-no-repeat px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h3 className="text-2xl font-semibold tracking-tight text-[#3f4a3a] md:text-3xl">
            Ubicación
          </h3>
          <div className="mt-6 overflow-hidden rounded-md border border-[#d8d1c5] bg-white/70">
            <div className="relative h-64 w-full sm:h-80 lg:h-[420px]">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.google.com/maps?q=-2.202338,-80.979256&z=17&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación aproximada"
              />
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-600">
            Zona tranquila · Ubicación aproximada por privacidad
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-transparent bg-[linear-gradient(to_right,transparent,rgba(0,0,0,0.08),transparent)] bg-[length:100%_1px] bg-[position:top_left] bg-no-repeat px-6 py-8 text-sm text-slate-600">
        <div className="mx-auto max-w-5xl">
          © La Casa de Fiorella
        </div>
      </footer>

    </main>
  );
}
