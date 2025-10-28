import TokenService from "./tokenService"

class AuthService {
    
    static isLoggedIn(){
        return !!TokenService.getToken()
    }

    static hasAbility(ability){
        const abilities = TokenService.getAbilities();
        return abilities[ability]===true;
    }

}

export default AuthService;