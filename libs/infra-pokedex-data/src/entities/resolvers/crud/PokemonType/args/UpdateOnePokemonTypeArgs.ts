import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonTypeUpdateInput } from "../../../inputs/PokemonTypeUpdateInput";
import { PokemonTypeWhereUniqueInput } from "../../../inputs/PokemonTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePokemonTypeArgs {
  @TypeGraphQL.Field(_type => PokemonTypeUpdateInput, {
    nullable: false
  })
  data!: PokemonTypeUpdateInput;

  @TypeGraphQL.Field(_type => PokemonTypeWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonTypeWhereUniqueInput;
}
