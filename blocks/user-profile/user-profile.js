export default function decorate(block) {
  const [
    logoutTextEl,
    popupHeadingEl,
    popupDescEl,
    linkEl,
    yesButtonEl,
    noButtonEl,
    userimagealttxtEl,
    crossformimagealttxtEl,
    infoiconimagealttxtEl,
  ] = block.children;

  const logoutText = logoutTextEl?.textContent?.trim() || "";
  const popupHeading = popupHeadingEl?.textContent?.trim() || "";
  const popupDesc = popupDescEl?.textContent?.trim() || "";
  const link = linkEl?.querySelector("a")?.href || "#";
  const yesButton = yesButtonEl?.textContent?.trim() || "";
  const noButton = noButtonEl?.textContent?.trim() || "";

  const userimagealttxt = userimagealttxtEl?.textContent?.trim() || "";
  const crossformimagealttxt =
    crossformimagealttxtEl?.textContent?.trim() || "";
  const infoiconimagealttxt = infoiconimagealttxtEl?.textContent?.trim() || "";

  function createProfileCard(data) {
    return `
      <div class="container ">
          <div class="grey-bg">
              <div class="user-information-box">
                  <div class="user-img">
                      <img src="../../icons/user-img.webp" alt="${userimagealttxt}">
                  </div>
                  <div class="user-details">
                      <div class="user_bx">
                          <h4 class="user_name" id="user_name">LALIT TUKARAM ZIRMIRE</h4>
                          <p class="user_designation" id="user_designation">Relationship Manager</p>
                          <p class="user_addr" id="user_addr">411037, PUNE MAHARASHTRA</p>
                      </div>
                      <div class="user_logout">
                          <a href="#" id="logoutButton">${logoutText}</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    `;
  }

  function createModal() {
    return `
      <div class="popUpmain" id="popup" style="display:none;">
        <div class="modal-content">
          <div class="close" id="close-popup">
            <img src="../../icons/cross-form.webp" alt="${crossformimagealttxt}">
          </div>
          <div class="popupContent blue">
            <h2><img src="../../icons/info-icon.webp" alt="${infoiconimagealttxt}"> ${popupHeading}</h2>
            <p>${popupDesc}</p>
            <div class="blackButton">
              <button type="button" class="logout_yes" id="yesButton">${yesButton}</button>
            </div>
            <div class="blackButton">
              <button type="button" class="logout_no" id="noButton">${noButton}</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  async function fetchUserData() {
    const apiEndpoint = "https://jsonplaceholder.typicode.com/users/1";
    try {
      const response = await fetch(apiEndpoint);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching user data:", error);
      return null;
    }
  }

  function setupEventListeners(logoutButton, modal) {
    logoutButton.addEventListener("click", () => {
      modal.classList.add("fade-in");
      modal.style.display = "flex";
    });

    modal.querySelector("#close-popup").addEventListener("click", () => {
      modal.classList.remove("fade-in");
      modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });

    const yesButton = modal.querySelector("#yesButton");
    yesButton.addEventListener("click", () => {
      window.location.href = link;
    });

    const noButton = modal.querySelector("#noButton");
    noButton.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  fetchUserData().then((userData) => {
    if (userData) {
      const profileCardHTML = createProfileCard(userData);
      const modalHTML = createModal();
      block.innerHTML = profileCardHTML + modalHTML;
      const logoutButton = document.getElementById("logoutButton");
      const modal = document.getElementById("popup");
      setupEventListeners(logoutButton, modal);
    }
  });
}
