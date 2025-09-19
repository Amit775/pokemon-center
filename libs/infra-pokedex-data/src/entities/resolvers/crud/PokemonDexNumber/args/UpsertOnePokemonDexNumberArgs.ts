import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonDexNumberCreateInput } from "../../../inputs/PokemonDexNumberCreateInput";
import { PokemonDexNumberUpdateInput } from "../../../inputs/PokemonDexNumberUpdateInput";
import { PokemonDexNumberWhereUniqueInput } from "../../../inputs/PokemonDexNumberWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePokemonDexNumberArgs {
  @TypeGraphQL.Field(_type => PokemonDexNumberWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonDexNumberWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonDexNumberCreateInput, {
    nullable: false
  })
  create!: PokemonDexNumberCreateInput;

  @TypeGraphQL.Field(_type => PokemonDexNumberUpdateInput, {
    nullable: false
  })
  update!: PokemonDexNumberUpdateInput;
}
