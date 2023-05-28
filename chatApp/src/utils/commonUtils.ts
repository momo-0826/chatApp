export default class CommonUtils {
  public static isNullorUndefined(arg: string | number): boolean {
    if (arg === undefined || arg === null) return true;
    return false;
  }
}
