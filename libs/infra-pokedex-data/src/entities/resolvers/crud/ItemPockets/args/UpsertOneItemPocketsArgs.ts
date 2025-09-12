import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemPocketsCreateInput } from "../../../inputs/ItemPocketsCreateInput";
import { ItemPocketsUpdateInput } from "../../../inputs/ItemPocketsUpdateInput";
import { ItemPocketsWhereUniqueInput } from "../../../inputs/ItemPocketsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneItemPocketsArgs {
  @TypeGraphQL.Field(_type => ItemPocketsWhereUniqueInput, {
    nullable: false
  })
  where!: ItemPocketsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemPocketsCreateInput, {
    nullable: false
  })
  create!: ItemPocketsCreateInput;

  @TypeGraphQL.Field(_type => ItemPocketsUpdateInput, {
    nullable: false
  })
  update!: ItemPocketsUpdateInput;
}
