import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationAreaEncounterRatesOrderByWithRelationInput } from "../../../inputs/LocationAreaEncounterRatesOrderByWithRelationInput";
import { LocationAreaEncounterRatesWhereInput } from "../../../inputs/LocationAreaEncounterRatesWhereInput";
import { LocationAreaEncounterRatesWhereUniqueInput } from "../../../inputs/LocationAreaEncounterRatesWhereUniqueInput";
import { LocationAreaEncounterRatesScalarFieldEnum } from "../../../../enums/LocationAreaEncounterRatesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyLocationAreaEncounterRatesArgs {
  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesWhereInput, {
    nullable: true
  })
  where?: LocationAreaEncounterRatesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: LocationAreaEncounterRatesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesWhereUniqueInput, {
    nullable: true
  })
  cursor?: LocationAreaEncounterRatesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"location_area_id" | "encounter_method_id" | "version_id" | "rate"> | undefined;
}
