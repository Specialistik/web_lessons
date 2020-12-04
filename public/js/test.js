export const usePraticeFeatureFlagsEnabled = useCreateQueryHook(getFeatures, data => {
  const featuresList = data.organization.feature.list
  const featureFlags = []

  featuresList.map((featureKey, scopes) => {
    if (scopes.includes('POS') && bdFeatureFlagdata.enabled)  {
        switch(featureKey) {
            case 'BD':
                featureFlags.push(FeatureFlags.includeBrilliantDistinctions);
                break;
            case 'SIM_SUB':
                featureFlags.push(FeatureFlags.includeSubscriptions)
                break;
            case 'SUB':
                featureFlags.push(FeatureFlags.includeSubscriptionV2)
        }
    }
  })
  return featureFlags
})