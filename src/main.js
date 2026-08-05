import './style.css'

const asset = (filename) => `/assets/${filename}`
const logoAsset = asset('logo-jjm-investment.png')
const iconAsset = (group, filename) => asset(`icons/${group}/${filename}`)

const icons = {
  arrow: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>`,
  chevron: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m9 5 7 7-7 7" />
    </svg>`,
}

const heroBenefitIcons = [
  iconAsset('beneficios', '01_proteccion.png'),
  iconAsset('beneficios', '02_prevencion.png'),
  iconAsset('beneficios', '03_respuesta.png'),
]

const contactIcons = {
  phone: iconAsset('contacto', '01_telefono.png'),
  email: iconAsset('contacto', '02_correo.png'),
  availability: iconAsset('contacto', '03_atencion_24_7.png'),
  location: iconAsset('contacto', '04_ubicacion.png'),
  whatsapp: iconAsset('contacto', '05_whatsapp.png'),
}

const benefits = [
  {
    icon: iconAsset('nosotros', '01_profesionalismo.png'),
    title: 'Profesionalismo',
    description: 'Personal certificado y en constante capacitación.',
  },
  {
    icon: iconAsset('nosotros', '02_discrecion.png'),
    title: 'Discreción',
    description: 'Operaciones confidenciales con máxima reserva.',
  },
  {
    icon: iconAsset('nosotros', '03_cobertura_integral.png'),
    title: 'Cobertura integral',
    description: 'Soluciones adaptadas a cada entorno y necesidad.',
  },
  {
    icon: iconAsset('nosotros', '04_disponibilidad_24_7.png'),
    title: 'Disponibilidad 24/7',
    description: 'Atención continua para su tranquilidad.',
  },
]

