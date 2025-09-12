import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationGameIndicesUpdateManyMutationInput } from "../../../inputs/LocationGameIndicesUpdateManyMutationInput";
import { LocationGameIndicesWhereInput } from "../../../inputs/LocationGameIndicesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyLocationGameIndicesArgs {
  @TypeGraphQL.Field(_type => LocationGameIndicesUpdateManyMutationInput, {
    nullable: false
  })
  data!: LocationGameIndicesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => LocationGameIndicesWhereInput, {
    nullable: true
  })
  where?: LocationGameIndicesWhereInput | undefined;
}
