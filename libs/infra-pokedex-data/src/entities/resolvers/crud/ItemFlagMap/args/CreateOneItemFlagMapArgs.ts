import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlagMapCreateInput } from "../../../inputs/ItemFlagMapCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneItemFlagMapArgs {
  @TypeGraphQL.Field(_type => ItemFlagMapCreateInput, {
    nullable: false
  })
  data!: ItemFlagMapCreateInput;
}
