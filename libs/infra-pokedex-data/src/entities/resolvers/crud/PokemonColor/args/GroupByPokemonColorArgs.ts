import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonColorOrderByWithAggregationInput } from "../../../inputs/PokemonColorOrderByWithAggregationInput";
import { PokemonColorScalarWhereWithAggregatesInput } from "../../../inputs/PokemonColorScalarWhereWithAggregatesInput";
import { PokemonColorWhereInput } from "../../../inputs/PokemonColorWhereInput";
import { PokemonColorScalarFieldEnum } from "../../../../enums/PokemonColorScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPokemonColorArgs {
  @TypeGraphQL.Field(_type => PokemonColorWhereInput, {
    nullable: true
  })
  where?: PokemonColorWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonColorOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PokemonColorOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonColorScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier">;

  @TypeGraphQL.Field(_type => PokemonColorScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PokemonColorScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
