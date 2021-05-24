
function updateFestival1() {
   document.querySelector("#festivalTitle").innerHTML = `Tomb Sweeping Festival`;
   document.querySelector("#festivalInformation").innerHTML = 
   `The year’s third Chinese public holiday is Qingming Festival, also called the Pure Brightness Festival or Tomb Sweeping Day. 
   Dating back 2,500 years, Qingming Festival symbolizes the Chinese people’s deep-rooted respect for their ancestors. 
   <br>
   Qingming Festival falls on the beginning of April. On this day, Chinese families traditionally visit their ancestors’ tombs to clear and sweep them. 
   Many also burn offerings of imitation paper money, also known as “hell money,” on or near their ancestors’ tombs so that their loved ones can make purchases in the afterlife.`;
}
let tombSweepingFestival = document.querySelector("#tombSweeping");
tombSweepingFestival.addEventListener("click", updateFestival1);

    function updateFestival2() {
        document.querySelector("#festivalTitle").innerHTML = `Lantern Festival`;
        document.querySelector("#festivalInformation").innerHTML = 
        `The festival traditionally marks the end of the Chinese New Year celebrations.
        Chinese people celebrate this holiday by enjoying colored lantern displays and eating sweet rice balls called tangyuan.
        <br>
        In some parts of China, dragon and lion dances are also performed during the Lantern Festival.
        Lion dance is a type of folk dance typically performed by two dancers wearing a single lion suit. 
        They dance and perform various acrobatic tricks to the beat of drums, gongs and cymbals.`;
    }
    let lanternFestival = document.querySelector("#lanternFest");
    lanternFestival.addEventListener("click", updateFestival2);

    function updateFestival3() {
        document.querySelector("#festivalTitle").innerHTML = `Dragon Boat Festival`;
        document.querySelector("#festivalInformation").innerHTML = 
        `The fifth yearly public holiday in China is the Dragon Boat Festival. This holiday falls on the fifth day of the fifth month of the Chinese calendar.
        With over 2,000 years of history, this is one of the most traditional Chinese festivals, and also one that involves the most superstitions.
        <br>
        There are two origin stories for the Dragon Boat Festival: one is superstitious, and the other historic. 
        The fifth month of the year is considered bad luck, especially on its fifth day. Thus, one legend says that the festival was born to keep bad luck and evil spirits away.
        However, the best-known legend behind the Dragon Boat Festival is that it commemorates the death of Qu Yuan, a poet and politician.
        <br>
        Legend says that Qu Yuan was accused of treason and banished from political office. In despair, he committed suicide by drowning himself in the Miluo River. 
        He was popular with the local people, and after his death, they rushed to their boats to save him or at least recover his body.
        This is the origin of the festival’s most famous activity: dragon boat races.`;
    }
    let dragonBoatFestival = document.querySelector("#dragonBoat");
    dragonBoatFestival.addEventListener("click", updateFestival3);

    function updateFestival4() {
        document.querySelector("#festivalTitle").innerHTML = `Mid-Autumn Festival  `;
        document.querySelector("#festivalInformation").innerHTML = 
        `Occurring on the 15th day of the 8th month of the lunar calendar—the night of the full moon—Mid-Autumn Festival serves as China’s harvest celebration.
        <br>
        Family gatherings are an essential part of the Mid-Autumn Festival, somewhat like American Thanksgiving. 
        For Chinese families, this is a time of coming together with loved ones to pray and be thankful for a good harvest and good fortune.
       One of the iconic activities is eating mooncakes. A bakery product made with fillings such as lotus seed paste or red beans, mooncakes are a delicacy. 
       During this festival, it’s customary to gift mooncakes to friends and acquaintances.`;
    }
    let midAutumnFestival = document.querySelector("#midAutumn");
    midAutumnFestival.addEventListener("click", updateFestival4);



    let dumplingFood = document.querySelector("#dumplings");
    dumplingFood.addEventListener("click", updateFood1);

    let chaomianFood = document.querySelector("#chaomian");
    chaomianFood.addEventListener("click", updateFood2);

    let kungPaoChicken = document.querySelector("#kungPao");
    kungPaoChicken.addEventListener("click", updateFood3);

    let hotpotFood = document.querySelector("#hotpot");
    hotpotFood.addEventListener("click", updateFood4);

    let pekinDuckFood = document.querySelector("#pekingDuck");
    pekinDuckFood.addEventListener("click", updateFood5);
