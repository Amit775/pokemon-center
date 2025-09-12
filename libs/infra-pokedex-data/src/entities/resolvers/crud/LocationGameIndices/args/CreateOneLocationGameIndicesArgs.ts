import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationGameIndicesCreateInput } from "../../../inputs/LocationGameIndicesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneLocationGameIndicesArgs {
  @TypeGraphQL.Field(_type => LocationGameIndicesCreateInput, {
    nullable: false
  })
  data!: LocationGameIndicesCreateInput;
}
