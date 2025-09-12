import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonAbilitiesUpdateInput } from "../../../inputs/PokemonAbilitiesUpdateInput";
import { PokemonAbilitiesWhereUniqueInput } from "../../../inputs/PokemonAbilitiesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePokemonAbilitiesArgs {
  @TypeGraphQL.Field(_type => PokemonAbilitiesUpdateInput, {
    nullable: false
  })
  data!: PokemonAbilitiesUpdateInput;

  @TypeGraphQL.Field(_type => PokemonAbilitiesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonAbilitiesWhereUniqueInput;
}
