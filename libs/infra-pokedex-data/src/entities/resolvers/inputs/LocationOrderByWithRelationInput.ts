import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaOrderByRelationAggregateInput } from "../inputs/LocationAreaOrderByRelationAggregateInput";
import { LocationGameIndexOrderByRelationAggregateInput } from "../inputs/LocationGameIndexOrderByRelationAggregateInput";
import { PokemonEvolutionOrderByRelationAggregateInput } from "../inputs/PokemonEvolutionOrderByRelationAggregateInput";
import { RegionOrderByWithRelationInput } from "../inputs/RegionOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("LocationOrderByWithRelationInput", {})
export class LocationOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => RegionOrderByWithRelationInput, {
    nullable: true
  })
  region?: RegionOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaOrderByRelationAggregateInput, {
    nullable: true
  })
  areas?: LocationAreaOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationGameIndexOrderByRelationAggregateInput, {
    nullable: true
  })
  gameIndices?: LocationGameIndexOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionOrderByRelationAggregateInput, {
    nullable: true
  })
  evolution?: PokemonEvolutionOrderByRelationAggregateInput | undefined;
}
