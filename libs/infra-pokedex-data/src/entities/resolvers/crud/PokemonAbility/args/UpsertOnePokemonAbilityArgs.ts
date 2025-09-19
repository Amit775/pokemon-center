import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonAbilityCreateInput } from "../../../inputs/PokemonAbilityCreateInput";
import { PokemonAbilityUpdateInput } from "../../../inputs/PokemonAbilityUpdateInput";
import { PokemonAbilityWhereUniqueInput } from "../../../inputs/PokemonAbilityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePokemonAbilityArgs {
  @TypeGraphQL.Field(_type => PokemonAbilityWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonAbilityWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonAbilityCreateInput, {
    nullable: false
  })
  create!: PokemonAbilityCreateInput;

  @TypeGraphQL.Field(_type => PokemonAbilityUpdateInput, {
    nullable: false
  })
  update!: PokemonAbilityUpdateInput;
}
