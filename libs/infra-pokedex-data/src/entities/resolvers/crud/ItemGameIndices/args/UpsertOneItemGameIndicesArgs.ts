import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemGameIndicesCreateInput } from "../../../inputs/ItemGameIndicesCreateInput";
import { ItemGameIndicesUpdateInput } from "../../../inputs/ItemGameIndicesUpdateInput";
import { ItemGameIndicesWhereUniqueInput } from "../../../inputs/ItemGameIndicesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneItemGameIndicesArgs {
  @TypeGraphQL.Field(_type => ItemGameIndicesWhereUniqueInput, {
    nullable: false
  })
  where!: ItemGameIndicesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemGameIndicesCreateInput, {
    nullable: false
  })
  create!: ItemGameIndicesCreateInput;

  @TypeGraphQL.Field(_type => ItemGameIndicesUpdateInput, {
    nullable: false
  })
  update!: ItemGameIndicesUpdateInput;
}
