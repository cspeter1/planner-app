import Cron from './Cron'

interface ITestData {
  param: string
  test: string
}

const WRONG_PARAMS: ReadonlyArray<ITestData> = [ { param: '', test: 'Üres string van megadva' },
	{ param: 'ö', test: 'Nem megfelelő érték van átpasszolva' },
	{ param: 'ö ö ö ö ö', test: 'Megfelelő számú, de rossz paraméter van megadva' },
	{ param: '* * * *', test: 'Nincs megadva megfelelő számú paraméter' },
	{ param: '* * ö * *', test: 'Nem mindegyik paraméter megfelelő' },
	{ param: '** * * *', test: 'Hibásan van megadva a paraméter' },
	{ param: '*/ * * * *', test: 'Hibásan van megadva a step' } ]

describe('Cron', () => {
	describe('Hibás paraméterek', () => {
		WRONG_PARAMS.forEach(({ param, test: testName }) => {
			test(testName, () => {
				expect(() => {
					new Cron(param)
				}).toThrow(TypeError)
			})
		})
	})
})
