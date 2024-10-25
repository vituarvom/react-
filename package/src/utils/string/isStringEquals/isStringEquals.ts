export function isStringEqual(
    str1: string | null | undefined,
    str2: string | null | undefined,
    options: { ignoreWhitespace?: boolean; ignoreCase?: boolean } = {}
  ): boolean {
    if (str1 == null || str2 == null) {
      throw new Error("Both parameters must be valid strings.");
    }

    let s1 = str1;
    let s2 = str2;

    if (options.ignoreWhitespace) {
      s1 = s1.trim();
      s2 = s2.trim();
    }

    if (options.ignoreCase) {
      s1 = s1.toLowerCase();
      s2 = s2.toLowerCase();
    }
    return s1 === s2;
}
