document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        cz: {
            pageTitle: "IronBase Fitness",
            navHome: "Domů",
            navExercises: "Cviky",
            navNutrition: "Strava",
            navMembership: "Členská zóna",
            navQa: "Poradna",
            navSongs: "Songy",
            navContact: "Kontakt",
            navAccount: "Můj Účet",
            heroTitle: "Překonej své limity.",
            heroSubtitle: "Tvé tělo je jediný stroj, na kterém musíš pracovat. Objev nejlepší cviky pro sílu, kondici a zdraví.",
            heroBtnExercises: "Prohlédnout cviky",
            heroBtnRegister: "Registrace",
            songsPageTitle: "Motivační Songy | IronBase Fitness",
            songsTitle: "Motivační Songy",
            songsSubtitle: "Nejlepší hudba, která tě nakopne k maximálnímu výkonu. Vyber si svůj vibe.",
            catHipHop: "Gym Hip-Hop / Rap",
            catRock: "Hard Rock / Metal",
            catEpic: "Epic / Cinematic",
            statsTitle: "Dnešní Trénink",
            statsBench: "Bench Press",
            statsSquat: "Dřepy",
            quote1: "\"Bolest je slabost opouštějící tělo.\"",
            quote2: "\"Tvé jediné limity jsou ty, které si vytvoříš ve své hlavě.\"",
            exercisesTitle: "Databáze Cviků",
            searchPlaceholder: "Hledat cvik...",
            exBenchTitle: "Bench Press",
            exBenchDesc: "Král cviků na hrudník. Buduje masivní sílu prsních svalů, ramen a tricepsů.",
            exSquatTitle: "Dřepy",
            exSquatDesc: "Základní cvik pro silné nohy a pevný střed těla.",
            exDeadliftTitle: "Mrtvý tah",
            exDeadliftDesc: "Komplexní cvik na záda a zadní řetězec. Vyžaduje precizní techniku.",
            exPullupTitle: "Shyby",
            exPullupDesc: "Nejlepší cvik s vlastní vahou na záda.",
            exLegPressTitle: "Leg Press",
            exLegPressDesc: "Skvělý stroj na budování svalů nohou bez zatížení zad.",
            exFacePullTitle: "Face Pulls",
            exFacePullDesc: "Klíčový cvik pro zdraví ramen a zadní delty.",
            exHammerTitle: "Hammer Curls",
            exHammerDesc: "Varianta na bicák, která buduje i sílu předloktí.",
            exRdlTitle: "Rumunský mrtvý tah",
            exRdlDesc: "Nejlepší cvik na hamstringy a hýždě.",
            exOhpTitle: "Tlaky na ramena",
            exOhpDesc: "Buduje silná ramena a tricepsy.",
            exLungesTitle: "Výpady",
            exLungesDesc: "Zlepšuje rovnováhu a jednostrannou sílu.",
            exPlankTitle: "Plank",
            exPlankDesc: "Statický cvik na posílení středu těla.",
            exBicepTitle: "Bicepsový zdvih",
            exBicepDesc: "Izolovaný cvik na bicepsy.",
            tagChest: "Hrudník",
            tagStrength: "Síla",
            tagLegs: "Nohy",
            tagFullBody: "Celé tělo",
            tagBack: "Záda",
            tagCalisthenics: "Kalistenika",
            tagShoulders: "Ramena",
            tagStability: "Stabilita",
            tagAbs: "Břicho",
            tagCore: "Core",
            tagArms: "Paže",
            tagIsolation: "Izolace",
            nutritionTitle: "Strava & Suplementy",
            nutriProteins: "Bílkoviny",
            nutriProteinsDesc: "Základ stavebních kamenů svalů. Maso, vejce, luštěniny.",
            nutriCarbs: "Sacharidy",
            nutriCarbsDesc: "Hlavní zdroj energie. Rýže, brambory, ovesné vločky.",
            nutriFats: "Zdravé Tuky",
            nutriFatsDesc: "Důležité pro hormony. Ořechy, avokádo, olivový olej.",
            nutriSupps: "Suplementace",
            nutriSuppsDesc: "Doplňky pro maximální výkon a regeneraci.",
            nutriCreatine: "Zvyšuje sílu a výbušnost.",
            nutriWhey: "Rychlé doplnění bílkovin.",
            nutriVitamins: "Podpora imunity a zdraví.",
            membershipTitle: "Členská zóna",
            memberZoneSubtitle: "Seznamte se s komunitou IronBase Fitness. Zde vidíte všechny naše členy.",
            loginTitle: "Přihlášení",
            loginEmail: "Email",
            loginPass: "Heslo",
            btnLogin: "Přihlásit se",
            noAccount: "Nemáš účet?",
            registerTitle: "Registrace",
            regName: "Jméno",
            regEmail: "Email",
            regPass: "Heslo",
            btnRegister: "Vytvořit účet",
            hasAccount: "Již máš účet?",
            regFirstName: "Jméno",
            regLastName: "Příjmení",
            profileTitle: "Tvůj Profil",
            badgeMember: "Člen IronBase",
            btnLogout: "Odhlásit se",
            footerRights: "© 2026 IronBase Fitness. Make Sweat, Not Excuses.",
            qaTitle: "Poradna",
            qaDesc: "Odborné odpovědi na vaše dotazy.",
            qaAskTitle: "Máš otázku?",
            qaAskDesc: "Zeptej se našich trenérů nebo komunity.",
            btnSendQuestion: "Odeslat otázku",
            trainerName: "Tým IronBase",
            qaEx1Q: "Jak často mám cvičit břicho?",
            qaEx1A: "Břicho je sval jako každý jiný, ale regeneruje rychleji. Doporučuji 2-3x týdně.",
            waitingAnswer: "Čeká na odpověď...",
            questionSent: "Tvá otázka byla odeslána!",
            personalStats: "Osobní Statistiky",
            statHeight: "Výška (cm)",
            statWeight: "Váha (kg)",
            bmiResult: "Tvé BMI",
            bmiUnderweight: "Podváha",
            bmiNormal: "Normální váha",
            bmiOverweight: "Nadváha",
            bmiObese: "Obezita",
            statBmiUnderweight: "Podváha",
            statBmiNormal: "Normální váha",
            statBmiOverweight: "Nadváha",
            statBmiObese: "Obezita",
            editProfile: "Upravit Profil",
            saveSuccess: "Změny byly uloženy!",
            planStrength: "Síla",
            planHypertrophy: "Budování svalů",
            planWeightLoss: "Hubnutí",
            planCustom: "Vlastní",
            btnSaveStats: "Uložit statistiky",
            confirmEdit: "Uložit změny jména a emailu?",
            statAge: "Věk",
            statGender: "Pohlaví",
            statGoal: "Tvůj hlavní cíl",
            statGoalPlaceholder: "Napiš, čeho chceš dosáhnout...",
            statTrainingTime: "Kdy nejraději cvičíš?",
            genderMale: "Muž",
            genderFemale: "Žena",
            genderOther: "Jiné",
            genderSecret: "Neuvedeno",
            timeMorning: "Ráno",
            timeAfternoon: "Odpoledne",
            timeEvening: "Večer",
            timeNight: "V noci",
            myPlan: "Můj Tréninkový Plán",
            addExercise: "Přidat cvik k plánu",
            planUpdated: "Plán byl aktualizován!",
            welcomeMsg: "Vítej, ",
            welcomeBackMsg: "Vítej zpět, ",
            loginError: "Nesprávné jméno nebo heslo.",
            emailExistsError: "Tento email je již registrován.",
            userNotFoundError: "Uživatel s tímto emailem neexistuje.",
            fillAllFields: "Vyplň prosím všechna pole.",
            passwordTooShort: "Heslo musí mít alespoň 8 znaků.",
            photoModalTitle: "Upravit profilovou fotku",
            myProgress: "Můj Progres",
            progBench: "Bench Press (Max)",
            progBodyWeight: "Tělesná váha",
            btnUpdateProgress: "Aktualizovat Progres",
            btnSave: "Uložit",
            btnCancel: "Zrušit"
        },
        sk: {
            pageTitle: "IronBase Fitness",
            navHome: "Domov",
            navExercises: "Cviky",
            navNutrition: "Strava",
            navMembership: "Členská zóna",
            navQa: "Poradňa",
            navSongs: "Songy",
            navContact: "Kontakt",
            navAccount: "Môj Účet",
            heroTitle: "Prekonaj svoje limity.",
            heroSubtitle: "Tvoje telo je jediný stroj, na ktorom musíš pracovať. Objav najlepšie cviky pre silu, kondíciu a zdravie.",
            heroBtnExercises: "Prezrieť cviky",
            heroBtnRegister: "Registrácia",
            songsPageTitle: "Motivačné Songy | IronBase Fitness",
            songsTitle: "Motivačné Songy",
            songsSubtitle: "Najlepšia hudba, ktorá ťa nakopne k maximálnemu výkonu. Vyber si svoj vibe.",
            catHipHop: "Gym Hip-Hop / Rap",
            catRock: "Hard Rock / Metal",
            catEpic: "Epic / Cinematic",
            statsTitle: "Dnešný Tréning",
            statsBench: "Bench Press",
            statsSquat: "Drepy",
            quote1: "\"Bolesť je slabosť opúšťajúca telo.\"",
            quote2: "\"Tvoje jediné limity sú tie, ktoré si vytvoíš vo svojej hlave.\"",
            exercisesTitle: "Databáza Cvikov",
            searchPlaceholder: "Hľadať cvik...",
            exBenchTitle: "Bench Press",
            exBenchDesc: "Kráľ cvikov na hrudník. Buduje masívnu silu prsných svalov, ramien a tricepsov.",
            exSquatTitle: "Drepy",
            exSquatDesc: "Základný cvik pre silné nohy a pevný stred tela.",
            exDeadliftTitle: "Mŕtvy ťah",
            exDeadliftDesc: "Komplexný cvik na chrbát a zadný reťazec. Vyžaduje precíznu techniku.",
            exPullupTitle: "Zhyby",
            exPullupDesc: "Najlepší cvik s vlastnou váhou na chrbát.",
            exLegPressTitle: "Leg Press",
            exLegPressDesc: "Skvelý stroj na budovanie svalov nôh bez zaťaženia chrbta.",
            exFacePullTitle: "Face Pulls",
            exFacePullDesc: "Kľúčový cvik pre zdravie ramien a zadné delty.",
            exHammerTitle: "Hammer Curls",
            exHammerDesc: "Variant na bicák, ktorý buduje aj silu predlaktia.",
            exRdlTitle: "Rumunský mŕtvy ťah",
            exRdlDesc: "Najlepší cvik na hamstringy a zadok.",
            exOhpTitle: "Tlaky na ramená",
            exOhpDesc: "Buduje silné ramená a tricepsy.",
            exLungesTitle: "Výpady",
            exLungesDesc: "Zlepšuje rovnováhu a jednostrannú silu.",
            exPlankTitle: "Plank",
            exPlankDesc: "Statický cvik na posilnenie stredu tela.",
            exBicepTitle: "Bicepsový zdvih",
            exBicepDesc: "Izolovaný cvik na bicepsy.",
            tagChest: "Hrudník",
            tagStrength: "Sila",
            tagLegs: "Nohy",
            tagFullBody: "Celé telo",
            tagBack: "Chrbát",
            tagCalisthenics: "Kalistenika",
            tagShoulders: "Ramená",
            tagStability: "Stabilita",
            tagAbs: "Brucho",
            tagCore: "Core",
            tagArms: "Paže",
            tagIsolation: "Izolácia",
            nutritionTitle: "Strava & Suplementy",
            nutriProteins: "Bielkoviny",
            nutriProteinsDesc: "Základ stavebných kameňov svalov. Mäso, vajcia, strukoviny.",
            nutriCarbs: "Sacharidy",
            nutriCarbsDesc: "Hlavný zdroj energie. Ryža, zemiaky, ovsené vločky.",
            nutriFats: "Zdravé Tuky",
            nutriFatsDesc: "Dôležité pre hormóny. Orechy, avokádo, olivový olej.",
            nutriSupps: "Suplementácia",
            nutriSuppsDesc: "Doplnky pre maximálny výkon a regeneráciu.",
            nutriCreatine: "Zvyšuje silu a výbušnosť.",
            nutriWhey: "Rýchle doplnenie bielkovín.",
            nutriVitamins: "Podpora imunity a zdravia.",
            membershipTitle: "Členská zóna",
            memberZoneSubtitle: "Zoznámte sa s komunitou IronBase Fitness. Tu vidíte všetkých našich členov.",
            loginTitle: "Prihlásenie",
            loginEmail: "Email",
            loginPass: "Heslo",
            btnLogin: "Prihlásiť sa",
            noAccount: "Nemáš účet?",
            registerTitle: "Registrácia",
            regName: "Meno",
            regEmail: "Email",
            regPass: "Heslo",
            btnRegister: "Vytvoriť účet",
            hasAccount: "Už máš účet?",
            regFirstName: "Meno",
            regLastName: "Priezvisko",
            profileTitle: "Tvoj Profil",
            badgeMember: "Člen IronBase",
            btnLogout: "Odhlásiť sa",
            footerRights: "© 2026 IronBase Fitness. Make Sweat, Not Excuses.",
            qaTitle: "Poradňa",
            qaDesc: "Odborné odpovede na vaše otázky.",
            qaAskTitle: "Máš otázku?",
            qaAskDesc: "Opýtaj sa našich trénerov alebo komunity.",
            btnSendQuestion: "Odoslať otázku",
            trainerName: "Tím IronBase",
            qaEx1Q: "Ako často mám cvičiť brucho?",
            qaEx1A: "Brucho je sval ako každý iný, ale regeneruje rýchlejšie. Odporúčam 2-3x týždenne.",
            waitingAnswer: "Čaká na odpoveď...",
            questionSent: "Tvoja otázka bola odoslaná!",
            personalStats: "Osobné Štatistiky",
            statHeight: "Výška (cm)",
            statWeight: "Váha (kg)",
            bmiResult: "Tvoje BMI",
            bmiUnderweight: "Podváha",
            bmiNormal: "Normálna váha",
            bmiOverweight: "Nadváha",
            bmiObese: "Obezita",
            statBmiUnderweight: "Podváha",
            statBmiNormal: "Normálna váha",
            statBmiOverweight: "Nadváha",
            statBmiObese: "Obezita",
            editProfile: "Upraviť Profil",
            saveSuccess: "Zmeny boli uložené!",
            planStrength: "Sila",
            planHypertrophy: "Budovanie svalov",
            planWeightLoss: "Chudnutie",
            planCustom: "Vlastné",
            btnSaveStats: "Uložiť štatistiky",
            confirmEdit: "Uložiť zmeny mena a emailu?",
            statAge: "Vek",
            statGender: "Pohlavie",
            statGoal: "Tvoj hlavný cieľ",
            statGoalPlaceholder: "Napíš, čo chceš dosiahnuť...",
            statTrainingTime: "Kedy najradšej cvičíš?",
            genderMale: "Muž",
            genderFemale: "Žena",
            genderOther: "Iné",
            genderSecret: "Neuvedené",
            timeMorning: "Ráno",
            timeAfternoon: "Popoludní",
            timeEvening: "Večer",
            timeNight: "V noci",
            myPlan: "Môj Tréningový Plán",
            addExercise: "Pridať cvik k plánu",
            planUpdated: "Plán bol aktualizovaný!",
            welcomeMsg: "Vitaj, ",
            welcomeBackMsg: "Vitaj späť, ",
            loginError: "Nesprávne meno alebo heslo.",
            emailExistsError: "Tento email je už registrovaný.",
            userNotFoundError: "Užívateľ s týmto emailom neexistuje.",
            fillAllFields: "Vyplň prosím všetky polia.",
            passwordTooShort: "Heslo musí mať aspoň 8 znakov.",
            photoModalTitle: "Upraviť profilovú fotku",
            myProgress: "Môj Progres",
            progBench: "Bench Press (Max)",
            progBodyWeight: "Telesná váha",
            btnUpdateProgress: "Aktualizovať Progres",
            btnSave: "Uložiť",
            btnCancel: "Zrušiť"
        },
        en: {
            pageTitle: "IronBase Fitness",
            navHome: "Home",
            navExercises: "Exercises",
            navNutrition: "Nutrition",
            navMembership: "Member Area",
            navQa: "Q&A",
            navSongs: "Songs",
            navContact: "Contact",
            navAccount: "My Account",
            heroTitle: "Break Your Limits.",
            heroSubtitle: "Your body is the only machine you must work on.",
            heroBtnExercises: "View Exercises",
            heroBtnRegister: "Register",
            songsPageTitle: "Motivational Songs | IronBase Fitness",
            songsTitle: "Motivational Songs",
            songsSubtitle: "The best music to push you to maximum performance. Pick your vibe.",
            catHipHop: "Gym Hip-Hop / Rap",
            catRock: "Hard Rock / Metal",
            catEpic: "Epic / Cinematic",
            statsTitle: "Today's Workout",
            statsBench: "Bench Press",
            statsSquat: "Squats",
            quote1: "\"Pain is weakness leaving the body.\"",
            quote2: "\"Your only limits are the ones you create in your mind.\"",
            exercisesTitle: "Exercise Database",
            searchPlaceholder: "Search exercise...",
            exBenchTitle: "Bench Press",
            exBenchDesc: "The king of chest exercises. Builds massive chest, shoulder and triceps strength.",
            exSquatTitle: "Squats",
            exSquatDesc: "Fundamental exercise for strong legs and core.",
            exDeadliftTitle: "Deadlift",
            exDeadliftDesc: "Complex back and posterior chain exercise. Requires precise technique.",
            exPullupTitle: "Pull-ups",
            exPullupDesc: "The best bodyweight back exercise.",
            exOhpTitle: "Shoulder Press",
            exOhpDesc: "Builds strong shoulders and triceps.",
            exLungesTitle: "Lunges",
            exLungesDesc: "Improves balance and unilateral strength.",
            exPlankTitle: "Plank",
            exPlankDesc: "Static core strengthening exercise.",
            exBicepTitle: "Bicep Curl",
            exBicepDesc: "Isolated bicep exercise.",
            exLegPressTitle: "Leg Press",
            exLegPressDesc: "Great machine for building leg muscles without back strain.",
            exFacePullTitle: "Face Pulls",
            exFacePullDesc: "Key exercise for shoulder health and rear delts.",
            exHammerTitle: "Hammer Curls",
            exHammerDesc: "Bicep variation that also builds forearm strength.",
            exRdlTitle: "Romanian Deadlift",
            exRdlDesc: "The best exercise for hamstrings and glutes.",
            tagChest: "Chest",
            tagStrength: "Strength",
            tagLegs: "Legs",
            tagFullBody: "Full Body",
            tagBack: "Back",
            tagCalisthenics: "Calisthenics",
            tagShoulders: "Shoulders",
            tagStability: "Stability",
            tagAbs: "Abs",
            tagCore: "Core",
            tagArms: "Arms",
            tagIsolation: "Isolation",
            nutritionTitle: "Nutrition & Supplements",
            nutriProteins: "Proteins",
            nutriProteinsDesc: "The building blocks of muscle. Meat, eggs, legumes.",
            nutriCarbs: "Carbohydrates",
            nutriCarbsDesc: "Main energy source. Rice, potatoes, oats.",
            nutriFats: "Healthy Fats",
            nutriFatsDesc: "Crucial for hormones. Nuts, avocado, olive oil.",
            nutriSupps: "Supplementation",
            nutriSuppsDesc: "Add-ons for maximum performance and recovery.",
            nutriCreatine: "Increases strength and explosive power.",
            nutriWhey: "Fast protein replenishment.",
            nutriVitamins: "Health and immunity support.",
            membershipTitle: "Member Area",
            memberZoneSubtitle: "Meet the IronBase Fitness community. Here you can see all our members.",
            loginTitle: "Login",
            loginEmail: "Email",
            loginPass: "Password",
            btnLogin: "Log In",
            noAccount: "Don't have an account?",
            registerTitle: "Registration",
            regName: "Name",
            regEmail: "Email",
            regPass: "Password",
            btnRegister: "Create Account",
            hasAccount: "Already have an account?",
            regFirstName: "First Name",
            regLastName: "Last Name",
            profileTitle: "Your Profile",
            badgeMember: "IronBase Member",
            btnLogout: "Log Out",
            footerRights: "© 2026 IronBase Fitness. Make Sweat, Not Excuses.",
            qaTitle: "Q&A",
            qaDesc: "Expert answers to your questions.",
            qaAskTitle: "Have a Question?",
            qaAskDesc: "Ask our trainers or the community.",
            btnSendQuestion: "Send Question",
            trainerName: "IronBase Team",
            qaEx1Q: "How often should I train abs?",
            qaEx1A: "Abs are muscles like any other but recover faster. I recommend 2-3x a week.",
            waitingAnswer: "Waiting for answer...",
            questionSent: "Your question has been sent!",
            personalStats: "Personal Stats",
            statHeight: "Height (cm)",
            statWeight: "Weight (kg)",
            bmiResult: "Your BMI",
            bmiUnderweight: "Underweight",
            bmiNormal: "Normal weight",
            bmiOverweight: "Overweight",
            bmiObese: "Obese",
            statBmiUnderweight: "Underweight",
            statBmiNormal: "Normal weight",
            statBmiOverweight: "Overweight",
            statBmiObese: "Obese",
            editProfile: "Edit Profile",
            saveSuccess: "Changes have been saved!",
            planStrength: "Strength",
            planHypertrophy: "Muscle Building",
            planWeightLoss: "Weight Loss",
            planCustom: "Custom",
            btnSaveStats: "Save stats",
            confirmEdit: "Save name and email changes?",
            statAge: "Age",
            statGender: "Gender",
            statGoal: "Main Goal",
            statGoalPlaceholder: "Tell us what you want to achieve...",
            statTrainingTime: "Preferred training time",
            genderMale: "Male",
            genderFemale: "Female",
            genderOther: "Other",
            genderSecret: "Secret",
            timeMorning: "Morning",
            timeAfternoon: "Afternoon",
            timeEvening: "Evening",
            timeNight: "Night",
            myPlan: "My Workout Plan",
            addExercise: "Add exercise to plan",
            planUpdated: "Plan updated!",
            welcomeMsg: "Welcome, ",
            welcomeBackMsg: "Welcome back, ",
            loginError: "Incorrect email or password.",
            emailExistsError: "This email is already registered.",
            userNotFoundError: "User with this email does not exist.",
            fillAllFields: "Please fill in all fields.",
            passwordTooShort: "Password must be at least 8 characters long.",
            photoModalTitle: "Adjust profile photo",
            myProgress: "My Progress",
            progBench: "Bench Press (Max)",
            progBodyWeight: "Body Weight",
            btnUpdateProgress: "Update Progress",
            btnSave: "Save",
            btnCancel: "Cancel"
        }
    };

    let currentLang = 'cz';

    function updateLanguage(lang) {
        currentLang = lang;
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) { el.innerHTML = translations[lang][key]; }
        });
        const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
        placeholders.forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) { el.placeholder = translations[lang][key]; }
        });
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
        localStorage.setItem('preferredLang', lang);
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => { updateLanguage(btn.getAttribute('data-lang')); });
    });

    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang) updateLanguage(savedLang);

    const searchInput = document.getElementById('exercise-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            document.querySelectorAll('.exercise-card').forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                card.style.display = title.includes(searchTerm) ? 'flex' : 'none';
            });
        });
    }

    // Expose switchAuthTab globally
    window.switchAuthTab = function (tab) {
        const loginFormContainer = document.getElementById('login-form-container');
        const registerFormContainer = document.getElementById('register-form-container');
        const showLoginBtn = document.getElementById('show-login-btn');
        const showRegisterBtn = document.getElementById('show-register-btn');

        if (!loginFormContainer || !registerFormContainer) return;

        if (tab === 'login') {
            loginFormContainer.classList.remove('hidden');
            registerFormContainer.classList.add('hidden');
            if (showLoginBtn) showLoginBtn.classList.add('active');
            if (showRegisterBtn) showRegisterBtn.classList.remove('active');
        } else {
            loginFormContainer.classList.add('hidden');
            registerFormContainer.classList.remove('hidden');
            if (showLoginBtn) showLoginBtn.classList.remove('active');
            if (showRegisterBtn) showRegisterBtn.classList.add('active');
        }
    };

    if (window.location.hash === '#register') {
        window.switchAuthTab('register');
    }

    window.addEventListener('hashchange', () => {
        if (window.location.hash === '#register') {
            window.switchAuthTab('register');
        } else if (window.location.hash === '#login') {
            window.switchAuthTab('login');
        }
    });

    const authContainer = document.getElementById('auth-forms');
    const profileContainer = document.getElementById('user-profile');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const logoutBtn = document.getElementById('logout-btn');
    const loginBtnNav = document.getElementById('login-btn-nav');
    const profileAvatar = document.getElementById('profile-avatar');
    const photoInput = document.getElementById('profile-photo-input');
    const photoModal = document.getElementById('photo-modal');
    const modalPreviewImg = document.getElementById('modal-preview-img');
    const confirmPhotoBtn = document.getElementById('confirm-photo-btn');
    const cancelPhotoBtn = document.getElementById('cancel-photo-btn');
    const zoomSlider = document.getElementById('zoom-slider');
    const allUsersList = document.getElementById('all-users-list');

    let userProfile = JSON.parse(localStorage.getItem('userProfile'));
    let allUsers = JSON.parse(localStorage.getItem('allUsers')) || [];
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    let pendingPhotoBase64 = null;
    let isDragging = false;
    let startX, startY;
    let imgOffsetX = 0, imgOffsetY = 0;
    let currentZoom = 1;

    async function hashPassword(password) {
        const msgUint8 = new TextEncoder().encode(password);
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }

    function renderUserProfile() {
        if (isLoggedIn && userProfile) {
            if (authContainer) authContainer.classList.add('hidden');
            if (profileContainer) profileContainer.classList.remove('hidden');
            const pName = document.getElementById('profile-name');
            const pEmail = document.getElementById('profile-email');
            if (pName) pName.textContent = userProfile.name;
            if (pEmail) pEmail.textContent = userProfile.email;
            if (profileAvatar) {
                if (userProfile.photo) {
                    profileAvatar.innerHTML = `<img src="${userProfile.photo}" alt="${userProfile.name}">`;
                } else {
                    profileAvatar.textContent = '👤';
                }
            }

            // Populate stats if they exist
            const heightInput = document.getElementById('height');
            const weightInput = document.getElementById('weight');
            const ageInput = document.getElementById('age');
            const genderInput = document.getElementById('gender');
            const goalInput = document.getElementById('fitness-goal');
            const timeInput = document.getElementById('training-time');

            if (heightInput && userProfile.height) heightInput.value = userProfile.height;
            if (weightInput && userProfile.weight) weightInput.value = userProfile.weight;
            if (ageInput && userProfile.age) ageInput.value = userProfile.age;
            if (genderInput && userProfile.gender) genderInput.value = userProfile.gender;
            if (goalInput && userProfile.goal) goalInput.value = userProfile.goal;
            if (timeInput && userProfile.trainingTime) timeInput.value = userProfile.trainingTime;

            updateBMI(); // Initial BMI calc

            if (loginBtnNav) {
                loginBtnNav.textContent = userProfile.name;
                loginBtnNav.href = "ucet.html";
            }
            if (allUsersList) renderAllUsers();
        } else {
            if (authContainer) authContainer.classList.remove('hidden');
            if (profileContainer) profileContainer.classList.add('hidden');
            if (loginBtnNav) {
                loginBtnNav.textContent = translations[currentLang].btnLogin;
                loginBtnNav.href = "ucet.html";
            }
            if (allUsersList) renderAllUsers();
        }
    }

    function renderAllUsers() {
        if (!allUsersList) return;
        allUsersList.innerHTML = '';

        if (allUsers.length === 0) {
            allUsersList.innerHTML = '<p style="color: var(--text-muted);">Zatím žádné další účty.</p>';
            return;
        }

        const isMemberZonePage = window.location.pathname.includes('clenska-zona.html');

        allUsers.forEach(user => {
            const userCard = document.createElement('div');

            if (isMemberZonePage) {
                userCard.className = 'member-card';
                userCard.innerHTML = `
                    <div class="member-avatar">
                        ${user.photo ? `<img src="${user.photo}" alt="${user.name}">` : '👤'}
                    </div>
                    <div class="member-info">
                        <h4>${user.name}</h4>
                        <p>${user.email}</p>
                        <span class="member-badge" data-i18n="badgeMember">Člen IronBase</span>
                    </div>
                `;
            } else {
                userCard.className = 'user-card glass-card';
                userCard.style.cssText = 'padding: 1rem; display: flex; align-items: center; gap: 1rem; cursor: pointer; transition: transform 0.2s;';
                userCard.innerHTML = `
                    <div class="mini-avatar" style="width: 40px; height: 40px; border-radius: 50%; background: var(--surface-dark); display: flex; align-items: center; justify-content: center; overflow: hidden; border: 2px solid var(--primary-color);">
                        ${user.photo ? `<img src="${user.photo}" alt="${user.name}" style="width: 100%; height: 100%; object-fit: cover;">` : '👤'}
                    </div>
                    <div style="flex: 1;">
                        <div style="font-weight: 600; font-size: 0.9rem;">${user.name}</strong></div>
                        <div style="font-size: 0.75rem; color: var(--text-muted);">${user.email}</div>
                    </div>
                `;
                userCard.onclick = () => {
                    if (confirm(`Přihlásit se jako ${user.name}?`)) {
                        localStorage.setItem('userProfile', JSON.stringify(user));
                        localStorage.setItem('isLoggedIn', 'true');
                        location.reload();
                    }
                };
                userCard.onmouseover = () => userCard.style.transform = 'translateY(-3px)';
                userCard.onmouseout = () => userCard.style.transform = 'translateY(0)';
            }
            allUsersList.appendChild(userCard);
        });
    }

    renderUserProfile();

    if (photoInput) {
        photoInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                if (file.size > 5 * 1024 * 1024) { alert("Fotka je příliš velká (max 5MB)."); return; }
                const reader = new FileReader();
                reader.onload = (event) => {
                    pendingPhotoBase64 = event.target.result;
                    if (modalPreviewImg) {
                        modalPreviewImg.src = pendingPhotoBase64;
                        modalPreviewImg.style.transform = `scale(1) translate(0px, 0px)`;
                        imgOffsetX = 0; imgOffsetY = 0; currentZoom = 1;
                        if (zoomSlider) zoomSlider.value = 1;
                    }
                    if (photoModal) photoModal.classList.remove('hidden');
                };
                reader.readAsDataURL(file);
            }
        });
    }

    if (modalPreviewImg) {
        const updateTransform = () => {
            modalPreviewImg.style.transform = `scale(${currentZoom}) translate(${imgOffsetX / currentZoom}px, ${imgOffsetY / currentZoom}px)`;
        };
        modalPreviewImg.addEventListener('mousedown', (e) => {
            isDragging = true; startX = e.clientX - imgOffsetX; startY = e.clientY - imgOffsetY;
            modalPreviewImg.style.cursor = 'grabbing';
        });
        window.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            imgOffsetX = e.clientX - startX; imgOffsetY = e.clientY - startY;
            updateTransform();
        });
        window.addEventListener('mouseup', () => {
            isDragging = false; if (modalPreviewImg) modalPreviewImg.style.cursor = 'move';
        });
        if (zoomSlider) {
            zoomSlider.addEventListener('input', (e) => {
                currentZoom = parseFloat(e.target.value);
                updateTransform();
            });
        }
    }

    if (confirmPhotoBtn) {
        confirmPhotoBtn.addEventListener('click', () => {
            if (pendingPhotoBase64 && userProfile) {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                const frameSize = 1000;
                canvas.width = frameSize; canvas.height = frameSize;
                const img = new Image();
                img.onload = () => {
                    ctx.fillStyle = '#000'; ctx.fillRect(0, 0, frameSize, frameSize);
                    const coverScale = Math.max(250 / img.width, 250 / img.height);
                    const finalScale = coverScale * currentZoom * (frameSize / 250);
                    const fWidth = img.width * finalScale; const fHeight = img.height * finalScale;
                    const fDx = (frameSize / 2) - (fWidth / 2) + (imgOffsetX * (frameSize / 250));
                    const fDy = (frameSize / 2) - (fHeight / 2) + (imgOffsetY * (frameSize / 250));
                    ctx.drawImage(img, fDx, fDy, fWidth, fHeight);
                    userProfile.photo = canvas.toDataURL('image/jpeg', 0.9);
                    localStorage.setItem('userProfile', JSON.stringify(userProfile));
                    renderUserProfile();
                    if (photoModal) photoModal.classList.add('hidden');
                    pendingPhotoBase64 = null;
                };
                img.src = pendingPhotoBase64;
            }
        });
    }

    if (cancelPhotoBtn) {
        cancelPhotoBtn.addEventListener('click', () => {
            if (photoModal) photoModal.classList.add('hidden');
            pendingPhotoBase64 = null; if (photoInput) photoInput.value = '';
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const firstName = document.getElementById('reg-first-name').value;
            const lastName = document.getElementById('reg-last-name').value;
            const email = document.getElementById('reg-email').value;
            const password = document.getElementById('reg-pass').value;

            if (!firstName || !lastName || !email || !password) {
                alert(translations[currentLang].fillAllFields);
                return;
            }

            const name = `${firstName} ${lastName}`;
            if (password.length < 8) { alert(translations[currentLang].passwordTooShort); return; }
            const hashedPassword = await hashPassword(password);
            const newUser = { name, email, password: hashedPassword };

            // Add to allUsers array
            allUsers = allUsers.filter(u => u.email !== email); // Remove duplicate if exists
            allUsers.push(newUser);
            localStorage.setItem('allUsers', JSON.stringify(allUsers));

            userProfile = newUser;
            localStorage.setItem('userProfile', JSON.stringify(userProfile));
            localStorage.setItem('isLoggedIn', 'true');
            alert(translations[currentLang].welcomeMsg + name);
            location.reload();
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-pass').value;
            const stored = JSON.parse(localStorage.getItem('userProfile'));
            if (!stored || stored.email !== email) { alert(translations[currentLang].loginError); return; }
            const hashedInput = await hashPassword(password);
            if (stored.password !== hashedInput) { alert(translations[currentLang].loginError); return; }
            userProfile = stored;
            localStorage.setItem('isLoggedIn', 'true');
            alert(translations[currentLang].welcomeBackMsg + userProfile.name);
            location.reload();
        });
    }

    function updateBMI() {
        const h = parseFloat(document.getElementById('height')?.value) / 100;
        const w = parseFloat(document.getElementById('weight')?.value);
        const bmiRes = document.getElementById('bmi-result');
        const bmiVal = document.getElementById('bmi-value');
        const bmiStatus = document.getElementById('bmi-status');

        if (h > 0 && w > 0) {
            const bmi = (w / (h * h)).toFixed(1);
            if (bmiRes) bmiRes.style.display = 'block';
            if (bmiVal) bmiVal.textContent = bmi;

            let status = '';
            let color = '';
            if (bmi < 18.5) { status = translations[currentLang].statBmiUnderweight; color = '#60a5fa'; }
            else if (bmi < 25) { status = translations[currentLang].statBmiNormal; color = '#4ade80'; }
            else if (bmi < 30) { status = translations[currentLang].statBmiOverweight; color = '#fbbf24'; }
            else { status = translations[currentLang].statBmiObese; color = '#ef4444'; }

            if (bmiStatus) {
                bmiStatus.textContent = status;
                bmiStatus.style.color = color;
            }
        }
    }

    const statsForm = document.getElementById('stats-form');
    if (statsForm) {
        statsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const h = document.getElementById('height').value;
            const w = document.getElementById('weight').value;
            const age = document.getElementById('age').value;
            const gender = document.getElementById('gender').value;
            const goal = document.getElementById('fitness-goal').value;
            const trainingTime = document.getElementById('training-time').value;

            if (userProfile) {
                userProfile.height = h;
                userProfile.weight = w;
                userProfile.age = age;
                userProfile.gender = gender;
                userProfile.goal = goal;
                userProfile.trainingTime = trainingTime;
                updateBMI();
                saveAndSync();
                alert(translations[currentLang].saveSuccess);
            }
        });
    }

    const editProfileBtn = document.getElementById('edit-profile-btn');
    if (editProfileBtn) {
        editProfileBtn.addEventListener('click', () => {
            const newName = prompt(translations[currentLang].regName, userProfile.name);
            const newEmail = prompt(translations[currentLang].regEmail, userProfile.email);
            if (newName && newEmail && confirm(translations[currentLang].confirmEdit)) {
                userProfile.name = newName;
                userProfile.email = newEmail;
                saveAndSync();
                location.reload();
            }
        });
    }

    const goalSelector = document.getElementById('goal-selector');
    const workoutPlanList = document.getElementById('workout-plan-list');

    const trainingPlans = {
        strength: ["Bench Press: 5x5", "Dřepy: 5x5", "Mrtvý tah: 3x5", "Military Press: 5x5"],
        hypertrophy: ["Incline DB Press: 3x12", "Přítahy v předklonu: 4x10", "Leg Press: 3x15", "Arnold Press: 3x12"],
        weightloss: ["Burpees: 4x15", "Angličáky: 4x15", "Výpady: 3x20", "Plank: 3x 1min"]
    };

    if (goalSelector) {
        goalSelector.addEventListener('change', (e) => {
            const goal = e.target.value;
            if (goal !== 'custom' && trainingPlans[goal]) {
                workoutPlanList.innerHTML = '';
                trainingPlans[goal].forEach(ex => {
                    const li = document.createElement('li');
                    li.innerHTML = `<span>🏋️ ${ex}</span><button class="remove-btn">×</button>`;
                    workoutPlanList.appendChild(li);
                });
                userProfile.workoutPlan = trainingPlans[goal];
                saveAndSync();
            }
        });
    }

    function saveAndSync() {
        localStorage.setItem('userProfile', JSON.stringify(userProfile));
        allUsers = allUsers.map(u => u.email === userProfile.email ? userProfile : u);
        localStorage.setItem('allUsers', JSON.stringify(allUsers));
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.setItem('isLoggedIn', 'false');
            localStorage.removeItem('userProfile');
            location.reload();
        });
    }
});
