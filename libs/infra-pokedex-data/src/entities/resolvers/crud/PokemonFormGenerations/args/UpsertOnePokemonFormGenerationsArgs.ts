import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormGenerationsCreateInput } from "../../../inputs/PokemonFormGenerationsCreateInput";
import { PokemonFormGenerationsUpdateInput } from "../../../inputs/PokemonFormGenerationsUpdateInput";
import { PokemonFormGenerationsWhereUniqueInput } from "../../../inputs/PokemonFormGenerationsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePokemonFormGenerationsArgs {
  @TypeGraphQL.Field(_type => PokemonFormGenerationsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormGenerationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonFormGenerationsCreateInput, {
    nullable: false
  })
  create!: PokemonFormGenerationsCreateInput;

  @TypeGraphQL.Field(_type => PokemonFormGenerationsUpdateInput, {
    nullable: false
  })
  update!: PokemonFormGenerationsUpdateInput;
}
