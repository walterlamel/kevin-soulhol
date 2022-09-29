const optionsRunner = {
       WindowSize: { height: "200px", width: "90%" },
       ClassContainer: "container-jumper",
       InitialPosition: { y: 0, x: 15 }, //{y : (en px), x : (en %)}
       PuissJump: 35, // en %
       speedJump: 60, // en %
       SpeedAppearEnnemies: [600, 1000], //mlseconde [minimum, maximum]
       speedEnnemy: 25, // en % (vitesse de départ)
       ennemyHeight: [30, 60],
       ennemyWidth: [30, 40],
       augmentationSpeedEnnemyByLevel: 1.5,
};

export default optionsRunner;
