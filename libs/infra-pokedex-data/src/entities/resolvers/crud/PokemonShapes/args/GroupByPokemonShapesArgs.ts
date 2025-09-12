import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonShapesOrderByWithAggregationInput } from "../../../inputs/PokemonShapesOrderByWithAggregationInput";
import { PokemonShapesScalarWhereWithAggregatesInput } from "../../../inputs/PokemonShapesScalarWhereWithAggregatesInput";
import { PokemonShapesWhereInput } from "../../../inputs/PokemonShapesWhereInput";
import { PokemonShapesScalarFieldEnum } from "../../../../enums/PokemonShapesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPokemonShapesArgs {
  @TypeGraphQL.Field(_type => PokemonShapesWhereInput, {
    nullable: true
  })
  where?: PokemonShapesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonShapesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PokemonShapesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonShapesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier">;

  @TypeGraphQL.Field(_type => PokemonShapesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PokemonShapesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
