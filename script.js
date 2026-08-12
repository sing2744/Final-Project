const STORAGE_KEY = "gameBacklogTrackerGamesV3";

let games = [];
let deleteGameId = null;
let toastTimer = null;


/* =====================================
   STARTER GAMES WITH REAL PREVIEW IMAGES
===================================== */

const starterGames = [

  {
    id: "game-1",

    title:
      "God Of War: Ragnarök",

    platform:
      "PlayStation 5",

    genre:
      "Action",

    status:
      "Completed",

    progress:
      100,

    rating:
      5,

    image:
      "https://cdn.akamai.steamstatic.com/steam/apps/2322010/header.jpg"
  },


  {
    id: "game-2",

    title:
      "Black Myth: Wukong",

    platform:
      "PlayStation 5",

    genre:
      "Action",

    status:
      "Completed",

    progress:
      100,

    rating:
      5,

    image:
      "https://cdn.akamai.steamstatic.com/steam/apps/2358720/header.jpg"
  },


  {
    id: "game-3",

    title:
      "Forza Horizon 5",

    platform:
      "PlayStation 5",

    genre:
      "Racing",

    status:
      "Currently Playing",

    progress:
      48,

    rating:
      4,

    image:
      "https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg"
  },


  {
    id: "game-4",

    title:
      "Red Dead Redemption 2",

    platform:
      "PlayStation 5",

    genre:
      "Adventure",

    status:
      "Currently Playing",

    progress:
      20,

    rating:
      5,

    image:
      "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg"
  },


  {
    id: "game-5",

    title:
      "Elden Ring",

    platform:
      "PlayStation 5",

    genre:
      "RPG",

    status:
      "Want to Play",

    progress:
      0,

    rating:
      0,

    image:
      "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg"
  },


  {
    id: "game-6",

    title:
      "Hades",

    platform:
      "PC",

    genre:
      "Indie",

    status:
      "Want to Play",

    progress:
      0,

    rating:
      0,

    image:
      "https://cdn.akamai.steamstatic.com/steam/apps/1145360/header.jpg"
  }

];



/* =====================================
   HTML ELEMENTS
===================================== */

const pages =
  document.querySelectorAll(
    ".page"
  );


const navigationButtons =
  document.querySelectorAll(
    "[data-view]"
  );


const navLinks =
  document.querySelectorAll(
    ".nav-link"
  );


const mainNavigation =
  document.querySelector(
    "#mainNav"
  );


const menuButton =
  document.querySelector(
    "#menuButton"
  );



/* Dashboard */

const dashboardStats =
  document.querySelector(
    "#dashboardStats"
  );


const playingList =
  document.querySelector(
    "#playingList"
  );


const dashboardAddButton =
  document.querySelector(
    "#dashboardAddButton"
  );


const quickPickButton =
  document.querySelector(
    "#quickPickButton"
  );


const quickResult =
  document.querySelector(
    "#quickResult"
  );



/* Games */

const gamesAddButton =
  document.querySelector(
    "#gamesAddButton"
  );


const searchInput =
  document.querySelector(
    "#searchInput"
  );


const platformFilter =
  document.querySelector(
    "#platformFilter"
  );


const genreFilter =
  document.querySelector(
    "#genreFilter"
  );


const statusFilter =
  document.querySelector(
    "#statusFilter"
  );


const clearFiltersButton =
  document.querySelector(
    "#clearFiltersButton"
  );


const gamesGrid =
  document.querySelector(
    "#gamesGrid"
  );


const gameCount =
  document.querySelector(
    "#gameCount"
  );



/* Form */

const gameForm =
  document.querySelector(
    "#gameForm"
  );


const editGameId =
  document.querySelector(
    "#editGameId"
  );


const formTitle =
  document.querySelector(
    "#formTitle"
  );


const formDescription =
  document.querySelector(
    "#formDescription"
  );


const titleInput =
  document.querySelector(
    "#titleInput"
  );


const platformInput =
  document.querySelector(
    "#platformInput"
  );


const genreInput =
  document.querySelector(
    "#genreInput"
  );


const statusInput =
  document.querySelector(
    "#statusInput"
  );


