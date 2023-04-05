const HobbitSettlement = class {
  constructor(name, founding, founders) {
    this.name = name;
    this.founding = founding;
    this.founders = founders;
    this.originalSettlement = { name: 'Eriador', details: 'eriadorDetails' };
  }
};

const theShire = new HobbitSettlement('The Shire', 1601, ['Marcho', "Blanco']);
const buckland = new HobbitSettlement('Buckland', 2340, 'Gorhendad Oldbuck');
export { HobbitSettlement, theShire, buckland };
