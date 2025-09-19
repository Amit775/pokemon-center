import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonDexNumberWhereInput } from "../../../inputs/PokemonDexNumberWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPokemonDexNumberArgs {
  @TypeGraphQL.Field(_type => PokemonDexNumberWhereInput, {
    nullable: true
  })
  where?: PokemonDexNumberWhereInput | undefined;
}