const services = [
  {
    icon: iconAsset('servicios', '01_vigilancia_proteccion_fisica.png'),
    title: 'Vigilancia y Protección Física',
    description:
      'Servicio de guardias de seguridad certificados y entrenados para la protección de instalaciones, condominios, residencias, comercios, hospitales y eventos.',
  },
  {
    icon: iconAsset('servicios', '02_proteccion_personal_escoltas.png'),
    title: 'Protección Personal (Escoltas)',
    description: 'Agentes especializados en la seguridad de ejecutivos y personas de alto perfil.',
  },
  {
    icon: iconAsset('servicios', '03_seguridad_para_eventos.png'),
    title: 'Seguridad para Eventos',
    description: 'Planes de seguridad personalizados para conciertos, conferencias y eventos masivos.',
  },
  {
    icon: iconAsset('servicios', '04_custodia_proteccion_perimetral.png'),
    title: 'Custodia y Protección Perimetral',
    description: 'Resguardo de perímetros en áreas industriales.',
  },
  {
    icon: iconAsset('servicios', '05_asesorias_auditoria_seguridad.png'),
    title: 'Asesorías y Auditoría de Seguridad',
    description: 'Evaluación de vulnerabilidad.',
  },
  {
    icon: iconAsset('servicios', '06_gestion_de_crisis.png'),
    title: 'Gestión de Crisis',
  },
]

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <div class="header-inner">
      <a class="brand" href="#inicio" aria-label="JJM Investment, inicio">
        <span class="brand-logo-frame">
          <img src="${logoAsset}" alt="Logo oficial de JJM Investment" />
        </span>
        <span class="brand-copy">
          <strong>JJM INVESTMENT</strong>
          <span>SEGURIDAD PRIVADA</span>
        </span>
      </a>

      <nav class="main-nav" aria-label="Navegación principal">
        <a class="is-active" href="#inicio" data-nav="inicio">Inicio</a>
        <a href="#nosotros" data-nav="nosotros">Nosotros</a>
        <a href="#servicios" data-nav="servicios">Servicios</a>
      </nav>

      <div class="theme-control">
        <button
          class="theme-toggle"
          id="theme-toggle"
          type="button"
          role="switch"
          aria-checked="false"
          aria-label="Activar modo oscuro"
        >
          <svg class="theme-icon theme-icon-sun" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="3.5" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
          <span class="theme-thumb"></span>
          <svg class="theme-icon theme-icon-moon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20 15.5A8 8 0 0 1 8.5 4 8 8 0 1 0 20 15.5Z" />
          </svg>
        </button>
        <span>Modo oscuro</span>
      </div>
    </div>
  </header>

  <main>
    <section class="hero-section" id="inicio" aria-labelledby="hero-title">
      <div class="hero-layout">
        <div class="hero-copy" data-reveal="left">
          <p class="eyebrow">SEGURIDAD QUE PROTEGE LO QUE MÁS IMPORTA</p>
          <h1 id="hero-title">Protección profesional para personas, instalaciones y eventos.</h1>
          <p class="hero-description">
            Soluciones de seguridad privada diseñadas para resguardar lo que más importa: personas, activos e instituciones.
          </p>
          <a
            class="primary-cta"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=invesmetjjm@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Conocer servicios</span>
            ${icons.arrow}
          </a>
        </div>

        <div class="hero-logo-stage">
          <span class="logo-orbit" data-reveal="bottom" style="--reveal-delay: 100ms">
            <span class="logo-radar-effect" aria-hidden="true"></span>
            <img src="${logoAsset}" alt="Logo oficial de JJM Investment" />
          </span>
        </div>

        <div class="hero-media" data-reveal="right">
          <img
            class="hero-camera-image"
            src="${asset('camara-seguridad-hero.png')}"
            alt="Cámara de seguridad y principios de protección, prevención y respuesta"
          />
          <span class="hero-benefit-icons" aria-hidden="true">
            ${heroBenefitIcons
              .map(
                (icon, index) => `
                  <img
                    class="icon-hero-benefit icon-hero-benefit-${index + 1}"
                    src="${icon}"
                    alt=""
                  />
                `,
              )
              .join('')}
          </span>
        </div>
      </div>
    </section>

    <section class="about-section" id="nosotros" aria-labelledby="about-title">
      <div class="section-container about-main">
        <div class="about-image-frame" data-reveal="left">
          <img
            src="${asset('uniforme-jjm-bordes-difuminados.png')}"
            alt="Uniforme corporativo de JJM Investment"
          />
        </div>

        <div class="about-copy" data-reveal="bottom">
          <p class="section-label">NOSOTROS</p>
          <h2 id="about-title">Seguridad planificada para cada entorno.</h2>
          <p>
            JJM Investment es una empresa especializada en soluciones de seguridad privada. Brindamos servicios de vigilancia, protección personal y seguridad para eventos, mediante personal altamente capacitado y tecnología confiable.
          </p>
          <p>
            Nuestra atención se complementa con evaluación de vulnerabilidades, protección perimetral y gestión de crisis para fortalecer la prevención y la capacidad de respuesta de nuestros clientes.
          </p>
        </div>

        <div class="benefits-grid">
          ${benefits
            .map(
              ({ icon, title, description }, index) => `
                <article
                  class="benefit-item"
                  data-reveal="${['left', 'bottom', 'bottom', 'right'][index]}"
                  style="--reveal-delay: ${index * 65}ms"
                >
                  <span class="benefit-icon">
                    <img class="icon-benefit" src="${icon}" alt="" aria-hidden="true" />
                  </span>
                  <span class="benefit-copy">
                    <strong>${title}</strong>
                    <span>${description}</span>
                  </span>
                </article>
              `,
            )
            .join('')}
        </div>
      </div>
    </section>

    <section class="services-section" id="servicios" aria-labelledby="services-title">
      <div class="section-container">
        <div class="services-heading">
          <p class="section-label">SERVICIOS</p>
          <h2 id="services-title">Cobertura integral de seguridad.</h2>
        </div>

        <div class="services-grid">
          ${services
            .map(
              ({ icon, title, description }, index) => `
                <article
                  class="service-card"
                  data-reveal="bottom"
                  style="--reveal-delay: ${index * 70}ms"
                >
                  <span class="service-icon">
                    <img class="icon-service" src="${icon}" alt="" aria-hidden="true" />
                  </span>
                  <span class="service-copy">
                    <h3>${title}</h3>
                    ${description ? `<p>${description}</p>` : ''}
                  </span>
                  <span class="service-chevron" aria-hidden="true">${icons.chevron}</span>
                </article>
              `,
            )
            .join('')}
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="section-container footer-grid">
      <div class="footer-brand" data-reveal="left">
        <span class="footer-logo-frame">
          <img src="${logoAsset}" alt="Logo oficial de JJM Investment" />
        </span>
        <span class="brand-copy">
          <strong>JJM INVESTMENT</strong>
          <span>SEGURIDAD PRIVADA</span>
        </span>
      </div>

      <div class="footer-column footer-contact" data-reveal="bottom" style="--reveal-delay: 60ms">
        <h2>Contacto</h2>
        <p><span class="footer-icon"><img class="icon-contact" src="${contactIcons.phone}" alt="" aria-hidden="true" /></span><a href="tel:+50764215025">+507 6421-5025</a></p>
        <p><span class="footer-icon"><img class="icon-contact" src="${contactIcons.phone}" alt="" aria-hidden="true" /></span><a href="tel:+50766249066">+507 6624-9066</a></p>
        <p><span class="footer-icon"><img class="icon-contact" src="${contactIcons.email}" alt="" aria-hidden="true" /></span><a href="mailto:invesmetjjm@gmail.com">invesmetjjm@gmail.com</a></p>
        <p><span class="footer-icon"><img class="icon-contact" src="${contactIcons.availability}" alt="" aria-hidden="true" /></span><span>Atención 24/7</span></p>
      </div>

      <div class="footer-column footer-links" data-reveal="bottom" style="--reveal-delay: 120ms">
        <h2>Enlaces</h2>
        <a href="#inicio">Inicio</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#servicios">Servicios</a>
      </div>

      <div class="footer-location" data-reveal="right" style="--reveal-delay: 180ms">
        <span class="footer-icon"><img class="icon-contact" src="${contactIcons.location}" alt="" aria-hidden="true" /></span>
        <span>Panamá, Panamá</span>
      </div>
    </div>

    <div class="footer-bottom" data-reveal="bottom">
      <p>© 2026 JJM Investment. Todos los derechos reservados.</p>
    </div>
  </footer>

  <a
    class="whatsapp-button"
    href="https://wa.me/50764215025"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar por WhatsApp"
  >
    <span class="whatsapp-icon">
      <img class="icon-whatsapp" src="${contactIcons.whatsapp}" alt="" aria-hidden="true" />
    </span>
  </a>
