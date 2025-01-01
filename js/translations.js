// Language switching functionality
class LanguageManager {
    constructor() {
        this.translations = {
            en: {
                services: "SERVICES",
                gallery: "GALLERY",
                information: "INFORMATION",
                infoHeader: "INFORMATION",
                schedule: "SCHEDULE A SHOOT",
                login: "LOGIN",
                portrait1: "SCHEDULE A SHOOT",
                portrait2: "PORTRAIT PHOTOGRAPHY",
                portrait3: "PORTRAIT PHOTOGRAPHY",
                subscribe: "SUBSCRIBE",
                signUp: "SIGN UP",
                privacy: "We respect your privacy.",
                siteMap: "SITE MAP",
                follow: "FOLLOW",
                newsUpdates: "Sign up with your email address to receive news and updates.",
                all: "ALL",
                headshots: "HEADSHOTS",
                branding: "COMPANY BRANDING",
                events: "COMPANY EVENTS",
                moreInfo: "more info",
                moreInfo2: "more info",
                moreInfo3: "more info",
                text1: "Based in Stockholm, I specialize in creating professional portraits and headshots that capture both personality and professionalism. With a keen eye for detail and years of experience, I help companies and individuals build a strong visual presence through high-quality corporate portraits that make lasting impressions and strengthen your professional image.",
                text2: "I specialize in capturing your team in their natural work environment, documenting the authentic moments that showcase your company's expertise and professionalism. From employees engaged in their craft to product photography that highlights your offerings, I create compelling visuals perfect for presentations, pitches, and marketing materials that truly represent your company's personnel and capabilities.",
                text3: "Whether it's corporate events, exhibitions, conferences, or off-site festivities, I document your company gatherings with a keen eye for meaningful interactions and key moments. From intimate team celebrations to large-scale industry exhibitions, I ensure every significant moment is captured with style and professionalism.",
                headshotsTitle: "HEADSHOT PHOTOGRAPHY",
                headshotsText: "Professional headshots are essential for creating a strong personal brand in today's digital world. I offer tailored headshot sessions for individuals and companies, ensuring each photo captures your unique personality while maintaining a polished, professional appearance. Whether it's for your company website, LinkedIn profile, or marketing materials, I work closely with you to understand your goals and create portraits that align with your professional image. My approach combines technical excellence with a relaxed atmosphere, helping you feel comfortable in front of the camera to achieve natural, confident results.",
                brandingTitle: "COMPANY BRANDING",
                brandingText: "From product photography that showcases your offerings in their best light to compelling visuals for presentations, pitches, and annual reports, I help create imagery that elevates your brand. My technical expertise ensures your products are captured with precision and attention to detail, while my creative approach helps tell your company's story effectively. Whether you need lifestyle product shots, detailed close-ups, or visuals that demonstrate your products in action, I create high-impact imagery that can be used across all your corporate materials."
            },
            sv: {
                services: "TJÄNSTER",
                gallery: "GALLERI",
                information: "INFORMATION",
                infoHeader: "INFORMATION",
                schedule: "BOKA FOTOGRAFERING",
                login: "LOGGA IN",
                portrait1: "BOKA FOTOGRAFERING",
                portrait2: "PORTRÄTTFOTOGRAFI",
                portrait3: "PORTRÄTTFOTOGRAFI",
                subscribe: "PRENUMERERA",
                signUp: "REGISTRERA",
                privacy: "Vi respekterar din integritet.",
                siteMap: "SIDKARTA",
                follow: "FÖLJ",
                newsUpdates: "Registrera dig med din e-postadress...",
                all: "ALLA",
                headshots: "PORTRÄTT",
                branding: "FÖRETAGSPROFILERING",
                events: "FÖRETAGSEVENEMANG",
                moreInfo: "mer info",
                moreInfo2: "mer info",
                moreInfo3: "mer info",
                text1: "Baserad i Stockholm är jag specialiserad på att skapa professionella porträtt och profilbilder som fångar både personlighet och professionalism. Med öga för detaljer och års erfarenhet hjälper jag företag och individer att bygga en stark visuell närvaro genom högkvalitativa företagsporträtt som ger bestående intryck och stärker din professionella image.",
                text2: "Jag är specialiserad på att fånga ditt team i deras naturliga arbetsmiljö och dokumentera de autentiska ögonblicken som visar företagets expertis och professionalism. Från medarbetare i arbete till produktfotografering som lyfter fram era erbjudanden, skapar jag övertygande bilder perfekta för presentationer, pitchar och marknadsföringsmaterial som verkligen representerar företagets personal och kapacitet.",
                text3: "Oavsett om det gäller företagsevenemang, utställningar, konferenser eller festligheter utanför kontoret dokumenterar jag era företagssammankomster med ett öga för meningsfulla interaktioner och viktiga ögonblick. Från intima teamfiranden till storskaliga branschutställningar säkerställer jag att varje betydelsefullt moment fångas med stil och professionalism.",
                headshotsTitle: "PORTRÄTTFOTOGRAFI",
                headshotsText: "Professionella porträttbilder är avgörande för att skapa ett starkt personligt varumärke i dagens digitala värld. Jag erbjuder skräddarsydda porträttsessioner för individer och företag, och säkerställer att varje foto fångar din unika personlighet samtidigt som det behåller ett polerat, professionellt utseende. Oavsett om det är för företagets webbplats, LinkedIn-profil eller marknadsföringsmaterial, arbetar jag nära dig för att förstå dina mål och skapa porträtt som överensstämmer med din professionella image. Mitt tillvägagångssätt kombinerar teknisk excellens med en avslappnad atmosfär, vilket hjälper dig att känna dig bekväm framför kameran för att uppnå naturliga och självsäkra resultat.",
                brandingTitle: "FÖRETAGSPROFILERING",
                brandingText: "Från produktfotografering som visar era erbjudanden i bästa ljus till övertygande bilder för presentationer, pitchar och årsredovisningar, hjälper jag till att skapa bilder som lyfter ert varumärke. Min tekniska expertis säkerställer att era produkter fångas med precision och detaljrikedom, medan mitt kreativa tillvägagångssätt hjälper till att berätta ert företags historia effektivt. Oavsett om ni behöver livsstilsbilder av produkter, detaljerade närbilder eller bilder som visar era produkter i användning, skapar jag slagkraftiga bilder som kan användas i allt ert företagsmaterial."
            }
        };
        
        this.currentLang = localStorage.getItem('selectedLanguage') || 'en';
        this.init();
    }

    init() {
        // Initialize when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            this.langToggle = document.getElementById('langToggle');
            this.langTexts = this.langToggle.querySelectorAll('.lang-text');

            // Set initial language
            this.updateLanguage(this.currentLang);

            // Add click event listener
            this.langToggle.addEventListener('click', () => {
                const newLang = this.currentLang === 'en' ? 'sv' : 'en';
                this.updateLanguage(newLang);
            });

            // Update HTML lang attribute
            document.documentElement.lang = this.currentLang;
        });
    }

    updateLanguage(lang) {
        // Update translations
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (this.translations[lang][key]) {
                element.textContent = this.translations[lang][key];
            }
        });

        // Update button appearance
        this.langTexts.forEach(text => {
            if (text.getAttribute('data-lang') === lang) {
                text.classList.remove('inactive');
            } else {
                text.classList.add('inactive');
            }
        });

        // Store selected language
        localStorage.setItem('selectedLanguage', lang);
        this.currentLang = lang;
        document.documentElement.lang = lang;
    }
}

// Initialize language manager
const languageManager = new LanguageManager(); 