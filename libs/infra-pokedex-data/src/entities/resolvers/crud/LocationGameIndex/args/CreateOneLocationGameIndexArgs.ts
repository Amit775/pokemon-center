import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationGameIndexCreateInput } from "../../../inputs/LocationGameIndexCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneLocationGameIndexArgs {
  @TypeGraphQL.Field(_type => LocationGameIndexCreateInput, {
    nullable: false
  })
  data!: LocationGameIndexCreateInput;
}
