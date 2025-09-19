import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlagCreateInput } from "../../../inputs/ItemFlagCreateInput";
import { ItemFlagUpdateInput } from "../../../inputs/ItemFlagUpdateInput";
import { ItemFlagWhereUniqueInput } from "../../../inputs/ItemFlagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneItemFlagArgs {
  @TypeGraphQL.Field(_type => ItemFlagWhereUniqueInput, {
    nullable: false
  })
  where!: ItemFlagWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemFlagCreateInput, {
    nullable: false
  })
  create!: ItemFlagCreateInput;

  @TypeGraphQL.Field(_type => ItemFlagUpdateInput, {
    nullable: false
  })
  update!: ItemFlagUpdateInput;
}
