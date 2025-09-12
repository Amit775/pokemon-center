import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterMethodsWhereUniqueInput } from "../../../inputs/EncounterMethodsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneEncounterMethodsArgs {
  @TypeGraphQL.Field(_type => EncounterMethodsWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterMethodsWhereUniqueInput;
}
