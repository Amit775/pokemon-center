import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlingEffectsWhereUniqueInput } from "../../../inputs/ItemFlingEffectsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueItemFlingEffectsOrThrowArgs {
  @TypeGraphQL.Field(_type => ItemFlingEffectsWhereUniqueInput, {
    nullable: false
  })
  where!: ItemFlingEffectsWhereUniqueInput;
}
