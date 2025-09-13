import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationsWhereUniqueInput } from "../../../inputs/LocationsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueLocationsArgs {
  @TypeGraphQL.Field(_type => LocationsWhereUniqueInput, {
    nullable: false
  })
  where!: LocationsWhereUniqueInput;
}
