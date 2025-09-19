import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonTypeAvgOrderByAggregateInput } from "../inputs/PokemonTypeAvgOrderByAggregateInput";
import { PokemonTypeCountOrderByAggregateInput } from "../inputs/PokemonTypeCountOrderByAggregateInput";
import { PokemonTypeMaxOrderByAggregateInput } from "../inputs/PokemonTypeMaxOrderByAggregateInput";
import { PokemonTypeMinOrderByAggregateInput } from "../inputs/PokemonTypeMinOrderByAggregateInput";
import { PokemonTypeSumOrderByAggregateInput } from "../inputs/PokemonTypeSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonTypeOrderByWithAggregationInput", {})
export class PokemonTypeOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  pokemon_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  slot?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokemonTypeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PokemonTypeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonTypeAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PokemonTypeAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonTypeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PokemonTypeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonTypeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PokemonTypeMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonTypeSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PokemonTypeSumOrderByAggregateInput | undefined;
}
