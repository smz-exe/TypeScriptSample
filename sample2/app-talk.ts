export namespace App{
    export class Talk{
        public static GetGreeting( now : Date) : string {
            let h = now.getHours();
            if( h < 6){
                return "Welcome back!";
            }else if(h<12){
                return "Good morning!";
            }else if(h<18){
                return "Hello";
            }else{
                return "Good evening!";
            }
        }
    }
}