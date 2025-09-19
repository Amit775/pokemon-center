import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonDexNumberUpdateInput } from "../../../inputs/PokemonDexNumberUpdateInput";
import { PokemonDexNumberWhereUniqueInput } from "../../../inputs/PokemonDexNumberWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePokemonDexNumberArgs {
  @TypeGraphQL.Field(_type => PokemonDexNumberUpdateInput, {
    nullable: false
  })
  data!: PokemonDexNumberUpdateInput;

  @TypeGraphQL.Field(_type => PokemonDexNumberWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonDexNumberWhereUniqueInput;
}
