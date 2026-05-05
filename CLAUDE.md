# CLAUDE.md — Profil developera

## Kim jestem

Jestem Mateusz Dohojda — backend developer z 7+ latami komercyjnego doświadczenia, mieszkający w Gdyni (Trójmiasto, Polska). Buduję systemy od podstaw — nie tylko korzystam z frameworków, ale rozumiem jak działają pod spodem i potrafię zaprojektować własne. Moja specjalizacja to backend w TypeScript/Node.js (komercyjnie), Rust i Go (projekty własne + epizodycznie komercyjnie), z solidnym zapleczem fullstackowym.

Nie jestem typowym developerem, który skacze między frameworkami. Wolę zrozumieć jak coś działa na niskim poziomie i zbudować rozwiązanie dopasowane do problemu, niż sięgać po gotowca. Moje projekty portfolio to nie TODO-listy — to frameworki, edytory, narzędzia CLI.

## Ton i styl komunikacji

### Jak piszę i mówię
- **Bezpośrednio i konkretnie** — nie owijam w bawełnę, cenię prostotę przekazu
- **Technicznie precyzyjnie** — używam właściwych terminów, nie upraszczam na siłę
- **Po ludzku, nie korporacyjnie** — zero buzzwordów typu "passionate", "synergy", "leverage". Jeśli coś jest fajne technicznie, mówię wprost czemu
- **Z humorem, ale nie na siłę** — lekki, suchy humor jest OK, ale nie clown-mode
- **Po polsku myślę, po angielsku koduję** — techniczny angielski jest naturalny, ale nie udaję native speakera

### Czego unikać w tekstach dla mnie
- Przesadnego samochwalstwa ("world-class", "exceptional", "visionary")
- Korporacyjnego żargonu ("delivering value", "driving impact", "stakeholder alignment")
- Fałszywej skromności ("just a developer who...")
- Pustych przymiotników bez dowodów ("experienced", "skilled" — zamiast tego pokaż CZYM)
- Emotikonów i nadmiernej interpunkcji (!!!, ???)
- Generycznych opisów, które pasują do każdego developera

### Co działa
- Konkretne przykłady techniczne zamiast ogólników
- Opisy decyzji i trade-offów, nie tylko efektów
- Pokazywanie procesu myślowego ("wybrałem X zamiast Y, bo...")
- Szczerość co do limitacji i planów rozwoju
- Naturalny, konwersacyjny ton — jakbym tłumaczył coś kumplowi przy kawie

## Projekty portfolio

### Requiem — Backend framework w Ruście
**Repo:** [link do GitHub — uzupełnij]
**Status:** Aktywny rozwój, core features działają

**Co to jest:** Opinionated backend framework w Ruście, zbudowany bezpośrednio na `hyper` (bez Axum/Actix jako warstwy pośredniej), z `sqlx` jako warstwą bazodanową. Kluczowa cecha: generowanie typów TypeScript z definicji Rustowych endpointów — frontend dostaje type-safe klienta API bez ręcznego pisania typów.

**Kluczowe decyzje techniczne:**
- **Hyper zamiast Axum/Actix** — pełna kontrola nad HTTP, zero magii frameworka, zrozumienie jak request lifecycle naprawdę działa
- **sqlx zamiast Diesel** — compile-time verification zapytań SQL, brak ciężkiego ORM-a, bliżej surowego SQL-a
- **Generowanie typów TS** — bridge między Rust backendem a TypeScript frontendem, eliminacja drift'u typów między API a klientem
- **Mini-ORM / SQL builder** — lekka abstrakcja nad sqlx, nie full ORM jak Diesel, ale wystarczająco żeby nie pisać raw SQL wszędzie

**Czemu to jest ważne:** Pokazuje, że rozumiem jak frameworki webowe działają od środka — routing, middleware pipeline, request/response lifecycle, connection pooling, type mapping. Nie jestem użytkownikiem frameworka, jestem kimś kto potrafi go zaprojektować.

**Znane limitacje:** Middleware pipeline w trakcie, brak gotowego systemu auth, dokumentacja w budowie.

---

### V-dok — Edytor EPUB z Rust/WASM
**Repo:** [link do GitHub — uzupełnij]
**Status:** Aktywny rozwój, core editing działa

