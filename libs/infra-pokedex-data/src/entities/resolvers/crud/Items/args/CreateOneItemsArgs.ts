import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemsCreateInput } from "../../../inputs/ItemsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneItemsArgs {
  @TypeGraphQL.Field(_type => ItemsCreateInput, {
    nullable: false
  })
  data!: ItemsCreateInput;
}
