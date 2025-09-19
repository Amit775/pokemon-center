import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemPocketCreateInput } from "../../../inputs/ItemPocketCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneItemPocketArgs {
  @TypeGraphQL.Field(_type => ItemPocketCreateInput, {
    nullable: false
  })
  data!: ItemPocketCreateInput;
}
