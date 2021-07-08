
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
        Family gatherings are an essential part of the Mid-Autumn Festival, like American Thanksgiving. 
        For Chinese families, this is a time of coming together with loved ones to pray and be thankful for a good harvest and good fortune.
        <br>
       One of the iconic activities is eating mooncakes. A bakery product made with fillings such as lotus seed paste or red beans, mooncakes are a delicacy. 
       During this festival, it’s customary to gift mooncakes to friends and acquaintances.`;
    }
    let midAutumnFestival = document.querySelector("#midAutumn");
    midAutumnFestival.addEventListener("click", updateFestival4);


    function updateFood1() {
        document.querySelector("#foodTitle").innerHTML = `Dumplings`;
        document.querySelector("#foodInformation").innerHTML = 
        `Common Chinese dumplings are generally consist of minced meat and chopped vegetables wrapped into a piece of dough skin. 
        In China dumplings usually refers to boiled dumplings. The skin can be either thin and elastic or thicker. 
        There is even a statement that the skin of a dumpling determines the quality of the dumpling.
        <br>
        Some people will place a coin or candy inside the dumpling in the hope of obtaining a fortune or having a sweet life, on Chinese New Year's Eve and special family reunions. 
        Particularly, in Northern China, people generally eat dumplings on the Winter solstice in the hope of a warm winter. 
        Extended family members may gather together to make dumplings, and it is also eaten at farewells to family members or friends.`;
    }
    let dumplingFood = document.querySelector("#dumplings");
    dumplingFood.addEventListener("click", updateFood1);

    function updateFood2() {
        document.querySelector("#foodTitle").innerHTML = `Chao mian`;
        document.querySelector("#foodInformation").innerHTML = 
        `Chao mian or Chow meinare Chinese stir-fried noodles with vegetables and sometimes meat or tofu. The name is a romanization of the Taishanese chāu-mèn. 
        The dish is popular throughout the Chinese diaspora and appears on the menus of most Chinese restaurants abroad.`;
    }
    let chaomianFood = document.querySelector("#chaomian");
    chaomianFood.addEventListener("click", updateFood2);

    function updateFood3() {
        document.querySelector("#foodTitle").innerHTML = `Kung Pao Chicken`;
        document.querySelector("#foodInformation").innerHTML = 
        `Kung Pao chicken, also transcribed Gong Bao or Kung Po is a spicy, stir-fried Chinese dish made with cubes of chicken, peanuts, vegetables, and chili peppers. 
        The classic dish in Sichuan cuisine originated in the Sichuan Province of south-western China. 
        <br>
        Although the dish is found throughout China, there are regional variations that are typically less spicy than the Sichuan serving. 
        Kung Pao chicken is also a staple of Westernized Chinese cuisine.`;
    }
    let kungPaoChicken = document.querySelector("#kungPao");
    kungPaoChicken.addEventListener("click", updateFood3);

    function updateFood4() {
        document.querySelector("#foodTitle").innerHTML = `Hotpot`;
        document.querySelector("#foodInformation").innerHTML = 
        `Hotpot, also known as soup-food or steamboat, is a cooking method that originates from China, prepared with a simmering pot of soup stock at the dining table,
         containing a variety of East Asian foodstuffs and ingredients.
        Typical hot pot ingredients include thinly sliced meat, leaf vegetables, mushrooms, vermicelli, sliced potatoes, bean products, egg dumplings, tofu, and seafood. 
        <br>
        Hot pot meals can enhance friendship and unite family members as several people sit around a pot, talking and eating. 
        The warm atmosphere makes people feel comfortable and relaxed. Hot pot is especially popular in winter and cold places.
        Due to the high popularity and the unique way of eating, hot pot has already become the major attraction of the tourism industry in some areas, 
        such as Chongqing and Sichuan.`;
    }
    let hotpotFood = document.querySelector("#hotpot");
    hotpotFood.addEventListener("click", updateFood4);

    function updateFood5() {
        document.querySelector("#foodTitle").innerHTML = `Peking Roasted Duck`;
        document.querySelector("#foodInformation").innerHTML = 
        `Peking duck is a dish from Beijing (Peking) that has been prepared since the Imperial era. 
        The meat is characterized by its thin, crisp skin, with authentic versions of the dish serving mostly the skin and little meat, sliced in front of the diners by the cook. 
        The meat is often eaten with spring onion, cucumber and sweet bean sauce with pancakes rolled around the fillings.
        <br>
        Two notable restaurants in Beijing which serve this dish are Quanjude and Bianyifang, 
        both centuries-old establishments which have become household names, each with their own style:
        Quanjude is known for using the hung oven roasting method, while Bianyifang uses the oldest technique of closed oven roasting.`;
    }
    let pekinDuckFood = document.querySelector("#pekingDuck");
    pekinDuckFood.addEventListener("click", updateFood5);
