import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlingEffectUpdateInput } from "../../../inputs/ItemFlingEffectUpdateInput";
import { ItemFlingEffectWhereUniqueInput } from "../../../inputs/ItemFlingEffectWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneItemFlingEffectArgs {
  @TypeGraphQL.Field(_type => ItemFlingEffectUpdateInput, {
    nullable: false
  })
  data!: ItemFlingEffectUpdateInput;

  @TypeGraphQL.Field(_type => ItemFlingEffectWhereUniqueInput, {
    nullable: false
  })
  where!: ItemFlingEffectWhereUniqueInput;
}
