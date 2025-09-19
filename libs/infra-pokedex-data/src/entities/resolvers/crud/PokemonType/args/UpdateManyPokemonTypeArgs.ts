import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonTypeUpdateManyMutationInput } from "../../../inputs/PokemonTypeUpdateManyMutationInput";
import { PokemonTypeWhereInput } from "../../../inputs/PokemonTypeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPokemonTypeArgs {
  @TypeGraphQL.Field(_type => PokemonTypeUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonTypeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PokemonTypeWhereInput, {
    nullable: true
  })
  where?: PokemonTypeWhereInput | undefined;
}