const ratingInput =
  document.querySelector(
    "#ratingInput"
  );


const imageInput =
  document.querySelector(
    "#imageInput"
  );


const progressInput =
  document.querySelector(
    "#progressInput"
  );


const progressValue =
  document.querySelector(
    "#progressValue"
  );


const titleError =
  document.querySelector(
    "#titleError"
  );


const platformError =
  document.querySelector(
    "#platformError"
  );


const genreError =
  document.querySelector(
    "#genreError"
  );


const cancelButton =
  document.querySelector(
    "#cancelButton"
  );


const saveButton =
  document.querySelector(
    "#saveButton"
  );



/* Random */

const randomPickButton =
  document.querySelector(
    "#randomPickButton"
  );


const randomResult =
  document.querySelector(
    "#randomResult"
  );



/* Statistics */

const statisticsCards =
  document.querySelector(
    "#statisticsCards"
  );


const statusBreakdown =
  document.querySelector(
    "#statusBreakdown"
  );


const platformBreakdown =
  document.querySelector(
    "#platformBreakdown"
  );



/* Modal */

const deleteModal =
  document.querySelector(
    "#deleteModal"
  );


const cancelDeleteButton =
  document.querySelector(
    "#cancelDeleteButton"
  );


const confirmDeleteButton =
  document.querySelector(
    "#confirmDeleteButton"
  );


const toast =
  document.querySelector(
    "#toast"
  );



/* =====================================
   CREATE ID
===================================== */

function createId() {

  if (
    window.crypto &&
    window.crypto.randomUUID
  ) {

    return (
      window.crypto.randomUUID()
    );

  }


  return (
    "game-" +
    Date.now() +
    "-" +
    Math.random()
      .toString(16)
      .slice(2)
  );

}



/* =====================================
   PLACEHOLDER IMAGE
===================================== */

function createPlaceholderImage(
  title
) {

  const firstLetter =
    title
      .charAt(0)
      .toUpperCase();


  const svg = `

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="600"
      height="340"
    >

      <rect
        width="600"
        height="340"
        fill="#e4e6eb"
      />

      <rect
        x="40"
        y="40"
        width="110"
        height="110"
        rx="18"
        fill="#a8aebb"
      />

      <text
        x="95"
        y="115"
        text-anchor="middle"
        font-size="65"
        font-family="Arial"
        font-weight="bold"
        fill="white"
      >

        ${firstLetter}

      </text>

      <text
        x="40"
        y="230"
        font-size="32"
        font-family="Arial"
        font-weight="bold"
        fill="#292d35"
      >

        ${escapeHTML(title)}

      </text>

      <text
        x="40"
        y="280"
        font-size="18"
        font-family="Arial"
        fill="#6f7580"
      >

        Game Backlog Tracker

      </text>

    </svg>

  `;


  return (
    "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(svg)
  );

}



/* =====================================
   GET GAME IMAGE
===================================== */

function getGameImage(
  game
) {

  if (
    game.image &&
    game.image.trim()
  ) {

    return (
      game.image.trim()
    );

  }


  return (
    createPlaceholderImage(
      game.title
    )
  );

}



/* =====================================
   LOAD DATA
===================================== */

async function loadGames() {

  await new Promise(
    resolve =>
      setTimeout(
        resolve,
        50
      )
  );


  const savedGames =
    localStorage.getItem(
      STORAGE_KEY
    );


  if (savedGames) {

    try {

      const parsed =
        JSON.parse(
          savedGames
        );


      if (
        Array.isArray(
          parsed
        )
      ) {

        games =
          parsed;


        return;

      }

    }

    catch (error) {

      console.log(
        "Could not load saved games."
      );

    }

  }


  games =
    starterGames.map(
      game => ({
        ...game
      })
    );


  saveGames();

}



/* =====================================
   SAVE DATA
===================================== */

function saveGames() {

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(
      games
    )
  );

}



/* =====================================
   NAVIGATION
===================================== */

