import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonStatOrderByWithAggregationInput } from "../../../inputs/PokemonStatOrderByWithAggregationInput";
import { PokemonStatScalarWhereWithAggregatesInput } from "../../../inputs/PokemonStatScalarWhereWithAggregatesInput";
import { PokemonStatWhereInput } from "../../../inputs/PokemonStatWhereInput";
import { PokemonStatScalarFieldEnum } from "../../../../enums/PokemonStatScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPokemonStatArgs {
  @TypeGraphQL.Field(_type => PokemonStatWhereInput, {
    nullable: true
  })
  where?: PokemonStatWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PokemonStatOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"pokemon_id" | "stat_id" | "base_stat" | "effort">;

  @TypeGraphQL.Field(_type => PokemonStatScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PokemonStatScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
