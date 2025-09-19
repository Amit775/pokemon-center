import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlingEffectWhereUniqueInput } from "../../../inputs/ItemFlingEffectWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneItemFlingEffectArgs {
  @TypeGraphQL.Field(_type => ItemFlingEffectWhereUniqueInput, {
    nullable: false
  })
  where!: ItemFlingEffectWhereUniqueInput;
}
