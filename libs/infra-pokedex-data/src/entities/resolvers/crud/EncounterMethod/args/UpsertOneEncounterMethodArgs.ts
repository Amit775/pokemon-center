import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterMethodCreateInput } from "../../../inputs/EncounterMethodCreateInput";
import { EncounterMethodUpdateInput } from "../../../inputs/EncounterMethodUpdateInput";
import { EncounterMethodWhereUniqueInput } from "../../../inputs/EncounterMethodWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneEncounterMethodArgs {
  @TypeGraphQL.Field(_type => EncounterMethodWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterMethodWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterMethodCreateInput, {
    nullable: false
  })
  create!: EncounterMethodCreateInput;

  @TypeGraphQL.Field(_type => EncounterMethodUpdateInput, {
    nullable: false
  })
  update!: EncounterMethodUpdateInput;
}
