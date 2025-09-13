import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonItemsOrderByWithAggregationInput } from "../../../inputs/PokemonItemsOrderByWithAggregationInput";
import { PokemonItemsScalarWhereWithAggregatesInput } from "../../../inputs/PokemonItemsScalarWhereWithAggregatesInput";
import { PokemonItemsWhereInput } from "../../../inputs/PokemonItemsWhereInput";
import { PokemonItemsScalarFieldEnum } from "../../../../enums/PokemonItemsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPokemonItemsArgs {
  @TypeGraphQL.Field(_type => PokemonItemsWhereInput, {
    nullable: true
  })
  where?: PokemonItemsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PokemonItemsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"pokemon_id" | "version_id" | "item_id" | "rarity">;

  @TypeGraphQL.Field(_type => PokemonItemsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PokemonItemsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
