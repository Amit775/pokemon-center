import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EggGroupCreateInput } from "../../../inputs/EggGroupCreateInput";
import { EggGroupUpdateInput } from "../../../inputs/EggGroupUpdateInput";
import { EggGroupWhereUniqueInput } from "../../../inputs/EggGroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneEggGroupArgs {
  @TypeGraphQL.Field(_type => EggGroupWhereUniqueInput, {
    nullable: false
  })
  where!: EggGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => EggGroupCreateInput, {
    nullable: false
  })
  create!: EggGroupCreateInput;

  @TypeGraphQL.Field(_type => EggGroupUpdateInput, {
    nullable: false
  })
  update!: EggGroupUpdateInput;
}
