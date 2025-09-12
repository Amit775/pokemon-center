import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonDexNumbersCreateInput } from "../../../inputs/PokemonDexNumbersCreateInput";
import { PokemonDexNumbersUpdateInput } from "../../../inputs/PokemonDexNumbersUpdateInput";
import { PokemonDexNumbersWhereUniqueInput } from "../../../inputs/PokemonDexNumbersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePokemonDexNumbersArgs {
  @TypeGraphQL.Field(_type => PokemonDexNumbersWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonDexNumbersWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonDexNumbersCreateInput, {
    nullable: false
  })
  create!: PokemonDexNumbersCreateInput;

  @TypeGraphQL.Field(_type => PokemonDexNumbersUpdateInput, {
    nullable: false
  })
  update!: PokemonDexNumbersUpdateInput;
}
