import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlingEffectCreateInput } from "../../../inputs/ItemFlingEffectCreateInput";
import { ItemFlingEffectUpdateInput } from "../../../inputs/ItemFlingEffectUpdateInput";
import { ItemFlingEffectWhereUniqueInput } from "../../../inputs/ItemFlingEffectWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneItemFlingEffectArgs {
  @TypeGraphQL.Field(_type => ItemFlingEffectWhereUniqueInput, {
    nullable: false
  })
  where!: ItemFlingEffectWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemFlingEffectCreateInput, {
    nullable: false
  })
  create!: ItemFlingEffectCreateInput;

  @TypeGraphQL.Field(_type => ItemFlingEffectUpdateInput, {
    nullable: false
  })
  update!: ItemFlingEffectUpdateInput;
}
