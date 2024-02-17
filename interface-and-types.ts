//how interface is defferent from types

type user1 = {
  //same in type
  email: string;
  id: number;
};

//Interfaces
//they are like classes without equal to
interface user {
  readonly dbId: number;
  email: string;
  id: number;
  trail: () => string; //saying this should have a methode/function that shouls return a string
  trail1(): string; //same above can be written like this
  userData(userName: string): number;
}

const Person1: user = {
  dbId: 456,
  email: "g@gmail.com",
  id: 456,
  trail: () => {
    return "abc";
  },
  trail1: () => {
    return "fgh";
  },
  userData: (name: "MNT") => {
    return 2;
  },
  gitToken:"NMN"
};


interface user{  //this is also called Reopening of Interface
    gitToken:string
} //we can add additional types without changing the existing one without changing it


//we can also have inheritence in interface

interface admin extends user{
    role:string,
    isActive:boolean
} //this get all the type vales from user and additionally adds the giving types