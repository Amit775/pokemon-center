import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonDexNumbersWhereInput } from "../../../inputs/PokemonDexNumbersWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPokemonDexNumbersArgs {
  @TypeGraphQL.Field(_type => PokemonDexNumbersWhereInput, {
    nullable: true
  })
  where?: PokemonDexNumbersWhereInput | undefined;
}
