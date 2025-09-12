import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionsCreateInput } from "../../../inputs/EncounterConditionsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneEncounterConditionsArgs {
  @TypeGraphQL.Field(_type => EncounterConditionsCreateInput, {
    nullable: false
  })
  data!: EncounterConditionsCreateInput;
}
