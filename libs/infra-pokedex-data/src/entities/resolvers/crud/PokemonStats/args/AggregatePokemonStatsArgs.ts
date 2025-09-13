import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonStatsOrderByWithRelationInput } from "../../../inputs/PokemonStatsOrderByWithRelationInput";
import { PokemonStatsWhereInput } from "../../../inputs/PokemonStatsWhereInput";
import { PokemonStatsWhereUniqueInput } from "../../../inputs/PokemonStatsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePokemonStatsArgs {
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
}
