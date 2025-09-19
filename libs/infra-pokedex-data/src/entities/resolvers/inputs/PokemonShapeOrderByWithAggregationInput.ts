import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonShapeAvgOrderByAggregateInput } from "../inputs/PokemonShapeAvgOrderByAggregateInput";
import { PokemonShapeCountOrderByAggregateInput } from "../inputs/PokemonShapeCountOrderByAggregateInput";
import { PokemonShapeMaxOrderByAggregateInput } from "../inputs/PokemonShapeMaxOrderByAggregateInput";
import { PokemonShapeMinOrderByAggregateInput } from "../inputs/PokemonShapeMinOrderByAggregateInput";
import { PokemonShapeSumOrderByAggregateInput } from "../inputs/PokemonShapeSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonShapeOrderByWithAggregationInput", {})
export class PokemonShapeOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokemonShapeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PokemonShapeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonShapeAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PokemonShapeAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonShapeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PokemonShapeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonShapeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PokemonShapeMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonShapeSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PokemonShapeSumOrderByAggregateInput | undefined;
}