**Co to jest:** Aplikacja webowa (Next.js frontend + Rust/WASM) do tworzenia i edycji plików EPUB, celowana w workflow wydawniczy. Kluczowa innowacja: client-side PDF processing przez `pdfium-render` skompilowane do WebAssembly — bez serwera, przetwarzanie w przeglądarce.

**Kluczowe decyzje techniczne:**
- **Własny format `.vdok`** — semantyczny model dokumentu (JSON-based), niezależny od formatu wyjściowego (EPUB, PDF), zorientowany na reading order i strukturę logiczną dokumentu
- **pdfium-render → WASM** — rendering PDF w przeglądarce bez backendu, eliminacja kosztów serwera i problemów z prywatnością dokumentów
- **Block-based editor** — UI wzorowany na edytorach blokowych (Notion-style), ale zorientowany na specyfikę publikacji (rozdziały, metadata, ToC)
- **Next.js + Rust/WASM** — TypeScript do UI i logiki aplikacji, Rust/WASM do ciężkiego przetwarzania (PDF rendering, konwersja formatów)

**Czemu to jest ważne:** Pokazuje umiejętność integracji ekosystemów (JS ↔ WASM), pragmatyczne podejście do architektury (client-side processing zamiast kosztownego backendu), oraz myślenie produktowe (identyfikacja problemu w branży wydawniczej).

**Znane limitacje:** UI wymaga dopracowania, eksport do EPUB w trakcie, brak live demo.

---

### envik — CLI do zarządzania zmiennymi środowiskowymi
**Repo:** [link do GitHub — uzupełnij]
**Status:** CLI działa, backend planowany

**Co to jest:** Narzędzie CLI napisane w Ruście do zarządzania plikami `.env` między środowiskami (dev, staging, prod) z planowanym backendem do synchronizacji w zespole.

**Kluczowe decyzje techniczne:**
- **Rust dla CLI** — szybki startup, single binary, cross-platform bez runtime dependencies
- **Planowany backend:** PostgreSQL + AES-256-GCM encryption dla sekretów + OAuth do autoryzacji
- **Architektura:** CLI jako thin client, backend jako source of truth, sync protocol między nimi

**Czemu to jest ważne:** Praktyczne narzędzie DX (developer experience), pokazuje umiejętność projektowania CLI z sensownym UX, oraz planowania systemu end-to-end (klient + serwer + szyfrowanie + auth).

**Znane limitacje:** Backend jeszcze nie istnieje, CLI w fazie MVP.

## Doświadczenie komercyjne

### Have a Book (08.2019 – 04.2026) — Programista
- **Firma:** mała firma, byłem jedynym developerem ("ster, maszt i żagiel")
- **Główny stack:** TypeScript + Node.js/NestJS
- **Co robiłem:** Samodzielne projektowanie i implementacja pełnego stacku aplikacji — od architektury bazy danych, przez backend API, po frontend. Odpowiedzialność za całość decyzji technicznych.
- **Epizody w innych technologiach:** Aplikacja desktopowa w C#, backend w Go (dla lepszej wydajności), eksperymenty z Rustem
- **Co to oznacza:** Potrafię samodzielnie dostarczyć produkt od zera do produkcji. Umiem podejmować decyzje architektoniczne i żyć z ich konsekwencjami. Znam NestJS komercyjnie i głęboko (moduły, DI, guardy, interceptory, pipy, microservices).

### Czego mi brakuje (i o czym wiem)
- **Praca w zespole** — większość kariery pracowałem solo. Mało doświadczenia z code review, pair programming, mentoring, scrum ceremonies. To jest moja świadoma luka, którą chcę uzupełnić w następnej roli.
- **Procesy w większej organizacji** — CI/CD pipelines (znam koncepcyjnie, mało hands-on), sprint planning, retrospektywy, RFC-e
- **Komercyjne Go/Rust** — moje doświadczenie w tych językach to głównie projekty własne + epizody w pracy. Potrafię w nich pisać na solidnym poziomie, ale nie mam lat komercyjnej praktyki.

## Stack technologiczny

### Używam na co dzień (komercyjnie)
- TypeScript, Node.js, NestJS
- PostgreSQL
- Git, Linux, Docker (basic)

### Używam w projektach własnych (solidna znajomość)
- Rust (hyper, sqlx, tokio, wasm-bindgen, serde)
- Go (net/http, podstawy ekosystemu)
- Next.js, React
- WebAssembly (Rust → WASM)

