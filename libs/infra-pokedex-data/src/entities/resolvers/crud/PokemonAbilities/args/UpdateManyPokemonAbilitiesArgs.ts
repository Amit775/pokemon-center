import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonAbilitiesUpdateManyMutationInput } from "../../../inputs/PokemonAbilitiesUpdateManyMutationInput";
import { PokemonAbilitiesWhereInput } from "../../../inputs/PokemonAbilitiesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPokemonAbilitiesArgs {
  @TypeGraphQL.Field(_type => PokemonAbilitiesUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonAbilitiesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PokemonAbilitiesWhereInput, {
    nullable: true
  })
  where?: PokemonAbilitiesWhereInput | undefined;
}
