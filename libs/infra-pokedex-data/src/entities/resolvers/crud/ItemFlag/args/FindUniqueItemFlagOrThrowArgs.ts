import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlagWhereUniqueInput } from "../../../inputs/ItemFlagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueItemFlagOrThrowArgs {
  @TypeGraphQL.Field(_type => ItemFlagWhereUniqueInput, {
    nullable: false
  })
  where!: ItemFlagWhereUniqueInput;
}
