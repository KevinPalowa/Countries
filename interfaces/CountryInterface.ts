export default interface CountryInterface {
    flags:{
      png:string
      svg:string
    }
    name:{
      common:string
      official:string
      nativeName:{}
    }
    capital:[]
    region:string
    people:number
}
