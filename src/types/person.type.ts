type TSubscriptionTier = 'free' | 'basic' | 'business';

interface IPerson {
    _id: number;
    avatar: string;
    email: string;
    firstName: string;
    lastName: string;
    subscriptionTier: TSubscriptionTier;
}

export { IPerson, TSubscriptionTier };