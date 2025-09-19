import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlingEffectCreateInput } from "../../../inputs/ItemFlingEffectCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneItemFlingEffectArgs {
  @TypeGraphQL.Field(_type => ItemFlingEffectCreateInput, {
    nullable: false
  })
  data!: ItemFlingEffectCreateInput;
}
