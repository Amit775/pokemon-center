import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { PokemonRelationFilter } from "../inputs/PokemonRelationFilter";
import { PokemonStatWhereInput } from "../inputs/PokemonStatWhereInput";
import { PokemonStatsPokemon_idStat_idCompoundUniqueInput } from "../inputs/PokemonStatsPokemon_idStat_idCompoundUniqueInput";
import { StatRelationFilter } from "../inputs/StatRelationFilter";

@TypeGraphQL.InputType("PokemonStatWhereUniqueInput", {})
export class PokemonStatWhereUniqueInput {
  @TypeGraphQL.Field(_type => PokemonStatsPokemon_idStat_idCompoundUniqueInput, {
    nullable: true
  })
  pokemon_id_stat_id?: PokemonStatsPokemon_idStat_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatWhereInput], {
    nullable: true
  })
  AND?: PokemonStatWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatWhereInput], {
    nullable: true
  })
  OR?: PokemonStatWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatWhereInput], {
    nullable: true
  })
  NOT?: PokemonStatWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  pokemon_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  stat_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  base_stat?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  effort?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonRelationFilter, {
    nullable: true
  })
  pokemon?: PokemonRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StatRelationFilter, {
    nullable: true
  })
  stat?: StatRelationFilter | undefined;
}
