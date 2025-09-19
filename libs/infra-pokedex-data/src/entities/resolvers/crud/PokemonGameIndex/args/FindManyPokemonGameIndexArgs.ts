import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonGameIndexOrderByWithRelationInput } from "../../../inputs/PokemonGameIndexOrderByWithRelationInput";
import { PokemonGameIndexWhereInput } from "../../../inputs/PokemonGameIndexWhereInput";
import { PokemonGameIndexWhereUniqueInput } from "../../../inputs/PokemonGameIndexWhereUniqueInput";
import { PokemonGameIndexScalarFieldEnum } from "../../../../enums/PokemonGameIndexScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyPokemonGameIndexArgs {
  @TypeGraphQL.Field(_type => PokemonGameIndexWhereInput, {
    nullable: true
  })
  where?: PokemonGameIndexWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndexOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokemonGameIndexOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonGameIndexWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokemonGameIndexWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndexScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"pokemon_id" | "version_id" | "game_index"> | undefined;
}
