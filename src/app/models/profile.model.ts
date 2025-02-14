export interface Profile {
    token: string;
    abilities: any[];
    user: User;
    account: Account;
}

export interface Account {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: null;
    createdBy: null;
    updatedBy: null;
    deletedBy: null;
    countryId: null;
    provinceId: null;
    name: string;
    slug: string;
    nif: null;
    isActive: boolean;
    city: null;
    address: null;
    zipCode: null;
    phone: null;
    fax: null;
    website: null;
    email: null;
    facebookUrl: null;
    twitterUrl: null;
    youtubeUrl: null;
    instagramUrl: null;
    selectedTheme: string;
    initialConfiguration: boolean;
    observations: null;
    contactName: null;
    contactPhone: null;
    customLevel: string;
    adminUser: null;
    logoUrl: string;
    files: any[];
}

export interface User {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: null;
    createdBy: null;
    updatedBy: null;
    deletedBy: null;
    accountId: string;
    roleId: string;
    email: string;
    name: string;
    socialNickname: null;
    socialAvatar: null;
    isFirstLogin: boolean;
    isActive: boolean;
    emailConfirmed: boolean;
    canReceiveNotifications: boolean;
    canReceiveEmails: boolean;
    cardToken: null;
    googleId: null;
    fbId: null;
    socialInfo: null;
    fromWegow: boolean;
    igId: null;
    igToken: null;
    odooId: null;
    profileImageUrl: string;
    files: any[];
    role: Role;
}

export interface Role {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    slug: string;
    description: string;
}