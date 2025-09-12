import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationGameIndicesWhereUniqueInput } from "../../../inputs/LocationGameIndicesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneLocationGameIndicesArgs {
  @TypeGraphQL.Field(_type => LocationGameIndicesWhereUniqueInput, {
    nullable: false
  })
  where!: LocationGameIndicesWhereUniqueInput;
}
