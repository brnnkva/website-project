
function updateContent() {
   document.querySelector("#festivalTitle").innerHTML = `Tomb Sweeping Festival`;
   document.querySelector("#festivalInformation").innerHTML = 
   `The year’s third Chinese public holiday is Qingming Festival, also called the Pure Brightness Festival or Tomb Sweeping Day. 
   Dating back 2,500 years, Qingming Festival symbolizes the Chinese people’s deep-rooted respect for their ancestors. 
   <br>
   Qingming Festival falls on the beginning of April. On this day, Chinese families traditionally visit their ancestors’ tombs to clear and sweep them. 
   Many also burn offerings of imitation paper money, also known as “hell money,” on or near their ancestors’ tombs so that their loved ones can make purchases in the afterlife.`;
    }
    
    let tombSweepingFestival = document.querySelector("#tombSweeping");
    tombSweepingFestival.addEventListener("click", updateContent)