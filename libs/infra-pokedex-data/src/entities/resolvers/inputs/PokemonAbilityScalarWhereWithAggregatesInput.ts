import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("PokemonAbilityScalarWhereWithAggregatesInput", {})
export class PokemonAbilityScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PokemonAbilityScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PokemonAbilityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilityScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PokemonAbilityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilityScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PokemonAbilityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  pokemon_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  ability_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  is_hidden?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  slot?: IntWithAggregatesFilter | undefined;
}