function showPage(
  pageName
) {

  pages.forEach(
    page => {

      page.classList.remove(
        "active"
      );

    }
  );


  const selectedPage =
    document.querySelector(
      `#${pageName}Page`
    );


  if (
    selectedPage
  ) {

    selectedPage.classList.add(
      "active"
    );

  }


  navLinks.forEach(
    button => {

      button.classList.toggle(
        "active",
        button.dataset.view ===
          pageName
      );

    }
  );


  mainNavigation
    .classList.remove(
      "open"
    );


  if (
    pageName ===
    "dashboard"
  ) {

    renderDashboard();

  }


  if (
    pageName ===
    "games"
  ) {

    renderGames();

  }


  if (
    pageName ===
    "stats"
  ) {

    renderStatistics();

  }


  window.scrollTo(
    {
      top: 0,

      behavior:
        "smooth"
    }
  );

}



navigationButtons.forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        const pageName =
          button.dataset.view;


        if (
          pageName ===
          "form"
        ) {

          resetForm();

        }


        showPage(
          pageName
        );

      }
    );

  }
);



menuButton.addEventListener(
  "click",
  () => {

    mainNavigation
      .classList.toggle(
        "open"
      );

  }
);



/* =====================================
   CALCULATE STATS
===================================== */

function calculateStats() {

  const total =
    games.length;


  const completed =
    games.filter(
      game =>
        game.status ===
        "Completed"
    ).length;


  const playing =
    games.filter(
      game =>
        game.status ===
        "Currently Playing"
    ).length;


  const ratedGames =
    games.filter(
      game =>
        Number(
          game.rating
        ) > 0
    );


  let average =
    "0.0";


  if (
    ratedGames.length > 0
  ) {

    const totalRatings =
      ratedGames.reduce(
        (
          total,
          game
        ) => {

          return (
            total +
            Number(
              game.rating
            )
          );

        },
        0
      );


    average =
      (
        totalRatings /
        ratedGames.length
      ).toFixed(
        1
      );

  }


  return {

    total,

    completed,

    playing,

    average

  };

}



/* =====================================
   STAT CARDS
===================================== */

function renderStatCards(
  target
) {

  const stats =
    calculateStats();


  target.innerHTML = `

    <div class="stat-card">

      <span>
        Total Games
      </span>

      <strong>
        ${stats.total}
      </strong>

    </div>


    <div class="stat-card">

      <span>
        Completed
      </span>

      <strong>
        ${stats.completed}
      </strong>

    </div>


    <div class="stat-card">

      <span>
        Currently Playing
      </span>

      <strong>
        ${stats.playing}
      </strong>

    </div>


    <div class="stat-card">

      <span>
        Average Rating
      </span>

      <strong>
        ${stats.average}
      </strong>

    </div>

  `;

}



/* =====================================
   DASHBOARD
===================================== */

function renderDashboard() {

  renderStatCards(
    dashboardStats
  );


  const currentlyPlaying =
    games.filter(
      game =>
        game.status ===
        "Currently Playing"
    );


  if (
    currentlyPlaying.length === 0
  ) {

    playingList.innerHTML = `

      <div class="empty-state">

        No games are currently
        being played.

      </div>

    `;


    return;

  }


  playingList.innerHTML =
    currentlyPlaying
      .slice(
        0,
        4
      )
      .map(
        game => {

          return `

            <div class="playing-row">

              <img
                class="
                  playing-image
                  game-image
                "

                src="
                  ${getGameImage(
                    game
                  )}
                "

                data-game-title="
                  ${escapeAttribute(
                    game.title
                  )}
                "

                alt="
                  ${escapeAttribute(
                    game.title
                  )}
                  preview
                "
              >


              <div class="playing-info">

                <div class="playing-row-top">

                  <strong>

                    ${escapeHTML(
                      game.title
                    )}

                  </strong>


                  <span>

                    ${game.progress}%

                  </span>

                </div>


                <div class="progress-track">

                  <div
                    class="progress-fill"

                    style="
                      width:
                      ${game.progress}%;
                    "
                  >
                  </div>

                </div>


                <span class="muted-text">

                  ${escapeHTML(
                    game.platform
                  )}

                  ·

                  ${escapeHTML(
                    game.genre
                  )}

                </span>

              </div>

            </div>

          `;

        }
      )
      .join("");

}



/* =====================================
   ADD GAME BUTTONS
===================================== */

