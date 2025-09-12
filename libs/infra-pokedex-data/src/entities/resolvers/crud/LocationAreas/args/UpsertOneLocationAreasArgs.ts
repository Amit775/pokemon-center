import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationAreasCreateInput } from "../../../inputs/LocationAreasCreateInput";
import { LocationAreasUpdateInput } from "../../../inputs/LocationAreasUpdateInput";
import { LocationAreasWhereUniqueInput } from "../../../inputs/LocationAreasWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneLocationAreasArgs {
  @TypeGraphQL.Field(_type => LocationAreasWhereUniqueInput, {
    nullable: false
  })
  where!: LocationAreasWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationAreasCreateInput, {
    nullable: false
  })
  create!: LocationAreasCreateInput;

  @TypeGraphQL.Field(_type => LocationAreasUpdateInput, {
    nullable: false
  })
  update!: LocationAreasUpdateInput;
}
