import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonSpeciesUpdateManyMutationInput } from "../../../inputs/PokemonSpeciesUpdateManyMutationInput";
import { PokemonSpeciesWhereInput } from "../../../inputs/PokemonSpeciesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPokemonSpeciesArgs {
  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonSpeciesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesWhereInput, {
    nullable: true
  })
  where?: PokemonSpeciesWhereInput | undefined;
}
