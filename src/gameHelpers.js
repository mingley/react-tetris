import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => 
    Array.from(Array(STAGE_HEIGHT), () => 
        new Array(STAGE_WIDTH).fill([0, 'clear'])
    )

export const checkCollision = (player, stage, {x: moveX, y: moveY}) => {
    for(let y = 0; y < player.tetromino.length; y++){
        for(let x = 0; x < player.tetromino[y].length; x++){
            //check if cell contains tetromino
            if(player.tetromino[y][x] !== 0){
            //make sure tetromino doesn't leave stage max height(y)


            //make sure tetromino doesn't leave stage max width(x)

            

            }
        }
    }
}