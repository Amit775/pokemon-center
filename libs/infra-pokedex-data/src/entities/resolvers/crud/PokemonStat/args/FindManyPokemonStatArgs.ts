import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonStatOrderByWithRelationInput } from "../../../inputs/PokemonStatOrderByWithRelationInput";
import { PokemonStatWhereInput } from "../../../inputs/PokemonStatWhereInput";
import { PokemonStatWhereUniqueInput } from "../../../inputs/PokemonStatWhereUniqueInput";
import { PokemonStatScalarFieldEnum } from "../../../../enums/PokemonStatScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyPokemonStatArgs {
  @TypeGraphQL.Field(_type => PokemonStatWhereInput, {
    nullable: true
  })
  where?: PokemonStatWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokemonStatOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonStatWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokemonStatWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PokemonStatScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"pokemon_id" | "stat_id" | "base_stat" | "effort"> | undefined;
}
