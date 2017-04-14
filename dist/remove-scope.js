/**
 * @name
 * @author Matthias Komarek <matthias@mkomarek.de>
 * @copyright Matthias Komarek 2017
 * @date 14.04.17 12:55
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeScope(packageName) {
    if (packageName.indexOf('/') === -1) {
        return packageName;
    }
    return packageName.substring(packageName.indexOf('/') + 1);
}
exports.removeScope = removeScope;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLXNjb3BlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0aGlhc2tvbWFyZWsvRG9jdW1lbnRzL1Byb2plY3RzL2dpdGh1Yi9yZW1vdmUtc2NvcGUvbGliLyIsInNvdXJjZXMiOlsicmVtb3ZlLXNjb3BlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztHQUtHOzs7QUFFSCxxQkFBNEIsV0FBbUI7SUFDN0MsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckMsTUFBTSxDQUFDLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBRUQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM3RCxDQUFDO0FBTkQsa0NBTUMifQ==