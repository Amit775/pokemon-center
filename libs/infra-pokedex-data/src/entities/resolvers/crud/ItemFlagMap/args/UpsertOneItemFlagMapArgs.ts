import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlagMapCreateInput } from "../../../inputs/ItemFlagMapCreateInput";
import { ItemFlagMapUpdateInput } from "../../../inputs/ItemFlagMapUpdateInput";
import { ItemFlagMapWhereUniqueInput } from "../../../inputs/ItemFlagMapWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneItemFlagMapArgs {
  @TypeGraphQL.Field(_type => ItemFlagMapWhereUniqueInput, {
    nullable: false
  })
  where!: ItemFlagMapWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemFlagMapCreateInput, {
    nullable: false
  })
  create!: ItemFlagMapCreateInput;

  @TypeGraphQL.Field(_type => ItemFlagMapUpdateInput, {
    nullable: false
  })
  update!: ItemFlagMapUpdateInput;
}
