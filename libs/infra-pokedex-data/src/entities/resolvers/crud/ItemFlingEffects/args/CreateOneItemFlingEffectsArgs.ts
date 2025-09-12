import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlingEffectsCreateInput } from "../../../inputs/ItemFlingEffectsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneItemFlingEffectsArgs {
  @TypeGraphQL.Field(_type => ItemFlingEffectsCreateInput, {
    nullable: false
  })
  data!: ItemFlingEffectsCreateInput;
}
