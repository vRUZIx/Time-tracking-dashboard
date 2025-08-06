// JSON məlumatı
var data = [
    {
        title: "Work",
        timeframes: {
            daily: { current: 5, previous: 7 },
            weekly: { current: 32, previous: 36 },
            monthly: { current: 103, previous: 128 }
        }
    },
    {
        title: "Play",
        timeframes: {
            daily: { current: 1, previous: 2 },
            weekly: { current: 10, previous: 8 },
            monthly: { current: 23, previous: 29 }
        }
    },
    {
        title: "Study",
        timeframes: {
            daily: { current: 0, previous: 1 },
            weekly: { current: 4, previous: 7 },
            monthly: { current: 13, previous: 19 }
        }
    },
    {
        title: "Exercise",
        timeframes: {
            daily: { current: 1, previous: 1 },
            weekly: { current: 4, previous: 5 },
            monthly: { current: 11, previous: 18 }
        }
    },
    {
        title: "Social",
        timeframes: {
            daily: { current: 1, previous: 3 },
            weekly: { current: 5, previous: 10 },
            monthly: { current: 21, previous: 23 }
        }
    },
    {
        title: "Self Care",
        timeframes: {
            daily: { current: 0, previous: 1 },
            weekly: { current: 2, previous: 2 },
            monthly: { current: 7, previous: 11 }
        }
    }
];

var currentView = "weekly";
const container = document.querySelectorAll(".defaultItem");
const typeOfTime = document.querySelectorAll(".fU h4");

// Məlumatları render edən funksiya
function renderData() {
    data.forEach(function (item, index) {
        if (container[index]) {
            const previousText = (currentView === "daily") ? "Yesterday" : 
                                 (currentView === "weekly") ? "Last Week" : 
                                 "Last Month";

            const activityHTML = `
                <img src="./images/icon-${item.title.toLowerCase().replace(" ", "-")}.svg" alt="${item.title}" class="icon">
                <div class="box">
                    <div class="miniFlex">
                        <span>${item.title}</span>
                        <img src="./images/icon-ellipsis.svg" alt="...">
                    </div>
                    <h1>${item.timeframes[currentView].current}hrs</h1>
                    <span>${previousText} - ${item.timeframes[currentView].previous}hrs</span>
                </div>
            `;
            container[index].innerHTML = activityHTML;
        }
    });
}

// Səhifə yüklənəndə ilkin məlumatları göstərmək üçün funksiyanı çağırırıq
renderData();

typeOfTime.forEach(h4 => {
    h4.addEventListener("click", function() {
        // Klassları yeniləyirik
        typeOfTime.forEach(item => item.classList.remove("selected"));
        this.classList.add("selected");
        
        // currentView dəyərini yeniləyirik
        currentView = this.textContent.toLowerCase();
        
        // Yeni dəyər ilə məlumatları yenidən render edirik
        renderData();
    });
});