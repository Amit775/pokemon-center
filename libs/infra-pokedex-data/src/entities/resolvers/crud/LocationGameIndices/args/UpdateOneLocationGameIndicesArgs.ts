import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationGameIndicesUpdateInput } from "../../../inputs/LocationGameIndicesUpdateInput";
import { LocationGameIndicesWhereUniqueInput } from "../../../inputs/LocationGameIndicesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneLocationGameIndicesArgs {
  @TypeGraphQL.Field(_type => LocationGameIndicesUpdateInput, {
    nullable: false
  })
  data!: LocationGameIndicesUpdateInput;

  @TypeGraphQL.Field(_type => LocationGameIndicesWhereUniqueInput, {
    nullable: false
  })
  where!: LocationGameIndicesWhereUniqueInput;
}