### Znam, używałem epizodycznie
- C# / .NET (aplikacje desktopowe)
- Canvas 2D, WebGL/OpenGL basics
- MongoDB, Redis (basics)

### Uczę się / chcę rozwijać
- Go (głębiej — concurrency patterns, gRPC, cloud-native)
- Kubernetes, Terraform
- Observability (OpenTelemetry, Prometheus, Grafana)
- System design na większą skalę

## Kontekst osobisty (do personalizacji treści)

- **Lokalizacja:** Gdynia / Trójmiasto
- **Wiek:** 31 lat (ur. 1995)
- **Wykształcenie:** Nieistotne dla portfolio — 7+ lat doświadczenia mówi za siebie
- **Język:** Polski (natywny), Angielski (techniczny, swobodny)
- **Zainteresowania poza kodem:** Tabletop RPG (D&D — mam rozbudowanego własnego bohatera), worldbuilding, creative writing. To może być ciekawy element "ludzki" na stronie portfolio — pokazuje kreatywność i zdolność do budowania złożonych systemów (bo czym jest worldbuilding jak nie system design?)
- **Motywacja:** Chcę pracować w większym zespole, uczyć się od innych, pisać w Go lub Ruście komercyjnie. Szukam środowiska, które pozwoli mi rozwinąć skrzydła w pracy zespołowej przy zachowaniu technicznej głębi.

## Wskazówki do budowania portfolio

### Strona www powinna komunikować
1. **"Buduję od podstaw, nie tylko korzystam"** — Requiem to nie kolejna apka w Axum, to własny framework. V-dok to nie wrapper na bibliotekę, to system z własnym formatem danych.
2. **"Rozumiem trade-offy"** — każda decyzja techniczna ma swoje "dlaczego". Pokaż myślenie, nie tylko efekt.
3. **"Jestem pragmatyczny"** — nie buduję rzeczy dla samego budowania. envik rozwiązuje realny problem. V-dok celuje w konkretną branżę.
4. **"Szukam zespołu, nie tylko pracy"** — chcę się rozwijać, nie tylko zarabiać.

### Struktura sugerowana
- **Hero:** Imię, krótki opis (1-2 zdania), stack
- **Projekty:** Każdy z osobną sekcją — problem, rozwiązanie, stack, decyzje, link do kodu
- **O mnie:** Krótka bio, zainteresowania, czego szukam
- **Kontakt:** Email, GitHub, LinkedIn
- **Opcjonalnie blog:** Techniczne write-upy o decyzjach w projektach (np. "Czemu zbudowałem własny framework zamiast użyć Axum")

### Czego NIE dawać na stronę
- Listy 30 technologii w kolorowych badge'ach (to nie mówi nic)
- Sekcji "testimonials" (jeśli nie masz realnych)
- Animacji i efektów na siłę (niech mówi treść, nie CSS)
- Projektów, które nie istnieją lub są całkowicie puste na GitHubie

## Przykładowe opisy do wykorzystania

### Bio — wersja krótka (1-2 zdania)
"Backend developer z 7+ latami doświadczenia. Buduję frameworki, edytory i narzędzia CLI w Ruście, Go i TypeScript — od architektury po implementację."

### Bio — wersja dłuższa (akapit)
"Jestem backend developerem z Trójmiasta z ponad 7-letnim doświadczeniem komercyjnym. Przez większość kariery byłem jedynym developerem w firmie, co nauczyło mnie samodzielności w podejmowaniu decyzji technicznych i dostarczaniu produktów end-to-end. Mój główny stack komercyjny to TypeScript i NestJS, ale serce mam w Ruście i Go — języki, w których buduję własne narzędzia i frameworki. Szukam zespołu, w którym mogę połączyć swoją samodzielność z nauką pracy w grupie."

### Opis Requiem — wersja na stronę
"Requiem to opinionated backend framework w Ruście, zbudowany bezpośrednio na hyper — bez warstw abstrakcji typu Axum czy Actix. Zawiera własny SQL builder oparty na sqlx i system generowania typów TypeScript z definicji endpointów Rustowych. Zbudowałem go, żeby zrozumieć jak frameworki webowe naprawdę działają pod spodem, i żeby mieć narzędzie, które nie ukrywa złożoności za magią makr."
