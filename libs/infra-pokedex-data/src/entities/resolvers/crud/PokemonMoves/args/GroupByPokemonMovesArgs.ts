import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMovesOrderByWithAggregationInput } from "../../../inputs/PokemonMovesOrderByWithAggregationInput";
import { PokemonMovesScalarWhereWithAggregatesInput } from "../../../inputs/PokemonMovesScalarWhereWithAggregatesInput";
import { PokemonMovesWhereInput } from "../../../inputs/PokemonMovesWhereInput";
import { PokemonMovesScalarFieldEnum } from "../../../../enums/PokemonMovesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPokemonMovesArgs {
  @TypeGraphQL.Field(_type => PokemonMovesWhereInput, {
    nullable: true
  })
  where?: PokemonMovesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PokemonMovesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"pokemon_id" | "version_group_id" | "move_id" | "pokemon_move_method_id" | "level" | "order" | "mastery">;

  @TypeGraphQL.Field(_type => PokemonMovesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PokemonMovesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
