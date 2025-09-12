import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("PokemonAbilitiesScalarWhereWithAggregatesInput", {})
export class PokemonAbilitiesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PokemonAbilitiesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PokemonAbilitiesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilitiesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PokemonAbilitiesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilitiesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PokemonAbilitiesScalarWhereWithAggregatesInput[] | undefined;

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
