import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemCreateInput } from "../../../inputs/ItemCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneItemArgs {
  @TypeGraphQL.Field(_type => ItemCreateInput, {
    nullable: false
  })
  data!: ItemCreateInput;
}
