import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlagMapWhereUniqueInput } from "../../../inputs/ItemFlagMapWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueItemFlagMapOrThrowArgs {
  @TypeGraphQL.Field(_type => ItemFlagMapWhereUniqueInput, {
    nullable: false
  })
  where!: ItemFlagMapWhereUniqueInput;
}
