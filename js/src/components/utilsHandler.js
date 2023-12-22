/** @format */

export class utilsHandler {
  static isEnglishVersion = location.pathname.includes("/en/");

  static sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  static isPositive(num) {
    if (Math.sign(num) === 1) {
      return true;
    }

    return false;
  }

  static convertCmToFeet(cm) {
    const factor = 2.54;
    const feetPerInch = 12;

    const totalInches = cm / factor;
    const feet = Math.floor(totalInches / feetPerInch);
    const inches = (totalInches % feetPerInch).toFixed(1);

    return feet + "' " + inches + " ''";
  }

  static setUrlByDocument(currenElement, link) {
    // Sélectionnez l'élément parent dont vous souhaitez surveiller les changements d'enfants
    var parentElement = document.querySelector(
      ".listing-presses .jet-listing-grid__items"
    );

    // Créer une instance de MutationObserver
    var observer = new MutationObserver(function (mutations) {
      // Vérifier les mutations pour les ajouts ou suppressions d'enfants
      mutations.forEach(function (mutation) {
        if (mutation.type === "childList") {
          // Appeler la fonction handleElementChange lorsque le nombre d'éléments change
          utilsHandler.setUrl(currenElement, link);
        }
      });
    });

    // Configurer les options pour le MutationObserver
    var observerOptions = {
      childList: true, // Surveiller les changements d'enfants
      subtree: true, // Surveiller les changements dans les sous-arbres également
    };

    // Commencer l'observation en utilisant le parentElement et les options
    observer.observe(parentElement, observerOptions);
    utilsHandler.setUrl(currenElement, link);
  }

  static setUrl(currenElement, link) {
    const elements = document.querySelectorAll("." + currenElement + " img");
    const shows = document.querySelectorAll(
      "." + link + " .jet-listing-dynamic-link__link"
    );

    elements.forEach((element, index) => {
      shows[index].href = element.dataset.src || element.src;
      shows[index].target = "_blank";
    });
  }

  static toggleBodyScroll(enableScroll) {
    const html = document.documentElement; // Obtenir l'élément HTML
    const body = document.body; // Obtenir l'élément BODY

    if (enableScroll) {
      html.style.overflow = null;
      body.style.overflow = null;
      html.style.height = null;
      body.style.height = null;
      body.style.position = null;
    } else {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
    }
  }

  static calculAutoWidth(element) {
    const detailElement = element.getBoundingClientRect();

    return detailElement.width;
  }

  static removeExtraChars(str) {
    return str.replace(/\s+/g, " ").trim();
  }

  static getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  static removeClasslist(contents, classname) {
    contents.forEach((content) => {
      content.classList.remove(classname);
    });
  }

  static scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  static hexToRgba(hex, opacity) {
    let r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

    return "rgba(" + r + ", " + g + ", " + b + ", " + opacity + ")";
  }

  static getPositionClient() {
    return document.documentElement.getBoundingClientRect();
  }

  static getRotationAngle(target) {
    const obj = window.getComputedStyle(target, null);
    const matrix =
      obj.getPropertyValue("-webkit-transform") ||
      obj.getPropertyValue("-moz-transform") ||
      obj.getPropertyValue("-ms-transform") ||
      obj.getPropertyValue("-o-transform") ||
      obj.getPropertyValue("transform");

    let angle = 0;

    if (matrix !== "none") {
      const values = matrix.split("(")[1].split(")")[0].split(",");
      const a = values[0];
      const b = values[1];
      angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
    }

    return angle < 0 ? (angle += 360) : angle;
  }

  static getClientHeight() {
    return document.documentElement.clientHeight;
  }

  static getClientWidth() {
    return document.documentElement.clientWidth;
  }

  static getDirectionScroll() {
    if (oldScrollY < window.scrollY) {
      return "down";
    } else {
      return "up";
    }
  }

  static getAbsolutePositionYTop(el) {
    return (
      document.getElementById(el).getBoundingClientRect().top +
      document.documentElement.scrollTop -
      1
    );
  }

  static getAbsolutePositionYBottom(el) {
    return (
      document.getElementById(el).getBoundingClientRect().bottom +
      document.documentElement.scrollTop -
      1
    );
  }

  static getDistanceBetweenElements(a, b) {
    const aPosition = animationHandler.getPositionAtTop(a);
    const bPosition = animationHandler.getPositionAtTop(b);

    return Math.hypot(aPosition.x - bPosition.x, aPosition.y - bPosition.y);
  }

  static getPositionAtTop(element) {
    const { top, left, width, height } = element.getBoundingClientRect();
    return {
      x: left + width / 2,
      y: top,
    };
  }

  static getPositionAtCenter(element) {
    const { top, left, width, height } = element.getBoundingClientRect();
    return {
      x: left + width / 2,
      y: top + height / 2,
    };
  }

  // UTILS WP
  static changeArrow() {
    const arrowElements = document.querySelectorAll(".next-arrow, .prev-arrow");
    const arrowSvg = `<svg width="33" height="12" viewBox="0 0 33 12" fill="none" xmlns="http://www.w3.org/2000/svg">
			  <path d="M26.9521 11.8333L32.6187 6.00001L26.9521 0.166672L25.8074 1.34501L29.5199 5.16667H0.237793V6.83334H29.5199L25.8074 10.655L26.9521 11.8333Z" fill="black" fill-opacity="0.6"/>
		  </svg>`;

    if (arrowElements.length > 0) {
      arrowElements.forEach((arrow) => {
        arrow.innerHTML = arrowSvg;
      });
    }
  }
}
