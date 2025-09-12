import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonDexNumbersUpdateInput } from "../../../inputs/PokemonDexNumbersUpdateInput";
import { PokemonDexNumbersWhereUniqueInput } from "../../../inputs/PokemonDexNumbersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePokemonDexNumbersArgs {
  @TypeGraphQL.Field(_type => PokemonDexNumbersUpdateInput, {
    nullable: false
  })
  data!: PokemonDexNumbersUpdateInput;

  @TypeGraphQL.Field(_type => PokemonDexNumbersWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonDexNumbersWhereUniqueInput;
}
