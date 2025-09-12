import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlingEffectsUpdateInput } from "../../../inputs/ItemFlingEffectsUpdateInput";
import { ItemFlingEffectsWhereUniqueInput } from "../../../inputs/ItemFlingEffectsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneItemFlingEffectsArgs {
  @TypeGraphQL.Field(_type => ItemFlingEffectsUpdateInput, {
    nullable: false
  })
  data!: ItemFlingEffectsUpdateInput;

  @TypeGraphQL.Field(_type => ItemFlingEffectsWhereUniqueInput, {
    nullable: false
  })
  where!: ItemFlingEffectsWhereUniqueInput;
}
