import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterMethodsCreateInput } from "../../../inputs/EncounterMethodsCreateInput";
import { EncounterMethodsUpdateInput } from "../../../inputs/EncounterMethodsUpdateInput";
import { EncounterMethodsWhereUniqueInput } from "../../../inputs/EncounterMethodsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneEncounterMethodsArgs {
  @TypeGraphQL.Field(_type => EncounterMethodsWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterMethodsWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterMethodsCreateInput, {
    nullable: false
  })
  create!: EncounterMethodsCreateInput;

  @TypeGraphQL.Field(_type => EncounterMethodsUpdateInput, {
    nullable: false
  })
  update!: EncounterMethodsUpdateInput;
}
