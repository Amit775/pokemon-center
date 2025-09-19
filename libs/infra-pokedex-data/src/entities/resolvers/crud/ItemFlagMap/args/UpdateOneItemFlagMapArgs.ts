import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlagMapUpdateInput } from "../../../inputs/ItemFlagMapUpdateInput";
import { ItemFlagMapWhereUniqueInput } from "../../../inputs/ItemFlagMapWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneItemFlagMapArgs {
  @TypeGraphQL.Field(_type => ItemFlagMapUpdateInput, {
    nullable: false
  })
  data!: ItemFlagMapUpdateInput;

  @TypeGraphQL.Field(_type => ItemFlagMapWhereUniqueInput, {
    nullable: false
  })
  where!: ItemFlagMapWhereUniqueInput;
}
