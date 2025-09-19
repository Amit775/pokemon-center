import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonTypeCreateInput } from "../../../inputs/PokemonTypeCreateInput";
import { PokemonTypeUpdateInput } from "../../../inputs/PokemonTypeUpdateInput";
import { PokemonTypeWhereUniqueInput } from "../../../inputs/PokemonTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePokemonTypeArgs {
  @TypeGraphQL.Field(_type => PokemonTypeWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonTypeCreateInput, {
    nullable: false
  })
  create!: PokemonTypeCreateInput;

  @TypeGraphQL.Field(_type => PokemonTypeUpdateInput, {
    nullable: false
  })
  update!: PokemonTypeUpdateInput;
}
