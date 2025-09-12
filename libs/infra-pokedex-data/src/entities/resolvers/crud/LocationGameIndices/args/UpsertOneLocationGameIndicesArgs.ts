import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationGameIndicesCreateInput } from "../../../inputs/LocationGameIndicesCreateInput";
import { LocationGameIndicesUpdateInput } from "../../../inputs/LocationGameIndicesUpdateInput";
import { LocationGameIndicesWhereUniqueInput } from "../../../inputs/LocationGameIndicesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneLocationGameIndicesArgs {
  @TypeGraphQL.Field(_type => LocationGameIndicesWhereUniqueInput, {
    nullable: false
  })
  where!: LocationGameIndicesWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationGameIndicesCreateInput, {
    nullable: false
  })
  create!: LocationGameIndicesCreateInput;

  @TypeGraphQL.Field(_type => LocationGameIndicesUpdateInput, {
    nullable: false
  })
  update!: LocationGameIndicesUpdateInput;
}