dashboardAddButton
  .addEventListener(
    "click",
    () => {

      resetForm();

      showPage(
        "form"
      );

    }
  );


gamesAddButton
  .addEventListener(
    "click",
    () => {

      resetForm();

      showPage(
        "form"
      );

    }
  );



/* =====================================
   FILTER OPTIONS
===================================== */

function updateFilterOptions() {

  const oldPlatform =
    platformFilter.value;


  const oldGenre =
    genreFilter.value;


  const platforms =
    [
      ...new Set(
        games.map(
          game =>
            game.platform
        )
      )
    ].sort();


  const genres =
    [
      ...new Set(
        games.map(
          game =>
            game.genre
        )
      )
    ].sort();


  platformFilter.innerHTML = `

    <option value="all">

      All Platforms

    </option>

  `;


  genreFilter.innerHTML = `

    <option value="all">

      All Genres

    </option>

  `;


  platforms.forEach(
    platform => {

      platformFilter.innerHTML += `

        <option
          value="${escapeAttribute(
            platform
          )}"
        >

          ${escapeHTML(
            platform
          )}

        </option>

      `;

    }
  );


  genres.forEach(
    genre => {

      genreFilter.innerHTML += `

        <option
          value="${escapeAttribute(
            genre
          )}"
        >

          ${escapeHTML(
            genre
          )}

        </option>

      `;

    }
  );


  if (
    platforms.includes(
      oldPlatform
    )
  ) {

    platformFilter.value =
      oldPlatform;

  }


  if (
    genres.includes(
      oldGenre
    )
  ) {

    genreFilter.value =
      oldGenre;

  }

}



/* =====================================
   FILTER GAMES
===================================== */

function getFilteredGames() {

  const search =
    searchInput.value
      .trim()
      .toLowerCase();


  const platform =
    platformFilter.value;


  const genre =
    genreFilter.value;


  const status =
    statusFilter.value;


  return games.filter(
    game => {

      const titleMatches =
        game.title
          .toLowerCase()
          .includes(
            search
          );


      const platformMatches =
        platform ===
          "all" ||
        game.platform ===
          platform;


      const genreMatches =
        genre ===
          "all" ||
        game.genre ===
          genre;


      const statusMatches =
        status ===
          "all" ||
        game.status ===
          status;


      return (
        titleMatches &&
        platformMatches &&
        genreMatches &&
        statusMatches
      );

    }
  );

}



/* =====================================
   STATUS CLASS
===================================== */

function getStatusClass(
  status
) {

  if (
    status ===
    "Completed"
  ) {

    return (
      "status-completed"
    );

  }


  if (
    status ===
    "Currently Playing"
  ) {

    return (
      "status-playing"
    );

  }


  if (
    status ===
    "Dropped"
  ) {

    return (
      "status-dropped"
    );

  }


  return (
    "status-want"
  );

}



/* =====================================
   STARS
===================================== */

function getStars(
  rating
) {

  const number =
    Number(
      rating
    );


  if (
    number === 0
  ) {

    return (
      "Not Rated"
    );

  }


  return (
    "★".repeat(
      number
    ) +
    "☆".repeat(
      5 - number
    )
  );

}



/* =====================================
   RENDER GAMES
===================================== */

