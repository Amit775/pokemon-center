import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonStatsOrderByWithRelationInput } from "../../../inputs/PokemonStatsOrderByWithRelationInput";
import { PokemonStatsWhereInput } from "../../../inputs/PokemonStatsWhereInput";
import { PokemonStatsWhereUniqueInput } from "../../../inputs/PokemonStatsWhereUniqueInput";
import { PokemonStatsScalarFieldEnum } from "../../../../enums/PokemonStatsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class PokemonStatsArgs {
  @TypeGraphQL.Field(_type => PokemonStatsWhereInput, {
    nullable: true
  })
  where?: PokemonStatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokemonStatsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonStatsWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokemonStatsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"pokemon_id" | "stat_id" | "base_stat" | "effort"> | undefined;
}
