import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonDexNumberCreateInput } from "../../../inputs/PokemonDexNumberCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePokemonDexNumberArgs {
  @TypeGraphQL.Field(_type => PokemonDexNumberCreateInput, {
    nullable: false
  })
  data!: PokemonDexNumberCreateInput;
}