function renderGames() {

  updateFilterOptions();


  const filteredGames =
    getFilteredGames();


  gameCount.textContent =
    filteredGames.length +
    (
      filteredGames.length === 1
        ? " game"
        : " games"
    );


  if (
    filteredGames.length === 0
  ) {

    gamesGrid.innerHTML = `

      <div class="empty-state">

        No games found.
        Try changing the filters.

      </div>

    `;


    return;

  }


  gamesGrid.innerHTML =
    filteredGames
      .map(
        game => {

          return `

            <article class="game-card">


              <img
                class="
                  game-cover
                  game-image
                "

                src="
                  ${getGameImage(
                    game
                  )}
                "

                data-game-title="
                  ${escapeAttribute(
                    game.title
                  )}
                "

                alt="
                  ${escapeAttribute(
                    game.title
                  )}
                  preview image
                "
              >


              <div class="game-info">

                <h3>

                  ${escapeHTML(
                    game.title
                  )}

                </h3>


                <p class="game-meta">

                  ${escapeHTML(
                    game.platform
                  )}

                  ·

                  ${escapeHTML(
                    game.genre
                  )}

                </p>

              </div>


              <span
                class="
                  status-badge

                  ${getStatusClass(
                    game.status
                  )}
                "
              >

                ${escapeHTML(
                  game.status
                )}

              </span>


              <div class="card-progress">

                <div class="card-progress-header">

                  <span>
                    Progress
                  </span>

                  <strong>
                    ${game.progress}%
                  </strong>

                </div>


                <div class="progress-track">

                  <div
                    class="progress-fill"

                    style="
                      width:
                      ${game.progress}%;
                    "
                  >
                  </div>

                </div>

              </div>


              <div class="rating">

                ${getStars(
                  game.rating
                )}

              </div>


              <div class="card-buttons">

                <button
                  class="secondary-button"

                  type="button"

                  data-edit="
                    ${game.id}
                  "
                >
                  Edit
                </button>


                <button
                  class="secondary-button"

                  type="button"

                  data-delete="
                    ${game.id}
                  "
                >
                  Delete
                </button>

              </div>

            </article>

          `;

        }
      )
      .join("");

}



/* =====================================
   SEARCH & FILTER EVENTS
===================================== */

searchInput.addEventListener(
  "input",
  renderGames
);


platformFilter.addEventListener(
  "change",
  renderGames
);


genreFilter.addEventListener(
  "change",
  renderGames
);


statusFilter.addEventListener(
  "change",
  renderGames
);



clearFiltersButton
  .addEventListener(
    "click",
    () => {

      searchInput.value =
        "";


      platformFilter.value =
        "all";


      genreFilter.value =
        "all";


      statusFilter.value =
        "all";


      renderGames();

    }
  );



/* =====================================
   RESET FORM
===================================== */

function resetForm() {

  gameForm.reset();


  editGameId.value =
    "";


  formTitle.textContent =
    "Add Game";


  formDescription.textContent =
    "Add a new game to your backlog.";


  saveButton.textContent =
    "Save Game";


  statusInput.value =
    "Want to Play";


  ratingInput.value =
    "0";


  progressInput.value =
    "0";


  progressValue.textContent =
    "0%";


  clearErrors();

}



/* =====================================
   ERRORS
===================================== */

function clearErrors() {

  titleError.textContent =
    "";


  platformError.textContent =
    "";


  genreError.textContent =
    "";

}



function validateForm() {

  clearErrors();


  let valid =
    true;


  if (
    !titleInput.value.trim()
  ) {

    titleError.textContent =
      "Please enter a game title.";


    valid =
      false;

  }


  if (
    !platformInput.value.trim()
  ) {

    platformError.textContent =
      "Please enter a platform.";


    valid =
      false;

  }


  if (
    !genreInput.value.trim()
  ) {

    genreError.textContent =
      "Please enter a genre.";


    valid =
      false;

  }


  return valid;

}



/* =====================================
   PROGRESS SLIDER
===================================== */

progressInput
  .addEventListener(
    "input",
    () => {

      progressValue.textContent =
        progressInput.value +
        "%";

    }
  );



/* =====================================
   COMPLETED = 100%
===================================== */

statusInput
  .addEventListener(
    "change",
    () => {

      if (
        statusInput.value ===
        "Completed"
      ) {

        progressInput.value =
          "100";


        progressValue.textContent =
          "100%";

      }

    }
  );



/* =====================================
   SAVE / UPDATE GAME
===================================== */

gameForm.addEventListener(
  "submit",
  event => {

    event.preventDefault();


    if (
      !validateForm()
    ) {

      return;

    }


    const gameData = {

      title:
        titleInput.value.trim(),

      platform:
        platformInput.value.trim(),

      genre:
        genreInput.value.trim(),

      status:
        statusInput.value,

      rating:
        Number(
          ratingInput.value
        ),

      image:
        imageInput.value.trim(),

      progress:
        statusInput.value ===
        "Completed"

          ? 100

          : Number(
              progressInput.value
            )

    };


    if (
      editGameId.value
    ) {

      games =
        games.map(
          game => {

            if (
              game.id ===
              editGameId.value
            ) {

              return {

                ...game,

                ...gameData

              };

            }


            return game;

          }
        );


      showToast(
        "Game updated!"
      );

    }

    else {

      games.unshift(
        {

          id:
            createId(),

          ...gameData

        }
      );


      showToast(
        "Game added!"
      );

    }


    saveGames();


    resetForm();


    renderAll();


    showPage(
      "games"
    );

  }
);



