import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlagsWhereUniqueInput } from "../../../inputs/ItemFlagsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneItemFlagsArgs {
  @TypeGraphQL.Field(_type => ItemFlagsWhereUniqueInput, {
    nullable: false
  })
  where!: ItemFlagsWhereUniqueInput;
}
