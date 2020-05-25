namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
function create_right_paddle () {
    right_paddle = sprites.create(img`
1 1 1 1 
1 8 8 1 
1 8 8 1 
1 8 8 1 
1 8 8 1 
1 8 8 1 
1 8 8 1 
1 8 8 1 
1 8 8 1 
1 8 8 1 
1 8 8 1 
1 8 8 1 
1 8 8 1 
1 8 8 1 
1 8 8 1 
1 1 1 1 
`, SpriteKind.Player)
    right_paddle.x = 155
    right_paddle.setFlag(SpriteFlag.StayInScreen, true)
    controller.player2.moveSprite(right_paddle, 0, 30)
    info.player2.setScore(0)
}
function create_left_paddle () {
    left_paddle = sprites.create(img`
1 1 1 1 
1 2 2 1 
1 2 2 1 
1 2 2 1 
1 2 2 1 
1 2 2 1 
1 2 2 1 
1 2 2 1 
1 2 2 1 
1 2 2 1 
1 2 2 1 
1 2 2 1 
1 2 2 1 
1 2 2 1 
1 2 2 1 
1 1 1 1 
`, SpriteKind.Player)
    left_paddle.x = 5
    left_paddle.setFlag(SpriteFlag.StayInScreen, true)
    controller.player1.moveSprite(left_paddle, 0, 30)
    info.player1.setScore(0)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    ball.vx = -1 * ball.vx
    if (sprite == left_paddle) {
        info.player1.changeScoreBy(1)
    } else {
        info.player2.changeScoreBy(1)
    }
    scene.cameraShake(4, 500)
    music.playTone(523, music.beat(BeatFraction.Half))
})
function create_ball () {
    ball = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . 4 4 4 5 5 4 4 4 . . . . 
. . . 3 3 3 3 4 4 4 4 4 4 . . . 
. . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
. . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
. 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
. 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
. 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
. 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
. . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
. . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
. . . 4 2 2 2 2 2 2 2 2 4 . . . 
. . . . 4 4 2 2 2 2 4 4 . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
    ball.setFlag(SpriteFlag.BounceOnWall, true)
    ball.setVelocity(50, 50)
}
let ball: Sprite = null
let left_paddle: Sprite = null
let right_paddle: Sprite = null
effects.confetti.startScreenEffect()
create_left_paddle()
create_right_paddle()
create_ball()
