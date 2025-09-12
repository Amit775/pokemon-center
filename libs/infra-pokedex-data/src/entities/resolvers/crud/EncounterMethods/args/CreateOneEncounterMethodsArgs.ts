import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterMethodsCreateInput } from "../../../inputs/EncounterMethodsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneEncounterMethodsArgs {
  @TypeGraphQL.Field(_type => EncounterMethodsCreateInput, {
    nullable: false
  })
  data!: EncounterMethodsCreateInput;
}
