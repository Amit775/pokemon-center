import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonStatCreateInput } from "../../../inputs/PokemonStatCreateInput";
import { PokemonStatUpdateInput } from "../../../inputs/PokemonStatUpdateInput";
import { PokemonStatWhereUniqueInput } from "../../../inputs/PokemonStatWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePokemonStatArgs {
  @TypeGraphQL.Field(_type => PokemonStatWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonStatWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonStatCreateInput, {
    nullable: false
  })
  create!: PokemonStatCreateInput;

  @TypeGraphQL.Field(_type => PokemonStatUpdateInput, {
    nullable: false
  })
  update!: PokemonStatUpdateInput;
}
