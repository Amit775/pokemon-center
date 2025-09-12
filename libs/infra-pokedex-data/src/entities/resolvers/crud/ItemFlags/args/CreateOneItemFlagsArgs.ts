import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlagsCreateInput } from "../../../inputs/ItemFlagsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneItemFlagsArgs {
  @TypeGraphQL.Field(_type => ItemFlagsCreateInput, {
    nullable: false
  })
  data!: ItemFlagsCreateInput;
}
