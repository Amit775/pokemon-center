import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormTypeCreateInput } from "../../../inputs/PokemonFormTypeCreateInput";
import { PokemonFormTypeUpdateInput } from "../../../inputs/PokemonFormTypeUpdateInput";
import { PokemonFormTypeWhereUniqueInput } from "../../../inputs/PokemonFormTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePokemonFormTypeArgs {
  @TypeGraphQL.Field(_type => PokemonFormTypeWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonFormTypeCreateInput, {
    nullable: false
  })
  create!: PokemonFormTypeCreateInput;

  @TypeGraphQL.Field(_type => PokemonFormTypeUpdateInput, {
    nullable: false
  })
  update!: PokemonFormTypeUpdateInput;
}
