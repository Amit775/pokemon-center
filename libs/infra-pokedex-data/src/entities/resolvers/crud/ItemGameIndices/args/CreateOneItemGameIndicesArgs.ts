import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemGameIndicesCreateInput } from "../../../inputs/ItemGameIndicesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneItemGameIndicesArgs {
  @TypeGraphQL.Field(_type => ItemGameIndicesCreateInput, {
    nullable: false
  })
  data!: ItemGameIndicesCreateInput;
}
