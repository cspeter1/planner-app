import { IEvent } from "./Days"
import { getMonthName, IMonth } from "./Months"
import { isLeapYear } from "./Years"

export interface IHoliday {
  date: IMonth
  event: IEvent
  isWordBreak: boolean
}

export const fixHolidays: ReadonlyArray<IHoliday> = [
	{
		date: {
			month: 'Január', days: 1
		}, event: {
			name:'Újév', icon: 'cheers'
		}, isWordBreak: true
	},
	{
		date: {
			month: 'Január', days: 22
		}, event: {
			name: 'Magyar kultúra napja'
		}, isWordBreak: false
	},
	{
		date: {
			month: 'Február', days: 1
		}, event: {
			name: 'A köztársaság napja'
		}, isWordBreak: false
	},
	{
		date: {
			month: 'Február', days: 25
		}, event: {
			name: 'A kommunista diktatúrák áldozatainak emléknapja'
		}, isWordBreak: false
	},
	{
		date: {
			month: 'Március', days: 15
		}, event: {
			name: 'Az 1848-as forradalom ünnepe'
		}, isWordBreak: true
	},
	{
		date: {
			month: 'Április', days: 16
		}, event: {
			name: 'A holokauszt áldozatainak emléknapja'
		}, isWordBreak: false
	},
	{
		date: {
			month: 'Május', days: 1
		}, event: {
			name: 'A munka ünnepe'
		}, isWordBreak: true
	},
	{
		date: {
			month: 'Június', days: 4
		}, event: {
			name: 'A nemzeti összetartozás napja'
		}, isWordBreak: false
	},
	{
		date: {
			month: 'Június', days: 16
		}, event: {
			name: 'Nagy Imre emléknap'
		}, isWordBreak: false
	},
	{
		date: {
			month: 'Június', days: 19
		}, event: {
			name: 'A független Magyarország napja'
		}, isWordBreak: false
	},
	{
		date: {
			month: 'Július', days: 22
		}, event: {
			name: 'A nándorfehérvári diadal emléknapja'
		}, isWordBreak: false
	},
	{
		date: {
			month: 'Augusztus', days: 20
		}, event: {
			name: 'Az államalapítás ünnepe'
		}, isWordBreak: true
	},
	{
		date: {
			month: 'Augusztus', days: 23
		}, event: {
			name: 'A totalitárius diktatúrák áldozatainak európai emléknapja'
		}, isWordBreak: false
	},
	{
		date: {
			month: 'Október', days: 6
		}, event: {
			name: 'Az aradi vértanúk emléknapja'
		}, isWordBreak: false
	},
	{
		date: {
			month: 'Október', days: 23
		}, event: {
			name: 'Az 1956-os forradalom ünnepe'
		}, isWordBreak: true
	},
	{
		date: {
			month: 'Október', days: 31
		}, event: {
			name: 'Halloween', icon: 'ghost'
		}, isWordBreak: false
	},
	{
		date: {
			month: 'November', days: 1
		}, event: {
			name: 'Mindenszentek'
		}, isWordBreak: true
	},
	{
		date: {
			month: 'November', days: 2
		}, event: {
			name: 'Halottak napja'
		}, isWordBreak: false
	},
	{
		date: {
			month: 'November', days: 4
		}, event: {
			name: 'Az emlékezés napja'
		}, isWordBreak: false
	},
	{
		date: {
			month: 'November', days: 13
		}, event: {
			name: 'A magyar nyelv napja'
		}, isWordBreak: false
	},
	{
		date: {
			month: 'November', days: 25
		}, event: {
			name: 'Gulag-emléknap'
		}, isWordBreak: false
	},
	{
		date: {
			month: 'December', days: 6
		}, event: {
			name: 'Mikulás', icon: 'sleigh'
		}, isWordBreak: false
	},
	{
		date: {
			month: 'December', days: 25
		}, event: {
			name: 'Karácsony', icon: 'gift'
		}, isWordBreak: true
	},
	{
		date: {
			month: 'December', days: 26
		}, event: {
			name: 'Karácsony', icon: 'gift'
		}, isWordBreak: true
	},
	{
		date: {
			month: 'December', days: 31
		}, event: {
			name: 'Szilveszter', icon: 'cheers'
		}, isWordBreak: false
	},

	/* Világnapok és nemzetközi akciónapok */
	{ date: { month: 'Január', days: 1 }, event: { name: 'A béke világnapja' }, isWordBreak: false },
	{ date: { month: 'Január', days: 2 }, event: { name: 'Az introvertáltak világnapja' }, isWordBreak: false },
	{ date: { month: 'Január', days: 15 }, event: { name: 'A Wikipédia napja' }, isWordBreak: false },
	{ date: { month: 'Január', days: 17 }, event: { name: 'Az olasz konyha napja' }, isWordBreak: false },
	{ date: { month: 'Január', days: 26 }, event: { name: 'Nemzetközi vámnap' }, isWordBreak: false },
	{ date: { month: 'Január', days: 27 }, event: { name: 'A holokauszt nemzetközi világnapja' }, isWordBreak: false },
	{ date: { month: 'Január', days: 28 }, event: { name: 'Az adatvédelem nemzetközi napja' }, isWordBreak: false },
	{ date: { month: 'Január', days: 30 }, event: { name: 'A lepra elleni harc világnapja' }, isWordBreak: false },

	{ date: { month: 'Február', days: 2 }, event: { name: 'A szerzetesek világnapja' }, isWordBreak: false },
	{ date: { month: 'Február', days: 2 }, event: { name: 'A vizes élőhelyek napja' }, isWordBreak: false },
	{ date: { month: 'Február', days: 3 }, event: { name: 'A rejtvényfejtők világnapja' }, isWordBreak: false },
	{ date: { month: 'Február', days: 4 }, event: { name: 'Rákellenes világnap' }, isWordBreak: false },
	{ date: { month: 'Február', days: 11 }, event: { name: 'A betegek világnapja' }, isWordBreak: false },
	{ date: { month: 'Február', days: 14 }, event: { name: 'Az epilepszia világnapja' }, isWordBreak: false },
	{ date: { month: 'Február', days: 14 }, event: { name: 'Bálint-nap' }, isWordBreak: false },
	{ date: { month: 'Február', days: 20 }, event: { name: '2008. február 20 óta a pipázás világnapja' }, isWordBreak: false },
	{ date: { month: 'Február', days: 21 }, event: { name: 'Az anyanyelv nemzetközi napja' }, isWordBreak: false },
	{ date: { month: 'Február', days: 21 }, event: { name: 'Az idegenvezetők világnapja' }, isWordBreak: false },
	{ date: { month: 'Február', days: 22 }, event: { name: 'A bűncselekmények áldozatainak napja' }, isWordBreak: false },

	{ date: { month: 'Március', days: 1 }, event: { name: 'A polgári védelem világnapja' }, isWordBreak: false },
	{ date: { month: 'Március', days: 1 }, event: { name: 'Az atomfegyvermentes és független Csendes-óceáni térség napja' }, isWordBreak: false },
	{ date: { month: 'Március', days: 2 }, event: { name: 'A faji megkülönböztetés elleni küzdelem nemzetközi napja (röviden: antirasszista világnap)' }, isWordBreak: false },
	{ date: { month: 'Március', days: 2 }, event: { name: 'Az ima világnapja' }, isWordBreak: false },
	{ date: { month: 'Március', days: 3 }, event: { name: 'A békéért küzdő írók világnapja' }, isWordBreak: false },
	{ date: { month: 'Március', days: 3 }, event: { name: 'A vadon élő állatok világnapja (Vadvédelmi világnap)' }, isWordBreak: false },
	{ date: { month: 'Március', days: 5 }, event: { name: 'A lemezlovasok, DJ-k világnapja' }, isWordBreak: false },
	{ date: { month: 'Március', days: 8 }, event: { name: 'Nemzetközi nőnap' }, isWordBreak: false },
	{ date: { month: 'Március', days: 14 }, event: { name: 'Nemzetközi π-nap' }, isWordBreak: false },
	{ date: { month: 'Március', days: 14 }, event: { name: 'Gátellenes világnap' }, isWordBreak: false },
	{ date: { month: 'Március', days: 15 }, event: { name: 'Fogyasztóvédelmi világnap' }, isWordBreak: false },
	{ date: { month: 'Március', days: 15 }, event: { name: 'Nemzetközi fókavadászat-ellenes nap' }, isWordBreak: false },
	{ date: { month: 'Március', days: 20 }, event: { name: 'A boldogság világnapja' }, isWordBreak: false },
	{ date: { month: 'Március', days: 20 }, event: { name: 'A verebek világnapja' }, isWordBreak: false },
	{ date: { month: 'Március', days: 21 }, event: { name: 'A költészet világnapja' }, isWordBreak: false },
	{ date: { month: 'Március', days: 21 }, event: { name: 'A faji megkülönböztetés (apartheid) elleni küzdelem napja' }, isWordBreak: false },
	{ date: { month: 'Március', days: 21 }, event: { name: 'A planetáris tudat világnapja' }, isWordBreak: false },
	{ date: { month: 'Március', days: 21 }, event: { name: 'A Down-szindróma-világnapja' }, isWordBreak: false },
	{ date: { month: 'Március', days: 21 }, event: { name: 'Az erdők világnapja' }, isWordBreak: false },
	{ date: { month: 'Március', days: 22 }, event: { name: 'A víz világnapja' }, isWordBreak: false },
	{ date: { month: 'Március', days: 23 }, event: { name: 'Meteorológiai világnap' }, isWordBreak: false },
	{ date: { month: 'Március', days: 24 }, event: { name: 'A tuberkulózis (tbc) elleni küzdelem világnapja' }, isWordBreak: false },
	{ date: { month: 'Március', days: 25 }, event: { name: 'A magzatgyermek napja' }, isWordBreak: false },
	{ date: { month: 'Március', days: 26 }, event: { name: 'A dokumentumszabadság világnapja' }, isWordBreak: false },
	{ date: { month: 'Március', days: 26 }, event: { name: 'Purple Day - Lila Nap' }, isWordBreak: false },
	{ date: { month: 'Március', days: 27 }, event: { name: 'Színházi világnap' }, isWordBreak: false },

	{ date: { month: 'Április', days: 2 }, event: { name: 'Szakszervezeti akciónap' }, isWordBreak: false },
	{ date: { month: 'Április', days: 2 }, event: { name: 'Nemzetközi Gyerekkönyvnap' }, isWordBreak: false },
	{ date: { month: 'Április', days: 2 }, event: { name: 'Az autizmus világnapja' }, isWordBreak: false },
	{ date: { month: 'Április', days: 7 }, event: { name: 'Az egészség világnapja' }, isWordBreak: false },
	{ date: { month: 'Április', days: 8 }, event: { name: 'A roma kultúra világnapja' }, isWordBreak: false },
	{ date: { month: 'Április', days: 8 }, event: { name: 'Az emberszeretet világnapja' }, isWordBreak: false },
	{ date: { month: 'Április', days: 11 }, event: { name: 'A Parkinson-kór világnapja' }, isWordBreak: false },
	{ date: { month: 'Április', days: 12 }, event: { name: 'Az űrhajózás világnapja' }, isWordBreak: false },
	{ date: { month: 'Április', days: 14 }, event: { name: 'A könyvtárosok világnapja' }, isWordBreak: false },
	{ date: { month: 'Április', days: 15 }, event: { name: 'A művészet világnapja' }, isWordBreak: false },
	{ date: { month: 'Április', days: 18 }, event: { name: 'Műemlékvédelmi világnap' }, isWordBreak: false },
	{ date: { month: 'Április', days: 18 }, event: { name: 'Rádióamatőr világnap' }, isWordBreak: false },
	{ date: { month: 'Április', days: 22 }, event: { name: 'A Föld napja' }, isWordBreak: false },
	{ date: { month: 'Április', days: 22 }, event: { name: 'Holokauszt világnapja' }, isWordBreak: false },
	{ date: { month: 'Április', days: 22 }, event: { name: 'Az ápolók világnapja' }, isWordBreak: false },
	{ date: { month: 'Április', days: 23 }, event: { name: 'A könyv és a szerzői jog világnapja' }, isWordBreak: false },
	{ date: { month: 'Április', days: 24 }, event: { name: 'A kísérleti állatok világnapja' }, isWordBreak: false },
	{ date: { month: 'Április', days: 26 }, event: { name: 'A szellemi tulajdon világnapja (World Intellectual Property Day)' }, isWordBreak: false },
	{ date: { month: 'Április', days: 27 }, event: { name: 'A vakvezető kutyák világnapja' }, isWordBreak: false },
	{ date: { month: 'Április', days: 28 }, event: { name: 'A Halott és megrokkant dolgozók nemzetközi emléknapja' }, isWordBreak: false },
	{ date: { month: 'Április', days: 28 }, event: { name: 'A testvérvárosok világnapja' }, isWordBreak: false },
	{ date: { month: 'Április', days: 29 }, event: { name: 'Nemzetközi táncnap' }, isWordBreak: false },

	{ date: { month: 'Május', days: 1 }, event: { name: 'A munkavállalók szolidaritási napja' }, isWordBreak: false },
	{ date: { month: 'Május', days: 3 }, event: { name: 'A nemzetközi sajtószabadság napja' }, isWordBreak: false },
	{ date: { month: 'Május', days: 4 }, event: { name: 'A tűzoltók napja' }, isWordBreak: false },
	{ date: { month: 'Május', days: 5 }, event: { name: 'Európa-nap' }, isWordBreak: false },
	{ date: { month: 'Május', days: 8 }, event: { name: 'A Nemzetközi Vöröskereszt és Vörös Félhold napja' }, isWordBreak: false },
	{ date: { month: 'Május', days: 10 }, event: { name: 'A madarak és fák napja' }, isWordBreak: false },
	{ date: { month: 'Május', days: 12 }, event: { name: 'Az ápolónők nemzetközi napja' }, isWordBreak: false },
	{ date: { month: 'Május', days: 15 }, event: { name: 'A család nemzetközi napja' }, isWordBreak: false },
	{ date: { month: 'Május', days: 15 }, event: { name: 'Nemzetközi klímaváltozási akciónap' }, isWordBreak: false },
	{ date: { month: 'Május', days: 16 }, event: { name: 'A fény világnapja' }, isWordBreak: false },
	{ date: { month: 'Május', days: 17 }, event: { name: 'Az információs társadalom világnapja' }, isWordBreak: false },
	{ date: { month: 'Május', days: 17 }, event: { name: 'A távközlés világnapja' }, isWordBreak: false },
	{ date: { month: 'Május', days: 17 }, event: { name: 'Homofóbia, transzfóbia és bifóbia elleni világnap' }, isWordBreak: false },
	{ date: { month: 'Május', days: 18 }, event: { name: 'A múzeumok nemzetközi napja' }, isWordBreak: false },
	{ date: { month: 'Május', days: 18 }, event: { name: 'Az internet világnapja' }, isWordBreak: false },
	{ date: { month: 'Május', days: 19 }, event: { name: 'A tömegtájékoztatás világnapja' }, isWordBreak: false },
	{ date: { month: 'Május', days: 20 }, event: { name: 'A méhek világnapja' }, isWordBreak: false },
	{ date: { month: 'Május', days: 22 }, event: { name: 'A biológiai sokféleség nemzetközi napja' }, isWordBreak: false },
	{ date: { month: 'Május', days: 22 }, event: { name: 'Kihívás Napja (Challenge Day)' }, isWordBreak: false },
	{ date: { month: 'Május', days: 22 }, event: { name: 'Elhízás elleni európai nap' }, isWordBreak: false },
	{ date: { month: 'Május', days: 24 }, event: { name: 'Az európai nemzeti parkok napja' }, isWordBreak: false },
	{ date: { month: 'Május', days: 25 }, event: { name: 'Afrika napja' }, isWordBreak: false },
	{ date: { month: 'Május', days: 25 }, event: { name: '„törülközőnap” Douglas Adams emlékére' }, isWordBreak: false },
	{ date: { month: 'Május', days: 25 }, event: { name: 'Az eltűnt gyerekek világnapja' }, isWordBreak: false },
	{ date: { month: 'Május', days: 31 }, event: { name: 'Dohányzásmentes világnap' }, isWordBreak: false },

	{ date: { month: 'Június', days: 1 }, event: { name: 'A szülők világnapja' }, isWordBreak: false },
	{ date: { month: 'Június', days: 2 }, event: { name: 'A melegek világnapja' }, isWordBreak: false },
	{ date: { month: 'Június', days: 4 }, event: { name: 'Az erőszak gyermekáldozatainak világnapja' }, isWordBreak: false },
	{ date: { month: 'Június', days: 5 }, event: { name: 'Környezetvédelmi világnap' }, isWordBreak: false },
	{ date: { month: 'Június', days: 8 }, event: { name: 'Az óceánok világnapja' }, isWordBreak: false },
	{ date: { month: 'Június', days: 10 }, event: { name: 'A kézművesség világnapja' }, isWordBreak: false },
	{ date: { month: 'Június', days: 12 }, event: { name: 'A gyermekmunka elleni világnap' }, isWordBreak: false },
	{ date: { month: 'Június', days: 13 }, event: { name: 'A magyar feltalálók napja' }, isWordBreak: false },
	{ date: { month: 'Június', days: 14 }, event: { name: 'A véradók világnapja' }, isWordBreak: false },
	{ date: { month: 'Június', days: 16 }, event: { name: 'Az afrikai gyermekek világnapja' }, isWordBreak: false },
	{ date: { month: 'Június', days: 17 }, event: { name: 'A sivatagosodás és aszály elleni küzdelem világnapja' }, isWordBreak: false },
	{ date: { month: 'Június', days: 20 }, event: { name: 'A menekültek világnapja' }, isWordBreak: false },
	{ date: { month: 'Június', days: 20 }, event: { name: 'Társállatok világnapja' }, isWordBreak: false },
	{ date: { month: 'Június', days: 21 }, event: { name: 'Menj gördeszkázni nap (Go Skateboarding Day)' }, isWordBreak: false },
	{ date: { month: 'Június', days: 23 }, event: { name: 'Olimpiai világnap' }, isWordBreak: false },
	{ date: { month: 'Június', days: 23 }, event: { name: 'Spamellenes világnap' }, isWordBreak: false },
	{ date: { month: 'Június', days: 23 }, event: { name: 'Nemzetközi SOS Gyermekfalvak napja' }, isWordBreak: false },
	{ date: { month: 'Június', days: 23 }, event: { name: 'A közalkalmazottak napja' }, isWordBreak: false },
	{ date: { month: 'Június', days: 25 }, event: { name: 'Vitiligo világnapja' }, isWordBreak: false },
	{ date: { month: 'Június', days: 26 }, event: { name: 'Kábítószer-ellenes világnap' }, isWordBreak: false },
	{ date: { month: 'Június', days: 26 }, event: { name: 'A kínzás áldozatai támogatásának világnapja' }, isWordBreak: false },
	{ date: { month: 'Június', days: 27 }, event: { name: 'A cukorbetegek világnapja.' }, isWordBreak: false },
	{ date: { month: 'Június', days: 29 }, event: { name: 'Nemzetközi Duna-nap' }, isWordBreak: false },

	{ date: { month: 'Július', days: 1 }, event: { name: 'A reggae-zene világnapja' }, isWordBreak: false },
	{ date: { month: 'Július', days: 2 }, event: { name: 'A sportújságírók napja' }, isWordBreak: false },
	{ date: { month: 'Július', days: 3 }, event: { name: 'Zacskómentes világnap' }, isWordBreak: false },
	{ date: { month: 'Július', days: 11 }, event: { name: 'Népesedési világnap' }, isWordBreak: false },
	{ date: { month: 'Július', days: 14 }, event: { name: 'A cápatudatosság napja' }, isWordBreak: false },
	{ date: { month: 'Július', days: 20 }, event: { name: 'A Hold napja' }, isWordBreak: false },
	{ date: { month: 'Július', days: 28 }, event: { name: 'A hepatitisz világnapja' }, isWordBreak: false },

	{ date: { month: 'Augusztus', days: 1 }, event: { name: 'Az anyatejes táplálás világnapja' }, isWordBreak: false },
	{ date: { month: 'Augusztus', days: 6 }, event: { name: 'A nukleáris fegyverek betiltásáért folyó harc világnapja' }, isWordBreak: false },
	{ date: { month: 'Augusztus', days: 9 }, event: { name: 'A világ őslakosainak nemzetközi napja' }, isWordBreak: false },
	{ date: { month: 'Augusztus', days: 10 }, event: { name: 'A biodízel nemzetközi napja' }, isWordBreak: false },
	{ date: { month: 'Augusztus', days: 12 }, event: { name: 'A fiatalok világnapja' }, isWordBreak: false },
	{ date: { month: 'Augusztus', days: 13 }, event: { name: 'A balkezesek világnapja' }, isWordBreak: false },
	{ date: { month: 'Augusztus', days: 15 }, event: { name: 'A repülők napja' }, isWordBreak: false },
	{ date: { month: 'Augusztus', days: 16 }, event: { name: 'A hontalan állatok világnapja' }, isWordBreak: false },
	{ date: { month: 'Augusztus', days: 29 }, event: { name: 'A magyar fotográfia napja' }, isWordBreak: false },
	{ date: { month: 'Augusztus', days: 30 }, event: { name: 'Az eltűntek világnapja' }, isWordBreak: false },

	{ date: { month: 'Szeptember', days: 1 }, event: { name: 'A második világháború emléknapja' }, isWordBreak: false },
	{ date: { month: 'Szeptember', days: 8 }, event: { name: 'Az írástudatlanság elleni küzdelem nemzetközi napja' }, isWordBreak: false },
	{ date: { month: 'Szeptember', days: 8 }, event: { name: 'A fizioterápia világnapja' }, isWordBreak: false },
	{ date: { month: 'Szeptember', days: 10 }, event: { name: 'Az öngyilkosság megelőzésének világnapja' }, isWordBreak: false },
	{ date: { month: 'Szeptember', days: 15 }, event: { name: 'A mozdonyvezetők napja' }, isWordBreak: false },
	{ date: { month: 'Szeptember', days: 16 }, event: { name: 'Az ózon világnapja' }, isWordBreak: false },
	{ date: { month: 'Szeptember', days: 16 }, event: { name: 'A hangzáskultúra napja' }, isWordBreak: false },
	{ date: { month: 'Szeptember', days: 20 }, event: { name: 'Az európai kultúra napja' }, isWordBreak: false },
	{ date: { month: 'Szeptember', days: 20 }, event: { name: 'Biztosítási világnap' }, isWordBreak: false },
	{ date: { month: 'Szeptember', days: 21 }, event: { name: 'ENSZ nemzetközi békenap' }, isWordBreak: false },
	{ date: { month: 'Szeptember', days: 21 }, event: { name: 'A hála világnapja' }, isWordBreak: false },
	{ date: { month: 'Szeptember', days: 21 }, event: { name: 'Alzheimer-világnap' }, isWordBreak: false },
	{ date: { month: 'Szeptember', days: 22 }, event: { name: 'Európai autómentes nap' }, isWordBreak: false },
	{ date: { month: 'Szeptember', days: 22 }, event: { name: 'orrszarvúak világnapja' }, isWordBreak: false },
	{ date: { month: 'Szeptember', days: 23 }, event: { name: 'Nemzetközi hulladékgyűjtő nap' }, isWordBreak: false },
	{ date: { month: 'Szeptember', days: 26 }, event: { name: 'Nyelvek európai napja' }, isWordBreak: false },
	{ date: { month: 'Szeptember', days: 26 }, event: { name: 'A tiszta hegyek napja' }, isWordBreak: false },
	{ date: { month: 'Szeptember', days: 27 }, event: { name: 'Idegenforgalmi világnap' }, isWordBreak: false },
	{ date: { month: 'Szeptember', days: 30 }, event: { name: 'A fordítás nemzetközi napja' }, isWordBreak: false },

	{ date: { month: 'Október', days: 1 }, event: { name: 'A zene világnapja' }, isWordBreak: false },
	{ date: { month: 'Október', days: 1 }, event: { name: 'Az idősek világnapja' }, isWordBreak: false },
	{ date: { month: 'Október', days: 2 }, event: { name: 'Az erőszakmentesség világnapja' }, isWordBreak: false },
	{ date: { month: 'Október', days: 2 }, event: { name: 'A sztómások világnapja' }, isWordBreak: false },
	{ date: { month: 'Október', days: 4 }, event: { name: 'Az állatok világnapja' }, isWordBreak: false },
	{ date: { month: 'Október', days: 5 }, event: { name: 'A pedagógusjogok világnapja' }, isWordBreak: false },
	{ date: { month: 'Október', days: 6 }, event: { name: 'Az építészek világnapja.' }, isWordBreak: false },
	{ date: { month: 'Október', days: 7 }, event: { name: 'A tisztes munka világnapja' }, isWordBreak: false },
	{ date: { month: 'Október', days: 9 }, event: { name: 'Postai világnap' }, isWordBreak: false },
	{ date: { month: 'Október', days: 10 }, event: { name: 'A halálbüntetés elleni harc világnapja' }, isWordBreak: false },
	{ date: { month: 'Október', days: 10 }, event: { name: 'A lelki egészség világnapja' }, isWordBreak: false },
	{ date: { month: 'Október', days: 11 }, event: { name: 'A túlsúlyosság elleni harc világnapja' }, isWordBreak: false },
	{ date: { month: 'Október', days: 11 }, event: { name: 'Előbújás napja' }, isWordBreak: false },
	{ date: { month: 'Október', days: 14 }, event: { name: 'Szabványosítási világnap' }, isWordBreak: false },
	{ date: { month: 'Október', days: 14 }, event: { name: 'Steve Jobs Nap' }, isWordBreak: false },
	{ date: { month: 'Október', days: 15 }, event: { name: 'A fehér bot (a vakok és gyengénlátók) nemzetközi napja' }, isWordBreak: false },
	{ date: { month: 'Október', days: 15 }, event: { name: 'A falusi nők világnapja' }, isWordBreak: false },
	{ date: { month: 'Október', days: 15 }, event: { name: 'A kézmosás világnapja' }, isWordBreak: false },
	{ date: { month: 'Október', days: 16 }, event: { name: 'Élelmezési világnap' }, isWordBreak: false },
	{ date: { month: 'Október', days: 16 }, event: { name: 'a kenyér világnapja' }, isWordBreak: false },
	{ date: { month: 'Október', days: 17 }, event: { name: 'A szegénység elleni küzdelem világnapja' }, isWordBreak: false },
	{ date: { month: 'Október', days: 18 }, event: { name: 'A magyar regényírás napja' }, isWordBreak: false },
	{ date: { month: 'Október', days: 18 }, event: { name: 'A testvérek világnapja' }, isWordBreak: false },
	{ date: { month: 'Október', days: 20 }, event: { name: 'A csontritkulás nemzetközi napja' }, isWordBreak: false },
	{ date: { month: 'Október', days: 20 }, event: { name: 'Statisztikai világnap' }, isWordBreak: false },
	{ date: { month: 'Október', days: 21 }, event: { name: 'Földünkért világnap' }, isWordBreak: false },
	{ date: { month: 'Október', days: 22 }, event: { name: 'A dadogás elfogadásának nemzetközi világnapja' }, isWordBreak: false },
	{ date: { month: 'Október', days: 24 }, event: { name: 'Az ENSZ világnapja' }, isWordBreak: false },
	{ date: { month: 'Október', days: 24 }, event: { name: 'Az origami világnapja' }, isWordBreak: false },
	{ date: { month: 'Október', days: 28 }, event: { name: 'Az animáció világnapja' }, isWordBreak: false },
	{ date: { month: 'Október', days: 31 }, event: { name: 'A reformáció emléknapja' }, isWordBreak: false },

	{ date: { month: 'November', days: 5 }, event: { name: 'Európai kereskedelmi nap' }, isWordBreak: false },
	{ date: { month: 'November', days: 6 }, event: { name: 'Nemzetközi nap a környezet háború és fegyveres konfliktus során történő kifosztásának megelőzéséért' }, isWordBreak: false },
	{ date: { month: 'November', days: 9 }, event: { name: 'Feltalálók napja' }, isWordBreak: false },
	{ date: { month: 'November', days: 10 }, event: { name: 'A tudomány világnapja a békéért és fejlődésért' }, isWordBreak: false },
	{ date: { month: 'November', days: 11 }, event: { name: 'A katonai felderítők napja' }, isWordBreak: false },
	{ date: { month: 'November', days: 12 }, event: { name: 'Minőségügyi világnap' }, isWordBreak: false },
	{ date: { month: 'November', days: 12 }, event: { name: 'Az irodalmi szervezetek napja' }, isWordBreak: false },
	{ date: { month: 'November', days: 14 }, event: { name: 'A cukorbetegek világnapja' }, isWordBreak: false },
	{ date: { month: 'November', days: 16 }, event: { name: 'A tolerancia nemzetközi napja' }, isWordBreak: false },
	{ date: { month: 'November', days: 17 }, event: { name: 'Nemzetközi diáknap' }, isWordBreak: false },
	{ date: { month: 'November', days: 17 }, event: { name: 'Füstmentes nap' }, isWordBreak: false },
	{ date: { month: 'November', days: 19 }, event: { name: 'Nemzetközi férfinap' }, isWordBreak: false },
	{ date: { month: 'November', days: 20 }, event: { name: 'A gyermekek jogainak világnapja' }, isWordBreak: false },
	{ date: { month: 'November', days: 20 }, event: { name: 'Az ifjú zenebarátok világnapja' }, isWordBreak: false },
	{ date: { month: 'November', days: 20 }, event: { name: 'A transzneműek emléknapja' }, isWordBreak: false },
	{ date: { month: 'November', days: 21 }, event: { name: 'A televíziózás nemzetközi napja' }, isWordBreak: false },
	{ date: { month: 'November', days: 21 }, event: { name: 'A filozófia napja' }, isWordBreak: false },
	{ date: { month: 'November', days: 25 }, event: { name: 'A nők elleni erőszak megszüntetésének világnapja' }, isWordBreak: false },
	{ date: { month: 'November', days: 25 }, event: { name: 'A Nobel-díj alapításának napja' }, isWordBreak: false },

	{ date: { month: 'December', days: 1 }, event: { name: 'A békéért bebörtönzöttek nemzetközi napja' }, isWordBreak: false },
	{ date: { month: 'December', days: 1 }, event: { name: 'AIDS-ellenes világnap' }, isWordBreak: false },
	{ date: { month: 'December', days: 3 }, event: { name: 'A fogyatékos emberek világnapja' }, isWordBreak: false },
	{ date: { month: 'December', days: 5 }, event: { name: 'A gazdasági és szociális fejlődés önkénteseinek világnapja' }, isWordBreak: false },
	{ date: { month: 'December', days: 5 }, event: { name: 'A talaj (termőföld) nemzetközi napja' }, isWordBreak: false },
	{ date: { month: 'December', days: 7 }, event: { name: 'A nemzetközi polgári repülés napja' }, isWordBreak: false },
	{ date: { month: 'December', days: 10 }, event: { name: 'Az emberi jogok napja' }, isWordBreak: false },
	{ date: { month: 'December', days: 11 }, event: { name: 'Nemzetközi hegynap' }, isWordBreak: false },
	{ date: { month: 'December', days: 18 }, event: { name: 'Az emigránsok nemzetközi napja' }, isWordBreak: false },
]

