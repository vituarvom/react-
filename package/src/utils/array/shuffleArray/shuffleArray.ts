export function shuffleArray<T>(arr: T[]): T[] {
    const arrayCopy =[...arr];
    for (let i=arrayCopy.length-1;i>0;i--){
        const j =Math.floor(Math.random()*(i+1));  
        [arrayCopy[i],arrayCopy[j]]=[arrayCopy[j],arrayCopy[i]];
    }
    
    return arrayCopy;
}