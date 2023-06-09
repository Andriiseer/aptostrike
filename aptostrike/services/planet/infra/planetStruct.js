const planetStruct = `
struct planet
slot nameStart
slot nameEnd
slot nameNumber
slot prime
slot sun
slot soilColor
slot rockColor
slot surface
slot climate
slot landscape
slot special
slot symmetry
slot animalColor
slot animalTexture
slot flora
slot leafColor
slot plantTexture
slot plantDecoColor
slot plantDeco
slot fauna
slot lifeSpecial
slot bodyPart
slot rockType
slot famousPerson
slot famousShip
desc <h1>{nameStart}{nameEnd} {nameNumber}</h1>{surface:desc}<br><br>{fauna:desc}<br><br>{special:desc}
hab {surface:hab} {climate:hab} {flora:hab} {fauna:hab} {lifeSpecial:hab} {special:hab}
sze {surface:sze} {climate:sze} {flora:sze} {fauna:sze} {lifeSpecial:sze} {special:sze}
min 3 {surface:min} {climate:min} {flora:min} {fauna:min} {lifeSpecial:min} {special:min}
sci 3 {surface:sci} {climate:sci} {flora:sci} {fauna:sci} {lifeSpecial:sci} {special:sci}
watL {surface:watL}
temp {climate:temp}
rive {surface:rive}
coldC {surface:coldC}
temperateC {surface:temperateC}
warmC {surface:warmC}
hotC {surface:hotC}
speckleC {surface:speckleC}
clouds {surface:clouds} {special:clouds}
cloudC {special:cloudC}
rotspeedMult 1.0 {special:rotspeedMult}
lightC {sun:lightC}
hazeC {special:hazeC}
oceanC {special:oceanC}

nameStart Bi
nameStart Tor
nameStart Teri
nameStart Alim
nameStart Cre
nameStart Dri
nameStart Epi
nameStart Fra
nameStart Gro
nameStart Hima
nameStart Jutu
nameStart Kima
nameStart Lu
nameStart Mi
nameStart No
nameStart Noto
nameStart Ori
nameStart Pru
nameStart Qu
nameStart Ria
nameStart Su
nameStart Umako
nameStart Vime
nameStart Wito
nameStart Xi
nameStart Ya
nameStart Zumo
nameStart Api
nameStart Bele
nameStart Cepi
nameStart Do
nameStart Ea
nameStart Fe
nameStart Gato
nameStart Holo
nameStart Ipe
nameStart Jo
nameStart Kala
nameStart Lara
nameStart Meta
nameStart Noxa
nameStart Orra
nameStart Pi
nameStart Quima
nameStart Ro
nameStart Sele
nameStart Ule
nameStart Vi
nameStart Waxa
nameStart Xo
nameStart Yora
nameStart Zuli
nameEnd von
nameEnd oll
nameEnd tol
nameEnd gon
nameEnd prim
nameEnd tes
nameEnd lup
nameEnd vim
nameEnd qua
nameEnd pip
nameEnd am
nameEnd lm
nameEnd thor
nameEnd gig
nameEnd ve
nameEnd qum
nameEnd la
nameEnd leuth
nameEnd bas
nameEnd ro
nameEnd porr
nameEnd lia
nameEnd w
nameEnd kra
nameEnd cor
nameEnd mmon
nameNumber I
nameNumber II
nameNumber III
nameNumber IV
nameNumber V
nameNumber VI

prime seven
prime eleven
prime thirteen
prime seventeen
prime nineteen

sun brightBlue
brightness bright
color blue
lightC [0.75, 0.75, 1.2]

sun dullRed
brightness dull
color red
lightC [0.7, 0.35, 0.3]

sun dimWhite
brightness dim
color white
lightC [0.6, 0.6, 0.6]

sun blindingWhite
brightness blinding
color white
lightC [1.2, 1.2, 1.2]

sun gentleYellow
brightness gentle
color yellow
lightC [1.0, 1.0, 0.85]

sun harshRed
brightness harsh
color red
lightC [1.1, 0.6, 0.6]

sun wanYellow
brightness wan
color yellow
lightC [0.8, 0.8, 0.65]

sun dimBlue
brightness dim
color blue
lightC [0.4, 0.4, 0.6]

surface deepOcean
desc A planet-wide, deep {climate:ocean}. {landscape:desc}
lurk in the ocean.
ocean yes
land no
dry no
ground ocean
hab 5
sze 3
min -1
watL 1.0
rive 0
coldC [0,0,0]
temperateC [0,0,0]
warmC [0,0,0]
hotC [0,0,0]
clouds 0.3 * {climate:clouds}
speckleC {flora:speckleC}

surface ocean
desc A planet-wide {climate:ocean}. {landscape:desc}
lurk in the ocean.
ocean yes
land no
dry no
ground ocean
hab 5
sze 3
min -1
watL 0.8
rive 0
coldC [0,0,0]
temperateC [0,0,0]
warmC [0,0,0]
hotC [0,0,0]
clouds 0.3 * {climate:clouds}
speckleC {flora:speckleC}

surface islands
desc A few islands are dotted around an {climate:ocean}. {landscape:desc} {flora:land}
lurk in the shallows.
ocean yes
land yes
dry no
ground earth
hab 7 {landscape:hab}
sze 5 {landscape:sze}
min {landscape:min}
watL 0.4
rive 0.5
coldC {flora:coldC}
temperateC {flora:temperateC}
warmC {flora:warmC}
hotC {soilColor:c}
clouds 0.3 * {climate:clouds}
speckleC {flora:speckleC}

surface continents
desc Large continents. {landscape:desc} {flora:land}
lurk {flora:lurk}
ocean yes
land yes
dry no
ground earth
hab 8 {landscape:hab}
sze 7 {landscape:sze}
min {landscape:min}
watL 0.0
rive 1
coldC {flora:coldC}
temperateC {flora:temperateC}
warmC {flora:warmC}
hotC {flora:hotC}
clouds 0.28 * {climate:clouds}
speckleC {flora:speckleC}

surface supercontinent
desc A supercontinent and some small, shallow {climate:seas}. {landscape:desc} {flora:land}
lurk {flora:lurk}
ocean yes
land yes
dry no
ground earth
hab 8 {landscape:hab}
sze 8 {landscape:sze}
min {landscape:min}
watL -0.4
rive 1
coldC {flora:coldC}
temperateC {flora:temperateC}
warmC {flora:warmC}
hotC {soilColor:c}
clouds 0.25 * {climate:clouds}
speckleC {flora:speckleC}

surface swamps
desc Shallow {climate:lakes} and swamps. {landscape:desc} {flora:land}
lurk in the swamps.
ocean no
land no
dry no
ground earth
hab 6 {landscape:hab}
sze 6 {landscape:sze}
min -1 {landscape:min}
watL -0.5
rive 1
coldC {flora:coldC}
temperateC {flora:temperateC}
warmC {flora:warmC}
hotC {flora:hotC}
clouds 0.3 * {climate:clouds}
speckleC {flora:speckleC}

surface jungle
desc Dense jungles of {flora:desc} cover {nameStart}{nameEnd} {nameNumber}. {landscape:desc}
lurk in the jungles.
ocean no
land yes
dry no
ground soil
hab 7 {landscape:hab}
sze 7 {landscape:sze}
min {landscape:min}
watL -0.5
rive 0.7
coldC {flora:coldC}
temperateC {flora:warmC}
warmC {flora:hotC}
hotC {flora:hotC}
clouds 0.3 * {climate:clouds}
speckleC {flora:speckleC}

surface forests
desc Dense forests of {flora:desc} cover {nameStart}{nameEnd} {nameNumber}. {landscape:desc}
lurk in the forests.
ocean no
land yes
dry no
ground soil
hab 8 {landscape:hab}
sze 7 {landscape:sze}
min +1 {landscape:min}
watL -0.5
rive 0.7
coldC {flora:coldC}
temperateC {flora:temperateC}
warmC {flora:warmC}
hotC {flora:hotC}
clouds 0.25 * {climate:clouds}
speckleC {flora:speckleC}

surface scatteredForests
desc There are scattered forests of {flora:desc}. {landscape:desc}
lurk in the forests.
ocean no
land yes
dry no
ground soil
hab 7 {landscape:hab}
sze 7 {landscape:sze}
min {landscape:min}
watL -0.5
rive 0.8
coldC {flora:coldC}
temperateC {flora:temperateC}
warmC {soilColor:c}
hotC {flora:hotC}
clouds 0.2 * {climate:clouds}
speckleC {flora:speckleC}

surface tundra
desc Tundra and a few {climate:lakes}. {landscape:desc} {flora:land}
lurk {flora:lurk}
ocean no
land yes
dry no
ground frozen ground
hab 6 {landscape:hab}
sze 6 {landscape:sze}
min {landscape:min}
watL -0.8
rive 0.3
coldC {rockColor:c}
temperateC {flora:coldC}
warmC {flora:coldC}
hotC {flora:temperateC}
clouds 0.15 * {climate:clouds}
speckleC {landscape:speckleC}

surface muddy
desc {soilColor:cap} mud and small rivulets. {landscape:desc} {flora:land}
lurk {flora:lurk}
ocean no
land yes
dry no
ground mud
hab 6 {landscape:hab}
sze 6 {landscape:sze}
min {landscape:min}
watL -0.7
rive 0.3
coldC {soilColor:c}
temperateC {soilColor:c}
warmC {soilColor:c}
hotC {soilColor:c}
clouds 0.15 * {climate:clouds}
speckleC {flora:speckleC}

surface arid
desc Apart from a few {climate:lakes} and rivers, {nameStart}{nameEnd} {nameNumber} is dry. {landscape:desc} {flora:land}
lurk {flora:lurk}
ocean no
land yes
dry yes
ground soil
hab 6 {landscape:hab}
sze 8
min {landscape:min}
watL -0.9
rive 0.4
coldC {soilColor:c}
temperateC {flora:temperateC}
warmC {soilColor:c}
hotC {rockColor:c}
clouds 0.08 * {climate:clouds}
speckleC {flora:speckleC}

surface desert
desc A sandy desert lit by a {sun:brightness} {sun:color} sun. {landscape:desc} {flora:land}
lurk beneath the sand.
ocean no
land yes
dry yes
ground sand
hab 4 {landscape:hab}
sze 7 {landscape:sze}
min {landscape:min}
watL -2
rive 0
coldC {soilColor:c}
temperateC {soilColor:c}
warmC {soilColor:c}
hotC {soilColor:c}
clouds 0.05 * {climate:clouds}
speckleC {landscape:speckleC}

surface icyDesert
desc An icy desert. {landscape:desc} {flora:land}
lurk in the ice.
ocean no
land yes
dry no
ground ice
hab 4 {landscape:hab}
sze 7 {landscape:sze}
min -1 {landscape:min}
watL -2
rive 0
coldC {soilColor:c}
temperateC {soilColor:c}
warmC {flora:coldC}
hotC {soilColor:c}
clouds 0.1 * {climate:clouds}
speckleC {landscape:speckleC}

surface rocks
desc A rocky desert lit by a {sun:brightness} {sun:color} sun. {landscape:desc} {flora:land}
lurk in nooks and crannies.
ocean no
land yes
dry yes
ground stone
hab 4 {landscape:hab}
sze 8 {landscape:sze}
min {landscape:min}
watL -2
rive 0
coldC {rockColor:c}
temperateC {soilColor:c}
warmC {rockColor:c}
hotC {rockColor:c}
clouds 0.1 * {climate:clouds}
speckleC {landscape:speckleC}

surface rockDesert
desc A desert of {rockType} rocks. {landscape:desc} {flora:land}
lurk in nooks and crannies.
ocean no
land yes
dry yes
ground stone
hab 4 {landscape:hab}
sze 8 {landscape:sze}
min {landscape:min}
watL -2
rive 0
coldC {rockColor:c}
temperateC {soilColor:c}
warmC {rockColor:c}
hotC {rockColor:c}
clouds 0.1 * {climate:clouds}
speckleC {landscape:speckleC}

climate veryCold
blocker sun brightBlue
blocker sun gentleYellow
blocker sun harshRed
blocker surface jungle
blocker surface swamps
blocker surface islands
blocker surface muddy
blocker surface continents
blocker surface supercontinent
blocker surface forests
blocker surface scatteredforests
blocker surface desert
ocean ocean covered by a thick ice sheet
seas seas covered with thick ice sheets
lakes frozen lakes
hab -2
temp -1.95
clouds 0.5

climate cold
blocker sun brightBlue
blocker sun gentleYellow
blocker surface icyDesert
ocean ocean covered by ice everywhere except near the equator
seas seas mostly covered with ice
lakes frozen lakes
temp -1.3
clouds 0.85

climate temperate
blocker sun dimWhite
blocker sun dimBlue
blocker surface icyDesert
blocker surface tundra
ocean ocean mostly free of ice, except at the poles
seas seas
lakes lakes
temp 0.0
clouds 1.0

climate hot
blocker sun dimWhite
blocker sun dimBlue
blocker surface icyDesert
blocker surface tundra
ocean ocean
seas seas
lakes warm lakes
temp 0.7
clouds 1.3

climate veryHot
blocker sun dimWhite
blocker sun gentleYellow
blocker sun wanYellow
blocker sun dimBlue
blocker surface icyDesert
blocker surface tundra
ocean ocean that is constantly steaming
seas seas that are constantly steaming
lakes boiling lakes
hab -2
temp 1.8
clouds 0.8

soilColor red
cap Red
c [0.56, 0.19, 0.1]
soilColor grey
cap Grey
c [0.46, 0.43, 0.43]
soilColor brown
cap Brown
c [0.52, 0.35, 0.26]
soilColor black
cap Black
c [0.25, 0.25, 0.28]

rockColor red
cap Red
c [0.53, 0.14, 0.04]
rockColor grey
cap Grey
c [0.39, 0.39, 0.41]
rockColor white
cap White
c [0.77, 0.79, 0.8]
rockColor black
cap Black
c [0.1, 0.1, 0.13]
rockColor dark green
cap Dark green
c [0.2, 0.3, 0.25]
rockColor dark blue
cap Dark blue
c [0.16, 0.23, 0.29]
rockColor speckled
cap Speckled
c [0.49, 0.46, 0.47]

landscape rocks
blocker surface:land no
blocker surface rocks
blocker surface jaggedRocks
desc Huge {rockColor} rocks litter the land.
speckleC {rockColor:c}

landscape mountains
blocker surface:land no
blocker surface muddy
desc Tall mountains rise towards the sky.
speckleC {rockColor:c}

landscape sinkholes
blocker surface:land no
blocker surface islands
desc Sinkholes dot the land.
speckleC {soilColor:c}

landscape fissures
blocker surface:land no
desc Noxious gases erupt from deep fissures.
hab -2
speckleC [0.75, 0.69, 0.48]

landscape rockSpires
blocker surface:land no
desc Spires of sharp stone interrupt the otherwise flat terrain.
speckleC {rockColor:c}

landscape sandBeach
blocker surface:land no
blocker surface:ocean no
desc There are wide beaches of fine {soilColor} sand.
speckleC {flora:temperateC}

landscape rockBeach
blocker surface:land no
blocker surface:ocean no
desc There are wide, {rockColor}, rocky beaches.
speckleC {flora:temperateC}

landscape maze
blocker surface:land no
blocker surface swamps
blocker surface icyDesert
blocker surface desert
blocker surface rocks
blocker surface jaggedRocks
blocker surface muddy
desc The land is a maze of steep valleys.
speckleC {flora:coldC}

landscape plateaus
blocker surface:land no
blocker surface islands
blocker surface swamps
blocker surface muddy
desc There are large plateaus with steep sides.
speckleC {flora:warmC}

landscape plains
blocker surface:land no
blocker surface swamps
blocker surface jungle
blocker surface forests
blocker surface icyDesert
blocker surface desert
blocker surface rocks
blocker surface jaggedRocks
blocker surface muddy
desc Great plains stretch under the {sun:brightness} {sun:color} sun.
speckleC {flora:hotC}

landscape hills
blocker surface:land no
blocker surface desert
blocker surface jaggedRocks
blocker surface icyDesert
blocker surface rocks
blocker surface swamps
blocker surface jungle
blocker surface forests
blocker surface muddy
blocker surface jaggedRocks
desc There are gentle rolling hills.
speckleC {flora:temperateC}

landscape canyons
blocker surface:land no
blocker surface islands
desc Deep canyons cut into the planet's crust.
sze -1
min +2
speckleC {soilColor:c}

landscape tunnels
blocker surface:land no
blocker surface muddy
desc A network of tunnels extends under much of the surface.
sze +3
min +1
speckleC {soilColor:c}

landscape dustBasins
blocker surface:land no
blocker surface:dry no
desc Basins of {soilColor} dust.
sze -1
speckleC {soilColor:c}

landscape hexCols
blocker surface:land no
desc Towering columns of hexagonal {rockColor} stone.
min +1
speckleC {rockColor:c}

landscape fossilizedForests
blocker surface:land no
desc There are extensive fossilized forests.
speckleC {rockColor:c}

landscape slime
blocker surface:land no
blocker surface:dry yes
blocker climate veryCold
desc The ground is covered in thick {leafColor} slime.
hab -1
speckleC {leafColor:temperateC}

landscape tidalPlains
blocker surface:land no
blocker surface:ocean no
blocker climate veryCold
desc There are great tidal plains.
hab +1
speckleC {flora:temperateC}

landscape cenotes
blocker surface:land no
blocker climate veryCold
blocker surface:dry yes
desc There are deep water-filled cenotes.
hab +1
speckleC [0.050980392, 0.215686275, 0.380392157]

landscape bogs
blocker surface:land no
blocker climate veryCold
blocker surface:dry yes
desc There are sprawling {soilColor} bogs.
sze -1
speckleC {soilColor:c}

landscape waterCaves
blocker surface:land no
blocker climate veryCold
blocker surface:dry yes
desc Large water-filled caves are present just beneath the surface.
hab +1
speckleC {flora:warmC}

landscape nothingSpecial
desc  
speckleC {flora:temperateC}

special radioactive
desc Much of the planet is heavily radioactive.
hab -2
min +1
cloudC [0.8, 0.85, 0.9]
hazeC [0.2, 0.24, 0.25]
oceanC {lifeSpecial:oceanC}

special giantMoon
desc A giant moon looms in the sky.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special darkness
desc Due to a celestial conjunction, the planet is plunged into darkness every {prime} years.
hab -1
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special manyMoons
desc Many moons can be seen in the sky.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special dustBand
desc A band of glittering dust can be seen in the sky.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special cloudCover
desc The sky is constantly cloudy.
clouds + 2.4
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special constantRain
blocker surface:land no
blocker surface:dry yes
desc It is always raining.
clouds + 0.3
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special suddenRain
blocker surface:land no
blocker surface:dry yes
desc There are sudden, violent rains.
clouds + 0.2
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special drizzle
blocker surface:land no
blocker surface:dry yes
desc There is a constant drizzle.
clouds + 0.2
hazeC {lifeSpecial:hazeC}

special fog
blocker surface:land no
blocker surface:dry yes
desc There are frequent fogs.
clouds + 0.7
cloudC [0.7, 0.7, 0.7]
hazeC [0.4, 0.4, 0.4]
oceanC {lifeSpecial:oceanC}

special impactCrater
blocker surface deepOcean
blocker surface ocean
desc The remains of an ancient, massive impact crater can be seen all the way from orbit.
min +1
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special dustStorms
blocker surface:land no
blocker surface:dry no
desc Constant dust storms make it hard to see anything.
hab -1
clouds + 0.3
cloudC {soilColor:c}
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special snowStorms
blocker climate temperate
blocker climate hot
blocker climate veryHot
blocker surface:dry yes
desc Constant snowstorms make it hard to see anything.
hab -1
clouds + 0.4
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special hailStorms
blocker climate temperate
blocker climate hot
blocker climate veryHot
blocker surface:dry yes
desc Constant hail storms batter the surface.
hab -1
clouds + 0.3
oceanC {lifeSpecial:oceanC}

special hurricanes
blocker climate veryCold
blocker surface:dry yes
desc Constant hurricanes ravage the surface.
hab -1
clouds + 0.7
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special iceSpires
blocker surface:land no
blocker climate temperate
blocker climate hot
blocker climate veryHot
desc Tall ice spires formed by an unknown process cover much of the ground.
sze -1
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special slowDayCycle
desc A single day takes a very long time.
rotspeedMult * 0.1
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special noStars
desc An interstellar dust cloud hides most of the stars in the night sky.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special fastDayCycle
desc Day and night rapidly follow on from each other.
rotspeedMult * 3
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special heavyGravity
desc The gravity is very strong.
hab -1
sze +2
min -1
clouds - 0.2
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special lowGravity
desc The gravity is quite low.
sze -1
clouds - 0.2
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special thinAir
desc The air is thin.
hab -1
clouds - 0.7
hazeC [0.1, 0.1, 0.12]
oceanC {lifeSpecial:oceanC}

special thickAir
desc The air pressure is very high.
hab -1
hazeC [0.3, 0.3, 0.4]
oceanC {lifeSpecial:oceanC}

special electricalStorms
desc Powerful electrical storms disrupt electronics and light up the sky.
hab -1
sci -1
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special solarFlares
desc Frequent strong solar flares cause beautiful displays of light in the sky and make electronics all but useless.
hab -1
sci -1
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special coldAir
blocker climate temperate
blocker climate hot
blocker climate veryHot
desc The air is bitterly cold.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special hotAir
blocker climate temperate
blocker climate cold
blocker climate veryCold
desc The air is almost unbearably hot.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special coldWind
blocker climate temperate
blocker climate hot
blocker climate veryHot
desc There is a constant cold wind.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special hotWind
blocker climate temperate
blocker climate cold
blocker climate veryCold
desc There is a constant hot wind.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special suddenColdWind
blocker climate temperate
blocker climate hot
blocker climate veryHot
desc There are sudden cold winds.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special suddenHotWind
blocker climate temperate
blocker climate cold
blocker climate veryCold
desc There are sudden hot winds.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special poisonedSoil
blocker surface:land no
desc The soil is poisoned with heavy metals.
hab -3
min +1
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special richSurface
blocker surface:land no
desc Deposits of valuable ores can be seen all over the surface.
min +3
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special deepRiches
blocker surface:land yes
desc There are deposits of valuable ores in the ocean depths.
min +2
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special petroleum
blocker surface:land no
desc There are deposits of a petroleum-like substance just under the surface.
min +3
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special constantWind
desc A constant wind whips around the planet.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special shootingStars
desc There are frequent shooting stars.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special variableGravity
desc The gravity at the poles is much stronger than at the equator.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special radioDust
blocker surface:land no
blocker surface:dry no
desc Radioactive dust pollutes the air.
hab -4
hazeC [0.4, 0.42, 0.45]
oceanC {lifeSpecial:oceanC}

special volcanoes
blocker surface:land no
desc There are many active volcanoes.
hab -1
sze -2
min +1
clouds + 0.7
cloudC {soilColor:c}
hazeC {soilColor:c}
oceanC {lifeSpecial:oceanC}

special dormantVolcanoes
blocker surface:land no
desc There are many dormant volcanoes.
sze -1
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special dormantOceanVolcanoes
blocker surface:ocean no
desc There are many dormant underwater volcanoes.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special meteoriteHail
desc There is a constant hail of small meteorite impacts.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special colorWater
blocker surface:dry yes
desc The water is colored {plantDecoColor} by microorganisms.
hab -1
hazeC {lifeSpecial:hazeC}
oceanC {plantDecoColor:c}

special ecoCollapseCycle
desc The ecosystem of the planet goes through a cycle of collapsing every few hundred years.
hab -1
sci +1
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special writingSpires
desc There are great {rockColor} spires with patterns that may be writing, but are probably caused by the weather.
sci +1
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special geodes
blocker surface:land no
desc Huge glittering geodes dot the surface.
hab +1
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special transuranic
desc There are deposits of stable transuranic elements.
sci +1
hab -1
min +2
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special tides
blocker surface:land no
blocker surface:ocean no
desc The tides are very powerful.
hab -1
sze -1
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special skeletons
desc There are huge skeletons of animals seemingly unrelated to the local life.
sci +1
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special gravity
desc The gravity is uneven.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special rumbles
blocker surface:land no
desc There are constant subsonic tremors of unknown origin.
hab -1
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special geysers
blocker surface:dry no
desc Huge geysers spew boiling water kilometres into the air.
clouds +0.5
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special isotopes
desc The planet is composed of unusual isotopes that would make it far younger than is possible.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special ammoDump
desc Large quantities of unexploded munitions litter the surface.
hab -1
sze -2
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special crashSite
desc Due to its location, many starships have crashed on this planet.
hab -1
sci +1
ind +1
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special monastery
desc There are rumours of a monastery of heretical monks.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special evil
desc This planet has an evil reputation, but no one can say why.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special unmapped
desc This planet does not appear on any charts.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special hollow
desc Some claim that this planet is hollow.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special tomb
desc The tomb of {famousPerson} is located here.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special exile
desc {famousPerson} was exiled here.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special treasure
desc This planet is rumoured to harbour the treasures of {famousPerson}.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special radioBuoy
desc A small buoy orbiting the planet endlessly repeats an incomprehensible message.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special acidOceans
blocker surface:ocean no
desc The oceans are very acidic.
hab -1
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special alkaliOceans
blocker surface:ocean no
desc The oceans are very alkaline.
hab -1
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special firstMapped
desc This planet was first mapped by {famousPerson}.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special shardBand
desc A band of metal shards encircles the planet.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special lostColony
desc Records describe an attempt to colonize that failed for unclear reasons.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special secretExpeditions
desc There are rumours of secret expeditions to this planet.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special secretBase
desc This planet supposedly harbours the secret base of {famousPerson}.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special crashedHugeShip
desc The {famousShip} crashed here. Its reactor core is still too hot to approach.
sze -1
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special lostShip
desc The {famousShip} vanished while exploring this planet.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special hiddenShip
desc The {famousShip} is supposedly buried here.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special shipPlans
desc The plans of the {famousShip} may be hidden somewhere on this planet.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special sunShade
blocker climate cold
blocker climate veryCold
desc {famousPerson} installed an orbital sun shade to cool down this planet.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special toughCrust
desc The stone of the planetary crust is unusually dense and hard.
ind -1
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special jellyWater
desc Nearly all water on the planet contains micro-organisms that give it a jelly-like consistency.
hab - 1
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special abandonedColony
desc There are records of a failed attempt to found a colony here.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special introducedAnimals
desc Some of the local animals were clearly introduced from other planets.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special abandonedFields
desc There are regular formations of plants that look like abandoned fields.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special poem
desc This planet is the subject of a famous poem by a famous poet who clearly never visited it.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special expedUnin
desc The first expedition to encounter this planet marked it down as "entirely uninhabitable", no reason given.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special migrationStop
desc This planet was a stop in the Lesser Migration.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special looksLikeAnother
desc There are records of a remote, far-away planet that matches this one exactly.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special pheroHunger
desc The air contains pheromones that induce an insatiable hunger.
hab -3
hazeC [0.2, 0.2, 0.4]
oceanC {lifeSpecial:oceanC}

special pheroLust
desc The air contains pheromones that induce insatiable lust.
hab -2
ind -2
sci +1
hazeC [0.2, 0.3, 0.1]
oceanC {lifeSpecial:oceanC}

special pheroMemory
desc The air contains pheromones that induce memory loss.
hab -3
ind -2
sci +1
hazeC [0.2, 0.2, 0.3]
oceanC {lifeSpecial:oceanC}

special pheroKill
desc The air contains pheromones that induce an insatiable desire to kill.
hab -3
ind -2
sci +1
hazeC [0.3, 0.1, 0.2]
oceanC {lifeSpecial:oceanC}

special disease
desc The planet harbours an alien disease lethal to humans.
hab -5
ind -2
sci +2
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special fungus
desc The planet harbours an alien fungus lethal to all Earth life.
hab -5
ind -2
sci +2
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special oceanBeing
blocker surface:ocean no
desc The planet's ocean is a single being of immense power.
hab -1
ind -1
sci +2
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special timeDistortions
desc The flow of time is distorted on the planet's surface.
hab -2
ind -2
sci +3
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special garbageDump
desc Vast quantities of toxic waste have been dumped here.
hab -3
ind -1
sci -1
hazeC [0.4, 0.3, 0.3]
oceanC [0.5, 0.15, 0.1]

special birthplace
desc {famousPerson} was supposedly born in orbit around this planet.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special hunting
desc Certain very wealthy individuals are said to go hunting here.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special smugglers
desc There are rumours of a smuggler's lair on this planet.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special book
desc A famous holo-novel is set on a fictionalized version of this planet.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special strangeMatter
desc There are deposits of strange matter.
sci +2
ind +1
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special badAir
desc The air has an inaccountably foul smell.
hab -1
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special spheres
desc The planet is covered in small metal spheres of unknown origin.
ind +1
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special tectonic
desc The planet is very tectonically active.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special radCore
desc There is a strange radiation source at the planet's core.
sci +2
hab -1
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special voices
desc One of the local animals screams at night in a way that sounds eerily human.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special weirdSkeletons
desc There are skeletons here that look almost human, but not quite.
sci +1
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special anoxicPeriods
desc The geological record shows irregular periods where, for unknown reasons, all oxygen vanished from the atmosphere.
sci +1
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special dust
desc Everything is coated in a thin layer of {soilColor} dust.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special burningPeriods
blocker surface:land no
desc The geological record shows irregular periods of sudden conflagration.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special extinctionPeriods
desc The geological record shows strangely regular mass extinction events with no clear cause.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special formerLife
desc The geological record shows that life arose twice on this planet. It was utterly wiped out once, two billion years ago, and has flourished again.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special slime
blocker surface:land no
desc The ground is covered in translucent {leafColor} slime.
hab -1
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special auroras
desc The night sky is filled with auroras.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special gasGiant
desc A nearby gas giant looms in the sky.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special manyMoons
desc The planet has hundreds of moons.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special storms
desc There are incredibly violent storms.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special alwaysSnowing
blocker climate hot
blocker climate veryHot
blocker climate temperate
desc It's always snowing.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special motes
desc Millions of tiny motes light up the night sky.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special sunsets
desc The sunsets are especially beautiful.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special weirdFlashes
desc There are sudden flashes of light at night, of unclear origin.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special softGround
blocker surface:land no
blocker surface rocks
blocker surface rockDesert
desc The ground is too soft to walk on.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special noWind
desc There is never any wind.
hazeC {lifeSpecial:hazeC}
oceanC {lifeSpecial:oceanC}

special oceanPlants
blocker surface:ocean no
desc The oceans are covered in mats of {leafColor} vegetation.
hazeC {lifeSpecial:hazeC}
oceanC {leafColor:temperateC}

special fireproof
blocker surface:land no
desc The {flora:plural} are fireproof.
hazeC {lifeSpecial:hazeC}
oceanC {leafColor:temperateC}

special round
desc The planet is perfectly round, with no equatorial bulge.
sci +1
hazeC {lifeSpecial:hazeC}
oceanC {leafColor:temperateC}

special gold
desc There are large gold deposits.
ind +1
hazeC {lifeSpecial:hazeC}
oceanC {leafColor:temperateC}

special cadmium
desc There are large cadmium deposits.
ind +1
hab -1
hazeC {lifeSpecial:hazeC}
oceanC {leafColor:temperateC}

symmetry 2
many eight
waterPropulsion tails
fewLegged four-legged
fold bilateral
some two
nPods bipeds
nGons blobs
nPedal bipedal

symmetry 3
many nine
waterPropulsion siphons
fewLegged three-legged
fold threefold
some three
nPods tripods
nGons triangles
nPedal tripedal

symmetry 5
many ten
waterPropulsion flippers
fewLegged five-legged
fold fivefold
some five
nPods pentapods
nGons pentagons
nPedal five-legged

symmetry 6
many six
waterPropulsion undulating bodies
fewLegged six-legged
fold hexagonal
some six
nPods hexapods
nGons hexagons
nPedal six-legged

symmetry 0
many many
waterPropulsion mass of tentacles
fewLegged tentacular
fold no
some several
nPods heptapods
nGons blobs
nPedal tentacular

leafColor green
coldC [0.250980392157, 0.266666666667, 0.164705882353]
temperateC [0.239215686275, 0.333333333333, 0.137254901961]
warmC [0.223529411765, 0.501960784314, 0.121568627451]
hotC [0.486274509804, 0.458823529412, 0.117647058824]
leafColor red
coldC [0.521568627451, 0.262745098039, 0.180392156863]
temperateC [0.745098039216, 0.133333333333, 0.176470588235]
warmC [0.654901960784, 0.0823529411765, 0.101960784314]
hotC [0.760784313725, 0.274509803922, 0.133333333333]
blocker sun dullRed
blocker sun harshRed
leafColor orange
coldC [0.709803921569, 0.325490196078, 0.0313725490196]
temperateC [0.78431372549, 0.364705882353, 0.0705882352941]
warmC [0.83137254902, 0.309803921569, 0.0352941176471]
hotC [0.996078431373, 0.592156862745, 0.0078431372549]
leafColor purple
coldC [0.4, 0.419607843137, 0.443137254902]
temperateC [0.380392156863, 0.376470588235, 0.41568627451]
warmC [0.309803921569, 0.223529411765, 0.345098039216]
hotC [0.376470588235, 0.227450980392, 0.372549019608]
leafColor black
coldC [0.180392156863, 0.2, 0.2]
temperateC [0.192156862745, 0.239215686275, 0.219607843137]
warmC [0.109803921569, 0.117647058824, 0.121568627451]
hotC [0.454901960784, 0.388235294118, 0.364705882353]
leafColor blue
coldC [0.160784313725, 0.470588235294, 0.529411764706]
temperateC [0.145098039216, 0.411764705882, 0.490196078431]
warmC [0.137254901961, 0.450980392157, 0.603921568627]
hotC [0.149019607843, 0.462745098039, 0.525490196078]
blocker sun brightBlue
blocker sun dimBlue
leafColor white
blocker flora deepForests
blocker flora treeTowers
blocker flora dottedShrubs
coldC [0.756862745098, 0.717647058824, 0.549019607843]
temperateC [0.807843137255, 0.81568627451, 0.721568627451]
warmC [0.729411764706, 0.729411764706, 0.729411764706]
hotC [0.678431372549, 0.643137254902, 0.560784313725]
leafColor yellow
coldC [0.737254901961, 0.439215686275, 0.321568627451]
temperateC [0.988235294118, 0.839215686275, 0.0941176470588]
warmC [0.996078431373, 0.823529411765, 0.0666666666667]
hotC [0.839215686275, 0.760784313725, 0.466666666667]
leafColor crimson
coldC [0.486274509804, 0.223529411765, 0.0823529411765]
temperateC [0.83137254902, 0.0941176470588, 0.0745098039216]
warmC [0.980392156863, 0.0, 0.0980392156863]
hotC [0.960784313725, 0.180392156863, 0.160784313725]
leafColor pink
coldC [0.733333333333, 0.0941176470588, 0.282352941176]
temperateC [0.83137254902, 0.364705882353, 0.537254901961]
warmC [0.807843137255, 0.380392156863, 0.560784313725]
hotC [0.639215686275, 0.278431372549, 0.38431372549]
leafColor light blue
coldC [0.278431372549, 0.588235294118, 0.647058823529]
temperateC [0.262745098039, 0.529411764706, 0.607843137255]
warmC [0.254901960784, 0.56862745098, 0.721568627451]
hotC [0.266666666667, 0.580392156863, 0.643137254902]
leafColor dark green
coldC [0.133333333333, 0.188235294118, 0.0470588235294]
temperateC [0.121568627451, 0.254901960784, 0.0196078431373]
warmC [0.105882352941, 0.423529411765, 0.00392156862745]
hotC [0.36862745098, 0.380392156863, 0.0]
leafColor grey
coldC [0.498039215686, 0.43137254902, 0.376470588235]
temperateC [0.63137254902, 0.623529411765, 0.603921568627]
warmC [0.6, 0.6, 0.592156862745]
hotC [0.478431372549, 0.486274509804, 0.486274509804]
leafColor dark orange
coldC [0.552941176471, 0.16862745098, 0.0]
temperateC [0.627450980392, 0.207843137255, 0.0]
warmC [0.674509803922, 0.152941176471, 0.0]
hotC [0.839215686275, 0.435294117647, 0.0]
leafColor light green
coldC [0.329411764706, 0.38431372549, 0.243137254902]
temperateC [0.317647058824, 0.450980392157, 0.21568627451]
warmC [0.301960784314, 0.619607843137, 0.2]
hotC [0.564705882353, 0.576470588235, 0.196078431373]
leafColor brown
coldC [0.564705882353, 0.254901960784, 0.18431372549]
temperateC [0.662745098039, 0.317647058824, 0.196078431373]
warmC [0.556862745098, 0.23137254902, 0.172549019608]
hotC [0.937254901961, 0.592156862745, 0.360784313725]

animalColor black
cap Black
animalColor striped
cap Striped
animalColor spotted
cap Spotted
animalColor red
cap Red
animalColor brown
cap Brown
animalColor white
cap White
animalColor many-colored
cap Many-colored
animalColor orange
cap Orange
animalColor mottled
cap Mottled
animalColor translucent
cap Translucent
animalColor yellow
cap Yellow
animalColor crimson
cap Crimson
animalColor pink
cap Pink
animalColor light blue
cap Light blue
animalColor dark green
cap Dark green
animalColor grey
cap Grey
animalColor dark orange
cap Dark orange
animalColor light green
cap Light green
animalColor dark grey
cap Dark grey
animalColor scintillating
cap Scintillating
animalColor glowing
cap Glowing

animalTexture feathered
animalTexture furry
blocker climate veryHot
animalTexture smooth-skinned
blocker climate veryCold
animalTexture scaly
animalTexture spongy
blocker climate veryCold
animalTexture spiny
animalTexture fuzzy
animalTexture muscular
animalTexture armored
animalTexture gelatinous
animalTexture rugose
animalTexture segmented
animalTexture leathery
animalTexture shimmering
animalTexture pulsating
animalTexture mottled
animalTexture wrinkled


plantDecoColor red
c [0.745098039216, 0.133333333333, 0.176470588235]
plantDecoColor green
c [0.239215686275, 0.333333333333, 0.137254901961]
plantDecoColor orange
c [0.78431372549, 0.364705882353, 0.0705882352941]
plantDecoColor purple
c [0.380392156863, 0.376470588235, 0.41568627451]
plantDecoColor black
c [0.192156862745, 0.239215686275, 0.219607843137]
plantDecoColor blue
c [0.262745098039, 0.529411764706, 0.607843137255]
plantDecoColor white
c [0.807843137255, 0.81568627451, 0.721568627451]
plantDecoColor yellow
c [0.988235294118, 0.839215686275, 0.0941176470588]
plantDecoColor crimson
c [0.83137254902, 0.0941176470588, 0.0745098039216]
plantDecoColor pink
c [0.83137254902, 0.364705882353, 0.537254901961]
plantDecoColor light blue
c [0.262745098039, 0.529411764706, 0.607843137255]
plantDecoColor dark green
c [0.121568627451, 0.254901960784, 0.0196078431373]
plantDecoColor grey
c [0.63137254902, 0.623529411765, 0.603921568627]
plantDecoColor dark orange
c [0.627450980392, 0.207843137255, 0.0]
plantDecoColor light green
c [0.317647058824, 0.450980392157, 0.21568627451]
plantDecoColor brown
c [0.662745098039, 0.317647058824, 0.196078431373]

plantDeco hairs
desc fine {plantDecoColor} hair

plantDeco thinLeaves
desc thin {leafColor} leaves

plantDeco broadLeaves
desc broad {leafColor} leaves

plantDeco spines
desc {plantDecoColor} spines

plantDeco thorns
desc {plantDecoColor} thorns

plantDeco barbs
desc {plantDecoColor} barbs

plantDeco warts
desc {plantDecoColor} warts

plantDeco fruit
desc {plantDecoColor} fruit

plantDeco flowers
desc {plantDecoColor} flowers

plantDeco tentacles
desc {plantDecoColor} tentacles

plantDeco blisters
desc {plantDecoColor} blisters

plantDeco veils
desc thin floating {plantDecoColor} veils

plantDeco ropes
desc tangles of {plantDecoColor} ropes

plantDeco translucentBubbles
desc translucent {plantDecoColor} bubbles

plantDeco hollowNeedles
desc hollow {plantDecoColor} needles

plantDeco boils
desc shapeless {plantDecoColor} boils

plantDeco hookedBarbs
desc tiny hooked {plantDecoColor} barbs

plantDeco reticulatedLeaves
desc reticulated {leafColor} leaves

plantTexture smooth
plantTexture knotted
plantTexture brittle
plantTexture spongy
plantTexture reticulated
plantTexture wrinkled
plantTexture porous
plantTexture rubbery
plantTexture soft
plantTexture coarse
plantTexture furry
plantTexture slippery
plantTexture waxy
plantTexture tough
plantTexture leathery
plantTexture fibrous
plantTexture velvety
plantTexture greasy
plantTexture crystalline

flora tubules
blocker surface desert
blocker surface icyDesert
desc {plantTexture} {leafColor} tubules
land There are clusters of {plantTexture} {leafColor} tubules everywhere.
plural tubules
lurk in the tubules.
tall yes
coldC {leafColor:coldC}
temperateC {leafColor:temperateC}
warmC {leafColor:warmC}
hotC {leafColor:hotC}
speckleC {landscape:speckleC}

flora bubbles
blocker surface jungle
blocker surface forests
blocker surface scatteredForests
desc small {leafColor} bubbles
land The local plant life takes the shape of small {leafColor} bubbles.
plural bubbles
lurk between the bubbles.
tall no
coldC {leafColor:coldC}
temperateC {leafColor:temperateC}
warmC {leafColor:warmC}
hotC {leafColor:warmC}
speckleC {landscape:speckleC}

flora stalks
blocker surface icyDesert
desc tall, {leafColor} stalks
land There are groups of tall, {leafColor} stalks everywhere.
plural stalks
lurk in the stalks.
tall yes
coldC {leafColor:coldC}
temperateC {leafColor:temperateC}
warmC {leafColor:warmC}
hotC {leafColor:hotC}
speckleC {landscape:speckleC}

flora domes
blocker surface desert
blocker surface icyDesert
desc giant {leafColor} geodesic domes
land The plants take the shape of giant {leafColor} geodesic domes.
plural domes
lurk high up in the dome-plants.
tall yes
coldC {leafColor:coldC}
temperateC {leafColor:temperateC}
warmC {leafColor:warmC}
hotC {leafColor:hotC}
speckleC {landscape:speckleC}

flora deepForests
blocker surface tundra
blocker surface desert
blocker surface icyDesert
blocker surface rocks
blocker surface jaggedRocks
desc tall trees
land Deep, dark forests cover the land.
plural trees
lurk in the branches.
tall yes
hab +1
min +1
coldC {leafColor:coldC}
temperateC {leafColor:temperateC}
warmC {leafColor:temperateC}
hotC {leafColor:temperateC}
speckleC {landscape:speckleC}

flora fungalThicket
blocker surface tundra
blocker surface desert
blocker surface icyDesert
blocker surface rocks
blocker surface jaggedRocks
desc {leafColor} fungal towers
land An impassable thicket of {leafColor} fungus covers the land.
plural fungal towers
lurk in the deepest fungal thickets.
tall yes
hab -1
sze -1
coldC {leafColor:coldC}
temperateC {leafColor:warmC}
warmC {leafColor:warmC}
hotC {leafColor:hotC}
speckleC {landscape:speckleC}

flora treeTowers
blocker surface desert
blocker surface icyDesert
blocker surface rocks
blocker surface jaggedRocks
desc giant tower-like trees with {leafColor} leaves
land There are giant tower-like trees with {leafColor} leaves.
plural trees
lurk in the branches.
tall yes
hab +1
coldC {leafColor:coldC}
temperateC {leafColor:temperateC}
warmC {leafColor:warmC}
hotC {leafColor:warmC}
speckleC {landscape:speckleC}

flora dottedShrubs
blocker surface jungle
desc {leafColor} shrubs with {plantDeco:desc}
land There is the occasional {leafColor} shrub with {plantDeco:desc}.
plural shrubs
lurk under the shrubs.
tall no
coldC {soilColor:c}
temperateC {soilColor:c}
warmC {soilColor:c}
hotC {rockColor:c}
speckleC {leafColor:warmC}

flora grass
blocker surface desert
blocker surface icyDesert
blocker surface rocks
blocker surface jungle
blocker surface forests
blocker surface scatteredForests
blocker surface jaggedRocks
desc deep {leafColor} grass
land Deep {leafColor} grass covers everything.
plural blades of grass
lurk in the grass.
tall no
coldC {leafColor:coldC}
temperateC {leafColor:temperateC}
warmC {leafColor:hotC}
hotC {leafColor:hotC}
speckleC {landscape:speckleC}

flora grassClumps
blocker surface desert
blocker surface icyDesert
blocker surface rocks
blocker surface jungle
blocker surface forests
blocker surface scatteredForests
desc {leafColor} grass
land Clumps of {leafColor} grass.
plural blades of grass
lurk in the grass.
tall no
coldC {rockColor:c}
temperateC {soilColor:c}
warmC {soilColor:c}
hotC {soilColor:c}
speckleC {leafColor:temperateC}

flora lichen
blocker surface jungle
blocker surface forests
blocker surface scatteredForests
desc {leafColor} lichen
land A thin dusting of {leafColor} lichen covers the land.
plural clumps of lichen
lurk in nooks and crannies.
tall no
coldC {leafColor:coldC}
temperateC {leafColor:coldC}
warmC {leafColor:coldC}
hotC {leafColor:warmC}
speckleC {landscape:speckleC}

flora floatingPlants
blocker surface jungle
blocker surface forests
blocker surface scatteredForests
desc floating plants
land Some local plants hover in mid-air, held aloft by gas bags.
plural floating plants
lurk between the tentacles of the flying plants.
tall yes
coldC {leafColor:coldC}
temperateC {leafColor:temperateC}
warmC {leafColor:warmC}
hotC {leafColor:hotC}
speckleC {landscape:speckleC}

flora giantFlowers
blocker surface desert
blocker surface icyDesert
blocker surface rocks
desc thick {leafColor} stems with massive flowers
land There are massive flowers in all kinds of colors, sitting atop thick {leafColor} stems.
plural flowers
lurk in the flowers.
tall yes
coldC {leafColor:coldC}
temperateC {leafColor:temperateC}
warmC {leafColor:warmC}
hotC {leafColor:hotC}
speckleC {landscape:speckleC}

flora fungi
desc {leafColor} fungi
land There are scattered {leafColor} fungi.
plural fungi
lurk under the fungi.
tall no
coldC {soilColor:c}
temperateC {soilColor:c}
warmC {soilColor:c}
hotC {soilColor:c}
speckleC {leafColor:temperateC}

flora moss
blocker surface desert
blocker surface icyDesert
blocker surface rocks
blocker surface jaggedRocks
blocker surface forests
blocker surface scatteredForests
blocker surface jungle
desc {leafColor} moss
land The surface is covered in thick mats of {leafColor} moss.
plural clumps of moss
lurk in the moss.
tall no
coldC {leafColor:coldC}
temperateC {leafColor:temperateC}
warmC {leafColor:temperateC}
hotC {leafColor:hotC}
speckleC {landscape:speckleC}

flora spines
blocker surface desert
blocker surface icyDesert
blocker surface rocks
desc tall {leafColor} {plantTexture} spines
land The plants are tall {leafColor} {plantTexture} spines.
plural spines
lurk in the spines.
tall yes
coldC {leafColor:coldC}
temperateC {leafColor:temperateC}
warmC {leafColor:warmC}
hotC {leafColor:hotC}
speckleC {landscape:speckleC}

flora sheets
blocker surface desert
blocker surface icyDesert
blocker surface rocks
blocker surface jaggedRocks
desc vertical {leafColor} sheets of plant matter
land The land is covered in vertical {leafColor} sheets of plant matter.
plural sheets
lurk between the sheets.
tall yes
coldC {leafColor:coldC}
temperateC {leafColor:temperateC}
warmC {leafColor:warmC}
hotC {leafColor:hotC}
speckleC {landscape:speckleC}

flora toppedStalks
blocker surface desert
blocker surface icyDesert
blocker surface rocks
blocker surface jaggedRocks
desc tall {leafColor} stalks covered in {plantDeco:desc}
land The plants are tall {leafColor} stalks covered in {plantDeco:desc}, each with a single circular leaf at the top.
plural stalks
lurk in the leaves.
tall yes
coldC {leafColor:coldC}
temperateC {leafColor:temperateC}
warmC {leafColor:warmC}
hotC {leafColor:hotC}
speckleC {landscape:speckleC}

flora nonToppedStalks
blocker surface desert
blocker surface icyDesert
blocker surface rocks
blocker surface jaggedRocks
desc {leafColor}, {plantTexture} stalks
land The plants are {leafColor}, {plantTexture} stalks with {plantDeco:desc} at the top.
plural stalks
lurk on the stalks.
tall yes
coldC {leafColor:coldC}
temperateC {leafColor:temperateC}
warmC {leafColor:warmC}
hotC {leafColor:hotC}
speckleC {landscape:speckleC}

flora squatTrunks
blocker surface jungle
desc squat, {plantTexture} trunks with {plantDeco:desc}
land The plants are squat, {plantTexture} trunks with {plantDeco:desc}.
plural trunks
lurk between the plants.
tall no
coldC {leafColor:coldC}
temperateC {leafColor:temperateC}
warmC {leafColor:warmC}
hotC {leafColor:hotC}
speckleC {landscape:speckleC}

flora barrels
blocker surface jungle
desc squat {leafColor} barrels covered with {plantDeco:desc}
land The local plants take the shape of squat {leafColor} barrels covered with {plantDeco:desc}.
plural barrels
lurk between the plants.
tall no
coldC {leafColor:coldC}
temperateC {leafColor:temperateC}
warmC {leafColor:warmC}
hotC {leafColor:hotC}
speckleC {landscape:speckleC}

flora fronds
desc {leafColor} fronds
land Clusters of {leafColor} fronds.
plural fronds
lurk in the fronds.
tall no
coldC {leafColor:coldC}
temperateC {leafColor:temperateC}
warmC {leafColor:warmC}
hotC {leafColor:hotC}
speckleC {landscape:speckleC}

flora sponges
desc {leafColor} sponges
land The local plants are {leafColor} sponges.
plural sponges
lurk in the sponges.
tall no
coldC {leafColor:coldC}
temperateC {leafColor:temperateC}
warmC {leafColor:hotC}
hotC {leafColor:hotC}
speckleC {landscape:speckleC}

flora trumpets
desc {plantTexture} {leafColor} trumpet-shaped plants
land The plants are {plantTexture} {leafColor} trumpets pointing up at the sky.
plural trumpets
lurk in the trumpets.
tall yes
coldC {leafColor:temperateC}
temperateC {leafColor:temperateC}
warmC {leafColor:warmC}
hotC {leafColor:hotC}
speckleC {landscape:speckleC}

flora hexsegments
desc {leafColor} segmented plants
land The plants are made of hexagonal {leafColor} segments stacked atop each other, with {plantDeco:desc} between the segments.
plural stacks
lurk in the stacks.
tall yes
coldC {leafColor:coldC}
temperateC {leafColor:temperateC}
warmC {leafColor:warmC}
hotC {leafColor:hotC}
speckleC {landscape:speckleC}

flora mazes
desc {leafColor} plants
land The {leafColor} plants grow in elaborate mazes to avoid touching one another.
plural plants
lurk in the mazes.
tall yes
coldC {leafColor:coldC}
temperateC {leafColor:temperateC}
warmC {leafColor:warmC}
hotC {leafColor:hotC}
speckleC {landscape:speckleC}

flora roots
blocker surface desert
blocker surface icyDesert
blocker surface rocks
blocker surface jaggedRocks
blocker surface forests
blocker surface scatteredForests
blocker surface jungle
desc {plantTexture} {leafColor} roots
land The surface is covered in {plantTexture} {leafColor} roots.
plural roots
lurk between the roots.
tall no
coldC {leafColor:coldC}
temperateC {leafColor:coldC}
warmC {leafColor:coldC}
hotC {leafColor:coldC}
speckleC {landscape:speckleC}

flora mossPatterns
blocker surface desert
blocker surface icyDesert
blocker surface rocks
blocker surface jaggedRocks
blocker surface forests
blocker surface scatteredForests
blocker surface jungle
desc {leafColor} moss
land Thin mats of {leafColor} moss cover the surface in elaborate patterns.
lurk in the moss.
tall no
coldC {leafColor:coldC}
temperateC {leafColor:temperateC}
warmC {leafColor:temperateC}
hotC {leafColor:hotC}
speckleC {landscape:speckleC}

fauna throwers
blocker surface:land no
desc Swarms of small {animalTexture} creatures move by throwing each other. {lifeSpecial:plural}

fauna slitherers
blocker surface:land no
desc Long {animalTexture} creatures slither between the {flora:plural}. {lifeSpecial:plural}

fauna concertina
blocker surface:land no
desc Small {animalTexture} creatures move in a concertina-like fashion. {lifeSpecial:plural}

fauna giantHives
blocker surface:land no
desc Giant hives of small, {animalTexture}, {symmetry:many}-legged creatures dominate. {lifeSpecial:plural}

fauna suckers
desc The apex predators on {nameStart}{nameEnd} {nameNumber} inject their prey with digestive enzymes. {lifeSpecial:plural}

fauna brainParasites
desc Vicious brain parasites lurk {surface:lurk} {lifeSpecial:plural}
hab -3
sci +1

fauna tallNPods
blocker flora:tall no
blocker surface:land no
desc Gangly {animalColor} {symmetry:nPods} move between the {flora:plural}, feeding tentacles seeking nourishment. {lifeSpecial:plural}

fauna nPodMatriarchs
blocker surface:land no
desc The clan matriarchs of {animalColor} {symmetry:nPods} noisily fight for status. {lifeSpecial:plural}

nPodClans
blocker surface:land no
desc Clan groups of {animalColor} {symmetry:nPods} constantly vie for territory. {lifeSpecial:plural}

fauna squatNPods
blocker flora:tall no
blocker surface:land no
desc Squat {animalTexture} {symmetry:nPods} move between the {flora:plural}. {lifeSpecial:plural}

fauna constantFliers
desc {animalColor:cap} winged creatures spend their lives in flight, not even landing to reproduce. {lifeSpecial:plural}
sci +1

fauna accumulators
desc The local animals build shells for themselves out of precious metals. {lifeSpecial:plural}
min +2

fauna skeletonRecyclers
desc The skeletons of deceased animals are re-used as shells by small {animalTexture} creatures. {lifeSpecial:plural}

fauna ambushPredators
desc Vicious {animalTexture} ambush predators lurk {surface:lurk} {lifeSpecial:plural}
hab -1

fauna lurkingSwarms
desc Swarms of tiny {symmetry:fewLegged} animals hide {surface:lurk} {lifeSpecial:plural}

fauna nervoPods
blocker surface:land no
desc Groups of nervous {animalColor} {symmetry:nPods} graze on the {flora:plural}. {lifeSpecial:plural}

fauna tribes
blocker flora:tall no
blocker surface:land no
desc Tribes of boisterous {animalColor} {symmetry:nPods} live in the {flora:plural}. {lifeSpecial:plural}

fauna rapidHerds
blocker surface:land no
desc Herds of fast-moving {symmetry:fewLegged} animals stampede across the land. {lifeSpecial:plural}

fauna insidePlants
blocker flora:tall no
desc Colonies of small {animalColor} creatures live inside the {flora:plural}. {lifeSpecial:plural}

fauna shapeShifters
desc One of the local animals can imitate the shape and sounds of any creature, even a sentient one. {lifeSpecial:desc}
hab -2
sci +2

fauna gasFloaters
blocker surface:land no
desc Grazing {animalColor} herbivores with {symmetry:fold} symmetry are held aloft by gas bags. {lifeSpecial:plural}

fauna waterSwarms
blocker surface:ocean no
blocker animalTexture feathered
desc Great swarms of {animalTexture} creatures inhabit the oceans. {lifeSpecial:plural}

fauna rootedWorms
blocker surface:ocean no
desc Giant {animalTexture} worms are rooted to the sea floor. {lifeSpecial:plural}

fauna deepScuttlers
blocker surface:ocean no
blocker animalTexture feathered
desc The ocean depths are home to {animalTexture} scuttling creatures. {lifeSpecial:plural}

fauna oceanWorms
blocker surface:ocean no
desc The ocean shallows are home to giant {animalColor} worms. {lifeSpecial:plural}

fauna oceanDrifters
blocker surface:ocean no
desc Sheets of organic material drift through the ocean, ensnaring their prey in a passive fashion. {lifeSpecial:plural}

fauna splashers
blocker surface:ocean no
desc Groups of {animalColor} creatures splash and frolic in the shallows. {lifeSpecial:plural}

fauna oceanGrazers
blocker surface:ocean no
blocker animalTexture feathered
desc Far below the surface, slow-moving {animalTexture} creatures graze on the ocean floor. {lifeSpecial:plural}

fauna oceanSails
blocker surface:ocean no
blocker climate cold
blocker climate veryCold
desc Large {animalColor} creatures use sails to drift across the ocean surface. {lifeSpecial:plural}

fauna oceanHunters
blocker surface:ocean no
desc Swift hunters with {symmetry:fold} symmetry stalk the sea. {lifeSpecial:plural}

fauna oceanColonies
blocker surface:ocean no
blocker animalTexture feathered
desc Large colonies of {animalTexture} {animalColor} creatures inhabit the shallows. {lifeSpecial:plural}

fauna hydrothermals
blocker surface:ocean no
blocker climate hot
blocker climate veryHot
blocker climate temperate
desc Small {animalColor} creatures cluster around hydrothermal vents. {lifeSpecial:plural}
sci +1

fauna oceanGiants
blocker surface:ocean no
desc Gigantic {animalColor} creatures live in the ocean, moving slowly by using their {symmetry:waterPropulsion}. {lifeSpecial:plural}

fauna hyperPredators
desc The planet is home to extremely dangerous apex predators, {animalTexture} {animalColor} creatures that move faster than the eye can track. {lifeSpecial:plural}
hab -2
sci +2

fauna radiovores
desc The {animalTexture} local animals are able to feed on radioactivity. {lifeSpecial:plural}
sci +2

fauna swarmers
desc Every {prime} years, billions of {animalTexture} creatures hatch all at once and begin to swarm, eating everything in their path. {lifeSpecial:plural}
hab -1

fauna massiveHerds
blocker surface:land no
desc Massive herds of {symmetry:fewLegged}, {animalColor} beasts move across the planet in time with the seasons. {lifeSpecial:plural}
hab +1
min +1

fauna invisiblePredators
desc The planet is home to a predatory creature that can turn itself invisible. {lifeSpecial:desc}
hab -1
sci +3

fauna landGiants
blocker surface:land no
desc Ancient, {symmetry:fewLegged}, {animalColor} giants move across the land. {lifeSpecial:plural}

fauna scuttlers
blocker surface:land no
desc The land is teeming with {symmetry:many}-legged {animalColor} scuttling creatures. {lifeSpecial:plural}

fauna giantWorms
blocker surface:land no
desc Giant {animalTexture} worms burrow in the {surface:ground}. {lifeSpecial:plural}
sze -1

fauna furryFliers
blocker flora:tall no
blocker surface:land no
desc Small, {animalTexture}, flying creatures zip between the {flora:plural}. {lifeSpecial:plural}

fauna sessileTentacles
desc Sessile {animalTexture} tentacles lie in wait for their victims. {lifeSpecial:plural}

fauna burrowers
blocker surface:land no
desc Small {animalTexture} burrowers make giant nests. {lifeSpecial:plural}

fauna packHunters
desc Hundreds of {animalColor} animals hunt in well-coordinated packs. {lifeSpecial:plural}

fauna giantNests
blocker surface:land no
blocker flora:tall no
desc Groups of {animalTexture} animals work together to build giant, intricate dens out of the {flora:plural}. {lifeSpecial:plural}
sze -1
sci +1

fauna psiConvincers
desc Squat, {animalTexture} creatures use their psionic abilities to convince their prey to simply lie down and accept being eaten. {lifeSpecial:plural}
hab -2
sci +3

fauna poisonDarters
desc The animals of {nameStart}{nameEnd} {nameNumber} avail themselves of poisonous darts used both for defense and hunting. {lifeSpecial:plural}
hab -1

fauna motilePlants
blocker surface:land no
desc The "animals" on {nameStart}{nameEnd} {nameNumber} are heavily modified, mobile plants. {lifeSpecial:plural}

fauna segmented
blocker surface:land no
blocker animalTexture segmented
desc Giant many-segmented {animalTexture} creatures slide along, crushing everything in their path. {lifeSpecial:plural}

fauna social
desc The local creatures live in tight-knit family units. {lifeSpecial:plural}

fauna worms
blocker surface:land no
desc The {flora:plural} are covered in tiny {animalColor} worms. {lifeSpecial:plural}

fauna prettyFliers
blocker surface:land no
desc The air is filled with {animalColor} fluttering creatures. {lifeSpecial:plural}

fauna engulfers
desc The local animals take their prey by engulfing it. {lifeSpecial:plural}

fauna leapers
blocker flora:tall no
blocker surface:land no
desc Small {animalTexture} creatures rapidly leap between the {flora:plural}. {lifeSpecial:plural}

fauna wheels
blocker surface:land no
desc The planet's creatures have developed wheeled locomotion. {lifeSpecial:plural}
sci +1

fauna ooze
desc The animal life on this planet is a kind of protoplasmic ooze capable of temporarily forming itself into myriad shapes. {lifeSpecial:desc}

fauna ngons
blocker surface:land no
desc Mobile stacks of {animalTexture} {symmetry:nGons} slowly move around. {lifeSpecial:plural}

fauna persistence
blocker surface:land no
desc Packs of {symmetry:nPedal} persistence hunters roam. {lifeSpecial:plural}

fauna flocks
desc Great flocks of {animalTexture} {animalColor} fliers gather in the skies. {lifeSpecial:plural}

fauna divers
blocker surface:ocean no
desc {animalColor:cap} fliers patrol the oceans, diving suddenly to catch their prey. {lifeSpecial:plural}

fauna ribbons
blocker surface:ocean no
desc Thin {animalColor} ribbons move through the oceans. {lifeSpecial:plural}

fauna torpedoes
blocker surface:ocean no
desc Great {animalColor} torpedo-shaped hunters streak through the seas. {lifeSpecial:plural}

fauna snailoids
blocker surface:land no
blocker surface:dry yes
desc Large {animalTexture} creatures move across the land on trails of slime. {lifeSpecial:plural}

fauna hugeCritters
desc Giant {animalTexture} creatures slowly move across the surface, each of them with an entire ecosystem on its back. {lifeSpecial:plural}

fauna symbioticBands
desc Symbiotic bands of creatures of multiple species live and hunt together. {lifeSpecial:plural}

fauna brachiators
blocker flora:tall no
desc Variously sized {animalTexture} creatures brachiate and leap between the {flora:plural}. {lifeSpecial:plural}

fauna eyeTowers
blocker flora:tall no
blocker surface:land no
desc Tall {symmetry:nPods} peek out above the {flora:plural}, keeping watch for predators. {lifeSpecial:plural}

fauna monopedes
blocker surface:land no
desc Single-legged {animalColor} creatures hop between the {flora:plural}. {lifeSpecial:plural}

fauna wheels
blocker surface:land no
desc Some creatures are shaped like wheels, using their legs to roll themselves along. {lifeSpecial:plural}

lifeSpecial radar
plural They use a biological radar to perceive the world around them.
desc The local creatures use a biological radar to perceive the world.

lifeSpecial masks
blocker fauna sessileTentacles
blocker fauna ooze
plural Their faces look like colorful masks.
desc The faces of the local creatures look like colorful masks.

lifeSpecial hibernate
plural They spend most of their lives in hibernation, punctuated by rapid bursts of activity when conditions are right.
desc The local creatures spend most of their lives in hibernation, punctuated by rapid bursts of activity when conditions are right.

lifeSpecial falseBodies
plural They build decoy bodies from special secretions.
desc The local creatures use their secretions to build decoy bodies.

lifeSpecial horns
plural Their heads have {symmetry:some} horns.
desc Many animals on {nameStart}{nameEnd} {nameNumber} have {symmetry:some} horns.

lifeSpecial cilia
plural Their bodies are covered in sensory cilia.
desc The bodies of the local fauna are covered in sensory cilia.

lifeSpecial growth
plural They keep growing as they age, leading to some massive specimens.
desc The local animals keep growing as they age, leading to some massive specimens.

lifeSpecial eyeStrip
plural A narrow strip of eyes wraps around their bodies, giving them 360-degree vision.
desc A narrow strip of eyes wraps around the bodies of most local animals, giving them 360-degree vision.

lifeSpecial explode
plural As a last-ditch defense mechanism, they will literally explode.
desc Some of the local creatures will literally explode as a last-ditch defense mechanism.
sci +1

lifeSpecial hollowSymbiotes
plural Symbiotic creatures live on their skin, keeping away pests and attackers.
desc Symbiotic creatures live on the skin of many of the local animals, keeping away pests and attackers.
sci +1

lifeSpecial buddingOff
plural They reproduce by budding off.
desc The local lifeforms reproduce by budding off.

lifeSpecial sporeRepro
blocker surface:land no
plural They reproduce by sporulation.
desc The local lifeforms reproduce by sporulation.
hazeC [0.3, 0.3, 0.3]

lifeSpecial eatenByOffspring
plural Their offspring eat their way out of them.
desc The offspring of the animals on the planet simply eat their way out of their parents.

lifeSpecial parasiticalReproduction
plural They implant their eggs into the living tissues of animals they catch for this purpose.
desc Many of the local animals implant their eggs into the tissues of other living animals.

lifeSpecial splitting
plural They reproduce by splitting along their seams, resulting in {symmetry:some} equally-sized offspring.
desc The creatures on this planet reproduce by splitting along their seams, resulting in {symmetry:some} equally-sized  offspring.

lifeSpecial temporaryEyes
plural They have many eyes on stalks, which frequently drop off and regrow.
desc The eyes of the local animals frequently drop off and regrow.

lifeSpecial psiShock
plural When threatened, they use psionic powers to stun their potential attackers.
desc The local lifeforms have psionic powers they use to stun potential threats.
sci +2

lifeSpecial humming
plural They emit a constant humming sound.
desc There is a constant humming sound.

lifeSpecial psiNightmares
plural Their psionic abilities cause constant nightmares.
desc The psionic abilities of the local lifeforms cause constant nightmares.
hab -4

lifeSpecial psiEuphoria
plural Their psionic abilities cause a dangerous feeling of constant euphoria.
desc The psionic abilities of the local lifeforms cause a dangerous feeling of constant euphoria.
hab -1
sci +1

lifeSpecial braying
plural They make loud braying sounds.
desc One of the local creatures makes loud braying sounds.

lifeSpecial hissing
plural They make quiet hissing sounds.
desc There are quiet hissing sounds coming from somewhere.

lifeSpecial chittering
plural They use a chittering sound to communicate.
desc Chittering sounds occasionally erupt from groups of local animals.

lifeSpecial soundStun
plural They use extremely loud sounds to stun their victims.
desc One of the local predators uses extremely loud sounds to stun its prey.
hab -1

lifeSpecial electricShocks
plural They can produce powerful electric shocks to defend themselves.
desc Some of the local animals can produce powerful electric shocks to defend themselves.

lifeSpecial bioLaser
plural They are able to emit laser-like blasts of light to hurt and disorient their enemies.
desc Some of the wildlife can emit laser-like blasts of light to hurt and disorient their enemies.
hab -1
sci +2

lifeSpecial nests
blocker surface:land no
blocker fauna giantNests
blocker fauna burrowers
plural They build nests in the {flora:plural}.
desc There are many nests in the {flora:plural}.

lifeSpecial foam
blocker surface:ocean no
blocker climate cold
blocker climate veryCold
plural {lifeSpecial:desc}
desc A white foam of unknown origin covers much of the ocean.
oceanC [0.52, 0.5, 0.5]

lifeSpecial climbers
blocker flora:tall no
blocker fauna leapers
plural They are often seen climbing in the {flora:plural}.
plural Many animals can be found climbing in the {flora:plural}.

lifeSpecial fungalZombies
blocker surface:land no
plural {lifeSpecial:desc}
desc The local fungus takes over the motor functions of deceased animals, using their decaying bodies to spread and feed itself.
hab -1
sci +2

lifeSpecial bigEyed
plural They each have a single, massive eye.
desc Most of the creatures on {nameStart}{nameEnd} {nameNumber} have a single, massive eye.

lifeSpecial manyEyed
plural Their eyes are clustered at the end of long tentacles.
desc The eyes of the local animals are clustered at the end of long tentacles.

lifeSpecial treeEggs
blocker flora:tall no
blocker surface:land no
plural They lay millions of tiny eggs in the {flora:plural}.
desc The {flora:plural} are covered in millions of tiny eggs.

lifeSpecial pharmaceuticals
blocker surface:land no
plural {lifeSpecial:desc}
desc Some of the local plants have interesting pharmaceutical properties.
hab +1
sci +3

lifeSpecial toxic
plural {lifeSpecial:desc}
desc The biochemistry of the local life is toxic.
hab -2

lifeSpecial clingons
plural They have a tendency to cling on to the hulls of visiting spaceships.
desc The local wildlife has a tendency to cling on to the hulls of visiting spaceships.

lifeSpecial rapidMutation
plural {lifeSpecial:desc}
desc Life on the planet mutates and evolves at a rapid pace.
sci +2

lifeSpecial fires
blocker surface:land no
blocker surface tundra
blocker surface icyDesert
blocker surface desert
blocker surface rocks
blocker surface jaggedRocks
blocker surface muddy
plural {lifeSpecial:desc}
desc There are constant fires filling the skies with smoke.
hab -1
sze -1
hazeC [0.35, 0.35, 0.3]

lifeSpecial selfImmolation
plural {lifeSpecial:desc}
desc The local {flora:plural} periodically set themselves on fire to spread their seeds.
hab -1
sze -1

lifeSpecial pollen
blocker surface:land no
blocker special thinAir
plural {lifeSpecial:desc}
desc The air is filled with a thick haze of pollen.
hab -1
hazeC [0.4, 0.4, 0.1]

lifeSpecial spores
blocker surface:land no
blocker special thinAir
plural {lifeSpecial:desc}
desc The air is filled with a thick haze of spores.
hab -1
hazeC [0.2, 0.35, 0.22]

lifeSpecial hairs
blocker surface:land no
blocker special thinAir
plural {lifeSpecial:desc}
desc The air is filled with a thick haze of hairs.
hab -1
hazeC [0.3, 0.12, 0.12]

lifeSpecial symbiosis
plural {lifeSpecial:desc}
desc The local life is enmeshed in a complex symbiotic network.
sci +2

lifeSpecial morphs
plural {lifeSpecial:desc}
desc Most of the local animals are different morphs of the same highly versatile species.
sci +1

lifeSpecial superorganism
plural {lifeSpecial:desc}
desc The lifeforms on this planet appear to be part of a kind of superorganism.
sci +2

lifeSpecial hallucinogens
plural {lifeSpecial:desc}
desc The air is filled with organic compounds that induce hallucinations.
hab -1
hazeC [0.3, 0.1, 0.3]

lifeSpecial songs
plural They produce eerie but beautiful songs.
desc The local creatures produce eerie but beautiful songs.
hab +1

lifeSpecial dissolvingFungus
blocker surface:land no
plural {lifeSpecial:desc}
desc The local fungus dissolves everything in its path, even spacecraft hulls.
hab -3
sze -3
sci +1

lifeSpecial immortal
plural They are functionally immortal.
desc Most of the animal life is functionally immortal, dying only when eaten or otherwise killed.
sci +1

lifeSpecial echolocating
blocker surface:land no
plural They use echolocation to find their way around, filling the air with chirps and trills.
desc Most of the local animals use echolocation to find their way around, filling the air with chirps and trills.

lifeSpecial claws
plural They have large claws.
desc Many of the local animals have large claws.

lifeSpecial fangs
plural They have large fangs.
desc Many of the local animals have large fangs.

lifeSpecial toolUse
plural They are capable of using simple tools.
desc Some of the species on the planet have developed simple tool use.
sci +1

lifeSpecial herders
plural They keep herds of smaller creatures for sustenance.
desc A few of the local species have taken to keeping herds of other animals for sustenance.

lifeSpecial farmers
blocker surface:land no
plural They tend to patches of {flora:plural} as a food source.
desc There are patches of {flora:plural} tended to by local lifeforms as a food source.

lifeSpecial multiHead
plural They have multiple heads.
desc Many of the animals have multiple heads.

lifeSpecial lightComms
plural They use flashes of colored light to communicate.
desc There are constant flashes of colored light used by the local wildlife to communicate.

lifeSpecial falseHead
plural They have a large false head to distract attackers.
desc Many of the animals have false heads used to distract attackers.

lifeSpecial juvieHunt
plural The adults hunt their own juveniles for food.
desc Many of the animals on {nameStart}{nameEnd} {nameNumber} hunt their own juveniles for food.

lifeSpecial bigEgg
plural They lay large eggs and guard them carefully.
desc The animals on this planet tend to lay single large eggs, and guard them carefully.

lifeSpecial noxiousFluid
plural When threatened, they release a noxious fluid.
desc Some of the animals release a noxious fluid when threatened.

lifeSpecial noxiousGas
plural When threatened, they release a noxious gas.
desc Some of the animals release a noxious gas when threatened.

lifeSpecial slimeDefense
plural They exude a sticky slime when threatened.
desc Some of the animals release a sticky slime when threatened.

lifeSpecial slimeOffense
plural They can exude a rapidly-hardening slime to trap their prey.
desc Many of the local creatures can exude a rapidly-hardening slime to trap their prey.

lifeSpecial secretionExo
plural They construct exoskeletons from special, rapidly hardening secretions.
desc Many of the animals construct exoskeletons from special, rapidly hardening secretions.

lifeSpecial shellCarvers
plural They carve perfectly fitting shells out of the local {rockColor} rocks.
desc Many of the creatures on {nameStart}{nameEnd} {nameNumber} carve shells for themselves out of the local {rockColor} rocks.

lifeSpecial adultNoEat
plural Their adult stage does not eat, and only mates and then dies.
desc Adults of most species on the planet do not eat, living only to mate and then die.

lifeSpecial scentHunt
plural They track down their prey by scent.
desc The local predators track down their prey by scent.

lifeSpecial psiHunt
plural They track down their prey using their psionic powers.
desc The local predators track down their prey using their psionic powers.
hab -1
sci +1

lifeSpecial lures
plural They use glowing lures to find prey.
desc The local predators use glowing lures to find prey.

lifeSpecial hibernate
plural They can survive for thousands of years in a state of hibernation.
desc The planet's creatures can enter a state of hibernation that lets them survive for thousands of years.
sci + 1

lifeSpecial sessiles
blocker fauna motilePlants
plural {lifeSpecial:desc}
desc The local plants are actually the sessile phase of the animals' lifecycle.

lifeSpecial skyRibbons
blocker fauna motilePlants
plural {lifeSpecial:desc}
desc Gossamer-thin sheets of plant matter float in the sky.

lifeSpecial deeper
blocker surface:land yes
plural As they age, they descend to deeper depths.
desc As the local animals age, they descend to deeper ocean depths.

lifeSpecial exoReuse
plural Other creatures have specially evolved to make use of their shed exoskeletons.
desc As some creatures shed their exoskeletons, others move in to make use of them.

lifeSpecial mayfly
plural They only live for a day.
desc The animals on this planet live only for a day.

lifeSpecial breathing
plural They have to keep moving to be able to breathe.
desc This planet's creatures need to keep moving to be able to breathe.

lifeSpecial midday
plural They move in a sudden burst at mid-day and then fall silent.
desc Life moves in a sudden burst at mid-day and then falls silent.

lifeSpecial slow
blocker fauna hyperPredators
plural They move with utter slowness.
desc Life moves with utter slowness.

lifeSpecial mutableBody
plural They have a highly mutable body plan, differing in size as well as number and arrangement of limbs.
desc Each species has a highly mutable body plan, differing in size as well as number and arrangement of limbs.

lifeSpecial siblingPair
plural They live in sibling pairs that hatch together.
desc The creatures on this planet hatch in sibling pairs that spend their lives together.

lifeSpecial trapWeaver
plural They weave elaborate mechanical traps.
desc Predators weave elaborate mechanical traps.

lifeSpecial sacs
plural They can inflate large colorful sacs as a threat display.
desc Some creatures can inflate large colorful sacs as a threat display.

lifeSpecial buryYoung
plural They bury unwanted young as a food reserve.
desc Some animals bury unwanted young as a food reserve.

lifeSpecial freezeSolid
blocker climate temperate
blocker climate hot
blocker climate veryHot
plural When it gets too cold, they freeze solid with no ill effects.
desc When it gets too cold, the local animals can freeze solid with no ill effects.

lifeSpecial dryOut
blocker surface:dry no
plural When water is scarce, they can dry out completely with no ill effects.
desc When water is scarce, the local animals can dry out completely with no ill effects.

lifeSpecial bpWearsOut
plural They have multiple replacement {bodyPart}.
desc Most species have multiple replacement {bodyPart}.

lifeSpecial bpHardens
plural After death, their {bodyPart} harden and remain.
desc After death, the {bodyPart} of the local creatures harden and remain.

lifeSpecial bpParasites
plural Their {bodyPart} are teeming with parasites.
desc The {bodyPart} of the local creatures teem with parasites.

lifeSpecial bpLoseS
plural They lose their {bodyPart} in adulthood.
desc The local animals lose their {bodyPart} in adulthood.

lifeSpecial bpMatingDisplay
plural They use their {bodyPart} in mating displays.
desc Some animals use their {bodyPart} in mating displays.

lifeSpecial bpDevLater
plural They only develop their {bodyPart} later in life.
desc The animals of this planet only develop their {bodyPart} later in life.

lifeSpecial mating
plural Unfortunately, they regard humans as suitable partners for mating.
desc Unfortunately, some animals on this planet regard humans as desirable partners for mating.
hab -1

lifeSpecial firehawk
blocker surface:land no
plural They start fires to flush out prey.
desc The local predators start fires to flush out prey.
hab -1

lifeSpecial bpMeasure
plural They compare {bodyPart} to establish dominance.
desc Many local animals compare {bodyPart} to establish dominance.

lifeSpecial liquefy
plural They liquefy instantly when they die.
desc The local animals liquefy instantly when they die.

lifeSpecial curious
plural They are very curious and friendly.
desc The local creatures are very curious and friendly.

lifeSpecial hotInternals
plural Their body temperature is extremely high.
desc The body temperature of the animals on this planet is extremely high.

lifeSpecial angels
plural They only move when you're not looking.
desc The animals on this planet only move when no one is looking.

lifeSpecial geneRecode
plural They can re-code their genes.
desc The life on this planet can re-code its genes.

lifeSpecial noSensory
plural They have no visible sensory organs.
desc The lifeforms on this planet have no visible sensory organs.

lifeSpecials hostage
plural They hold animals of certain other species hostage in exchange for food.
desc A creature on this planet holds animals of certain other species hostage in exchange for food.

lifeSpecial colony
plural They are colony organisms made from thousands of tiny worms.
desc The creatures on this planet are colony organisms made from thousands of tiny worms.

lifeSpecial nothingSpecial
plural  
desc  

bodyPart heads
bodyPart eyes
bodyPart stomachs
bodyPart lungs
bodyPart tails
bodyPart bones
bodyPart teeth
bodyPart brains
bodyPart tongues
bodyPart ears
bodyPart tentacles
bodyPart antennae
bodyPart feelers
bodyPart throat sacs
bodyPart proboscides
bodyPart horns

rockType jagged
rockType crumbling
rockType crystalline
rockType irregular
rockType sharp
rockType smooth
rockType hexagonal
rockType marbled

famousPerson Emperor Vitus III
famousPerson Empress Claudia
famousPerson Emperor Alex II
famousPerson Emperor Zero
famousPerson Emperor Tesselling
famousPerson Empress Ixa
famousPerson Pirate King Vulpis
famousPerson Captain Church
famousPerson Captain Nakamura
famousPerson Exarch Okkos
famousPerson Pirate Queen Sue
famousPerson Lurpak the Despoiler
famousPerson Queen Freya
famousPerson Admiral Barnes
famousPerson Patriarch Ulnax
famousPerson Matriarch Eleven
famousPerson Empress Neon Fourteen
famousPerson Elector Axolotl
famousPerson Enumerator Vix
famousPerson Ghost Hunter Zaa
famousPerson King Teodor XIV
famousPerson Queen Xatarina IV
famousPerson Professor Xi

famousShip ISS Shadow
famousShip ISS Snake
famousShip ISS Hexagon
famousShip SS Ferret
famousShip SS Farsight
famousShip SS Yin
famousShip SS Yang
famousShip ISS Observer
famousShip SS Starflare
famousShip SS Oberon
famousShip ISS Undertaker
famousShip SS Wolverine
famousShip ISS Tesseract
famousShip SS Dolphin
famousShip SS Arrow
famousShip SS Alpine
famousShip SS Vixen
famousShip SS Naiad
`;

export default planetStruct;
