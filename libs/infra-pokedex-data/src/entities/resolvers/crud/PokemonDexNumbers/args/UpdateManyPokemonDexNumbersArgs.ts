import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonDexNumbersUpdateManyMutationInput } from "../../../inputs/PokemonDexNumbersUpdateManyMutationInput";
import { PokemonDexNumbersWhereInput } from "../../../inputs/PokemonDexNumbersWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPokemonDexNumbersArgs {
  @TypeGraphQL.Field(_type => PokemonDexNumbersUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonDexNumbersUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PokemonDexNumbersWhereInput, {
    nullable: true
  })
  where?: PokemonDexNumbersWhereInput | undefined;
}
