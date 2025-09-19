import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMoveOrderByWithAggregationInput } from "../../../inputs/PokemonMoveOrderByWithAggregationInput";
import { PokemonMoveScalarWhereWithAggregatesInput } from "../../../inputs/PokemonMoveScalarWhereWithAggregatesInput";
import { PokemonMoveWhereInput } from "../../../inputs/PokemonMoveWhereInput";
import { PokemonMoveScalarFieldEnum } from "../../../../enums/PokemonMoveScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPokemonMoveArgs {
  @TypeGraphQL.Field(_type => PokemonMoveWhereInput, {
    nullable: true
  })
  where?: PokemonMoveWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PokemonMoveOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"pokemon_id" | "version_group_id" | "move_id" | "pokemon_move_method_id" | "level" | "order" | "mastery">;

  @TypeGraphQL.Field(_type => PokemonMoveScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PokemonMoveScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
