import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";

@TypeGraphQL.InputType("PokemonMovesScalarWhereInput", {})
export class PokemonMovesScalarWhereInput {
  @TypeGraphQL.Field(_type => [PokemonMovesScalarWhereInput], {
    nullable: true
  })
  AND?: PokemonMovesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesScalarWhereInput], {
    nullable: true
  })
  OR?: PokemonMovesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesScalarWhereInput], {
    nullable: true
  })
  NOT?: PokemonMovesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  pokemon_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  version_group_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  move_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  pokemon_move_method_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  level?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  order?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  mastery?: IntNullableFilter | undefined;
}
