import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationsCreateInput } from "../../../inputs/LocationsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneLocationsArgs {
  @TypeGraphQL.Field(_type => LocationsCreateInput, {
    nullable: false
  })
  data!: LocationsCreateInput;
}