/* =====================================
   CANCEL FORM
===================================== */

cancelButton.addEventListener(
  "click",
  () => {

    resetForm();


    showPage(
      "games"
    );

  }
);



/* =====================================
   GAME CARD BUTTON EVENTS
===================================== */

gamesGrid.addEventListener(
  "click",
  event => {

    const editButton =
      event.target.closest(
        "[data-edit]"
      );


    const deleteButton =
      event.target.closest(
        "[data-delete]"
      );


    if (
      editButton
    ) {

      editGame(
        editButton.dataset.edit
      );

    }


    if (
      deleteButton
    ) {

      openDeleteModal(
        deleteButton.dataset.delete
      );

    }

  }
);



/* =====================================
   EDIT GAME
===================================== */

function editGame(
  id
) {

  const game =
    games.find(
      game =>
        game.id ===
        id
    );


  if (
    !game
  ) {

    return;

  }


  editGameId.value =
    game.id;


  titleInput.value =
    game.title;


  platformInput.value =
    game.platform;


  genreInput.value =
    game.genre;


  statusInput.value =
    game.status;


  ratingInput.value =
    String(
      game.rating
    );


  imageInput.value =
    game.image || "";


  progressInput.value =
    String(
      game.progress
    );


  progressValue.textContent =
    game.progress +
    "%";


  formTitle.textContent =
    "Edit Game";


  formDescription.textContent =
    "Update your game information.";


  saveButton.textContent =
    "Update Game";


  showPage(
    "form"
  );

}



/* =====================================
   DELETE MODAL
===================================== */

function openDeleteModal(
  id
) {

  deleteGameId =
    id;


  deleteModal
    .classList.remove(
      "hidden"
    );

}



function closeDeleteModal() {

  deleteGameId =
    null;


  deleteModal
    .classList.add(
      "hidden"
    );

}



cancelDeleteButton
  .addEventListener(
    "click",
    closeDeleteModal
  );



confirmDeleteButton
  .addEventListener(
    "click",
    () => {

      if (
        !deleteGameId
      ) {

        return;

      }


      games =
        games.filter(
          game =>
            game.id !==
            deleteGameId
        );


      saveGames();


      closeDeleteModal();


      renderAll();


      showToast(
        "Game deleted."
      );

    }
  );



deleteModal.addEventListener(
  "click",
  event => {

    if (
      event.target ===
      deleteModal
    ) {

      closeDeleteModal();

    }

  }
);



/* =====================================
   RANDOM GAME
===================================== */

function getRandomGame() {

  const unfinishedGames =
    games.filter(
      game => {

        return (
          game.status !==
            "Completed" &&

          game.status !==
            "Dropped"
        );

      }
    );


  if (
    unfinishedGames.length === 0
  ) {

    return null;

  }


  const randomIndex =
    Math.floor(
      Math.random() *
      unfinishedGames.length
    );


  return (
    unfinishedGames[
      randomIndex
    ]
  );

}



/* =====================================
   DISPLAY RANDOM GAME WITH IMAGE
===================================== */

function displayRandomGame(
  element
) {

  const game =
    getRandomGame();


  if (
    !game
  ) {

    element.innerHTML = `

      <div>

        <strong>
          No unfinished games.
        </strong>

        <span>
          Add a game or change a game status.
        </span>

      </div>

    `;


    return;

  }


  element.innerHTML = `

    <div
      class="
        quick-result-card
        random-result-card
      "
    >

      <img
        class="game-image"

        src="
          ${getGameImage(
            game
          )}
        "

        data-game-title="
          ${escapeAttribute(
            game.title
          )}
        "

        alt="
          ${escapeAttribute(
            game.title
          )}
          preview
        "
      >


      <strong>

        ${escapeHTML(
          game.title
        )}

      </strong>


      <span>

        ${escapeHTML(
          game.platform
        )}

        ·

        ${escapeHTML(
          game.genre
        )}

        ·

        ${game.progress}%
        complete

      </span>

    </div>

  `;

}



