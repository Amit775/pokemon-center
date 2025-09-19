import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemPocketWhereUniqueInput } from "../../../inputs/ItemPocketWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueItemPocketOrThrowArgs {
  @TypeGraphQL.Field(_type => ItemPocketWhereUniqueInput, {
    nullable: false
  })
  where!: ItemPocketWhereUniqueInput;
}
