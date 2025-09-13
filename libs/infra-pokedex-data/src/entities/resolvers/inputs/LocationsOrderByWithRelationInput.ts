import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreasOrderByRelationAggregateInput } from "../inputs/LocationAreasOrderByRelationAggregateInput";
import { LocationGameIndicesOrderByRelationAggregateInput } from "../inputs/LocationGameIndicesOrderByRelationAggregateInput";
import { PokemonEvolutionOrderByRelationAggregateInput } from "../inputs/PokemonEvolutionOrderByRelationAggregateInput";
import { RegionsOrderByWithRelationInput } from "../inputs/RegionsOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("LocationsOrderByWithRelationInput", {})
export class LocationsOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  region_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => RegionsOrderByWithRelationInput, {
    nullable: true
  })
  region?: RegionsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreasOrderByRelationAggregateInput, {
    nullable: true
  })
  areas?: LocationAreasOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationGameIndicesOrderByRelationAggregateInput, {
    nullable: true
  })
  gameIndices?: LocationGameIndicesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionOrderByRelationAggregateInput, {
    nullable: true
  })
  evolution?: PokemonEvolutionOrderByRelationAggregateInput | undefined;
}
