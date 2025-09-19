import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonEvolutionCreateInput } from "../../../inputs/PokemonEvolutionCreateInput";
import { PokemonEvolutionUpdateInput } from "../../../inputs/PokemonEvolutionUpdateInput";
import { PokemonEvolutionWhereUniqueInput } from "../../../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePokemonEvolutionArgs {
  @TypeGraphQL.Field(_type => PokemonEvolutionWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonEvolutionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateInput, {
    nullable: false
  })
  create!: PokemonEvolutionCreateInput;

  @TypeGraphQL.Field(_type => PokemonEvolutionUpdateInput, {
    nullable: false
  })
  update!: PokemonEvolutionUpdateInput;
}
