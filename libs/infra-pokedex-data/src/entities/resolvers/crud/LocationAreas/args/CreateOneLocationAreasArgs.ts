import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationAreasCreateInput } from "../../../inputs/LocationAreasCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneLocationAreasArgs {
  @TypeGraphQL.Field(_type => LocationAreasCreateInput, {
    nullable: false
  })
  data!: LocationAreasCreateInput;
}
