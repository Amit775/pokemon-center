import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExperienceOrderByRelationAggregateInput } from "../inputs/ExperienceOrderByRelationAggregateInput";
import { PokemonSpeciesOrderByRelationAggregateInput } from "../inputs/PokemonSpeciesOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("GrowthRatesOrderByWithRelationInput", {})
export class GrowthRatesOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  formula?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesOrderByRelationAggregateInput, {
    nullable: true
  })
  species?: PokemonSpeciesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExperienceOrderByRelationAggregateInput, {
    nullable: true
  })
  experience?: ExperienceOrderByRelationAggregateInput | undefined;
}
