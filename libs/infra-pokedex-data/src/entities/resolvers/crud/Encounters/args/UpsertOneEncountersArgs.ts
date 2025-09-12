import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncountersCreateInput } from "../../../inputs/EncountersCreateInput";
import { EncountersUpdateInput } from "../../../inputs/EncountersUpdateInput";
import { EncountersWhereUniqueInput } from "../../../inputs/EncountersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneEncountersArgs {
  @TypeGraphQL.Field(_type => EncountersWhereUniqueInput, {
    nullable: false
  })
  where!: EncountersWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncountersCreateInput, {
    nullable: false
  })
  create!: EncountersCreateInput;

  @TypeGraphQL.Field(_type => EncountersUpdateInput, {
    nullable: false
  })
  update!: EncountersUpdateInput;
}