`

const siteFooter = document.querySelector('.site-footer')
const whatsappButton = document.querySelector('.whatsapp-button')
let whatsappPositionFrame

const updateWhatsappPosition = () => {
  const visibleFooterHeight = Math.max(0, window.innerHeight - siteFooter.getBoundingClientRect().top)
  whatsappButton.style.setProperty('--footer-clearance', `${visibleFooterHeight}px`)
}

const scheduleWhatsappPositionUpdate = () => {
  if (whatsappPositionFrame) return
  whatsappPositionFrame = window.requestAnimationFrame(() => {
    updateWhatsappPosition()
    whatsappPositionFrame = null
  })
}

window.addEventListener('scroll', scheduleWhatsappPositionUpdate, { passive: true })
window.addEventListener('resize', scheduleWhatsappPositionUpdate)
updateWhatsappPosition()

const root = document.documentElement
const themeToggle = document.querySelector('#theme-toggle')
let themeTransitionTimeout

const getStoredTheme = () => {
  try {
    return localStorage.getItem('jjm-theme')
  } catch {
    return null
  }
}

const storeTheme = (theme) => {
  try {
    localStorage.setItem('jjm-theme', theme)
  } catch {
    // The selected theme still applies when browser storage is unavailable.
  }
}

const applyTheme = (theme) => {
  const isDark = theme === 'dark'
  root.dataset.theme = isDark ? 'dark' : 'light'
  themeToggle.setAttribute('aria-checked', String(isDark))
  themeToggle.setAttribute('aria-label', isDark ? 'Activar modo claro' : 'Activar modo oscuro')
}

applyTheme(getStoredTheme() === 'dark' ? 'dark' : 'light')

themeToggle.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark'
  root.classList.add('is-theme-transitioning')
  window.clearTimeout(themeTransitionTimeout)
  void root.offsetWidth
  applyTheme(nextTheme)
  storeTheme(nextTheme)
  themeTransitionTimeout = window.setTimeout(() => {
    root.classList.remove('is-theme-transitioning')
  }, 520)
})

const setupRevealAnimations = () => {
  const revealItems = [...document.querySelectorAll('[data-reveal]')]
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (reduceMotion || !('IntersectionObserver' in window)) return

  try {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -6% 0px',
      },
    )

    root.classList.add('reveal-ready')
    revealItems.forEach((item) => revealObserver.observe(item))
  } catch {
    root.classList.remove('reveal-ready')
  }
}

setupRevealAnimations()

const navLinks = [...document.querySelectorAll('[data-nav]')]
const trackedSections = [...document.querySelectorAll('main > section[id]')]
let scrollFrame

const updateActiveNavigation = () => {
  const marker = window.scrollY + Math.min(window.innerHeight * 0.32, 260)
  let currentSection = trackedSections[0]?.id

  trackedSections.forEach((section) => {
    if (section.offsetTop <= marker) currentSection = section.id
  })

  navLinks.forEach((link) => {
    const isActive = link.dataset.nav === currentSection
    link.classList.toggle('is-active', isActive)
    if (isActive) link.setAttribute('aria-current', 'page')
    else link.removeAttribute('aria-current')
  })
}

window.addEventListener(
  'scroll',
  () => {
    if (scrollFrame) return
    scrollFrame = window.requestAnimationFrame(() => {
      updateActiveNavigation()
      scrollFrame = null
    })
  },
  { passive: true },
)

window.addEventListener('resize', updateActiveNavigation)
updateActiveNavigation()
