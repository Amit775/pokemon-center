import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMoveMethodsOrderByWithAggregationInput } from "../../../inputs/PokemonMoveMethodsOrderByWithAggregationInput";
import { PokemonMoveMethodsScalarWhereWithAggregatesInput } from "../../../inputs/PokemonMoveMethodsScalarWhereWithAggregatesInput";
import { PokemonMoveMethodsWhereInput } from "../../../inputs/PokemonMoveMethodsWhereInput";
import { PokemonMoveMethodsScalarFieldEnum } from "../../../../enums/PokemonMoveMethodsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPokemonMoveMethodsArgs {
  @TypeGraphQL.Field(_type => PokemonMoveMethodsWhereInput, {
    nullable: true
  })
  where?: PokemonMoveMethodsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveMethodsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PokemonMoveMethodsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveMethodsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier">;

  @TypeGraphQL.Field(_type => PokemonMoveMethodsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PokemonMoveMethodsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
