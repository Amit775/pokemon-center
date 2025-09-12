import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationsUpdateManyMutationInput } from "../../../inputs/LocationsUpdateManyMutationInput";
import { LocationsWhereInput } from "../../../inputs/LocationsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyLocationsArgs {
  @TypeGraphQL.Field(_type => LocationsUpdateManyMutationInput, {
    nullable: false
  })
  data!: LocationsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => LocationsWhereInput, {
    nullable: true
  })
  where?: LocationsWhereInput | undefined;
}
