import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationAreaEncounterRatesOrderByWithRelationInput } from "../../../inputs/LocationAreaEncounterRatesOrderByWithRelationInput";
import { LocationAreaEncounterRatesWhereInput } from "../../../inputs/LocationAreaEncounterRatesWhereInput";
import { LocationAreaEncounterRatesWhereUniqueInput } from "../../../inputs/LocationAreaEncounterRatesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateLocationAreaEncounterRatesArgs {
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
}
