import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlagsCreateInput } from "../../../inputs/ItemFlagsCreateInput";
import { ItemFlagsUpdateInput } from "../../../inputs/ItemFlagsUpdateInput";
import { ItemFlagsWhereUniqueInput } from "../../../inputs/ItemFlagsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneItemFlagsArgs {
  @TypeGraphQL.Field(_type => ItemFlagsWhereUniqueInput, {
    nullable: false
  })
  where!: ItemFlagsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemFlagsCreateInput, {
    nullable: false
  })
  create!: ItemFlagsCreateInput;

  @TypeGraphQL.Field(_type => ItemFlagsUpdateInput, {
    nullable: false
  })
  update!: ItemFlagsUpdateInput;
}
