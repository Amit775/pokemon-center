import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationAreasWhereUniqueInput } from "../../../inputs/LocationAreasWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneLocationAreasArgs {
  @TypeGraphQL.Field(_type => LocationAreasWhereUniqueInput, {
    nullable: false
  })
  where!: LocationAreasWhereUniqueInput;
}
