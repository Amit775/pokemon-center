import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemGameIndicesWhereUniqueInput } from "../../../inputs/ItemGameIndicesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueItemGameIndicesOrThrowArgs {
  @TypeGraphQL.Field(_type => ItemGameIndicesWhereUniqueInput, {
    nullable: false
  })
  where!: ItemGameIndicesWhereUniqueInput;
}
