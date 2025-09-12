import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationsUpdateInput } from "../../../inputs/LocationsUpdateInput";
import { LocationsWhereUniqueInput } from "../../../inputs/LocationsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneLocationsArgs {
  @TypeGraphQL.Field(_type => LocationsUpdateInput, {
    nullable: false
  })
  data!: LocationsUpdateInput;

  @TypeGraphQL.Field(_type => LocationsWhereUniqueInput, {
    nullable: false
  })
  where!: LocationsWhereUniqueInput;
}
