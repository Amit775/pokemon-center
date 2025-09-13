import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonShapesAvgOrderByAggregateInput } from "../inputs/PokemonShapesAvgOrderByAggregateInput";
import { PokemonShapesCountOrderByAggregateInput } from "../inputs/PokemonShapesCountOrderByAggregateInput";
import { PokemonShapesMaxOrderByAggregateInput } from "../inputs/PokemonShapesMaxOrderByAggregateInput";
import { PokemonShapesMinOrderByAggregateInput } from "../inputs/PokemonShapesMinOrderByAggregateInput";
import { PokemonShapesSumOrderByAggregateInput } from "../inputs/PokemonShapesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonShapesOrderByWithAggregationInput", {})
export class PokemonShapesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokemonShapesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PokemonShapesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonShapesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PokemonShapesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonShapesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PokemonShapesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonShapesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PokemonShapesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonShapesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PokemonShapesSumOrderByAggregateInput | undefined;
}
