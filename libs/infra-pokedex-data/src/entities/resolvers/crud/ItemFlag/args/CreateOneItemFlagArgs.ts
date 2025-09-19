import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlagCreateInput } from "../../../inputs/ItemFlagCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneItemFlagArgs {
  @TypeGraphQL.Field(_type => ItemFlagCreateInput, {
    nullable: false
  })
  data!: ItemFlagCreateInput;
}
