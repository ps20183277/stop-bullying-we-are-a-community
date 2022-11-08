enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Ground = SpriteKind.create()
    export const Buildings = SpriteKind.create()
    export const Bottle = SpriteKind.create()
    export const PowerUp = SpriteKind.create()
    export const Effect = SpriteKind.create()
    export const stop_the_enemy = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.PowerUp, function (sprite, otherSprite) {
    power_up.destroy(effects.disintegrate, 500)
    if (info.life() < 3) {
        info.changeLifeBy(0)
    }
    music.playSoundEffect(music.createSoundEffect(
    WaveShape.Square,
    1600,
    1,
    255,
    0,
    300,
    SoundExpressionEffect.None,
    InterpolationCurve.Curve
    ), SoundExpressionPlayMode.UntilDone)
    info.changeScoreBy(10)
})
info.onLifeZero(function () {
    game.over(false, effects.melt)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bottle, function (sprite, otherSprite) {
    if (true) {
    	
    }
    water_bottle.destroy(effects.spray, 500)
    music.playSoundEffect(music.createSoundEffect(
    WaveShape.Sine,
    1714,
    2937,
    255,
    248,
    100,
    SoundExpressionEffect.Warble,
    InterpolationCurve.Curve
    ), SoundExpressionPlayMode.UntilDone)
    info.changeScoreBy(15)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    touch = 1
    info.changeLifeBy(-1)
})
let water_bottle: Sprite = null
let power_up: Sprite = null
let touch = 0
info.setLife(3)
game.splash("Stop bullying, we are a community! ")
scene.setBackgroundImage(assets.image`background`)
let main_character = sprites.create(img`
    . . . . f f f f f . f f f . 
    . . . f f c c c c f f f f f 
    . . f c c c c c c b f f f f 
    . . f c c c c c c 3 c f f f 
    . f c c c c c c c c 3 3 f . 
    . f c c 4 c c c c c f f f . 
    . f f e 4 4 c c c f f f f . 
    . f f e 4 4 f b f 4 4 f f . 
    . . f f d d f 1 4 d 4 f . . 
    . . . f d d d d 4 f f f . . 
    . . . f e 4 4 4 e e f . . . 
    . . . f 3 3 3 e d d 4 . . . 
    . . . f 3 3 3 e d d e . . . 
    . . . f 6 6 6 f e e f . . . 
    . . . . f f f f f f . . . . 
    . . . . . . f f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(main_character, 100, 100)
main_character.setPosition(81, 81)
main_character.setStayInScreen(true)
animation.runImageAnimation(
main_character,
assets.animation`themaincharacter`,
200,
true
)
let bully_person = sprites.create(img`
    . . . f 4 4 f f f f . . . . . . 
    . . f 4 5 5 4 5 f b f f . . . . 
    . . f 5 5 5 5 4 e 3 3 b f . . . 
    . . f e 4 4 4 e 3 3 3 3 b f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 e e 3 b e 3 3 3 3 f . . 
    . f 3 3 e e e f f 3 3 3 3 f . . 
    . f 3 e e e f b f b b b b f . . 
    . . f e 4 4 f 1 e b b b b f . . 
    . . . f 4 4 4 4 f b b b b f f . 
    . . . f e e e f f f b b b b f . 
    . . . f d d d e 4 4 f b b f . . 
    . . . f d d d e 4 4 e f f . . . 
    . . f b d b d b e e b f . . . . 
    . . f f 1 d 1 d 1 d f f . . . . 
    . . . . f f b b f f . . . . . . 
    `, SpriteKind.Enemy)
animation.runImageAnimation(
bully_person,
[img`
    . . . f 4 4 f f f f . . . . . . 
    . . f 4 5 5 4 5 f b f f . . . . 
    . . f 5 5 5 5 4 e 3 3 b f . . . 
    . . f e 4 4 4 e 3 3 3 3 b f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 e e 3 b e 3 3 3 3 f . . 
    . f 3 3 e e e f f 3 3 3 3 f . . 
    . f 3 e e e f b f b b b b f . . 
    . . f e 4 4 f 1 e b b b b f . . 
    . . . f 4 4 4 4 f b b b b f f . 
    . . . f e e e f f f b b b b f . 
    . . . f d d d e 4 4 f b b f . . 
    . . . f d d d e 4 4 e f f . . . 
    . . f b d b d b e e b f . . . . 
    . . f f 1 d 1 d 1 d f f . . . . 
    . . . . f f b b f f . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . f 4 4 f f f f . . . . . . 
    . . f 4 5 5 4 5 f b f f . . . . 
    . . f 5 5 5 5 4 e 3 3 b f . . . 
    . . f e 4 4 4 e 3 3 3 3 b f . . 
    . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 e e 3 b e 3 3 3 3 f . . 
    . f 3 3 e e e f f 3 3 3 3 f . . 
    . . f e e e f b f b b b b f f . 
    . . . e 4 4 f 1 e b b b b b f . 
    . . . f 4 4 4 4 f b b b b b f . 
    . . . f d d d e 4 4 b b b f . . 
    . . . f d d d e 4 4 f f f . . . 
    . . f d d d b b e e b b f . . . 
    . . f b d 1 d 1 d d b f . . . . 
    . . . f f f b b f f f . . . . . 
    `],
100,
true
)
let bully_person_2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 5 . 5 . . . . . . 
    . . . . . . f 5 5 5 f . . . . . 
    . . . . . f 6 2 5 5 6 f . . . . 
    . . . . f 6 6 6 6 1 6 6 f . . . 
    . . . . f 6 6 6 6 6 1 6 f . . . 
    . . . . f d f d 6 6 6 1 f . . . 
    . . . . f d f d 6 6 6 6 f f . . 
    . . . . f d 3 d d 6 6 6 f 6 f . 
    . . . . . f d d d f f 6 f f . . 
    . . . . . . f f 3 3 f f 6 6 f . 
    . . . . . f d d d d f f f f . . 
    . . . . . f d d d f 3 f . . . . 
    . . . . . . f f f d 5 3 f . . . 
    . . . . . f f f 3 3 f f . . . . 
    . . . . . f f f f f f f . . . . 
    `, SpriteKind.Enemy)
animation.runImageAnimation(
bully_person_2,
[img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f . . . . . . 
    . . . . f 6 2 5 5 6 f . . . . . 
    . . . f 6 6 6 6 1 6 6 f . . . . 
    . . . f 6 6 6 6 6 1 6 f . . . . 
    . . . f d f d 6 6 6 1 f . . . . 
    . . . f d f d 6 6 6 6 f f . . . 
    . . . f d 3 d d 6 6 6 f 6 f . . 
    . . . . f d d d f f 6 f f . . . 
    . . . . . f f 5 3 f 6 6 6 f . . 
    . . . . f 5 3 3 f f f f f . . . 
    . . . . f 3 3 f d f . . . . . . 
    . . . . . f 3 f d f . . . . . . 
    . . . . f 3 5 3 f d f . . . . . 
    . . . . f f 3 3 f f . . . . . . 
    . . . . . . f f f . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 5 . 5 . . . . . . 
    . . . . . . f 5 5 5 f . . . . . 
    . . . . . f 6 2 5 5 6 f . . . . 
    . . . . f 6 6 6 6 1 6 6 f . . . 
    . . . . f 6 6 6 6 6 1 6 f . . . 
    . . . . f d f d 6 6 6 1 f . . . 
    . . . . f d f d 6 6 6 6 f f . . 
    . . . . f d 3 d d 6 6 6 f 6 f . 
    . . . . . f d d d f f 6 f f . . 
    . . . . . . f f 3 3 f f 6 6 f . 
    . . . . . f d d d d f f f f . . 
    . . . . . f d d d f 3 f . . . . 
    . . . . . . f f f d 5 3 f . . . 
    . . . . . f f f 3 3 f f . . . . 
    . . . . . f f f f f f f . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 5 . 5 . . . . . . 
    . . . . . . f 5 5 5 f . . . . . 
    . . . . . f 6 2 5 5 6 f . . . . 
    . . . . f 6 6 6 6 1 6 6 f . . . 
    . . . . f 6 6 6 6 6 1 6 f . . . 
    . . . . f d f d 6 6 6 1 f . . . 
    . . . . f d f d 6 6 6 6 f f . . 
    . . . . f d 3 d d 6 6 6 f 6 f . 
    . . . . . f d d d f f 6 f f . . 
    . . . . . . f f 3 3 f f 6 6 f . 
    . . . . . f 5 3 3 d d f f f . . 
    . . . . . f 3 3 3 f d d f . . . 
    . . . . . . f 3 5 f f f . . . . 
    . . . . . f 3 3 3 3 f . . . . . 
    . . . . . . f f f f f . . . . . 
    `],
100,
true
)
let count = 10
let start = 1
let start2 = 1
let count2 = 10
touch = 0
let touch2 = 0
bully_person.setPosition(122, 81)
bully_person_2.setPosition(103, 77)
game.showLongText("Escape from the bully following you", DialogLayout.Bottom)
game.onUpdateInterval(2000, function () {
    if (Math.percentChance(40)) {
        power_up = sprites.createProjectileFromSide(assets.image`powerbump`, randint(0, 10), randint(10, 50))
        power_up.setKind(SpriteKind.PowerUp)
        power_up.x = 1
    }
})
game.onUpdateInterval(1000, function () {
    if (Math.percentChance(20)) {
        water_bottle = sprites.createProjectileFromSide(assets.image`foodwaterbottle`, randint(0, 10), randint(10, 50))
        water_bottle.y = randint(20, 60)
        water_bottle.setKind(SpriteKind.Bottle)
        water_bottle.x = 1
    }
})
forever(function () {
    if (touch2 == 1) {
        bully_person_2.follow(main_character, 0)
        bully_person_2.setPosition(randint(-100, 100), randint(-100, 100))
        touch2 = 0
        bully_person_2.follow(main_character, 55)
    }
})
forever(function () {
    if (start2 == 1) {
        for (let index = 0; index <= 10; index++) {
            bully_person_2.sayText(count2)
            pause(1000)
            count2 += -1
        }
        bully_person_2.sayText("Hahaha, better hide", 500, false)
        bully_person_2.follow(main_character, 65)
        start2 = 0
    }
    main_character.sayText("TT", 1000, false)
})
forever(function () {
    if (start == 1) {
        for (let index = 0; index <= 10; index++) {
            bully_person.sayText(count)
            pause(1000)
            count += -1
        }
        bully_person.sayText("You better hide! Hahaha", 1000, false)
        bully_person.follow(main_character, 50)
        start = 0
    }
    main_character.sayText("TT", 1000, false)
})
forever(function () {
    if (touch == 1) {
        bully_person.follow(main_character, 0)
        bully_person.setPosition(randint(-100, 100), randint(-100, 100))
        pause(2000)
        touch = 0
        bully_person.follow(main_character, 40)
    }
})
