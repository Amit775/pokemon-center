import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonColorsOrderByWithRelationInput } from "../../../inputs/PokemonColorsOrderByWithRelationInput";
import { PokemonColorsWhereInput } from "../../../inputs/PokemonColorsWhereInput";
import { PokemonColorsWhereUniqueInput } from "../../../inputs/PokemonColorsWhereUniqueInput";
import { PokemonColorsScalarFieldEnum } from "../../../../enums/PokemonColorsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyPokemonColorsArgs {
  @TypeGraphQL.Field(_type => PokemonColorsWhereInput, {
    nullable: true
  })
  where?: PokemonColorsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonColorsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokemonColorsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonColorsWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokemonColorsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PokemonColorsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "identifier"> | undefined;
}
