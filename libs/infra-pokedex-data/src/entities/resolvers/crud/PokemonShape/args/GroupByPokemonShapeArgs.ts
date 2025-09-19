import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonShapeOrderByWithAggregationInput } from "../../../inputs/PokemonShapeOrderByWithAggregationInput";
import { PokemonShapeScalarWhereWithAggregatesInput } from "../../../inputs/PokemonShapeScalarWhereWithAggregatesInput";
import { PokemonShapeWhereInput } from "../../../inputs/PokemonShapeWhereInput";
import { PokemonShapeScalarFieldEnum } from "../../../../enums/PokemonShapeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPokemonShapeArgs {
  @TypeGraphQL.Field(_type => PokemonShapeWhereInput, {
    nullable: true
  })
  where?: PokemonShapeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonShapeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PokemonShapeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonShapeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier">;

  @TypeGraphQL.Field(_type => PokemonShapeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PokemonShapeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
