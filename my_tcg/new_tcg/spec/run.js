import Jasmine from 'jasmine'
import specReporter from 'jasmine-spec-reporter'

var jasmine = new Jasmine()
jasmine.configureDefaultReporter({print: () => {}})
jasmine.addReporter(new specReporter())
jasmine.loadConfigFile('spec/support/jasmine.json')
console.log('Début du test avec le framework Jasmine\n')
jasmine.execute()