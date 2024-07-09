type TSubscriptionTier = 'free' | 'basic' | 'business';

interface IPeople {
    _id: string;
    avatar: string;
    email: string;
    firstName: string;
    lastName: string;
    subscriptionTier: TSubscriptionTier;
}

export { IPeople, TSubscriptionTier };