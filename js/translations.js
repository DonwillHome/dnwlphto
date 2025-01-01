// Language switching functionality
class LanguageManager {
    constructor() {
        this.translations = {
            en: {
                services: "SERVICES",
                gallery: "GALLERY",
                information: "INFORMATION",
                schedule: "SCHEDULE A SHOOT",
                login: "LOGIN",
                portrait: "PORTRAIT PHOTOGRAPHY",
                subscribe: "SUBSCRIBE",
                signUp: "SIGN UP",
                privacy: "We respect your privacy.",
                siteMap: "SITE MAP",
                follow: "FOLLOW",
                newsUpdates: "Sign up with your email address to receive news and updates.",
                caseStudy1: "At Tech Innovations AB, I transformed their team page...",
                caseStudy2: "When Nordisk Finance needed to showcase...",
                caseStudy3: "For Stockholm Creative Hub's annual conference...",
                all: "ALL",
                headshots: "HEADSHOTS",
                branding: "PRODUCT BRANDING",
                events: "COMPANY EVENTS",
                infoTitle: "INFORMATION",
                infoText1: "With a keen eye for authenticity and professional excellence, I specialize in elevating corporate identities through sophisticated visual storytelling. My approach combines technical precision with an intuitive understanding of how to capture the essence of both individuals and brands.",
                infoText2: "From polished executive headshots that convey confidence and approachability, to dynamic event coverage that documents your company's pivotal moments, to product photography that showcases your brand's unique value proposition – each image is crafted to strengthen your professional narrative.",
                infoText3: "Having collaborated with industry leaders across various sectors, I understand the importance of efficiency and reliability in corporate partnerships. My streamlined workflow ensures a seamless experience from initial consultation to final delivery, respecting your time while exceeding your expectations.",
                infoText4: "Whether you're updating your company's visual assets, documenting important corporate events, or developing a new brand campaign, let's create imagery that authentically represents your professional story and resonates with your audience.",
                menuButton: "Menu",
                scheduleTitle: "SCHEDULE A SHOOT",
                scheduleIntro: "Ready to create professional imagery that elevates your brand? Fill out the form below and I'll get back to you within 24 hours to discuss your photography needs.",
                formName: "Name",
                formCompany: "Company",
                formEmail: "Email",
                formMessage: "Message",
                formSubmit: "Send Request"
            },
            sv: {
                services: "TJÄNSTER",
                gallery: "GALLERI",
                information: "INFORMATION",
                schedule: "BOKA FOTOGRAFERING",
                login: "LOGGA IN",
                portrait: "PORTRÄTTFOTOGRAFI",
                subscribe: "PRENUMERERA",
                signUp: "REGISTRERA",
                privacy: "Vi respekterar din integritet.",
                siteMap: "SIDKARTA",
                follow: "FÖLJ",
                newsUpdates: "Registrera dig med din e-postadress...",
                caseStudy1: "Hos Tech Innovations AB förnyade jag...",
                caseStudy2: "När Nordisk Finance behövde visa upp...",
                caseStudy3: "För Stockholm Creative Hubs årliga konferens...",
                all: "ALLA",
                headshots: "PORTRÄTT",
                branding: "PRODUKTFOTO",
                events: "FÖRETAGSEVENT",
                infoTitle: "INFORMATION",
                infoText1: "Med ett öga för autenticitet och professionell excellens, specialiserar jag mig på att lyfta företagsidentiteter genom sofistikerat visuellt berättande. Mitt tillvägagångssätt kombinerar teknisk precision med en intuitiv förståelse för hur man fångar essensen av både individer och varumärken.",
                infoText2: "Från polerade företagsporträtt som förmedlar självförtroende och tillgänglighet, till dynamisk eventfotografering som dokumenterar företagets viktiga ögonblick, till produktfotografering som framhäver ert varumärkes unika värdeförslag – varje bild är skapad för att stärka er professionella berättelse.",
                infoText3: "Efter att ha samarbetat med branschledare inom olika sektorer förstår jag vikten av effektivitet och pålitlighet i företagspartnerskap. Mitt effektiva arbetsflöde säkerställer en sömlös upplevelse från första konsultation till slutlig leverans, med respekt för er tid samtidigt som vi överträffar era förväntningar.",
                infoText4: "Oavsett om ni uppdaterar företagets visuella tillgångar, dokumenterar viktiga företagsevenemang eller utvecklar en ny varumärkeskampanj, låt oss skapa bilder som autentiskt representerar er professionella berättelse och resonerar med er målgrupp.",
                menuButton: "Meny",
                scheduleTitle: "BOKA FOTOGRAFERING",
                scheduleIntro: "Redo att skapa professionella bilder som lyfter ditt varumärke? Fyll i formuläret nedan så återkommer jag inom 24 timmar för att diskutera dina fotograferingsbehov.",
                formName: "Namn",
                formCompany: "Företag",
                formEmail: "E-post",
                formMessage: "Meddelande",
                formSubmit: "Skicka förfrågan"
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