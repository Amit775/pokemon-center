import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterMethodWhereUniqueInput } from "../../../inputs/EncounterMethodWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueEncounterMethodOrThrowArgs {
  @TypeGraphQL.Field(_type => EncounterMethodWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterMethodWhereUniqueInput;
}
