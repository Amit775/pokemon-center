import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("PokemonGameIndicesScalarWhereInput", {})
export class PokemonGameIndicesScalarWhereInput {
  @TypeGraphQL.Field(_type => [PokemonGameIndicesScalarWhereInput], {
    nullable: true
  })
  AND?: PokemonGameIndicesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndicesScalarWhereInput], {
    nullable: true
  })
  OR?: PokemonGameIndicesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndicesScalarWhereInput], {
    nullable: true
  })
  NOT?: PokemonGameIndicesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  pokemon_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  version_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  game_index?: IntFilter | undefined;
}
