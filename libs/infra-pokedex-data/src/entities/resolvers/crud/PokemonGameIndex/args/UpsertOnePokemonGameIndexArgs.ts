import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonGameIndexCreateInput } from "../../../inputs/PokemonGameIndexCreateInput";
import { PokemonGameIndexUpdateInput } from "../../../inputs/PokemonGameIndexUpdateInput";
import { PokemonGameIndexWhereUniqueInput } from "../../../inputs/PokemonGameIndexWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePokemonGameIndexArgs {
  @TypeGraphQL.Field(_type => PokemonGameIndexWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonGameIndexWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonGameIndexCreateInput, {
    nullable: false
  })
  create!: PokemonGameIndexCreateInput;

  @TypeGraphQL.Field(_type => PokemonGameIndexUpdateInput, {
    nullable: false
  })
  update!: PokemonGameIndexUpdateInput;
}
