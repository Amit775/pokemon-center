import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterMethodCreateInput } from "../../../inputs/EncounterMethodCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneEncounterMethodArgs {
  @TypeGraphQL.Field(_type => EncounterMethodCreateInput, {
    nullable: false
  })
  data!: EncounterMethodCreateInput;
}
