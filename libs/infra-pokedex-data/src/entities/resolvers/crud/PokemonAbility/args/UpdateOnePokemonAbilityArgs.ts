import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonAbilityUpdateInput } from "../../../inputs/PokemonAbilityUpdateInput";
import { PokemonAbilityWhereUniqueInput } from "../../../inputs/PokemonAbilityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePokemonAbilityArgs {
  @TypeGraphQL.Field(_type => PokemonAbilityUpdateInput, {
    nullable: false
  })
  data!: PokemonAbilityUpdateInput;

  @TypeGraphQL.Field(_type => PokemonAbilityWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonAbilityWhereUniqueInput;
}
