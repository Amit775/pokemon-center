import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationAreaUpdateManyMutationInput } from "../../../inputs/LocationAreaUpdateManyMutationInput";
import { LocationAreaWhereInput } from "../../../inputs/LocationAreaWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyLocationAreaArgs {
  @TypeGraphQL.Field(_type => LocationAreaUpdateManyMutationInput, {
    nullable: false
  })
  data!: LocationAreaUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => LocationAreaWhereInput, {
    nullable: true
  })
  where?: LocationAreaWhereInput | undefined;
}
