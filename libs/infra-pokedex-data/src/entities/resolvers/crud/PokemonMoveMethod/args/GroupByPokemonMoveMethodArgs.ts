import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMoveMethodOrderByWithAggregationInput } from "../../../inputs/PokemonMoveMethodOrderByWithAggregationInput";
import { PokemonMoveMethodScalarWhereWithAggregatesInput } from "../../../inputs/PokemonMoveMethodScalarWhereWithAggregatesInput";
import { PokemonMoveMethodWhereInput } from "../../../inputs/PokemonMoveMethodWhereInput";
import { PokemonMoveMethodScalarFieldEnum } from "../../../../enums/PokemonMoveMethodScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPokemonMoveMethodArgs {
  @TypeGraphQL.Field(_type => PokemonMoveMethodWhereInput, {
    nullable: true
  })
  where?: PokemonMoveMethodWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveMethodOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PokemonMoveMethodOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveMethodScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier">;

  @TypeGraphQL.Field(_type => PokemonMoveMethodScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PokemonMoveMethodScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
