import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonDexNumberUpdateManyMutationInput } from "../../../inputs/PokemonDexNumberUpdateManyMutationInput";
import { PokemonDexNumberWhereInput } from "../../../inputs/PokemonDexNumberWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPokemonDexNumberArgs {
  @TypeGraphQL.Field(_type => PokemonDexNumberUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonDexNumberUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PokemonDexNumberWhereInput, {
    nullable: true
  })
  where?: PokemonDexNumberWhereInput | undefined;
}