export function getLeapDay(year: number = new Date().getFullYear()): IHoliday | null {
	if (isLeapYear(year)) {
		return { date: { month: 'Február', days: 24 }, event: { name: 'Szökőnap' }, isWordBreak: false }
	}

	return null
}

/**
 * Visszaadja a húsvéthoz kapcsolódó ünnepek időpontjait
 * @param year Melyik évben
 */
export function getEaster(year: number = new Date().getFullYear()): Array<IHoliday> {
	const C = Math.floor(year/100)
	const N = year - 19*Math.floor(year/19)
	const K = Math.floor((C - 17)/25)
	let I = C - Math.floor(C/4) - Math.floor((C - K)/3) + 19*N + 15
	I = I - 30*Math.floor((I/30))
	I = I - Math.floor(I/28)*(1 - Math.floor(I/28)*Math.floor(29/(I + 1))*Math.floor((21 - N)/11))
	let J = year + Math.floor(year/4) + I + 2 - C + Math.floor(C/4)
	J = J - 7*Math.floor(J/7)
	const L = I - J
	const M = 3 + Math.floor((L + 40)/44)
	const D = L + 28 - 31*Math.floor(M/4)

	const easterMonday = new Date(year, M - 1, D + 1)
	const easterSunday = new Date(year, M - 1, D)
	const goodFriday   = new Date(year, M - 1, D - 2)

	return [
		{
			date: {
				month: getMonthName(easterMonday), days: easterMonday.getDate()
			}, event: {
				name: 'Húsvét hétfő', icon: 'carrot'
			}, isWordBreak: true
		},
		{
			date: {
				month: getMonthName(easterSunday), days: easterSunday.getDate()
			}, event: {
				name: 'Húsvét vasárnap', icon: 'carrot'
			}, isWordBreak: true
		},
		{
			date: {
				month: getMonthName(goodFriday), days: goodFriday.getDate()
			}, event: {
				name: 'Nagypéntek', icon: 'carrot'
			}, isWordBreak: true
		},
	]
}

/**
 * Visszaadja azoknak az ünnepeknek a listáját, ami a megadott napon van
 * @param date A megadott nap
 * @returns Azoknak az ünnepeknek a listája, amely a megadott napon van
 */
export function getHoliday(date: Date): Array<IHoliday> {
	const monthName = getMonthName(date)
	const allHoliday = [...fixHolidays, ...getEaster(date.getFullYear()), getLeapDay(date.getFullYear())]

	return allHoliday.filter((holiday) => (holiday !== null &&holiday.date.month === monthName && holiday.date.days === date.getDate())) as Array<IHoliday>
}
