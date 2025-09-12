import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationsCreateInput } from "../../../inputs/LocationsCreateInput";
import { LocationsUpdateInput } from "../../../inputs/LocationsUpdateInput";
import { LocationsWhereUniqueInput } from "../../../inputs/LocationsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneLocationsArgs {
  @TypeGraphQL.Field(_type => LocationsWhereUniqueInput, {
    nullable: false
  })
  where!: LocationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationsCreateInput, {
    nullable: false
  })
  create!: LocationsCreateInput;

  @TypeGraphQL.Field(_type => LocationsUpdateInput, {
    nullable: false
  })
  update!: LocationsUpdateInput;
}
