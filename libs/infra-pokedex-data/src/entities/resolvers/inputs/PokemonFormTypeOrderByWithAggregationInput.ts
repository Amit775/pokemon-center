import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormTypeAvgOrderByAggregateInput } from "../inputs/PokemonFormTypeAvgOrderByAggregateInput";
import { PokemonFormTypeCountOrderByAggregateInput } from "../inputs/PokemonFormTypeCountOrderByAggregateInput";
import { PokemonFormTypeMaxOrderByAggregateInput } from "../inputs/PokemonFormTypeMaxOrderByAggregateInput";
import { PokemonFormTypeMinOrderByAggregateInput } from "../inputs/PokemonFormTypeMinOrderByAggregateInput";
import { PokemonFormTypeSumOrderByAggregateInput } from "../inputs/PokemonFormTypeSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonFormTypeOrderByWithAggregationInput", {})
export class PokemonFormTypeOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  pokemon_form_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  slot?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokemonFormTypeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PokemonFormTypeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormTypeAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PokemonFormTypeAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormTypeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PokemonFormTypeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormTypeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PokemonFormTypeMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormTypeSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PokemonFormTypeSumOrderByAggregateInput | undefined;
}
