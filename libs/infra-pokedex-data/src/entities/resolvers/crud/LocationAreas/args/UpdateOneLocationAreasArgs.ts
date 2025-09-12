import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationAreasUpdateInput } from "../../../inputs/LocationAreasUpdateInput";
import { LocationAreasWhereUniqueInput } from "../../../inputs/LocationAreasWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneLocationAreasArgs {
  @TypeGraphQL.Field(_type => LocationAreasUpdateInput, {
    nullable: false
  })
  data!: LocationAreasUpdateInput;

  @TypeGraphQL.Field(_type => LocationAreasWhereUniqueInput, {
    nullable: false
  })
  where!: LocationAreasWhereUniqueInput;
}
