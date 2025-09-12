import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMovesUpdateManyMutationInput } from "../../../inputs/PokemonMovesUpdateManyMutationInput";
import { PokemonMovesWhereInput } from "../../../inputs/PokemonMovesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPokemonMovesArgs {
  @TypeGraphQL.Field(_type => PokemonMovesUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonMovesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PokemonMovesWhereInput, {
    nullable: true
  })
  where?: PokemonMovesWhereInput | undefined;
}
