import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterCreateInput } from "../../../inputs/EncounterCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneEncounterArgs {
  @TypeGraphQL.Field(_type => EncounterCreateInput, {
    nullable: false
  })
  data!: EncounterCreateInput;
}
