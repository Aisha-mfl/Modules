function towerOfHanoi(n , frontRod , toRod , UsingRod){
    if (n===1){
        console.log(`move disk 1 from ${frontRod} to ${toRod}`);
        return
    }
    towerOfHanoi(n-1 , frontRod , UsingRod , toRod);
    console.log(`move disk ${n} from ${frontRod} to ${toRod}`);
    towerOfHanoi(n-1 , UsingRod , toRod , frontRod);

}
towerOfHanoi(4,'A',"c","B");

//big-o o(2^n)