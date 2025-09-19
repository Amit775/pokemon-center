import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonItemOrderByWithAggregationInput } from "../../../inputs/PokemonItemOrderByWithAggregationInput";
import { PokemonItemScalarWhereWithAggregatesInput } from "../../../inputs/PokemonItemScalarWhereWithAggregatesInput";
import { PokemonItemWhereInput } from "../../../inputs/PokemonItemWhereInput";
import { PokemonItemScalarFieldEnum } from "../../../../enums/PokemonItemScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPokemonItemArgs {
  @TypeGraphQL.Field(_type => PokemonItemWhereInput, {
    nullable: true
  })
  where?: PokemonItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PokemonItemOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"pokemon_id" | "version_id" | "item_id" | "rarity">;

  @TypeGraphQL.Field(_type => PokemonItemScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PokemonItemScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
