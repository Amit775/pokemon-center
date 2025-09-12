import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemPocketsCreateInput } from "../../../inputs/ItemPocketsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneItemPocketsArgs {
  @TypeGraphQL.Field(_type => ItemPocketsCreateInput, {
    nullable: false
  })
  data!: ItemPocketsCreateInput;
}
