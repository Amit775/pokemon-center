import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("PokemonStatsScalarWhereInput", {})
export class PokemonStatsScalarWhereInput {
  @TypeGraphQL.Field(_type => [PokemonStatsScalarWhereInput], {
    nullable: true
  })
  AND?: PokemonStatsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatsScalarWhereInput], {
    nullable: true
  })
  OR?: PokemonStatsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatsScalarWhereInput], {
    nullable: true
  })
  NOT?: PokemonStatsScalarWhereInput[] | undefined;

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
}
