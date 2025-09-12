import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EggGroupsCreateInput } from "../../../inputs/EggGroupsCreateInput";
import { EggGroupsUpdateInput } from "../../../inputs/EggGroupsUpdateInput";
import { EggGroupsWhereUniqueInput } from "../../../inputs/EggGroupsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneEggGroupsArgs {
  @TypeGraphQL.Field(_type => EggGroupsWhereUniqueInput, {
    nullable: false
  })
  where!: EggGroupsWhereUniqueInput;

  @TypeGraphQL.Field(_type => EggGroupsCreateInput, {
    nullable: false
  })
  create!: EggGroupsCreateInput;

  @TypeGraphQL.Field(_type => EggGroupsUpdateInput, {
    nullable: false
  })
  update!: EggGroupsUpdateInput;
}