quickPickButton
  .addEventListener(
    "click",
    () => {

      displayRandomGame(
        quickResult
      );

    }
  );



randomPickButton
  .addEventListener(
    "click",
    () => {

      displayRandomGame(
        randomResult
      );

    }
  );



/* =====================================
   STATISTICS
===================================== */

function renderStatistics() {

  renderStatCards(
    statisticsCards
  );


  const statuses = [

    "Want to Play",

    "Currently Playing",

    "Completed",

    "Dropped"

  ];


  statusBreakdown.innerHTML =
    statuses
      .map(
        status => {

          const count =
            games.filter(
              game =>
                game.status ===
                status
            ).length;


          const percentage =
            games.length > 0

              ? Math.round(
                  (
                    count /
                    games.length
                  ) *
                  100
                )

              : 0;


          return `

            <div class="status-bar">

              <div class="status-bar-header">

                <span>
                  ${status}
                </span>

                <strong>
                  ${count}
                </strong>

              </div>


              <div class="progress-track">

                <div
                  class="progress-fill"

                  style="
                    width:
                    ${percentage}%;
                  "
                >
                </div>

              </div>

            </div>

          `;

        }
      )
      .join("");



  const platformCounts =
    {};


  games.forEach(
    game => {

      if (
        platformCounts[
          game.platform
        ]
      ) {

        platformCounts[
          game.platform
        ]++;

      }

      else {

        platformCounts[
          game.platform
        ] = 1;

      }

    }
  );


  const platforms =
    Object.entries(
      platformCounts
    )
    .sort(
      (
        first,
        second
      ) =>
        second[1] -
        first[1]
    );


  if (
    platforms.length === 0
  ) {

    platformBreakdown.innerHTML = `

      <p class="muted-text">

        No platform data.

      </p>

    `;


    return;

  }


  platformBreakdown.innerHTML =
    platforms
      .map(
        (
          [
            platform,
            count
          ]
        ) => {

          return `

            <div class="platform-row">

              <span>

                ${escapeHTML(
                  platform
                )}

              </span>


              <strong>

                ${count}

              </strong>

            </div>

          `;

        }
      )
      .join("");

}



/* =====================================
   IMAGE ERROR FALLBACK
===================================== */

document.addEventListener(
  "error",
  event => {

    const image =
      event.target;


    if (
      image.tagName ===
        "IMG" &&

      image.classList.contains(
        "game-image"
      )
    ) {

      const title =
        image.dataset.gameTitle ||
        "Game";


      image.src =
        createPlaceholderImage(
          title
        );

    }

  },
  true
);



/* =====================================
   TOAST
===================================== */

function showToast(
  message
) {

  toast.textContent =
    message;


  toast
    .classList.add(
      "show"
    );


  clearTimeout(
    toastTimer
  );


  toastTimer =
    setTimeout(
      () => {

        toast
          .classList.remove(
            "show"
          );

      },
      2200
    );

}



/* =====================================
   ESCAPE HTML
===================================== */

function escapeHTML(
  text
) {

  return String(
    text
  )

    .replace(
      /&/g,
      "&amp;"
    )

    .replace(
      /</g,
      "&lt;"
    )

    .replace(
      />/g,
      "&gt;"
    )

    .replace(
      /"/g,
      "&quot;"
    )

    .replace(
      /'/g,
      "&#039;"
    );

}



function escapeAttribute(
  text
) {

  return (
    escapeHTML(
      text
    )
  );

}



/* =====================================
   RENDER ALL
===================================== */

function renderAll() {

  renderDashboard();


  renderGames();


  renderStatistics();

}



/* =====================================
   START WEBSITE
===================================== */

async function initializeApp() {

  await loadGames();


  renderAll();


  showPage(
    "dashboard"
  );

}



initializeApp();