import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonDexNumberWhereUniqueInput } from "../../../inputs/PokemonDexNumberWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOnePokemonDexNumberArgs {
  @TypeGraphQL.Field(_type => PokemonDexNumberWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonDexNumberWhereUniqueInput;
}
