import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemGameIndicesUpdateInput } from "../../../inputs/ItemGameIndicesUpdateInput";
import { ItemGameIndicesWhereUniqueInput } from "../../../inputs/ItemGameIndicesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneItemGameIndicesArgs {
  @TypeGraphQL.Field(_type => ItemGameIndicesUpdateInput, {
    nullable: false
  })
  data!: ItemGameIndicesUpdateInput;

  @TypeGraphQL.Field(_type => ItemGameIndicesWhereUniqueInput, {
    nullable: false
  })
  where!: ItemGameIndicesWhereUniqueInput;
}
