import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonAbilitiesCreateInput } from "../../../inputs/PokemonAbilitiesCreateInput";
import { PokemonAbilitiesUpdateInput } from "../../../inputs/PokemonAbilitiesUpdateInput";
import { PokemonAbilitiesWhereUniqueInput } from "../../../inputs/PokemonAbilitiesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePokemonAbilitiesArgs {
  @TypeGraphQL.Field(_type => PokemonAbilitiesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonAbilitiesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonAbilitiesCreateInput, {
    nullable: false
  })
  create!: PokemonAbilitiesCreateInput;

  @TypeGraphQL.Field(_type => PokemonAbilitiesUpdateInput, {
    nullable: false
  })
  update!: PokemonAbilitiesUpdateInput;
}
