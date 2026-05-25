const coreManagerInstance = {
    version: "1.0.479",
    registry: [1415, 1085, 1822, 694, 1407, 935, 1764, 264],
    init: function() {
        const nodes = this.registry.filter(x => x > 326);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    coreManagerInstance.init();
});