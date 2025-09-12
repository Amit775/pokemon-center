import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemPocketsUpdateInput } from "../../../inputs/ItemPocketsUpdateInput";
import { ItemPocketsWhereUniqueInput } from "../../../inputs/ItemPocketsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneItemPocketsArgs {
  @TypeGraphQL.Field(_type => ItemPocketsUpdateInput, {
    nullable: false
  })
  data!: ItemPocketsUpdateInput;

  @TypeGraphQL.Field(_type => ItemPocketsWhereUniqueInput, {
    nullable: false
  })
  where!: ItemPocketsWhereUniqueInput;
}
