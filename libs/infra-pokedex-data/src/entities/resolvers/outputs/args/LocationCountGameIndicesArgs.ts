import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationGameIndexWhereInput } from "../../inputs/LocationGameIndexWhereInput";

@TypeGraphQL.ArgsType()
export class LocationCountGameIndicesArgs {
  @TypeGraphQL.Field(_type => LocationGameIndexWhereInput, {
    nullable: true
  })
  where?: LocationGameIndexWhereInput | undefined;
}
