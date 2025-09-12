import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemGameIndicesWhereInput } from "../../../inputs/ItemGameIndicesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyItemGameIndicesArgs {
  @TypeGraphQL.Field(_type => ItemGameIndicesWhereInput, {
    nullable: true
  })
  where?: ItemGameIndicesWhereInput | undefined;
}
