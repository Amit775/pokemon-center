import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEggGroupOrderByRelationAggregateInput } from "../inputs/PokemonEggGroupOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EggGroupOrderByWithRelationInput", {})
export class EggGroupOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokemonEggGroupOrderByRelationAggregateInput, {
    nullable: true
  })
  species?: PokemonEggGroupOrderByRelationAggregateInput | undefined;
}
