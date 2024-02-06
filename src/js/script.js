"use strict";
import VanillaCalendar from "vanilla-calendar-pro";
import Chart from "chart.js/auto";

console.log("DOM героически построен!");

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");

  //modal help user panel
  function modalHelp() {
    const modalTrigger = document.querySelector("[data-modal-help]");
    modalTrigger.addEventListener("click", () => openModal());

    const modalClose = document.querySelector(".modal-help__close");
    modalClose.addEventListener("click", () => closeModal());

    function openModal() {
      const modal = document.querySelector(".modal-help");
      modal.classList.add("modal-help--show");
      modal.classList.remove("modal-help--hide");
    }

    function closeModal() {
      const modal = document.querySelector(".modal-help");
      modal.classList.add("modal-help--hide");
      modal.classList.remove("modal-help--show");
    }
  }
  modalHelp();
  //modal task user panel
  function modalTask() {
    const modalTrigger = document.querySelector("[data-modal-task]");
    modalTrigger.addEventListener("click", () => openModal());

    const modalClose = document.querySelector(".modal-task__close");
    modalClose.addEventListener("click", () => closeModal());

    function openModal() {
      const modal = document.querySelector(".modal-task");
      modal.classList.add("modal-task--show");
      modal.classList.remove("modal-task--hide");
    }

    function closeModal() {
      const modal = document.querySelector(".modal-task");
      modal.classList.add("modal-task--hide");
      modal.classList.remove("modal-task--show");
    }
  }
  modalTask();
  //modal verify
  function modalVerify() {
    const modalTrigger = document.querySelector("[data-modal-verify]");
    modalTrigger.addEventListener("click", () => openModal());

    const modalClose = document.querySelector(".modal-verify__button-close");
    modalClose.addEventListener("click", () => closeModal());

    function openModal() {
      const modal = document.querySelector(".modal-verify");
      modal.classList.add("modal-verify--show");
      modal.classList.remove("modal-verify--hide");
    }

    function closeModal() {
      const modal = document.querySelector(".modal-verify");
      modal.classList.add("modal-verify--hide");
      modal.classList.remove("modal-verify--show");
    }
  }
  modalVerify();

  function modalTabs() {
    function tabs() {
      const tabs = document.querySelectorAll(".modal-task-tabs__item"),
        tabsContent = document.querySelectorAll(".modal-task-content"),
        tabsParent = document.querySelector(".modal-task-tabs__list");

      function hideTabContent() {
        tabsContent.forEach((item) => {
          item.classList.add("hide");
          item.classList.remove("show", "fade");
        });

        tabs.forEach((item) => {
          item.classList.remove("modal-task-tabs__item--active");
        });
      }

      function showTabContent(i = 0) {
        tabsContent[i].classList.add("show", "fade");
        tabsContent[i].classList.remove("hide");
        tabs[i].classList.add("modal-task-tabs__item--active");
      }

      hideTabContent();
      showTabContent();

      tabsParent.addEventListener("click", (event) => {
        const target = event.target;

        if (target && target.classList.contains("modal-task-tabs__item")) {
          tabs.forEach((item, i) => {
            if (target == item) {
              hideTabContent();
              showTabContent(i);
            }
          });
        }
      });
    }
    tabs();
  }
  modalTabs();
  function menuDropdown() {
    const moreButton = document.querySelector(".header__button-more");
    const dropMenu = document.querySelector(".header-dropmenu");
    const addButton = document.querySelector(".subheader-actions__button");
    const subMenuAdd = document.querySelector(".subheader-dropmenu-add");

    addButton.addEventListener("click", () => {
      subMenuAdd.classList.toggle("subheader-dropmenu-add--visible");
    });

    moreButton.addEventListener("click", () => {
      dropMenu.classList.toggle("header-dropmenu--visible");
    });

    document
      .querySelector(".subheader-actions__item--btn")
      .addEventListener("click", () => {
        document
          .querySelector(".subheader-dropmenu")
          .classList.toggle("subheader-dropmenu--visible");
      });
  }
  menuDropdown();

  function initCalendar() {
    const calendar = new VanillaCalendar("#calendar", {
      type: "multiple",
      months: 2,
      settings: {
        visibility: {
          theme: "light",
        },
        lang: "ru",
      },
      date: {
        today: new Date("2024-02-04"),
      },
    });

    calendar.init();
    const calendar2 = new VanillaCalendar("#calendar2", {
      type: "multiple",
      months: 2,
      settings: {
        visibility: {
          theme: "light",
        },
        lang: "ru",
      },
      date: {
        today: new Date("2024-02-04"),
      },
    });

    calendar2.init();
  }
  initCalendar();

  //widget aria tabs
  function widgetTabs() {
    function tabs() {
      const tabs = document.querySelectorAll(".tabheader__item"),
        tabsContent = document.querySelectorAll(".widget-content"),
        tabsParent = document.querySelector(".tabheader__list");

      function hideTabContent() {
        tabsContent.forEach((item) => {
          item.classList.add("hide");
          item.classList.remove("show", "fade");
        });

        tabs.forEach((item) => {
          item.classList.remove("tabheader__item--active");
        });
      }

      function showTabContent(i = 0) {
        tabsContent[i].classList.add("show", "fade");
        tabsContent[i].classList.remove("hide");
        tabs[i].classList.add("tabheader__item--active");
      }

      hideTabContent();
      showTabContent();

      tabsParent.addEventListener("click", (event) => {
        const target = event.target;

        if (target && target.classList.contains("tabheader__item")) {
          tabs.forEach((item, i) => {
            if (target == item) {
              hideTabContent();
              showTabContent(i);
            }
          });
        }
      });
    }
    tabs();
  }
  widgetTabs();

  //calendar tabs
  function calendarTabs() {
    function tabs() {
      const tabs = document.querySelectorAll(".modal-calendar-tabs__item"),
        tabsContent = document.querySelectorAll(".modal-calendar-content"),
        tabsParent = document.querySelector(".modal-calendar-tabs__list");

      function hideTabContent() {
        tabsContent.forEach((item) => {
          item.classList.add("hide");
          item.classList.remove("show", "fade");
        });

        tabs.forEach((item) => {
          item.classList.remove("modal-calendar-tabs__item--active");
        });
      }

      function showTabContent(i = 0) {
        tabsContent[i].classList.add("show", "fade");
        tabsContent[i].classList.remove("hide");
        tabs[i].classList.add("modal-calendar-tabs__item--active");
      }

      hideTabContent();
      showTabContent();

      tabsParent.addEventListener("click", (event) => {
        const target = event.target;

        if (target && target.classList.contains("modal-calendar-tabs__item")) {
          tabs.forEach((item, i) => {
            if (target == item) {
              hideTabContent();
              showTabContent(i);
            }
          });
        }
      });
    }
    tabs();
  }
  calendarTabs();

  //calendar modal
  function modalCalendar() {
    const modalTrigger = document.querySelector("[data-modal-calendar]");
    modalTrigger.addEventListener("click", () => openModal());

    const modalClose = document.querySelector(".modal-calendar__close");
    modalClose.addEventListener("click", () => closeModal());

    function openModal() {
      const modal = document.querySelector(".modal-calendar");
      modal.classList.add("modal-calendar--show");
      modal.classList.remove("modal-calendar--hide");
    }

    function closeModal() {
      const modal = document.querySelector(".modal-calendar");
      modal.classList.add("modal-calendar--hide");
      modal.classList.remove("modal-calendar--show");
    }
  }
  modalCalendar();

  //chart doughnut js

  const charData = {
    labels: ["Александа (55%)","Владимир (5%)","Тимур (10%)", "Ангелина Сейт (20%)","Денис (10%)"],
    data: [55, 5, 10, 10, 20,],
    backgroundColor: ["#3A9EFF","#00BCD4","#FFB300","#673AB7","#10AB4F"],
  };

  const ul = document.querySelector(".widget-item__legend");

  new Chart("chart-doughnut", {
    type: "doughnut",
    data: {
      labels: charData.labels,
      usePointStyle: true,
      datasets: [
        {
          backgroundColor:charData.backgroundColor,
          data: charData.data,
        },
      ],
    },
    options: {
      hoverBorderWidth: 0,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
});
    const populateUl = () => {
        charData.labels.forEach((l, i) => {
            let li = document.createElement('li');
            li.classList.add('widget-item__legend-list');
            li.innerHTML = `
            <div class="widget-item__legend-status" style="background-color:${charData.backgroundColor[i]} "></div>
            <span class="widget-item__legend-name">${l}</span>`;
            ul.appendChild(li);
        });
    } 
    populateUl();
});
