
import { get } from "./request.ts"

export function GetSentence () {
  return get('/dutang/api.php')
}
