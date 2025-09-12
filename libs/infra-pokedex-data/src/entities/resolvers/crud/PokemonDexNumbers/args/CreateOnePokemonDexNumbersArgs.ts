import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonDexNumbersCreateInput } from "../../../inputs/PokemonDexNumbersCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePokemonDexNumbersArgs {
  @TypeGraphQL.Field(_type => PokemonDexNumbersCreateInput, {
    nullable: false
  })
  data!: PokemonDexNumbersCreateInput;
}
