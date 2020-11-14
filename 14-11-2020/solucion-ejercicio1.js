class Student {
  constructor({ name, techs }) {
    this.name = name || '';
    this.techs = techs || [];
    this.levels = {};
  }

  joinTechs() {
    return this.techs.join(', ');
  }

  getTechs() {
    return `${this.name} sabe las tecnologías: ${this.joinTechs()}.`;
  }

  addLevels(levelsArr) {
    // ['JS', 'React', 'Node']
    // [10, 9, 8]
    this.techs.forEach((tech, index) => {
      this.levels[tech] = levelsArr[index];
    });
  }

  getLevels() {
    return Object.values(this.levels);
  }
}

const sol = new Student({
  name: 'Sol',
  techs: ['JS', 'React', 'Node'],
});

console.log(sol);
console.log(sol.getTechs());
console.log('Todas las tecnologías:', sol.joinTechs());

sol.addLevels([10, 9, 8]);
console.log(sol);
console.log(sol.levels);
console.log('Los niveles son:', sol.getLevels());
