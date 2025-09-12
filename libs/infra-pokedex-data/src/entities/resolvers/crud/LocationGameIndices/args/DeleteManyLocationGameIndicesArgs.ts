import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationGameIndicesWhereInput } from "../../../inputs/LocationGameIndicesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyLocationGameIndicesArgs {
  @TypeGraphQL.Field(_type => LocationGameIndicesWhereInput, {
    nullable: true
  })
  where?: LocationGameIndicesWhereInput | undefined;
}
