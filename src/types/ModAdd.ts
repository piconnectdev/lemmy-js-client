// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { PersonId } from "./PersonId";

export interface ModAdd {
  id: string;
  mod_person_id: PersonId;
  other_person_id: PersonId;
  removed: boolean;
  when_: string;
}
