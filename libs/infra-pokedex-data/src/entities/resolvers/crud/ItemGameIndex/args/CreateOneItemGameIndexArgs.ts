import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemGameIndexCreateInput } from "../../../inputs/ItemGameIndexCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneItemGameIndexArgs {
  @TypeGraphQL.Field(_type => ItemGameIndexCreateInput, {
    nullable: false
  })
  data!: ItemGameIndexCreateInput;
}
