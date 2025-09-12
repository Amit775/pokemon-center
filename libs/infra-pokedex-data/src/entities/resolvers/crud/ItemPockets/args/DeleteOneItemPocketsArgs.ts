import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemPocketsWhereUniqueInput } from "../../../inputs/ItemPocketsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneItemPocketsArgs {
  @TypeGraphQL.Field(_type => ItemPocketsWhereUniqueInput, {
    nullable: false
  })
  where!: ItemPocketsWhereUniqueInput;
}
