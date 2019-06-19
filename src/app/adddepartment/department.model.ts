export class DepartmentVO {
    name: string;
    id: string;
    code?: string;
    altname?: string;
    subjectMatter?: string;
    location: string;
    url: string;
    phone: string;
    mail: string;
    pincode: number;
    address: string;
    level: string;
    schemes: SchemesVO[];
    posts: PostVO[];
    units: SubUnits[];
}
export class SchemesVO {
    schemeName: string;
    startDate: string;
    endDate: string;
}
export class PostVO {
    postName: string;
    description: string;
    email: string;
}
export class SubUnits {
    unitName: string;
    unitId: string;
    altUnitName: string;
    location: string;
    email: string;
    linkedTo: string;
}