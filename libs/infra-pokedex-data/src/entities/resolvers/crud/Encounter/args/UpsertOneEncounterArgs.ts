import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterCreateInput } from "../../../inputs/EncounterCreateInput";
import { EncounterUpdateInput } from "../../../inputs/EncounterUpdateInput";
import { EncounterWhereUniqueInput } from "../../../inputs/EncounterWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneEncounterArgs {
  @TypeGraphQL.Field(_type => EncounterWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterCreateInput, {
    nullable: false
  })
  create!: EncounterCreateInput;

  @TypeGraphQL.Field(_type => EncounterUpdateInput, {
    nullable: false
  })
  update!: EncounterUpdateInput;
}
