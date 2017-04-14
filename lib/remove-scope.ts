/**
 * @name
 * @author Matthias Komarek <matthias@mkomarek.de>
 * @copyright Matthias Komarek 2017
 * @date 14.04.17 12:55
 */

export function removeScope(packageName: string): string {
  if (packageName.indexOf('/') === -1 ) {
    return packageName;
  }

  return packageName.substring(packageName.indexOf('/') + 1);
}