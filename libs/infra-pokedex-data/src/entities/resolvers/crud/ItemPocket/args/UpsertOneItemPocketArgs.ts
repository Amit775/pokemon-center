import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemPocketCreateInput } from "../../../inputs/ItemPocketCreateInput";
import { ItemPocketUpdateInput } from "../../../inputs/ItemPocketUpdateInput";
import { ItemPocketWhereUniqueInput } from "../../../inputs/ItemPocketWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneItemPocketArgs {
  @TypeGraphQL.Field(_type => ItemPocketWhereUniqueInput, {
    nullable: false
  })
  where!: ItemPocketWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemPocketCreateInput, {
    nullable: false
  })
  create!: ItemPocketCreateInput;

  @TypeGraphQL.Field(_type => ItemPocketUpdateInput, {
    nullable: false
  })
  update!: ItemPocketUpdateInput;
}
