var HobbitSettlement = class {
  constructor(name, founding, founders) {
    this.name = name;
    this.founding = founding;
    this.founders = founders;
    this.originalSettlement = { name: "Eriador", details: eriadorDetails };
  }
};

var theShire = new HobbitSettlement("The Shire", 1601, ["Marcho", "Blanco"]);
var buckland = new HobbitSettlement("Buckland", 2340, "Gorhendad Oldbuck");
export { HobbitSettlement, theShire, buckland };
