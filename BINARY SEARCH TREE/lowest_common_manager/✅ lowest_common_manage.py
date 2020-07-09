def getLowestCommonManager(topManager, reportOne, reportTwo):
	return getOrgInfo(topManager, reportOne, reportTwo).lowestCommonManager

def getOrgInfo(manager, reportOne, reportTwo):
    numImportantReports = 0 
    for directReports in manager.directReports: 
        orgInfo = getOrgInfo(directReports, reportOne, reportTwo)
        if orgInfo.lowestCommonManager is not None: 
            return orgInfo 
        numImportantReports += orgInfo.numImportantReports
    if manager == reportOne or manager == reportTwo:
        numImportantReports += 1
    lowestCommonManager = manager if numImportantReports == 2 else None
    return OrgInfo(lowestCommonManager, numImportantReports)

class OrgInfo:
    def __init__(self, lowestCommonManager, numImportantReports):
        self.lowestCommonManager = lowestCommonManager
        self.numImportantReports = numImportantReports