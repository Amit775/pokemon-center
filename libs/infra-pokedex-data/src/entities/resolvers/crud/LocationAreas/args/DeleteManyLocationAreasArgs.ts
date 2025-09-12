import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationAreasWhereInput } from "../../../inputs/LocationAreasWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyLocationAreasArgs {
  @TypeGraphQL.Field(_type => LocationAreasWhereInput, {
    nullable: true
  })
  where?: LocationAreasWhereInput | undefined;
}
