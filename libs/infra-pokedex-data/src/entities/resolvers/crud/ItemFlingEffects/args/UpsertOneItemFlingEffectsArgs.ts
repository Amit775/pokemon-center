import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlingEffectsCreateInput } from "../../../inputs/ItemFlingEffectsCreateInput";
import { ItemFlingEffectsUpdateInput } from "../../../inputs/ItemFlingEffectsUpdateInput";
import { ItemFlingEffectsWhereUniqueInput } from "../../../inputs/ItemFlingEffectsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneItemFlingEffectsArgs {
  @TypeGraphQL.Field(_type => ItemFlingEffectsWhereUniqueInput, {
    nullable: false
  })
  where!: ItemFlingEffectsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemFlingEffectsCreateInput, {
    nullable: false
  })
  create!: ItemFlingEffectsCreateInput;

  @TypeGraphQL.Field(_type => ItemFlingEffectsUpdateInput, {
    nullable: false
  })
  update!: ItemFlingEffectsUpdateInput;
}
