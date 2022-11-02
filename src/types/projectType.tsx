export default interface ProjectType {
    id:number;
    title: string;
    short_desc: string;
    type: string;
    date: string;
    link: string;
    repertory: string;
    is_brouillon: boolean;
    in_homepage: boolean;
    main_img: string;
    [key:string]: string|boolean|number;
}