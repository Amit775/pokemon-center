import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("PokemonFormGenerationScalarWhereInput", {})
export class PokemonFormGenerationScalarWhereInput {
  @TypeGraphQL.Field(_type => [PokemonFormGenerationScalarWhereInput], {
    nullable: true
  })
  AND?: PokemonFormGenerationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationScalarWhereInput], {
    nullable: true
  })
  OR?: PokemonFormGenerationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationScalarWhereInput], {
    nullable: true
  })
  NOT?: PokemonFormGenerationScalarWhereInput[] | undefined;

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
