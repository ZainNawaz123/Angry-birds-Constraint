class chain {
constructor(bodyA,bodyB) {
var options={
Length:10,
Stifness:0.02,

bodyA:bodyA,
bodyB:bodyB,
}
this.body=Matter.Constraint.create(options)
World.add(world, this.body )

}
display(){
    var pointA= this.body.bodyA.position
    var pointB= this.body.bodyB.position
strokeWeight(6)
    line(pointA.x,pointA.y,pointB.x,pointB.y)




}
}