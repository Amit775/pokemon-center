import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("PokemonFormGenerationsScalarWhereInput", {})
export class PokemonFormGenerationsScalarWhereInput {
  @TypeGraphQL.Field(_type => [PokemonFormGenerationsScalarWhereInput], {
    nullable: true
  })
  AND?: PokemonFormGenerationsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationsScalarWhereInput], {
    nullable: true
  })
  OR?: PokemonFormGenerationsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationsScalarWhereInput], {
    nullable: true
  })
  NOT?: PokemonFormGenerationsScalarWhereInput[] | undefined;

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
}
