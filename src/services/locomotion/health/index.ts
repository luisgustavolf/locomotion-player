import { sources } from "./sources"

export class HealthService {
  static async checkAll() {
    for await (const source of sources) {
      const isOnline = await this.check(source.src)
      if (isOnline)
        return true
    }
    return false
  }

  static async check(url: string) {
    try {
      await fetch(url)
      return true
    } catch (error) {
      return false
    }
  }
}