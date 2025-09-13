import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsRelationFilter } from "../inputs/GenerationsRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PokemonFormsRelationFilter } from "../inputs/PokemonFormsRelationFilter";

@TypeGraphQL.InputType("PokemonFormGenerationsWhereInput", {})
export class PokemonFormGenerationsWhereInput {
  @TypeGraphQL.Field(_type => [PokemonFormGenerationsWhereInput], {
    nullable: true
  })
  AND?: PokemonFormGenerationsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationsWhereInput], {
    nullable: true
  })
  OR?: PokemonFormGenerationsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationsWhereInput], {
    nullable: true
  })
  NOT?: PokemonFormGenerationsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  pokemon_form_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  generation_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  game_index?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonFormsRelationFilter, {
    nullable: true
  })
  pokemonForm?: PokemonFormsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => GenerationsRelationFilter, {
    nullable: true
  })
  generation?: GenerationsRelationFilter | undefined;
}
