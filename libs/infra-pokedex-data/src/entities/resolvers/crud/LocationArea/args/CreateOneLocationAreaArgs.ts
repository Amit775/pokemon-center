import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationAreaCreateInput } from "../../../inputs/LocationAreaCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneLocationAreaArgs {
  @TypeGraphQL.Field(_type => LocationAreaCreateInput, {
    nullable: false
  })
  data!: LocationAreaCreateInput;
}
