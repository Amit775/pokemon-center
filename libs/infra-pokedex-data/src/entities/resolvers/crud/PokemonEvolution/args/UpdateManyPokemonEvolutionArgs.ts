import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonEvolutionUpdateManyMutationInput } from "../../../inputs/PokemonEvolutionUpdateManyMutationInput";
import { PokemonEvolutionWhereInput } from "../../../inputs/PokemonEvolutionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPokemonEvolutionArgs {
  @TypeGraphQL.Field(_type => PokemonEvolutionUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonEvolutionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PokemonEvolutionWhereInput, {
    nullable: true
  })
  where?: PokemonEvolutionWhereInput | undefined;
}
